import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-goose-table',
  templateUrl: './goose-table.component.html',
  styleUrls: ['./goose-table.component.scss']
})
export class GooseTableComponent implements OnInit {

  title = "GOOSE";
  dataSource;
  displayedColumns: string[] = ['AppID', 'macDst', 'GOCB', 'datSet'];

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataService.getGooseData()
      .subscribe(data => this.dataSource = data)
  }

}
