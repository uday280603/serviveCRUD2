import { Injectable } from "@angular/core";
import { Ipatient } from "../model/Ipatient";
import { Observable, of, Subject } from "rxjs";
import { Ires } from "../model/Icake";



@Injectable({
    providedIn : 'root'
})



export class PatientService{

    patientArr : Ipatient[]  = [
  {
    patientId: 1,
    fname: "Aarav",
    lname: "Sharma",
    age: 32,
    gender: "Male",
    disease: "Fever",
    contact: 9876543210,
    isAdmitted: true
  },
  {
    patientId: 2,
    fname: "Sneha",
    lname: "Patil",
    age: 27,
    gender: "Female",
    disease: "Migraine",
    contact: 9123456780,
    isAdmitted: false
  }
]
    

private editPatientobj$ : Subject<Ipatient> = new Subject<Ipatient>();
editPatientObjObs : Observable<Ipatient> = this.editPatientobj$;


    constructor(){

    }

    fetchAllPatient() : Observable<Ipatient[]>{
        return of(this.patientArr)

    }

    //create new Patient
    createPatient( newObj : Ipatient) : Observable<Ires<Ipatient>>{
      this.patientArr.unshift(newObj);
      return of({
        msg : `New patient with isd ${newObj.patientId}  is Added Successfully..!`,
        data : newObj
      })

    }

    //Remove
    removePatient(removeId : number): Observable<Ires<Ipatient>>{
      let GET_INDEX = this.patientArr.findIndex(p =>p.patientId === removeId);
      let arr = this.patientArr.splice(GET_INDEX,1);
      return of({
        msg : `Patient with id ${removeId} is removed successfully..!`,
        data : arr[0]
      })
    }

    onEdit(editObj : Ipatient){
      this.editPatientobj$.next(editObj)
    }

    //update
    onUpdate(updatedObj : Ipatient) : Observable<Ires<Ipatient>>{
      let GET_INDEX = this.patientArr.findIndex(P => P.patientId === updatedObj.patientId);
      this.patientArr[GET_INDEX] = updatedObj;
      return of({
        msg : `The patient with id ${updatedObj.patientId} is Updated Successfully...!`,
        data : updatedObj
      })
    }

    
}