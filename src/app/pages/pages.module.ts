import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardRightSideModule } from '../global/dashboard-right-side/dashboard-right-side.module';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    DashboardListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DashboardRightSideModule,
    SelectButtonModule,
    FormsModule,
    OverlayPanelModule,
    ButtonModule,
    CheckboxModule
  ]
})
export class PagesModule { }
