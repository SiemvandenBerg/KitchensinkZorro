import { Component } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
// import { MyComponent } from '../my-component/my-component.component'; // adjust this import to your actual component path
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-cdk',
  templateUrl: './cdk.component.html',
  styleUrls: ['./cdk.component.css']
})
export class CdkComponent {

  constructor(private overlay: Overlay) {}

  openOverlay() {
    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });

    const overlayRef = this.overlay.create(overlayConfig);

    const myPortal = new ComponentPortal(ButtonComponent);
    overlayRef.attach(myPortal);
  }
}