import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ibook } from '../../model/Ibook';
import { BookService } from '../../services/bookService.service';
import { SnackBarServive } from '../../services/snackBar.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  isInEditMode: boolean = false;

  @ViewChild('bookForm') bookForm!: NgForm;

  constructor(
    private _bookservice: BookService,
    private _snackbar: SnackBarServive,
  ) {}

  ngOnInit(): void {}
  onAddBook() {
    if (this.bookForm.valid) {
      let NEW_OBJ: Ibook = {
        ...this.bookForm.value,
        bookId: Date.now(),
      };
      this._bookservice.createNewBook(NEW_OBJ).subscribe({
        next: (data) => {
          this._snackbar.openSnackbar(data.msg);
          this.bookForm.reset()
        },
        error: (err) => {
          this._snackbar.openSnackbar(err.error);
        },
      });
    }
  }
}
