import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patientService.service';
import { Ipatient } from '../../model/Ipatient';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmationComponent } from '../get-confirmation/get-confirmation.component';
import { SnackBarServive } from '../../services/snackBar.service';

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.scss'],
})
export class PatientTableComponent implements OnInit {
  getAllPatients!: Ipatient[];

  constructor(
    private _patientService: PatientService,
    private _snackBar: SnackBarServive,
    private _matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.all();
  }

  
  all() {
    this._patientService.fetchAllPatient().subscribe({
      next: (data) => {
        this.getAllPatients = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onRemovePatient(removeId: number) {
    let config = new MatDialogConfig();
    config.width = '400px';
    config.disableClose = true;
    config.data = `Are you sure to remove patient with id ${removeId}..?`;
    let matDialogRef = this._matDialog.open(GetConfirmationComponent, config);
    matDialogRef.afterClosed().subscribe((getconfirm) => {
      if (getconfirm === true) {
        this._patientService.removePatient(removeId).subscribe({
          next: (res) => {
            this._snackBar.openSnackbar(res.msg);
          },
          error: (err) => {
            this._snackBar.openSnackbar(err);
          },
        });
      }
    });
  }

  onEditPatient(editObjpatient : Ipatient){
    this._patientService.onEdit(editObjpatient)
  }
}
