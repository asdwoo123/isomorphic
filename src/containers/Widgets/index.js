import React, {Component} from 'react';
import clone from 'clone';
import {Row, Col} from 'antd';
import io from 'socket.io-client';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import basicStyle from '../../settings/basicStyle';
import IsoWidgetsWrapper from './widgets-wrapper';
import {TableViews, tableinfos, dataList} from '../Tables/antTables';
import * as rechartConfigs from '../Charts/recharts/config';
import IntlMessages from '../../components/utility/intlMessages';
import firebase from 'firebase/app';
import WindowResizeListener from "react-window-size-listener";
import Collapses from '../../components/uielements/collapse';
import Box from '../../components/utility/box';
import CollapseWrapper from '../Uielements/Collapse/collapse.style';
import ContentHolder from '../../components/utility/contentHolder';
import Button from '../../components/uielements/button';
import {Link} from 'react-router-dom';


const tableDataList = clone(dataList);
tableDataList.size = 5;

const Panel = Collapses.Panel;

const Collapse = props => (
    <CollapseWrapper>
        <Collapses {...props}>{props.children}</Collapses>
    </CollapseWrapper>
);

const columns = [
    {
        title: <IntlMessages id="dashboard.name" />,
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: <IntlMessages id="dashboard.total" />,
        dataIndex: 'total',
        key: 'total'
    },
    {
        title: <IntlMessages id="dashboard.partnumber" />,
        dataIndex: 'partnumber',
        key: 'partnumber'
    },
    {
        title: <IntlMessages id="dashboard.cycleTime" />,
        dataIndex: 'cycleTime',
        key: 'cycleTime'
    },
    {
        title: <IntlMessages id="dashboard.ok" />,
        dataIndex: 'ok',
        key: 'ok'
    },
    {
        title: <IntlMessages id="dashboard.nok" />,
        dataIndex: 'nok',
        key: 'nok'
    },
    {
      title: <IntlMessages id="dashboard.status" />,
      key: 'status',
      render: (text, record, index) => (
          <span> { record.socket ? <IntlMessages id="dashboard.connect" /> :
              <IntlMessages id="dashboard.notConnect" /> } </span>
      )
    },
    {
        title: '',
        key: 'action',
        render: (text, record, index) => (
            <Link to={`/dashboard/stationDetail/${record.url}/${index}`}>
                <Button size="small"><IntlMessages id="dashboard.graph" /></Button>
            </Link>
        )
    }
];

export default class extends Component {
    state = {
        project: [],
        windowWidth: 1200
    };

