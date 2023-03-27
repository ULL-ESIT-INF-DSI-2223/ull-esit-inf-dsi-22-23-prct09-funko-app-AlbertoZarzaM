
import { MapReduceAlgotitm } from "./MapReduceAlgorithm";

/**
 * This class is used to multiply all the elements of an array
 * 
 * 
 */
export class ProdMapReduce extends MapReduceAlgotitm {

    constructor(data: number[]) {
        super(data);
    }
    /**
     * Hook method
     */
    protected afterMap(): void {
        console.log('After map');
        console.log(this.data);
    }
    /**
     * Hook method
     */
    protected afterReduce(): void {
        console.log('After reduce');
        console.log(this.data);
    }
    /**
     * Hook method
     */
    protected beforeMap(): void {
        console.log('Before map');
        console.log(this.data);
    }
    /**
     * Hook method
     */
    protected beforeReduce(): void {
        console.log('Before reduce');
        console.log(this.data);
    }
    /**
     * This method is used to multiply all the elements of an array
     * 
     * @returns the product of all the elements of an array
     */
    protected reduce(): number {
        let prod = 1;
        for(let i = 0; i < this.length(); i++){
            prod *= this.get(i);
        }
      return prod;
    }

}