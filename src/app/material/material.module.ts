import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
})
export class MaterialModule {}
