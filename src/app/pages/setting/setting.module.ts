import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SettingPage } from './setting.page';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SettingPage }])
  ],
  declarations: [SettingPage]
})
export class SettingPageModule {}
