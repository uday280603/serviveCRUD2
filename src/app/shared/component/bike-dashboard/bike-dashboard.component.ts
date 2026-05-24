import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bikeService.service';
import { Ibike } from '../../model/Ibike';

@Component({
  selector: 'app-bike-dashboard',
  templateUrl: './bike-dashboard.component.html',
  styleUrls: ['./bike-dashboard.component.scss'],
})
export class BikeDashboardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 
}
