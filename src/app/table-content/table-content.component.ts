import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss']
})

export class TableContentComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate([''])
  }

  goBack() {
    this.location.back();
  }

  goToGrid() {
    this.router.navigate(['/grid'])
  }
}
