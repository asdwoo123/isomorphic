import React, {Component} from 'react';
import {Row, Col, Spin} from 'antd';
import Box from '../../components/utility/box';
import ContentHolder from '../../components/utility/contentHolder';
import LayoutWrapper from "../../components/utility/layoutWrapper.js";
import PageHeader from "../../components/utility/pageHeader";
import {DatePicker} from 'antd';
import Button from '../../components/uielements/button';
import moment from "moment";
import Fullscreen from 'react-full-screen';
import IntlMessages from '../../components/utility/intlMessages';
import { from } from "rxjs";
import { pluck, map, concatMap, groupBy, mergeMap, reduce, share, tap } from 'rxjs/operators';
import {ajax} from "rxjs/ajax";
import GoogleChart from 'react-google-charts';
import firebase from 'firebase/app';


const {RangePicker} = DatePicker;


const width = (window.screen.width / 3.8);
const height = 400;
const colors = ['#BAA6CA', '#B7DCFA', '#FFE69A', '#788195'];

const datass = [
    {name: 'Page A', 합격: 2400, 불합격: 2400},
    {name: 'Page B', 합격: 1398, 불합격: 2210},
    {name: 'Page C', 합격: 9800, 불합격: 2290},
    {name: 'Page D', 합격: 3908, 불합격: 2000},
    {name: 'Page E', 합격: 4800, 불합격: 2181},
];




export default class extends Component {
    state = {
        name: '',
        period: null,
        isFull: false,
        chartWidth: 0,
        width: 0,
        station: {},
        data1: [],
        data2: []
    };

    async componentDidMount() {
        try {
            const {projectID, stationID} = this.props.match.params;
            const query = await firebase.firestore().collection('investors')
                .where('url', '==', projectID).get();
            query.forEach(doc => {
                if (doc.exists) {
                    const { stations, connect, period } = doc.data();
                    const station = stations[stationID];
                    const url = connect;
                    this.setState({ name: station.name });
                    this.setState({ station: { ...station, url } });
                    this.handleOnloadData([moment(period[0]), moment(period[1])], period);
                }
            });
        } catch (e) {
        }
    }

    convertArrayOfObjectsToCSV = (args) => {
        let result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function (item) {
            ctr = 0;
            keys.forEach(function (key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    };

    handleOnloadData = (date, dateString) => {
        const { url, port } = this.state.station;
        this.setState({
            period: dateString
        });

        const period = date.map(date => date.valueOf());

        const data$ = ajax.post(`http://${url}:${port}/datas`, { period },
            { 'Content-Type': 'application/json' }).pipe(
                pluck('response'),
            concatMap(value => from(value)), map(value => {
                value.time = moment(value.time).format('MM/DD');
                return value;
            }),
            share()
        );

        const data1$ = data$.pipe(
            groupBy(value => value.time),
            mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], []))),
            mergeMap(value => from(value).pipe(
            reduce((acc, one) => {
              acc[0] = one.time;
              acc[(one.state === 'ok') ? 1 : 2] += 1;
              return acc;
            }, ['', 0, 0])
        )),
            reduce((acc, value) => {acc.push(value); return acc}, [['날짜', '합격', '불합격']])
        );

        const data2$ = data$.pipe(
            groupBy(value => value.state),
            mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], []))),
            mergeMap(value => from(value).pipe(
                reduce((acc, one) => [one.state, acc[1] += 1], ['', 0])
            )),
            map(value => {
               value[0] = (value[0] === 'ok') ? '합격' : '불합격';
               return value;
            }),
            reduce((acc, value) => {acc.push(value); return acc}, [['state', 'count']])
        );

        data1$.subscribe(value => {this.setState({ data1: value })});
        data2$.subscribe(value => {this.setState({ data2: value })} );
    };

    downloadCSV = args => e => {
        let data, filename, link;
        let csv = this.convertArrayOfObjectsToCSV({
            data: this.state.data1
        });
        if (csv == null) return;

        filename = args.filename || this.state.name + ' - 합/불합 추이.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,\ufeff' + csv;
        }
        data = encodeURI(csv);

        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    };

    render() {
        const {period, data1, data2} = this.state;
        const SimpleLineChartsData = {
            title: 'Area Chart',
            key: 'AreaChart',
            chartType: 'AreaChart',
            width: '100%',
            height,
            options: {
                legend: {
                    textStyle: {
                        color: '#788195',
                    },
                },
                animation: {
                    duration: 1000,
                    easing: 'in',
                    startup: true,
                },
                hAxis: {
                    textStyle: {
                        color: '#788195',
                    },
                },
                vAxis: {
                    textStyle: {
                        color: '#788195',
                    },
                },
                colors: ['#48A6F2', '#511E78'],
                dataOpacity: 0.6,
                tooltip: {
                    textStyle: {
                        color: '#788195',
                    },
                },
            },
        };
        const DonutChart = {
            title: 'Donut Chart',
            key: 'DonutChart',
            chartType: 'PieChart',
            height,
            options: {
                legend: {
                    textStyle: {
                        color: '#788195',
                    },
                },
                pieHole: 0.4,
                pieSliceTextStyle: {
                    color: '#ffffff',
                },
                is3D: true,
                colors: ['#9678AE', '#F99FB4', '#C8E4FB', '#01C0C8', '#ffbf00'],
                tooltip: {
                    textStyle: {
                        color: '#788195',
                    },
                },
            },
        };
        return (
            <LayoutWrapper className="isoMapPage">
                <PageHeader>
                    {this.state.name}
                </PageHeader>
                <div style={{width: '100%'}}>
                    <Button type="primary" size="small"
                            style={{marginBottom: 16, marginRight: 16}}
                            onClick={() =>
                                this.setState({isFull: !this.state.isFull})}>
                        {this.state.isFull ? <IntlMessages id="graph.return" /> : <IntlMessages id="graph.zoom" />}</Button>
                    <RangePicker
                        value={(period) ? [moment(period[0]), moment(period[1])] : null}
                        style={{marginBottom: 16}}
                        onChange={this.handleOnloadData} />

                </div>
                <Fullscreen enabled={this.state.isFull} onChange={isFull => this.setState({isFull})}>
                    <Row gutter={16}>
                        <Col lg={12} md={12} sm={24} xs={24} style={{
                            marginBottom: 16,
                            overflow: 'hidden'
                        }}>
                            <Box title={<IntlMessages id="graph.count" />}>
                                <Button type="primary" size="small" style={{
                                    position: "absolute", top: 20, right: 20
                                }} onClick={this.downloadCSV(datass)}><IntlMessages id="graph.csv" /></Button>
                                <ContentHolder>
                                    {
                                        (data1.length > 0) ? <GoogleChart {...SimpleLineChartsData} data={this.state.data1}/>
                                        : <Spin />
                                    }
                                </ContentHolder>
                            </Box>
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24} style={{overflow: 'hidden'}}>
                            <Box title={<IntlMessages id="graph.part2" />}>
                                <ContentHolder>
                                    {
                                        (data2.length > 0) ? <GoogleChart {...DonutChart} data={this.state.data2} width={"100%"}
                                        /> : <Spin />
                                    }
                                </ContentHolder>
                            </Box>
                        </Col>
                    </Row>
                </Fullscreen>
            </LayoutWrapper>
        );
    }
}
