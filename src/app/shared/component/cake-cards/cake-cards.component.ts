import { Component, OnInit } from '@angular/core';
import { CakeService } from '../../services/cakeService.service';
import { Icake } from '../../model/Icake';
import { MatDialog, MatDialogClose, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmationComponent } from '../get-confirmation/get-confirmation.component';
import { _MatSnackBarBase } from '@angular/material/snack-bar';
import { SnackBarServive } from '../../services/snackBar.service';

@Component({
  selector: 'app-cake-cards',
  templateUrl: './cake-cards.component.html',
  styleUrls: ['./cake-cards.component.scss']
})
export class CakeCardsComponent implements OnInit {

  getAllCakes !: Icake[];
  constructor(private _cakeService : CakeService
    ,private _matDialog : MatDialog,
    private _snackBar : SnackBarServive
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this._cakeService.fetchAllCake()
    .subscribe({
      next: data=>{
        this.getAllCakes=data
      },
      error : err =>{
        console.log(err);
        
      }
    })
  }

  onRemoveCake(removeId : number){
    let config =  new MatDialogConfig();
    config.width = '400px',
    config.disableClose = true,
    config.data = `Are you sure to remove cake with id ${removeId}..?`
    let matDialogRef = this._matDialog.open(GetConfirmationComponent,config);
    matDialogRef.afterClosed().subscribe(getConfirm =>{
      if(getConfirm){
        this._cakeService.onRemove(removeId)
        .subscribe({
          next : res =>{
            this._snackBar.openSnackbar(res.msg)
          },
          error : err =>{
            this._snackBar.openSnackbar(err.error)
          }
        })
      }
    })
    

    
  }

  onEditCake(editObj : Icake){
     this._cakeService.emitEditCake(editObj);

  }
  trackByFun(index : number , item : Icake){
    return item.cakeId;
  }

}
