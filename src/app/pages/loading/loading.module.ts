import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadingPage } from './loading.page';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LoadingPage }])
  ],
  declarations: [LoadingPage]
})
export class LoadingPageModule {}
