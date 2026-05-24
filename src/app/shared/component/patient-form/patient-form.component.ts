import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientService } from '../../services/patientService.service';
import { SnackBarServive } from '../../services/snackBar.service';
import { Ipatient } from '../../model/Ipatient';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss'],
})
export class PatientFormComponent implements OnInit {
  isInEditMode: boolean = false;
  editObjToPatch !: Ipatient;
  @ViewChild('patientForm') patientForm!: NgForm;

  constructor(
    private _patientService: PatientService,
    private _snackBar: SnackBarServive,
  ) {}

  ngOnInit(): void {
    this.onEdit()
  }

  onAddPatient() {
    if (this.patientForm.valid) {
      let NEW_OBJ = {
        ...this.patientForm.value,
        patientId: Date.now(),
      };
      this._patientService.createPatient(NEW_OBJ).subscribe({
        next: (res) => {
          this._snackBar.openSnackbar(res.msg);
          this.patientForm.reset()
        },
        error: (err) => {
          this._snackBar.openSnackbar(err.error);
        },
      });
    }
  }


  onEdit(){
    this._patientService.editPatientObjObs.subscribe({
      next : data =>{
        this.editObjToPatch = data;
        this.isInEditMode = true;
        this.patientForm.form.patchValue(data)

      }
    })
  }

  onUpdatedPatient(){

    if(this.patientForm.valid){
      let UPDATED_OBJ : Ipatient ={
         ...this.patientForm.value,
        patientId: this.editObjToPatch.patientId,

      }
      this._patientService.onUpdate(UPDATED_OBJ)
      .subscribe({
        next : res =>{
          this._snackBar.openSnackbar(res.msg);
          this.patientForm.reset();
          this.isInEditMode = false;
        },
        error : err=>{
          this._snackBar.openSnackbar(err.error)
        }
      })
    }
  }



}
