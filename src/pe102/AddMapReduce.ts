
import { MapReduceAlgotitm } from "./MapReduceAlgorithm.js";

/**
 * This class is used to add all the elements of an array
 * 
 */
export class AddMapReduce extends MapReduceAlgotitm {

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
     * This method is used to add all the elements of an array
     * 
     * @returns the sum of all the elements of an array
     */
    protected reduce(): number {
        let sum = 0;
        for(let i = 0; i < this.length(); i++){
            sum += this.get(i);
        }
      return sum;
    }

}