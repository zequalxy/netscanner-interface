import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DeviceTestingComponent } from "./device-testing/device-testing.component";
import { HomeComponent } from "./home/home.component";
import { InstructionComponent } from "./instruction/instruction.component";
import { NetAnalysisComponent } from "./net-analysis/net-analysis.component";
import {SupportComponent} from "./support/support.component";
import {TableContentComponent} from "./table-content/table-content.component";
import {GridViewComponent} from "./grid-view/grid-view.component";
import {Sv4TableComponent} from "./table-content/sv4-table/sv4-table.component";
import {Sv12TableComponent} from "./table-content/sv12-table/sv12-table.component";
import {SvZoomComponent} from "./table-content/sv-zoom/sv-zoom.component";
import {VectorChartComponent} from "./chart/vector-chart/vector-chart.component";
import {GooseTableComponent} from "./table-content/goose-table/goose-table.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'instruction', component: InstructionComponent},
  {path: 'net-analysis', component: NetAnalysisComponent},
  {path: 'device-testing', component: DeviceTestingComponent},
  {path: 'support', component: SupportComponent},
  {path: 'table', component: TableContentComponent, children: [
      {
        path: 'sv4-table', component: Sv4TableComponent
      },
      {
        path: 'sv12-table', component: Sv12TableComponent
      },
      {
        path: 'goose-table', component: GooseTableComponent
      },
      {
        path: 'sv-zoom/:title/:id', component: SvZoomComponent
      }
    ]},
  {path: 'grid', component: GridViewComponent},
  {path: 'vector-chart', component: VectorChartComponent},
]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
