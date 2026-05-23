import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";





@Injectable({
    providedIn :'root'
})
export class SnackBarServive{

    constructor(private _snackbar  : MatSnackBar){

    }

    openSnackbar (msg : string){
        this._snackbar.open(msg,'Close',{
            verticalPosition :'bottom',
            horizontalPosition :'center',
            duration : 3000
        })
    }

}