import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-right-side',
  templateUrl: './dashboard-right-side.component.html',
  styleUrls: ['./dashboard-right-side.component.scss'],
})
export class DashboardRightSideComponent {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    this.data = {
      labels: [
        '24:00',
        '2:00',
        '4:00',
        '6:00',
        '8:00',
        '10:00',
        '12:00',
        '14:00',
        '16:00',
        '18:00',
        '20:00',
        '22:00',
      ],
      datasets: [
        {
          borderColor: documentStyle.getPropertyValue('#009ACF'),
          pointBackgroundColor: documentStyle.getPropertyValue('#009ACF'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('#009ACF'),
          data: [65, 59, 90, 81, 56, 55, 40, 20, 10, 74, 56, 30],
        },
        {
          borderColor: documentStyle.getPropertyValue('#009ACF'),
          pointBackgroundColor: documentStyle.getPropertyValue('#009ACF'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('#009ACF'),
          data: [28, 48, 40, 19, 96, 27, 100, 60, 20, 80, 11, 90],
        },
      ],
    };
    this.options = {
      plugins: {
        legend: {},
      },
      scales: {
        r: {
          grid: {
            color: textColorSecondary,
          },
        },
      },
    };
  }
}
