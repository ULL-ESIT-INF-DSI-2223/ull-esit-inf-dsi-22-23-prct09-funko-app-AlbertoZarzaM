
import { MapReduceAlgotitm } from "./MapReduceAlgorithm";


export class ProdMapReduce extends MapReduceAlgotitm {

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
        let prod = 1;
        for(let i = 0; i < this.length(); i++){
            prod *= this.get(i);
        }
      return prod;
    }

}