import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voltage-chart',
  templateUrl: './voltage-chart.component.html',
  styleUrls: ['./voltage-chart.component.scss']
})
export class VoltageChartComponent implements OnInit {

  options: any;
  initOpts: any;

  constructor() {
  }

  ngOnInit(): void {
    const xAxisData: string[] = [];
    const data1: number[] = [];
    const data2: number[] = [];

    for (let i = 0; i < 80; i++) {
      xAxisData.push('' + i);
      data1.push((Math.sin(100 * 2 * Math.PI * i / 80)));
      data2.push((Math.sin(100 * 2 * Math.PI * i / 80 + 3.5)));
    }
    this.initOpts = {}
    this.options = {
      grid: {
        show: true,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
      },
      backgroundColor: '#100C2A',
      toolbox: {
        show: false
      },
      tooltip: {show: false},
      xAxis: {
        show: false,
        data: xAxisData,
        silent: true,
        splitLine: {
          show: true,
        },
      },
      yAxis: {show: false},
      series: [
        {
          name: 'bar',
          type: 'line',
          data: data1,
        },
        {
          name: 'bar2',
          type: 'line',
          data: data2,
        },
      ],
      animationEasing: 'elasticOut',
    };
  }
}
