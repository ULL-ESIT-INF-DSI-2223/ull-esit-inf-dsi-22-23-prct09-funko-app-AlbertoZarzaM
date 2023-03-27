

import { MapReduceAlgotitm } from "./MapReduceAlgorithm";

export class SubMapReduce extends MapReduceAlgotitm {

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
     *  This method is used to subtract all the elements of an array
     * @returns the rest of all the elements of an array
     */
    protected reduce(): number {
        let rest = 0;
        for(let i = 0; i < this.length(); i++){
            rest -= this.get(i);
        }
      return rest;
    }
}