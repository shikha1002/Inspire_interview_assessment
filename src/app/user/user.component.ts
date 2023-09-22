import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { UserService } from './service/user.service';
import { book, initialValue, user } from './model/user.model';
import { FormComponent } from '../form/form.component';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userDetail!: user;

  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUser();
  }

  //---- Get data from user service---------------
  getUser() {
    this.userService.getData().subscribe(res => {
      this.userDetail = res ?? [];
    }, catchError(err => of(err)))
  }

  //---sort the books details as per title------------
  sortByTitle() {
    this.userDetail.books.sort((a, b) => {
      return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    })
  }

  //-------delete Book detail from the user list
  deleteBook(title: string) {
    this.userDetail.books = this.userDetail.books.filter(book => book.title !== title);
  }

  //----------Add book details from the user list-------------
  addBook() {
    this.openDialog(initialValue, true);
  }

  openDialog(bookDetail: book, isAdd: boolean) {
    const dialogRef = this.dialog.open(FormComponent, {
      data: { bookDetail, isAdd },
      height: 'calc(100-30)%',
      width: '40%',
    })

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          if (data.isAdd) {
            this.userDetail.books.unshift({ ...data.book }) // adding the new book at the top of the list
          } else {
            this.userDetail.books.splice(this.userDetail.books.findIndex(v => v.title === data.book.title), 1, { ...data.book }) // updating the book by title 
          }
        }
      }
    );
  }

  //----------update the book details from the user list------------
  update(title: string) {
    this.openDialog(this.userDetail.books.filter(v => v.title === title)[0], false);
  }

}
