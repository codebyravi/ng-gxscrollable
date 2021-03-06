import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  rows: number[];
  items: number[];

  ngOnInit(): void {
    const rows = [];

    for (let i = 0; i < 100; ++i) {
      rows.push(i);
    }

    this.rows = rows;

    const items = [];

    for (let i = 0; i < 100; ++i) {
      items.push(i);
    }

    this.items = items;
  }
}
