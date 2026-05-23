import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Icake } from '../../model/Icake';
import { CakeService } from '../../services/cakeService.service';
import { SnackBarServive } from '../../services/snackBar.service';

@Component({
  selector: 'app-cake-form',
  templateUrl: './cake-form.component.html',
  styleUrls: ['./cake-form.component.scss'],
})
export class CakeFormComponent implements OnInit {
  isInEditMode: boolean = false;
  editObjToPatch!: Icake;
  @ViewChild('cakeForm') cakeForm!: NgForm;

  constructor(
    private _cakeSerive: CakeService,
    private _snackbar: SnackBarServive,
  ) {}

  ngOnInit(): void {
    this.onEdit();
  }
  onAddCake() {
    if (this.cakeForm.valid) {
      let NEW_OBJ: Icake = {
        ...this.cakeForm.value,
         isAvailable: this.cakeForm.value.isAvailable === 'true',
        cakeId: Date.now(),
      };
      this._cakeSerive.createNewCake(NEW_OBJ).subscribe({
        next: (res) => {
          this._snackbar.openSnackbar(res.msg);
          this.cakeForm.reset();
        },
        error: (err) => {
          this._snackbar.openSnackbar(err.error);
        },
      });
    }
  }

  onEdit() {
    this._cakeSerive.editCakeObs$.subscribe({
      next: (data) => {
        this.isInEditMode = true;
        this.editObjToPatch = data;
        this.cakeForm.form.patchValue(data);
      },
    });
  }

  //update
  onUpdate() {
    if (this.cakeForm.valid) {
      let UPDATED_OBJ: Icake = {
        ...this.cakeForm.value,
         isAvailable: this.cakeForm.value.isAvailable === 'true',
        cakeId: this.editObjToPatch.cakeId,
      };
      console.log(UPDATED_OBJ);
      this._cakeSerive.onUpdate(UPDATED_OBJ).subscribe({
        next: (data) => {
          this.isInEditMode = false;
          this.cakeForm.reset();

          this._snackbar.openSnackbar(data.msg);
        },
        error: (err) => {
          this._snackbar.openSnackbar(err.error);
        },
      });
    }
  }
}
