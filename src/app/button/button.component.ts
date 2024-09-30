import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = 'Button'; // Default label text
  @Input() buttonType: string = 'board-btn1'; // Button style type (e.g., 'primary', 'secondary')

  @Output() buttonClick = new EventEmitter<void>(); // Emit event when clicked

  onClick() {
    this.buttonClick.emit(); // Emit click event
  }
}
