import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Location } from '@angular/common';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  constructor(private router: Router, private location: Location) {
  }

  ngOnInit(): void {
  }

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 2, color: 'lightblue'},
    {text: 'Three', cols: 1, rows: 4, color: 'lightpink'},
    {text: 'Two', cols: 3, rows: 2, color: 'lightgreen'}
  ];

  goBack() {
    this.location.back();
  }
}
