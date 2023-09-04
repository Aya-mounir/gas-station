import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  stateOptions: any[] = [
  { label: 'TODAY', value: 'TODAY' },
  { label: 'YESTERDAY', value: 'YESTERDAY' },
  { label: 'LAST WEEK', value: 'last-week' }];

  value: string = 'TODAY';
}
