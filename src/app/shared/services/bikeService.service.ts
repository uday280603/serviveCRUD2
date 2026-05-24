import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Ibike } from '../model/Ibike';
import { Ires } from '../model/Icake';

@Injectable({
  providedIn: 'root',
})
export class BikeService {

  bikeArr = [
    {
      bikeId: 1,
      bikeName: 'Royal Enfield Classic 350',
      brand: 'Royal Enfield',
      price: 193000,
      color: 'Black',
      mileage: 35,
      isAvailable: true,
    },
    {
      bikeId: 2,
      bikeName: 'KTM Duke 200',
      brand: 'KTM',
      price: 198000,
      color: 'Orange',
      mileage: 33,
      isAvailable: false,
    },
  ];

  editObjSub$ : Subject<Ibike>  = new Subject<Ibike>()
  editObjObs : Observable<Ibike> = this.editObjSub$;

  constructor() {}


  //fetch all bikes
  fetchAllBikes(): Observable<Ibike[]> {
    return of(this.bikeArr);
  }

  //create
  createNewBike(newObj : Ibike) : Observable<Ires<Ibike>>{
    this.bikeArr.unshift(newObj);
    return of({
      msg :`New Bike with id ${newObj.bikeId} is Added In Shop..`,
      data : newObj
    })
  }
  //edit
  emitEditObj(editObj : Ibike){
    this.editObjSub$.next(editObj)
  }

  //update

  updateBike(updateObj :Ibike) : Observable<Ires<Ibike>>{
    let GET_INDEX = this.bikeArr.findIndex(b =>  b.bikeId ===updateObj.bikeId)
    this.bikeArr[GET_INDEX] = updateObj;
    return of({
      msg : `Bike with id ${updateObj.bikeId} is Updated Successfully..!`,
      data : updateObj
    })

  }

  //remove
  removeBike(removeId : number) : Observable<Ires<Ibike>>{
    let GET_INDEX = this.bikeArr.findIndex(b => b.bikeId === removeId);
    let arr= this.bikeArr.splice(GET_INDEX ,1);
    return of({
      msg : `Bike with id ${removeId} is Removed Successfully from shop...!`,
      data : arr[0]
    })

  }
}
