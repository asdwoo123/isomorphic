import React, {Component} from 'react';
import {connect} from 'react-redux';
import { intlShape, injectIntl } from 'react-intl';
import Input from '../../../components/uielements/input';
import Modal from '../../../components/feedback/modal';
import actions from '../../../redux/investors/actions';
import firebase from 'firebase/app';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper.js';
import Box from '../../../components/utility/box';
import ContentHolder from '../../../components/utility/contentHolder';
import Popconfirms from '../../../components/feedback/popconfirm';
import notification from '../../../components/notification';
import IntlMessages from "../../../components/utility/intlMessages";
import { DatePicker } from 'antd';
import {
    ActionBtn,
    Fieldset,
    Form,
    Label,
    TitleWrapper,
    ActionWrapper,
    ComponentTitle,
    TableWrapper,
    ButtonHolders,
} from './investors.style';
import clone from 'clone';
import moment from "moment";

const { RangePicker } = DatePicker;

class Investors extends Component {
    state = {
        rowIndex: []
    };

    componentDidMount() {
      this.props.loadFromFireStore();
    }

    handleRecord = (actionName, investor) => {
        if (investor.key && actionName !== 'delete') actionName = 'update';
        this.props.saveIntoFireStore(investor, actionName);
    };

    resetRecords = () => {
        firebase.firestore().collection('project').doc(localStorage.getItem('user_id'))
            .set({projects: this.state.rowIndex}).then(() => {
            notification('success', '저장되었습니다.');
        });
    };

    handleModal = (investor = null) => {
        this.props.toggleModal(investor);
    };

    onRecordChange = (key, event) => {
        let {investor} = clone(this.props);
        if (key) investor[key] = event.target.value;
        this.props.update(investor);
    };

    onStationChange = (index) => event => {
        const name = event.target.name;
        const value = event.target.value;
        let {investor} = clone(this.props);
        let {stations} = investor;
        if (name === 'name') {
            stations[index].name = value;
        } else {
            stations[index].port = value;
        }
        this.props.update(investor);
    };

    render() {
        const {modalActive, investors} = this.props;
        const {investor} = clone(this.props);
        const dataSource = [];
        Object.keys(investors).map((investor, index) => {
            return dataSource.push({
                ...investors[investor],
                key: investor,
            });
        });

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    rowIndex: selectedRows.map(item => item.key)
                });
            },
        };

        const columns = [
            {
                title: <IntlMessages id="project.name" />,
                dataIndex: 'name',
                key: 'name'
            },
            /*      {
                    title: 'Description',
                    dataIndex: 'description',
                    key: 'description',
                    sorter: (a, b) => {
                      if (a.description < b.description) return -1;
                      if (a.description > b.description) return 1;
                      return 0;
                    },
                  },*/
            {
                title: '',
                width: '60px',
                key: 'action',
                render: (text, row) => {
                    return (
                        <ActionWrapper>
                            <a onClick={this.handleModal.bind(this, row)} href="# ">
                                <i className="ion-android-create"/>
                            </a>

                            <Popconfirms
                                title={<IntlMessages id="project.delete" />}
                                okText="Yes"
                                cancelText="No"
                                placement="topRight"
                                onConfirm={this.handleRecord.bind(this, 'delete', row)}
                            >
                                <a className="deleteBtn" href="# ">
                                    <i className="ion-android-delete"/>
                                </a>
                            </Popconfirms>
                        </ActionWrapper>
                    );
                },
            },
        ];
        return (
            <LayoutContentWrapper>
                <Box>
                    <ContentHolder style={{marginTop: 0, overflow: 'hidden'}}>
                        <TitleWrapper>
                            <ButtonHolders>
                                <ActionBtn type="danger" onClick={this.resetRecords}>
                                    <IntlMessages id="project.save" />
                                </ActionBtn>

                                <ActionBtn
                                    type="primary"
                                    onClick={this.handleModal.bind(this, null)}
                                >
                                    <IntlMessages id="project.newProject" />
                                </ActionBtn>
                            </ButtonHolders>
                        </TitleWrapper>

                        <Modal
                            visible={modalActive}
                            onClose={this.props.toggleModal.bind(this, null)}
                            title={investor.key ? <IntlMessages id="project.projectUpdate" /> : <IntlMessages id="project.newProject" />}
                            okText={investor.key ? <IntlMessages id="project.update" /> : <IntlMessages id="project.addProject" />}
                            onOk={this.handleRecord.bind(this, 'insert', investor)}
                            onCancel={this.props.toggleModal.bind(this, null)}
                        >
                            <Form>
                                <Fieldset>
                                    <Label><IntlMessages id="project.name" /></Label>
                                    <Input
                                        label="Name"
                                        placeholder="Enter the project name"
                                        value={investor.name}
                                        onChange={this.onRecordChange.bind(this, 'name')}
                                    />
                                </Fieldset>
                                <Fieldset>
                                    <Label><IntlMessages id="project.period" /></Label>
                                        <RangePicker
                                            value={ (investor.period) ? [moment(investor.period[0]), moment(investor.period[1])] : null}
                                            onChange={(date, dateString) => {
                                          let {investor} = clone(this.props);
                                          investor.period = dateString;
                                          this.props.update(investor);
                                        }} />
                                </Fieldset>
                                <Fieldset>
                                    <Label><IntlMessages id="project.connectIp" /></Label>
                                    <Input
                                        label="Connect-IP"
                                        placeholder="Enter the connect ip"
                                        value={investor.connect}
                                        onChange={this.onRecordChange.bind(this, 'connect')}
                                    />
                                </Fieldset>
                                <Fieldset>
                                    <Label><IntlMessages id="project.target" /></Label>
                                    <Input
                                        type="number"
                                        label="Production target"
                                        placeholder="Enter the production target"
                                        value={investor.pass}
                                        onChange={this.onRecordChange.bind(this, 'pass')}
                                    />
                                </Fieldset>
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                                        <Fieldset key={index}>
                                            <Label><IntlMessages id="project.station" /> {item}</Label>
                                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                                <Input
                                                    style={{width: 'calc(50% - 10px)'}}
                                                    placeholder={this.props.intl.formatMessage({ id: 'project.stationName' })}
                                                    name="name"
                                                    value={investor.stations[index].name}
                                                    onChange={this.onStationChange(index)}
                                                />
                                                <Input
                                                    style={{width: 'calc(50% - 10px)'}}
                                                    placeholder={this.props.intl.formatMessage({ id: 'project.stationPort' })}
                                                    name="port"
                                                    value={investor.stations[index].port}
                                                    onChange={this.onStationChange(index)}
                                                />
                                            </div>
                                        </Fieldset>
                                    ))
                                }

                            </Form>
                        </Modal>

                        <TableWrapper
                            rowKey="key"
                            columns={columns}
                            rowSelection={rowSelection}
                            loading={this.props.isLoading}
                            dataSource={dataSource}
                            className="isoSimpleTable"
                            pagination={{
                                // defaultPageSize: 1,
                                hideOnSinglePage: true,
                                total: dataSource.length,
                                showTotal: (total, range) => {
                                    return `Showing ${range[0]}-${range[1]} of ${
                                        dataSource.length
                                    } Results`;
                                },
                            }}
                        />
                    </ContentHolder>
                </Box>
            </LayoutContentWrapper>
        );
    }
}

export default injectIntl(connect(
    state => ({
        ...state.Investors,
    }),
    actions
)(Investors));
