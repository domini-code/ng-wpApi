import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatCardModule } from '@angular/material';

const materialModules = [
  MatToolbarModule,
  MatCardModule
]

@NgModule({
  imports: [CommonModule, materialModules],
  exports: [materialModules]
})
export class AppMaterialModule { }