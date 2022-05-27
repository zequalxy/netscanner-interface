import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../data.service";


@Component({
  selector: 'app-sv-zoom',
  templateUrl: './sv-zoom.component.html',
  styleUrls: ['./sv-zoom.component.scss']
})
export class SvZoomComponent implements OnInit {
  id: number
  title: string;
  data;
  dataSource;
  displayedColumns: string[] = ['name', 'value', 'angle', 'freq', 'value2', 'col'];

  constructor(private activateRoute: ActivatedRoute, private dataService: DataService) {
    this.id = activateRoute.snapshot.params['id']
    this.title = activateRoute.snapshot.params['title']
  }

  ngOnInit(): void {
    this.getData();
    this.dataSource = this.data[this.id].data
  }
  getData(): void {
    switch (this.title) {
      case "SV (4 кГц)":
        this.dataService.getSv4Data()
          .subscribe(data => this.data = data)
        break
      case "SV (12.8 кГц)":
        this.dataService.getSv12Data()
          .subscribe(data => this.data = data)
        break
    }
  }

}
