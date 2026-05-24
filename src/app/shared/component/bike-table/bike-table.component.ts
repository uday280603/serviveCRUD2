import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bikeService.service';
import { Ibike } from '../../model/Ibike';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmationComponent } from '../get-confirmation/get-confirmation.component';

@Component({
  selector: 'app-bike-table',
  templateUrl: './bike-table.component.html',
  styleUrls: ['./bike-table.component.scss'],
})
export class BikeTableComponent implements OnInit {
  getAllBikes!: Ibike[];
  constructor(
    private _bikeService: BikeService,
    private _matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.allBike();
  }
  allBike() {
    this._bikeService.fetchAllBikes().subscribe({
      next: (data) => {
        this.getAllBikes = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onEditBike(editObj: Ibike) {
    this._bikeService.emitEditObj(editObj);
  }

  trackByFun(index: number, item: Ibike) {
    return item.bikeId;
  }

  onRemoveBike(removeId: number) {
    let config = new MatDialogConfig();
    config.width = `400px`;
    config.disableClose = true;
    config.data = `Are you sure to remove bike with id ${removeId}..?`;
    let matDialogRef = this._matDialog.open(GetConfirmationComponent, config);
    matDialogRef.afterClosed().subscribe((getConfirm) => {
      if (getConfirm === true) {
        this._bikeService.removeBike(removeId);
      }
    });
  }
}
