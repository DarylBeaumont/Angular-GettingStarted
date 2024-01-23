import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    StarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    ConvertToSpacesPipe,
    StarComponent,
  ]
})
export class SharedModule { }
