import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Entenrennen-Admin'
  apiKey: string | null = null;
  duckNumber: number | null = null;
  message: string | null = null;
  isApiKeyEntered: boolean = false; // Zustand, um zu prüfen, ob der API-Key eingegeben wurde
  
  constructor(private apiService: ApiService) { }
  
  sendDuckData() {
    if (this.apiKey && this.duckNumber) {
      this.apiService.sendDuckData(this.apiKey, this.duckNumber, 1).subscribe(
        response => {
          this.message = `Entennummer: ${response.ducknumber} auf Platz ${response.rank}`;
          this.duckNumber = null;
        },
        error => {
          this.message = "Fehler! Bitte API Key erneut eingeben.";
          this.apiKey = null;
        }
      );
    }
  }
  
  setApiKey() {
    if (this.apiKey) {
      this.isApiKeyEntered = true;
    }
  }
}