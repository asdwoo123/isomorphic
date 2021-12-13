import React, {Component} from 'react';
import {Row, Col, Spin} from 'antd';
import Box from '../../components/utility/box';
import ContentHolder from '../../components/utility/contentHolder';
import LayoutWrapper from "../../components/utility/layoutWrapper.js";
import PageHeader from "../../components/utility/pageHeader";
import Button from '../../components/uielements/button';
import {DatePicker} from 'antd';
import moment from "moment";
import Fullscreen from 'react-full-screen';
import SingleProgressWidget from "./progress/progress-single";
import IntlMessages from '../../components/utility/intlMessages';
import GoogleChart from 'react-google-charts';
import {ajax} from 'rxjs/ajax';
import {from} from 'rxjs';
import {pluck, concatMap, map, groupBy, mergeMap, reduce, last, filter, share} from 'rxjs/operators';
import firebase from 'firebase/app';


const {RangePicker} = DatePicker;


const datas = [
    {name: 'Page A', 생산량: 2400},
    {name: 'Page B', 생산량: 1398},
    {name: 'Page C', 생산량: 9800},
    {name: 'Page D', 생산량: 3908},
    {name: 'Page E', 생산량: 4800},
    {name: 'Page F', 생산량: 3800},
    {name: 'Page G', 생산량: 4300},
    {name: 'Page H', 생산량: 4800},
    {name: 'Page I', 생산량: 3800},
    {name: 'Page J', 생산량: 4300},
    {name: 'Page K', 생산량: 4800},
    {name: 'Page L', 생산량: 3800},
    {name: 'Page M', 생산량: 4300},
    {name: 'Page N', 생산량: 4800},
    {name: 'Page O', 생산량: 3800},
    {name: 'Page P', 생산량: 4300},
];


export default class extends Component {
    state = {
        name: '',
        url: '',
        stations: [],
        pass: 0,
        period: null,
        isFull: false,
        width: 0,
        data1: [0],
        data2: [],
        data3: [],
        data4: [],
    };

    async componentDidMount() {
        try {
            const {projectID} = this.props.match.params;
            const query = await firebase.firestore().collection('investors')
                .where('url', '==', projectID).get();
            query.forEach(doc => {
                if (doc.exists) {
                    const {stations, connect, period, name, pass} = doc.data();
                    const url = connect;
                    this.setState({name, url, stations, pass});
                    this.handleOnloadData([moment(period[0]), moment(period[1])], period);
                }
            });
        } catch (e) {
        }
    }

    onResize = (width, height) => {
        this.setState({
            width
        })
    };

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

