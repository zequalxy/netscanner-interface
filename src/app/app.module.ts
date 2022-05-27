import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InstructionComponent } from './instruction/instruction.component';
import { NetAnalysisComponent } from './net-analysis/net-analysis.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { DeviceTestingComponent } from './device-testing/device-testing.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { SupportComponent } from './support/support.component';
import { TableContentComponent } from './table-content/table-content.component';
import {MatTableModule} from "@angular/material/table";
import {MatRippleModule} from "@angular/material/core";
import { Sv4TableComponent } from './table-content/sv4-table/sv4-table.component';
import { Sv12TableComponent } from './table-content/sv12-table/sv12-table.component';
import { ChartComponent } from './chart/chart.component';
import { NgxEchartsModule} from "ngx-echarts";
import { GridViewComponent } from './grid-view/grid-view.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { VoltageChartComponent } from './chart/voltage-chart/voltage-chart.component';
import { CurrentChartComponent } from './chart/current-chart/current-chart.component';
import { SvZoomComponent } from './table-content/sv-zoom/sv-zoom.component';
import { VectorChartComponent } from './chart/vector-chart/vector-chart.component';
import { GooseTableComponent } from './table-content/goose-table/goose-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstructionComponent,
    NetAnalysisComponent,
    DeviceTestingComponent,
    SupportComponent,
    TableContentComponent,
    Sv4TableComponent,
    Sv12TableComponent,
    ChartComponent,
    GridViewComponent,
    VoltageChartComponent,
    CurrentChartComponent,
    SvZoomComponent,
    VectorChartComponent,
    GooseTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatRippleModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
