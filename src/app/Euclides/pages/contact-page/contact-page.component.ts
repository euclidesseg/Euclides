import { Component, computed } from '@angular/core';
import { LucidePanelsLeftBottom, Linkedin, LucideAngularModule, Youtube, MailIcon, GithubIcon } from 'lucide-angular';

@Component({
  imports: [LucideAngularModule],
  templateUrl: './contact-page.component.html',
  styles: `
  .contact-card::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 1.5rem;
            padding: 2px;
            background: linear-gradient(45deg, transparent, #5025d1, #cad5e2, transparent);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .contact-card:hover::before {
            opacity: 1;
        }

        .contact-card:hover .icon-wrapper {
            transform: rotate(-10deg) scale(1.1);
        }
  `
})
export default class ContactPageComponent {
  linkedin = computed(() => Linkedin);
  youtube = computed(() => Youtube);
  email = computed(() => MailIcon);
  github = computed(() => GithubIcon);


}
