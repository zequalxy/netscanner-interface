import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-vector-chart',
  templateUrl: './vector-chart.component.html',
  styleUrls: ['./vector-chart.component.scss']
})

export class VectorChartComponent implements OnInit {
  voltageOptions: any;
  isLoading = true;
  currentOptions: any;
  id: number
  dataSource;
  title: string;

  constructor(private activateRoute: ActivatedRoute, private dataService: DataService) {
    this.id = activateRoute.snapshot.params['id']
    this.title = activateRoute.snapshot.params['title']
  }

  ngOnInit(): void {
    this.getData();


    this.currentOptions = {
      backgroundColor: 'lightgray',
      title: {},
      color: ['yellow', 'green', 'red'],
      legend: {
        icon: 'circle',
        left: 'center',
        data: [
          this.dataSource[this.id].data[0].name,
          this.dataSource[this.id].data[1].name,
          this.dataSource[this.id].data[2].name
        ]
      },
      polar: {
        center: ['50%', '50%']
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      angleAxis: {
        splitNumber: 10,
        max: 360,
        clockwise: false,
        type: 'value',
        startAngle: 0,
        axisLabel: {
          hideOverlap: true,
          fontSize: 7,
          fontWeight: 'bold'
        }

      },
      radiusAxis: {
        show: false,
        splitNumber: 1,
        max: function (value) {
          return value.max + 1
        }
      },
      series: [
        {
          coordinateSystem: 'polar',
          name: this.dataSource[this.id].data[0].name,
          type: 'line',
          symbol: 'arrow',
          symbolSize: 6,
          symbolRotate: -90 + (
            (this.dataSource[this.id].data[0].angle < 0)
              ? (360 + this.dataSource[this.id].data[0].angle)
              : this.dataSource[this.id].data[0].angle
          ),
          data: [[0,0], [
            this.dataSource[this.id].data[0].value,
            (this.dataSource[this.id].data[0].angle < 0)
              ? (360 + this.dataSource[this.id].data[0].angle)
              : this.dataSource[this.id].data[0].angle
          ]],
        },
        {
          coordinateSystem: 'polar',
          name: this.dataSource[this.id].data[1].name,
          type: 'line',
          symbol: 'arrow',
          symbolSize: 6,
          symbolRotate: -90 + (
            (this.dataSource[this.id].data[1].angle < 0)
              ? (360 + this.dataSource[this.id].data[1].angle)
              : this.dataSource[this.id].data[1].angle
          ),
          data: [[0,0], [
            this.dataSource[this.id].data[1].value,
            (this.dataSource[this.id].data[1].angle < 0)
              ? (360 + this.dataSource[this.id].data[1].angle)
              : this.dataSource[this.id].data[1].angle
          ]]
        },
        {
          coordinateSystem: 'polar',
          name: this.dataSource[this.id].data[2].name,
          type: 'line',
          symbol: 'arrow',
          symbolSize: 6,
          symbolRotate: -90 + (
            (this.dataSource[this.id].data[2].angle < 0)
              ? (360 + this.dataSource[this.id].data[2].angle)
              : this.dataSource[this.id].data[2].angle
          ),
          data: [[0,0], [
            this.dataSource[this.id].data[2].value,
            (this.dataSource[this.id].data[2].angle < 0)
              ? (360 + this.dataSource[this.id].data[2].angle)
              : this.dataSource[this.id].data[2].angle
          ]]
        },
      ]
    };

    this.voltageOptions = {
      backgroundColor: 'lightgray',
      title: {},
      color: ['yellow', 'green', 'red'],
      legend: {
        icon: 'circle',
        left: 'center',
        data: [
          this.dataSource[this.id].data[4].name,
          this.dataSource[this.id].data[5].name,
          this.dataSource[this.id].data[6].name
        ]
      },
      polar: {
        center: ['50%', '50%']
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      angleAxis: {
        splitNumber: 10,
        max: 360,
        clockwise: false,
        type: 'value',
        startAngle: 0,
        axisLabel: {
          hideOverlap: true,
          fontSize: 7,
          fontWeight: 'bold'
        }
      },
      radiusAxis: {
        show: false,
        splitNumber: 1,
        max: function (value) {
          return value.max + 1
        }
      },
      series: [
        {
          coordinateSystem: 'polar',
          name: this.dataSource[this.id].data[4].name,
          type: 'line',
          symbol: 'arrow',
          symbolSize: 6,
          symbolRotate: -90 + (
            (this.dataSource[this.id].data[4].angle < 0)
            ? (360 + this.dataSource[this.id].data[4].angle)
            : this.dataSource[this.id].data[4].angle),
          data: [[0,0], [
            this.dataSource[this.id].data[4].value,
            (this.dataSource[this.id].data[4].angle < 0)
              ? (360 + this.dataSource[this.id].data[4].angle)
              : this.dataSource[this.id].data[4].angle
          ]]
        },
        {
          coordinateSystem: 'polar',
          name: this.dataSource[this.id].data[5].name,
          type: 'line',
          symbol: 'arrow',
          symbolSize: 6,
          symbolRotate: -90 +
            ((this.dataSource[this.id].data[5].angle < 0)
            ? (360 + this.dataSource[this.id].data[5].angle)
            : this.dataSource[this.id].data[5].angle),
          data: [[0,0], [
            this.dataSource[this.id].data[5].value,
            (this.dataSource[this.id].data[5].angle < 0)
              ? (360 + this.dataSource[this.id].data[5].angle)
              : this.dataSource[this.id].data[5].angle
          ]]
        },
        {
          coordinateSystem: 'polar',
          name: this.dataSource[this.id].data[6].name,
          type: 'line',
          symbol: 'arrow',
          symbolSize: 6,
          symbolRotate: -90 + (
            (this.dataSource[this.id].data[6].angle < 0)
              ? (360 + this.dataSource[this.id].data[6].angle)
              : this.dataSource[this.id].data[6].angle
          ),
          data: [[0,0], [
            this.dataSource[this.id].data[6].value,
            (this.dataSource[this.id].data[6].angle < 0)
              ? (360 + this.dataSource[this.id].data[6].angle)
              : this.dataSource[this.id].data[6].angle
          ]]
        },
      ]
    };
  }

  getData(): void {
    switch (this.title) {
      case "SV (4 кГц)":
        this.dataService.getSv4Data()
          .subscribe(data => this.dataSource = data)
        break
      case "SV (12.8 кГц)":
        this.dataService.getSv12Data()
          .subscribe(data => this.dataSource = data)
        break
    }
  }

}
