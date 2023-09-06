import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent {
  checked:boolean=false;
  checked1:boolean=false;
  checked2:boolean=false;
  checked3:boolean=false;
  checked4:boolean=false;
  checked5:boolean=false;
  stateOptions: any[] = [

    { label: 'GRAPH', value: 'GRAPH', icon: 'fa-solid fa-chart-simple' }, { label: 'LIST', value: 'LIST', icon: 'fa-solid fa-bars' },];
  value: string = 'LIST';

}
