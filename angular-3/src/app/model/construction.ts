//"id":1,"material":"Plastic","trade":"Carpenter","cost_code":"1-550 - Vehicular Access and Parking","price":2015,"active":true
export class Construction {
  [key:string]: any;

  constructor(
    public id: number = 0,
    public material: string = '',
    public trade: string = '',
    public cost_code: string = '',
    public price: number = 0,
    public active: boolean = false,
  ) {}
}
