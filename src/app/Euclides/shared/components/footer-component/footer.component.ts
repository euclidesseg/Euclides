import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ParticleCanvasComponent } from '../../../components/particle-canva-component/particle-canvas.component';

@Component({
  selector: 'app-footer-component',
  imports: [UpperCasePipe, ParticleCanvasComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
