import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRightSideComponent } from './dashboard-right-side.component';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [
    DashboardRightSideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DashboardRightSideComponent, ChartModule]
})
export class DashboardRightSideModule { }
