import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BikeService } from '../../services/bikeService.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarServive } from '../../services/snackBar.service';
import { Ibike } from '../../model/Ibike';

@Component({
  selector: 'app-bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.scss'],
})
export class BikeFormComponent implements OnInit {
  isInEditMode: boolean = false;
  editObjToPatch!: Ibike;

  @ViewChild('bikeForm') bikeForm!: NgForm;

  constructor(
    private _bikeService: BikeService,
    private _snackBar: SnackBarServive,
  ) {}

  ngOnInit(): void {
    this.edit();
  }

  onAddBike() {
    if (this.bikeForm.valid) {
      let NEW_OBJ: Ibike = {
        ...this.bikeForm.value,
        bikeId: Date.now(),
      };
      this._bikeService.createNewBike(NEW_OBJ).subscribe({
        next: (data) => {
          this._snackBar.openSnackbar(data.msg);
          this.bikeForm.reset();
        },
        error: (err) => {
          this._snackBar.openSnackbar(err.error);
        },
      });
    }
  }

  edit() {
    this._bikeService.editObjObs.subscribe({
      next: (data) => {
        this.isInEditMode = true;
        this.bikeForm.form.patchValue(data);
        this.editObjToPatch = data;
      },
    });
  }

  onUpdatedBike() {
    if (this.bikeForm.valid) {
      let UPDATED_OBJ: Ibike = {
        ...this.bikeForm.value,
        bikeId: this.editObjToPatch.bikeId,
      };
      this._bikeService.updateBike(UPDATED_OBJ).subscribe({
        next: (data) => {
          this._snackBar.openSnackbar(data.msg);
          this.isInEditMode = false;
          this.bikeForm.reset();
        },
        error: (err) => {
          this._snackBar.openSnackbar(err.error);
        },
      });
    }
  }
}
