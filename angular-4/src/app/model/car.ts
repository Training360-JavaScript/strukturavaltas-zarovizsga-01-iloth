//{"id":1,"model":"Sierra 1500","make":"GMC","year":2011,"price":33014,"stock":8,"active":true}
export class Car {
  [key: string]: any;

  constructor(
    public id: number = 0,
    public model: string = '',
    public make: string = '',
    public year: number = 2000,
    public price: number = 0,
    public stock: number = 0,
    public active: boolean = false
  ){}
}
