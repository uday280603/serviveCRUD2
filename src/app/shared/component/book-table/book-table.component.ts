import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/bookService.service';
import { Ibook } from '../../model/Ibook';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmationComponent } from '../get-confirmation/get-confirmation.component';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss'],
})
export class BookTableComponent implements OnInit {
  getAllBooks!: Ibook[];

  constructor(
    private _bookservice: BookService,
    private _matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._bookservice.fetchAllBook().subscribe({
      next: (data) => {
        this.getAllBooks = data;
      },
    });
  }

  onRemove(removeId: number) {
    let config = new MatDialogConfig();
    config.width = '400px';
    config.disableClose = true;
    config.data = `Are you sure to remove the book with id ${removeId}..?`;
    let matDialogRef = this._matDialog.open(GetConfirmationComponent, config);
    matDialogRef.afterClosed().subscribe(getConfirm =>{
      if(getConfirm === true){

      }
    })
  }
}
