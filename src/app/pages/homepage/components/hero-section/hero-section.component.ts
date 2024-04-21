import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hero-section.component.html',
  styles: '',
})
export class HeroSectionComponent implements OnInit {
  searchText: any;
  constructor() {}
  @Output() event = new EventEmitter<any>();
  sendMessage() {
    this.event.emit(this.searchText);
  }

  ngOnInit(): void {}
}