    async componentDidMount() {
        try {
            const projectDOC = await firebase.firestore().collection('project')
                .doc(localStorage.getItem('user_id')).get();
            if (projectDOC.exists) {
                const {projects} = projectDOC.data();
                const investorDOC = await Promise.all(projects.map(project =>
                    firebase.firestore().collection('investors').doc(project).get()));

                let investors = investorDOC.map(investorDOC => investorDOC.data());
                investors = investors.filter(data => data.name !== undefined);
                investors.map(investor => {
                    const stations = investor.stations.filter(station => station.name !== undefined);
                    investor.stations = stations;
                });
                investors.forEach(async (investor, indexx) => {
                    const project = {};
                    project.name = investor.name;
                    project.url = investor.url;
                    project.datas = [];

                    await investor.stations.forEach( (station, index) => {
                            const data = {};
                            data.key = (index + 1).toString();
                            data.url = investor.url;
                            data.name = station.name;
                            data.partnumber = "######";
                            data.pass = investor.pass;
                            data.fail = investor.fail;
                            data.cycleTime = 0;
                            data.total = 0;
                            data.ok = 0;
                            data.nok = 0;
                            data.socket = null;
                            project.datas[index] = data;
                            this.updateDatas(project, indexx);
                    });

                    investor.stations.forEach( (station, index) => {
                        try {
                            const data = clone(this.state.project[indexx].datas[index]);
                            const socket = io(`http://${investor.connect}:${station.port}`, {
                                path: '/socket.io'
                            });

                            socket.on('connect', () => {
                                data.socket = true;
                                project.datas[index] = data;
                                this.updateDatas(project, indexx);
                            });

                            socket.on('disconnect', () => {
                               data.socket = false;
                                project.datas[index] = data;
                                this.updateDatas(project, indexx);
                            });

                            socket.on('Total', (opc) => {
                                console.log(opc.value);
                                data.total = opc.value;
                                project.datas[index] = data;
                                this.updateDatas(project, indexx);
                            });

                            socket.on('Cycle time', (opc) => {
                                data.cycleTime = opc.value;
                                project.datas[index] = data;
                                this.updateDatas(project, indexx);
                            });

                            socket.on('Part number', (opc) => {
                                data.partnumber = opc.value;
                                project.datas[index] = data;
                                this.updateDatas(project, indexx);
                            });

                            socket.on('OK', (opc) => {
                                data.ok = opc.value;
                                project.datas[index] = data;
                                this.updateDatas(project, indexx);
                            });

                            socket.on('NOK', (opc) => {
                                data.nok = opc.value;
                                project.datas[index] = data;
                                this.updateDatas(project, indexx);
                            });
                        } catch (e) {
                        }

                    });
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    updateDatas = (project, index) => {
        const projects = clone(this.state.project);
        projects[index] = project;
        this.setState({
            project: projects
        });
    };

    render() {


        const {rowStyle, colStyle} = basicStyle;
        const wisgetPageStyle = {
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'flex-start',
            overflow: 'hidden',
        };

        const chartEvents = [
            {
                eventName: 'select',
                callback(Chart) {
                },
            },
        ];

        const stackConfig = {
            ...rechartConfigs.StackedAreaChart,
            width: window.innerWidth < 450 ? 300 : 500,
        };

        const mobilePStyle = {
          display: 'flex',
          justifyContent: 'space-between'
        };

        return (
            <LayoutWrapper>
                <WindowResizeListener
                    onResize={windowSize =>
                        this.setState({
                            windowWidth: windowSize.windowWidth
                        })
                    }
                />
                {
                    <Row style={{...rowStyle}} gutter={0}>
                        {
                            this.state.windowWidth > 767 ?
                                this.state.project.map((item, index) => (
                                    <Col key={index} lg={12} md={12} sm={24} xs={24} style={{...colStyle, padding: 10}}>
                                        <IsoWidgetsWrapper width={"100%"}>
                                            <Box title={item.name}>
                                                <div style={{ height: 10 }} />
                                                <TableViews.SimpleView
                                                    dataSource={item.datas}
                                                    columns={columns}
                                                    loading={true}
                                                />
                                                <Link to={`/dashboard/projectDetail/${item.url}`} >
                                                    <Button type="primary" size="small" style={{
                                                        position: "absolute", top: 10, right: 20
                                                    }}>
                                                        <IntlMessages id="dashboard.graph" />
                                                    </Button>
                                                </Link>
                                            </Box>
                                        </IsoWidgetsWrapper>
                                    </Col>
                                )) :
                                this.state.project.map((item, index) => (
                                    <Col key={index} sm={24} xs={24} style={colStyle}>
                                        <Box title={item.name}>
                                            <Link to={`/dashboard/projectDetail/${item.url}`}>
                                                <Button type="primary" size="small" style={{
                                                    position: "absolute", top: 15, right: 20
                                                }}>
                                                    <IntlMessages id="dashboard.graph" />
                                                </Button>
                                            </Link>
                                            <ContentHolder>
                                                <Collapse>
                                                    {
                                                        item.datas.map((item, index) => (
                                                            <Panel
                                                                header={item.name}
                                                                extra={(item.socket) ? <span><IntlMessages id="dashboard.connect" /></span> :
                                                                    <span style={{ color: '#797979' }}><IntlMessages id="dashboard.notConnect" /></span>}
                                                                key={index}
                                                                showArrow={false}
                                                                disabled={!item.socket}
                                                            >
                                                                <p style={mobilePStyle}>
                                                                    <span>Part number</span>
                                                                    <span>{item.partnumber}</span>
                                                                </p>
                                                                <p style={mobilePStyle}>
                                                                    <span>Cycle Time</span>
                                                                    <span>{item.cycleTime}</span>
                                                                </p>
                                                                <p style={mobilePStyle}>
                                                                    <span>Total</span>
                                                                    <span>{item.total}</span>
                                                                </p>
                                                                <p style={mobilePStyle}>
                                                                    <span>OK</span>
                                                                    <span>{item.ok}</span>
                                                                </p>
                                                                <p style={mobilePStyle}>
                                                                    <span>NOK</span>
                                                                    <span>{item.nok}</span>
                                                                </p>
                                                                <div style={{ position: "relative", height: 28, marginTop: 10 }}>
                                                                <Link to={`/dashboard/stationDetail/${item.url}/${index}`} style={{ position: "absolute" ,right: 0 }}>
                                                                    <Button size="small"><IntlMessages id="dashboard.graph" /></Button>
                                                                </Link>
                                                                </div>
                                                            </Panel>
                                                        ))
                                                    }
                                                </Collapse>
                                            </ContentHolder>
                                        </Box>
                                    </Col>
                                ))
                        }
                    </Row>

                }
            </LayoutWrapper>
        );
    }
}
