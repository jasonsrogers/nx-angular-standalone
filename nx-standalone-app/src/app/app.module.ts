import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@nx-standalone-app/shared/ui';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ShopComponent],
  imports: [
    BrowserModule,
    SharedUiModule,
    RouterModule.forRoot([
      {
        path: 'cart',
        loadChildren: () =>
          import('@nx-standalone-app/cart').then((m) => m.CartModule),
      },
      {
        path: '**',
        component: ShopComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
