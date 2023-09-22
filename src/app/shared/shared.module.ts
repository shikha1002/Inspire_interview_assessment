import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
    imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,
        MatIconModule, MatButtonModule, MatDialogModule],
    exports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,
        MatIconModule, MatButtonModule, MatDialogModule],
})

export class SharedModule {

}