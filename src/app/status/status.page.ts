import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonRadioGroup, IonButton } from '@ionic/angular/standalone';
import { IonItem, IonLabel, IonList, IonRadio} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonButton, IonRadioGroup, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonList, IonRadio]
})
export class StatusPage implements OnInit {
myStatus: string = '';
  constructor(private storage:Storage, private router:Router) { }

  async onButtonClick(){
    console.log(this.myStatus);
    await this.storage.create();
    await this.storage.set('status', this.myStatus);
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
