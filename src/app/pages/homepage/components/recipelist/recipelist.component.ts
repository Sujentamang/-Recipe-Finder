import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipelist',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss'],
})
export class RecipelistComponent implements OnInit {
  @Input() tabsArray: string[] = [];
  @Output() onTabChange = new EventEmitter<number>();
  activatedTab: number = 0;

  constructor() {}

  ngOnInit(): void {}

  setTab(index: number) {
    this.activatedTab = index;
    // debugger; // Set a breakpoint here for debugging
    this.onTabChange.emit(this.activatedTab);
  }
}
