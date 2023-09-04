import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    SelectButtonModule,
    FormsModule,
  ],
  exports: [NavBarComponent]
})
export class NavBarModule { }
