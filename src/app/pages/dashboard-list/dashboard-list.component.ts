import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent {
  stateOptions: any[] = [

    { label: 'GRAPH', value: 'GRAPH', icon: 'fa-solid fa-chart-simple' }, { label: 'LIST', value: 'LisLISTt', icon: 'fa-solid fa-bars' },];
  value: string = 'GRAPH';

}
