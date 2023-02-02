import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-standalone-app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() text = 'Nx - Angular'

}
