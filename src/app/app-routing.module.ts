import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendConfirmPage } from './pages/send-confirm/send-confirm.page';

const routes: Routes = [
  { path: '', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'phrase', loadChildren: './pages/phrase/phrase.module#PhrasePageModule' },
  { path: 'send', loadChildren: './pages/send/send.module#SendPageModule' },
  { path: 'payment-request', loadChildren: './pages/payment-request/payment-request.module#PaymentRequestModule' },
  { path: 'pin', loadChildren: './pages/pin/pin.module#PinPageModule' },
  { path: 'pin-confirm', loadChildren: './pages/pin-confirm/pin-confirm.module#PinConfirmPageModule' },
  { path: 'app', loadChildren: './pages/tabs/tabs.module#TabsPageModule' }
];
@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  entryComponents: [
    SendConfirmPage
  ]
})
export class AppRoutingModule {}
