import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRightSideComponent } from './dashboard-right-side.component';
import { ChartModule } from 'primeng/chart';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [DashboardRightSideComponent],
  imports: [CommonModule, ChartModule, ProgressBarModule],
  exports: [DashboardRightSideComponent],
})
export class DashboardRightSideModule {}
