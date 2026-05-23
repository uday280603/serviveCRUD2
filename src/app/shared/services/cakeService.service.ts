import { Injectable } from '@angular/core';
import { Icake, Ires } from '../model/Icake';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CakeService {


  cakeArr: Icake[] = [
    {
      cakeId: 1,
      cakeName: 'Chocolate Truffle Cake',
      flavor: 'Chocolate',
      price: 799,
      weight: '1kg',
      imageUrl:
        'https://www.bing.com/th/id/OIP.91rMAhCK5I9dg8sJNzlnVgHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      isAvailable: true,
    },
    {
      cakeId: 2,
      cakeName: 'Black Forest Cake',
      flavor: 'Vanilla & Chocolate',
      price: 699,
      weight: '500g',
      imageUrl: 'https://www.bing.com/th/id/OIP.S7c4gHefVqQ67CBY3qzXBAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      isAvailable: false,
    },
     {
      cakeId: 3,
      cakeName: 'Truffle Cake',
      flavor: 'Chocolate',
      price: 999,
      weight: '1kg',
      imageUrl:
       'https://www.bing.com/th/id/OIP.C3mvtSunw1DCsRLntEevEAHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      isAvailable: true,
    }
  ];

  private editCakeSub$ : Subject<Icake> = new Subject<Icake>();
  editCakeObs$ : Observable<Icake> = this.editCakeSub$;

  constructor() {}

  fetchAllCake(): Observable<Icake[]> {
    return of(this.cakeArr);
  }

  createNewCake(newObj : Icake) : Observable<Ires<Icake>>{
    this.cakeArr.unshift(newObj);
    return of({
      msg :`New cake with id ${newObj.cakeId} is Added Successfully....!`,
      data : newObj
    })
  }

  //remove
  onRemove(rId : number):Observable<Ires<Icake>>{
    let GETINDEX = this.cakeArr.findIndex(c => c.cakeId === rId);
    let arr = this.cakeArr.splice(GETINDEX,1);
    return of({
      msg : `Cake with id =  ${rId} is removed Successfully..`,
      data : arr[0]
    })
  }

  //edit
  emitEditCake(editObj : Icake){
    this.editCakeSub$.next(editObj);
  }
  
  //update
  onUpdate(updatedObj : Icake) : Observable<Ires<Icake>>{
    let GETINDEX = this.cakeArr.findIndex(c => c.cakeId === updatedObj.cakeId);
    this.cakeArr[GETINDEX] = updatedObj;
    return of({
      msg : `Cake with id ${updatedObj.cakeId} is Updated Successfully....`,
      data : updatedObj
    })

  }



}
