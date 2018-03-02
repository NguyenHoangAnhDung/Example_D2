import { Component, OnInit } from '@angular/core';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashBoardComponent implements OnInit {
  constructor(private itemService: ItemService) {}

  items: any = [];

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  ngOnInit() {
    this.getItems();
  }
}
