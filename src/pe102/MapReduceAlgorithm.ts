
export abstract class MapReduceAlgotitm {

   protected data: number[];
   protected result: number;


    constructor(data: number[]) {
        this.data = data;
    }

    /**
     * 
     * @param funcionMap  This method is used to execute the map and reduce methods
     * @returns  the result of the reduce method
     */
    public execute(funcionMap: (item: number) => number) {
        this.beforeMap();
        this.map(funcionMap);
        this.afterMap();
        this.beforeReduce();
        this.result = this.reduce();
        this.afterReduce();
        return this.result;
    }
    /**
     * 
     * @returns the length of the array
     */
    protected length(): number{
      let length = 0;
      while(this.data[length] !== undefined){
        length++;
      }
      return length;
    }

    /**
     *  This method is used to get the element of the array in the position index
     * @param index  This method is used to get the element of the array in the position index
     * @returns  the element of the array in the position index
     */
    protected get(index: number): number{
      return this.data[index];
    }
    protected map(f: (item: number) => number): void {
        
      const newList: number[] = [];
      for(let i = 0; i < this.length(); i++){
          newList.push(f(this.get(i)));
      }
      this.data = newList;
    }

    /**
     * This method is used to reduce all the elements of an array
     */
    protected abstract reduce(): number;


    //Hook methods
    protected abstract afterMap(): void;
    protected abstract afterReduce(): void;
    protected abstract beforeMap(): void;
    protected abstract beforeReduce(): void;

}