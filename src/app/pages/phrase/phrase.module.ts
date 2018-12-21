import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PhrasePage } from './phrase.page';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  imports: [
    ComponentsModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PhrasePage }])
  ],
  declarations: [PhrasePage]
})
export class PhrasePageModule {}
