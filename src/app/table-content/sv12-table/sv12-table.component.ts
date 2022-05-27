import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-sv12-table',
  templateUrl: './sv12-table.component.html',
  styleUrls: ['./sv12-table.component.scss']
})
export class Sv12TableComponent implements OnInit {
  displayedColumns = ['svID', 'AppID', 'mac_destination'];
  dataSource;
  title = "SV (12.8 кГц)"

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  goToSvZoom(elem: any, title: string) {
    this.router.navigate(['/table/sv-zoom',title, elem.id])
  }
  getData(): void {
    this.dataService.getSv12Data()
      .subscribe(data => this.dataSource = data)
  }

}

