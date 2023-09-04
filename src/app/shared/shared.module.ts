import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { SideBarModule } from '../global/side-bar/side-bar.module';
import { NavBarModule } from '../global/nav-bar/nav-bar.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    SideBarModule,
    NavBarModule,

    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
