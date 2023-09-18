import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss'],
})
export class DashboardListComponent {
  checked: boolean = false;
  checked1: boolean = false;
  checked2: boolean = false;
  checked3: boolean = false;
  checked4: boolean = false;
  checked5: boolean = false;
  stateOptions: any[] = [
    { label: 'GRAPH', value: 'GRAPH', icon: 'fa-solid fa-chart-simple' },
    { label: 'LIST', value: 'LIST', icon: 'fa-solid fa-bars' },
  ];
  value: string = 'LIST';
  data: any;
  options: any;
  selected: boolean = false;
  selected1: boolean = false;
  selected2: boolean = false;
  selected3: boolean = false;
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);

    this.data = {
      labels: [
        'Station Name Dummy',
        'Station Name Dummy',
        'Station Name Dummy',
        'Station Name Dummy',
        'Station Name Dummy',
      ],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: documentStyle.getPropertyValue('--red-400'),
          borderColor: documentStyle.getPropertyValue('--red-400'),
          data: [80, 81, 56, 55, 40],
          fill: false,
          barPercentage: 0.1,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: documentStyle.getPropertyValue('--surface-0'),
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: documentStyle.getPropertyValue('--gray-900'),
            font: {
              weight: 50,
            },
          },
          grid: {
            color: documentStyle.getPropertyValue('--surface-0'),
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: documentStyle.getPropertyValue('--gray-900'),
          },
          grid: {
            color: documentStyle.getPropertyValue('--bluegray-200'),
            drawBorder: false,
          },
        },
        xAxes: [{}],
      },
    };
  }
}
