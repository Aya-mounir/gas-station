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
    const textColor = documentStyle.getPropertyValue('--primary-50');
    const textColorSecondary = documentStyle.getPropertyValue('--bluegray-200');
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
          borderColor: documentStyle.getPropertyValue('--primary-200'),
          pointBackgroundColor: documentStyle.getPropertyValue('--primary-100'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor:
            documentStyle.getPropertyValue('--primary-100'),
          data: [65, 59, 90, 81, 56, 55, 40, 20, 10, 74, 56, 30],
        },
        {
          borderColor: documentStyle.getPropertyValue('--primary-300'),
          pointBackgroundColor: documentStyle.getPropertyValue('--primary-100'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor:
            documentStyle.getPropertyValue('--primary-100'),
          data: [28, 48, 40, 19, 96, 27, 100, 60, 20, 80, 11, 90],
        },
      ],
    };
    this.options = {
      plugins: {
        legend: {
          labels: {
            color: documentStyle.getPropertyValue('--primary-50'),
          },
        },
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
