import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import ChartWrapper from '../../chart.style';

export default class extends Component {
  render() {
    const { datass, width, height, colors } = this.props;
    // <div className="isoChartWrapper">
    return (
      <ChartWrapper>
        <LineChart
          width={width}
          height={height}
          data={datass}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" stroke={colors[3]} />
          <YAxis stroke={colors[3]} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="합격"
            stroke={colors[0]}
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="불합격" stroke={colors[1]} />
        </LineChart>
      </ChartWrapper>
    );
  }
}
