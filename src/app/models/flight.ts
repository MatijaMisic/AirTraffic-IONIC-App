export class Flight {
  constructor(
    public id:number,
    public altitude: number,
    public flightNumber: number,
    public direction: string,
    public manufacturer: string,
    public model: string,
    public originAiroport: string,
    public destinationAiroport: string,
    public logo: string
    ){
  }
}
