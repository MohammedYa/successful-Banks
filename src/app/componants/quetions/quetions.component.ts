import { Component } from '@angular/core';

@Component({
  selector: 'app-quetions',
  templateUrl: './quetions.component.html',
  styleUrl: './quetions.component.scss'
})
export class QuetionsComponent {
  goToSection(sectionId: string) {
    // Navigate to the section
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
  
}
