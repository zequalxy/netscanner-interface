import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-sv4-table',
  templateUrl: './sv4-table.component.html',
  styleUrls: ['./sv4-table.component.scss']
})
export class Sv4TableComponent implements OnInit {
  displayedColumns = ['svID', 'AppID', 'mac_destination'];
  dataSource;
  title = "SV (4 кГц)"

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  goToSvZoom(elem: any, title: string) {
    this.router.navigate(['/table/sv-zoom',title, elem.id])
  }
  getData(): void {
    this.dataService.getSv4Data()
      .subscribe(data => this.dataSource = data)
  }
}
