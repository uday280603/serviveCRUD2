import { Injectable } from '@angular/core';
import { Ibook } from '../model/Ibook';
import { Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ires } from '../model/Icake';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  bookArr: Ibook[] = [
    {
      bookId: 1,
      bookName: 'Atomic Habits',
      author: 'James Clear',
      price: 499,
      pages: 320,
      isAvailable: true,
    },
    {
      bookId: 2,
      bookName: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      price: 399,
      pages: 280,
      isAvailable: false,
    },
  ];

  constructor(private _snackbar: MatSnackBar) {}

  //Fetch All Books
  fetchAllBook(): Observable<Ibook[]> {
    return of(this.bookArr);
  }

  //Create New Book
  createNewBook(newObj: Ibook): Observable<Ires<Ibook>> {
    this.bookArr.unshift(newObj);
    return of({
      msg: `New Book with id ${newObj.bookId} is added successfully..!`,
      data: newObj,
    });
  }
  //remove
  removebook(removeId : number) : Observable<Ires<Ibook>>{
    let GET_INDEX = this.bookArr.findIndex(b => b.bookId === removeId);
    let arr =this.bookArr.splice(GET_INDEX,1);
    return of({
      msg : `Book with id ${removeId} is removed successfully..!`,
      data : arr[0]
    })


    //////as

  }
}
