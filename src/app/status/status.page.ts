import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonRadioGroup, IonButton } from '@ionic/angular/standalone';
import { IonItem, IonLabel, IonList, IonRadio} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';// Importing Ionic Storage for local storage management
import { Router } from '@angular/router';// Importing Router to navigate to other pages
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonButton, IonRadioGroup, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonList, IonRadio]
  // List of imports for Ionic and Angular components used in the template
})
export class StatusPage implements OnInit {
myStatus: string = '';// Declaring a string property to hold the status (e.g., "Available", "Busy")

  constructor(private storage:Storage, private router:Router) { } // Injecting Storage and Router services via the constructor

  async onButtonClick(){// Method that is called when the button is clicked

    console.log(this.myStatus);// Logging the current value of myStatus to the console for debugging purposes

    await this.storage.create();// Initializes the Ionic Storage (ensures it is set up before usage)

    await this.storage.set('status', this.myStatus);// Storing the selected status in the Ionic storage with the key 'status'
    
    this.router.navigate(['/home']);// Navigates to the '/home' page after the status is saved
  }

  ngOnInit() {
  }

}
