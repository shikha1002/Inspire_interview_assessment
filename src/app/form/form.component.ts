import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { book } from '../user/model/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  bookForm: FormGroup;
  minDate = new Date();
  imageUrl: string;
  isAdd: boolean;

  constructor(private fb: FormBuilder, private dialoRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) data: {bookDetail :book, isAdd: boolean}) {
    this.bookForm = this.fb.group({
      imageUrl: [data.bookDetail.imageUrl, Validators.required],
      title: [data.bookDetail.title, Validators.required],
      purchaseLink: [data.bookDetail.purchaseLink],
      PublishDate: [data.bookDetail.PublishDate, Validators.required]
    })
    this.isAdd = data.isAdd;
    this.imageUrl= data.bookDetail.imageUrl;
  }

  //--------fetch the imageUrl from upload file---------
  getImageUrl(_event: any) {
    const file = _event.target.files[0]
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
      this.bookForm.controls['imageUrl'].patchValue(this.imageUrl);
    }
    reader.readAsDataURL(file)
  }

  //----------save the book details----------
  save() {
    this.dialoRef.close({book: this.bookForm.value, isAdd: this.isAdd});
  }
}
