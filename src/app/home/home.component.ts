import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToNetAnalysis() {
    this.router.navigate(['/net-analysis'])
  }

  goToInstruction() {
    this.router.navigate(['/instruction'])
  }

  goToDeviceTesting() {
    this.router.navigate(['/device-testing'])
  }

  goToSupport() {
    this.router.navigate(['/support'])
  }
}
