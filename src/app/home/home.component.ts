import { Component } from '@angular/core';

@Component({
  selector: 'bot-home',
  template: `
    <p class='blue'>
      home component works!
    </p>
  `,
  styles: [
    `
      .blue {
        color: blue;
      }
    `
  ]
})
export class HomeComponent {

}