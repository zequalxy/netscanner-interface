import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-chart',
  templateUrl: './current-chart.component.html',
  styleUrls: ['./current-chart.component.scss']
})
export class CurrentChartComponent implements OnInit {

  options: any;
  isLoading = true;
  dataSource;

  constructor() {
  }

  ngOnInit(): void {
    const xAxisData: string[] = [];
    const data1: number[] = [];
    const data2: number[] = [];

    for (let i = 0; i < 80; i++) {
      xAxisData.push('' + i);
      data1.push((Math.sin(10 * 2 * Math.PI * i / 80)));
      data2.push((Math.sin(10 * 2 * Math.PI * i / 80 + 3.5)));
    }
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
      },
      yAxis: {show: false},
      series: [
        {
          name: 'bar',
          type: 'line',
          data: data1,
          lineStyle: {
            color: 'red'
          }
        },
        {
          name: 'bar2',
          type: 'line',
          data: data2,
          lineStyle: {
            color: 'yellow'
          }
        },
      ],
      animationEasing: 'elasticOut',
    };
  }

}
