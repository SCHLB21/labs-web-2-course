import { Component } from '@angular/core';

export interface Indicator {
  status: boolean;
  show: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  indicators: Indicator[] = [
    { status: Math.random() >= 0.5, show: true },
    { status: Math.random() >= 0.5, show: true },
    { status: Math.random() >= 0.5, show: true },
    { status: Math.random() >= 0.5, show: true },
    { status: Math.random() >= 0.5, show: true },
    { status: Math.random() >= 0.5, show: true },
    { status: Math.random() >= 0.5, show: true },
    { status: Math.random() >= 0.5, show: true },
    { status: Math.random() >= 0.5, show: true },
    { status: Math.random() >= 0.5, show: true },
  ];
}
