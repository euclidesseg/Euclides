import { Component, computed } from '@angular/core';
import { LucidePanelsLeftBottom, Linkedin, LucideAngularModule, Youtube, MailIcon, GithubIcon } from 'lucide-angular';

@Component({
  imports: [LucideAngularModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export default class ContactPageComponent {
  linkedin = computed(() => Linkedin);
  youtube = computed(() => Youtube);
  email = computed(() => MailIcon);
  github = computed(() => GithubIcon);


}
