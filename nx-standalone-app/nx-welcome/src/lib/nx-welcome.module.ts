import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeRouteComponent } from './nx-welcome-route/nx-welcome-route.component';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component/nx-welcome.component';
import { SharedUiModule } from '@nx-standalone-app/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([{ path: '', component: NxWelcomeRouteComponent }]),
  ],
  declarations: [NxWelcomeRouteComponent, NxWelcomeComponent],
})
export class NxWelcomeModule {}
