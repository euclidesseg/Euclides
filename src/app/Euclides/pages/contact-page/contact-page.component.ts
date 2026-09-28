import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export default class ContactPageComponent {


  copied = signal(false);

  async copyEmail(): Promise<void> {
    await navigator.clipboard.writeText('euclides2696@gmail.com');

    this.copied.set(true);

    setTimeout(() => {
      this.copied.set(false);
    }, 2000);
  }
}