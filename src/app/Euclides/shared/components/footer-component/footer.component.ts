import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ParticleCanvasComponent } from '../../../components/particle-canva-component/particle-canvas.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-component',
  imports: [RouterLink, ParticleCanvasComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent { }
