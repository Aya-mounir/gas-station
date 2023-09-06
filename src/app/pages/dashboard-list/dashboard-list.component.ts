import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss'],
})
export class DashboardListComponent {
  checked:boolean=false;
  checked1:boolean=false;
  checked2:boolean=false;
  checked3:boolean=false;
  checked4:boolean=false;
  checked5:boolean=false;
  stateOptions: any[] = [
    { label: 'GRAPH', value: 'GRAPH', icon: 'fa-solid fa-chart-simple' },
    { label: 'LIST', value: 'LIST', icon: 'fa-solid fa-bars' },
  ];
  value: string = 'LIST';
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

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
          backgroundColor: documentStyle.getPropertyValue('#ff7f5c'),
          borderColor: documentStyle.getPropertyValue('#ff7f5c'),
          data: [80, 81, 56, 55, 40],
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: documentStyle.getPropertyValue('#ff7f5c'),
            font: {
              weight: 50,
            },
          },
          grid: {
            color: documentStyle.getPropertyValue('#ff7f5c'),
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: documentStyle.getPropertyValue('#ff7f5c'),
          },
          grid: {
            color: documentStyle.getPropertyValue('#ff7f5c'),
            drawBorder: false,
          },
        },
      },
    };
  }
}
