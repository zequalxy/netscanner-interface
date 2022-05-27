import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-net-analysis',
  templateUrl: './net-analysis.component.html',
  styleUrls: ['./net-analysis.component.scss']
})
export class NetAnalysisComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate([''])
  }

  goToSv4Table() {
    this.router.navigate(['table/sv4-table'])
  }

  goToSv12Table() {
    this.router.navigate(['table/sv12-table'])
  }

  goToGooseTable() {
    this.router.navigate(['table/goose-table'])
  }
}
