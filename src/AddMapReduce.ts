
import { MapReduceAlgotitm } from "./MapReduceAlgorithm";


export class AddMapReduce extends MapReduceAlgotitm {

    constructor(data: number[]) {
        super(data);
    }

    protected afterMap(): void {
        console.log('After map');
        console.log(this.data);
    }
    protected afterReduce(): void {
        console.log('After reduce');
        console.log(this.data);
    }
    protected beforeMap(): void {
        console.log('Before map');
        console.log(this.data);
    }
    protected beforeReduce(): void {
        console.log('Before reduce');
        console.log(this.data);
    }
    protected reduce(): number {
        let sum = 0;
        for(let i = 0; i < this.length(); i++){
            sum += this.get(i);
        }
      return sum;
    }

}