    downloadCSV = args => e => {
        let data, filename, link;
        let csv = this.convertArrayOfObjectsToCSV({
            data: this.state.data2
        });
        if (csv == null) return;

        filename = args.filename || this.state.name + ' - 일일 생산량 추이.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,\ufeff' + csv;
        }
        data = encodeURI(csv);

        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    };

    handleOnloadData = (date, dateString) => {
        this.setState({
            period: dateString
        });

        const period = date.map(date => date.valueOf());
        let {stations, url} = this.state;
        stations = stations.filter(station => station.name !== undefined);

        const data$ = from(stations).pipe(
            mergeMap(station => ajax.post(`http://${url}:${station.port}/datas`,
                {period}, {'Content-Type': 'application/json'}).pipe(
                pluck('response')
                )
            ),
            share()
        );

        const data2$ = data$.pipe(
            last(), concatMap(value => from(value))
            , map(value => {
                value.time = moment(value.time).format('MM/DD');
                return value;
            }), groupBy(value => value.time),
            mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], []))),
            mergeMap(value => from(value).pipe(
                reduce((acc, one) => {
                    acc[0] = one.time;
                    if (one.state === 'ok') {
                        acc[1] += 1;
                    }
                    return acc;
                }, ['', 0])
            )),
            reduce((acc, value) => {
                acc.push(value);
                return acc
            }, [])
        );

        data2$.subscribe(value => {
            const allCount = value.reduce((acc, cur) => acc + cur[1], 0);
            this.setState({data1: [allCount], data2: value});
        });

        const data3$ = data$.pipe(
            mergeMap((value, index) => from(value).pipe(
                filter(value1 => value1.state === 'nok')
                    , reduce((acc, one) => { acc[1] += 1; return acc },
                    [this.state.stations[index].name, 0])
                )
            ), reduce((acc, value) => { acc.push(value); return acc }, [['station', 'count']])
        );

        data3$.subscribe(value => this.setState({ data3: value }));

        const data4$ = data$.pipe(
            mergeMap((value, index) => from(value).pipe(
                filter(value1 => value1.state === 'ok')
                , reduce((acc, one) => { acc[1] += one.cycleTime; return acc },
                    [this.state.stations[index].name, 0])
                , map(data => { data[1] = (data[1] / value.filter(value1 => value1.state === 'ok').length)
                    .toFixed(2); return data })
                )
            ), reduce((acc, value) => { acc.push(value); return acc }, [['station', 'cycleTime']])
        );

        data4$.subscribe(value => this.setState({ data4: value }));
    }
    ;

    render() {
        const width = (window.screen.width / 3.8);
        const height = 400;
        const colors = ['#BAA6CA', '#B7DCFA', '#FFE69A', '#788195'];

        const DonutChart = {
            title: 'Donut Chart',
            key: 'DonutChart',
            chartType: 'PieChart',
            width: "100%",
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

        const Data = {
            title: 'Line Chart',
            chartType: 'LineChart',
            key: 'LineChart',
            width: '100%',
            height,
            columns: [
                {
                    label: '날짜',
                    type: 'string',
                },
                {
                    label: '생산량',
                    type: 'number',
                },
            ],
            rows: [
                ['06/05', 11],
                ['06/06', 9],
            ],
            options: {
                legend: {
                    textStyle: {
                        color: '#788195',
                    },
                },
                hAxis: {
                    textStyle: {
                        color: '#788195',
                    },
                    title: '날짜',
                    titleTextStyle: {
                        color: '#788195',
                    },
                },
                vAxis: {
                    textStyle: {
                        color: '#788195',
                    },
                    titleTextStyle: {
                        color: '#788195',
                    },
                },
                colors: ['#48A6F2'],
                dataOpacity: 1.0,
                animation: {
                    duration: 1000,
                    easing: 'in',
                    startup: true,
                },
                tooltip: {
                    textStyle: {
                        color: '#788195',
                    },
                },
            },
        };
        const {period, data1, data2, data3, data4, name, pass} = this.state;
        return (
            <LayoutWrapper className="isoMapPage">
                <PageHeader>
                    {name}
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
                        onChange={this.handleOnloadData}/>
                </div>
                <Fullscreen enabled={this.state.isFull} onChange={isFull => this.setState({isFull})}>
                    <Row gutter={16}>
                        <Col lg={12} md={12} sm={24} xs={24} style={{
                            height: '100%',
                            marginBottom: 16,
                            overflow: 'hidden'
                        }}>
                            <Box title={<IntlMessages id="graph.total" />}>
                                <ContentHolder style={{height: '100%'}}>
                                    <Col style={{marginBottom: 16}}>
                                        {
                                            (data1[0] > 0) ?
                                        <SingleProgressWidget
                                            percent={Number((pass / data1[0] * 10).toFixed(2))}
                                            barHeight={7}
                                            status="active"
                                            info={true} // Boolean: true, false
                                        /> : <Spin />
                                        }
                                    </Col>
                                </ContentHolder>
                            </Box>
                        </Col>
                        <Col md={12} xs={24} style={{
                            marginBottom: 16,
                            overflow: 'hidden'
                        }}>
                            <Box title={<IntlMessages id="graph.day" />}>
                                <Button type="primary" size="small" style={{
                                    position: "absolute", top: 20, right: 20
                                }} onClick={this.downloadCSV(datas)}><IntlMessages id="graph.csv" /></Button>
                                <ContentHolder>
                                    {
                                        (data2.length > 0) ? <GoogleChart {...Data} rows={data2} width={"100%"}/> : <Spin />
                                    }
                                </ContentHolder>
                            </Box>
                        </Col>
                    </Row>
                    <Row gutter={16}><Col md={12} xs={24} style={{
                        marginBottom: 16,
                        overflow: 'hidden'
                    }}>
                        <Box title={<IntlMessages id="graph.part" />}>
                            <ContentHolder>
                                {
                                    (data3.length > 0) ? <GoogleChart {...DonutChart} data={data3} width={"100%"}/> : <Spin />
                                }
                            </ContentHolder>
                        </Box>
                    </Col>
                        <Col lg={12} md={12} sm={24} xs={24} style={{
                            marginBottom: 16,
                            overflow: 'hidden'
                        }}>
                            <Box title={<IntlMessages id="graph.time" />}>
                                <ContentHolder>
                                    {
                                        (data4.length > 0) ? <GoogleChart {...DonutChart} data={data4}/> : <Spin />
                                    }
                                </ContentHolder>
                            </Box>
                        </Col></Row>
                </Fullscreen>
            </LayoutWrapper>
        );
    }
}
