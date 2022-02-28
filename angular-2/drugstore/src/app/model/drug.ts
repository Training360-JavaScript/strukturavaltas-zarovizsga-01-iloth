export class Drug {
  [key:string]: any;

  constructor(
    public id: number = 1,
    public name: string = 'Escitalopram Oxalate',
    public brand: string = 'Escitalopram',
    public company: string | undefined = 'Major Pharmaceuticals',
    public barcode: string = '23-537-0123',
    public stock: number = 26,
  ) {}
}
