import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
  constructor(private swPush: SwPush) {}

  requestPermission() {
    if (this.swPush.isEnabled) {
      this.swPush.requestSubscription({
        serverPublicKey: 'BK4nMW1sSPfLI-dK34V1WMAiyxuxTgfY1KekVstQ66Hk3Eywokox0AjU9SrhBVReeAbKmwY-1-5jC5u2DOURbiY'
      })
        .then(subscription => {
          this.showNotification('Push are enabled!');
        })
        .catch(err => {
          console.error('Could not subscribe to notifications', err);
        });
    }
  }

  showNotification(message: string) {
    this.swPush.notificationClicks.subscribe(click => {
      console.log('Notification was clicked: ', click);
    });

    const options = {
      body: message
    };

    new Notification(message, options);
  }
}
