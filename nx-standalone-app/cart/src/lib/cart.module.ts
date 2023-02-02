import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRouteComponent } from './cart-route/cart-route.component';
import { SharedUiModule } from '@nx-standalone-app/shared/ui';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: CartRouteComponent }]),
  ],
  declarations: [CartRouteComponent],
})
export class CartModule {}
