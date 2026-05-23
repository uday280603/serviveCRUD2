export interface Icake {
  cakeId: number;
  cakeName: string;
  flavor: string;
  price: number;
  weight: string;
  imageUrl: string;
  isAvailable: boolean;
}


export interface Ires<T>{
    msg : string,
    data : T
}