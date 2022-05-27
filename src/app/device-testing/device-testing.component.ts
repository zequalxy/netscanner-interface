import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-device-testing',
  templateUrl: './device-testing.component.html',
  styleUrls: ['./device-testing.component.scss']
})
export class DeviceTestingComponent implements OnInit {
  hide = true

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate([''])
  }
}
