import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  @Input() categories!: string[];
  @Output() onSelectCategory: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSelect(category: string): void {
    this.onSelectCategory.emit(category);
  }
}
