import { Component } from '@angular/core';

@Component({
  selector: 'app-call-button',
  templateUrl: './call-button.component.html',
  styleUrls: ['./call-button.component.scss']
})
export class CallButtonComponent {

  callNumber() {
  window.location.href = 'tel:+33744131197';
}


}

