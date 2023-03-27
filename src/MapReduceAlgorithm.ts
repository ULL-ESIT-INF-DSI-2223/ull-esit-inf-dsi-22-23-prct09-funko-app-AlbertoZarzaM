
export abstract class MapReduceAlgotitm {

   protected data: number[];
   protected result: number;


    constructor(data: number[]) {
        this.data = data;
    }

    public execute(funcionMap: (item: number) => number) {
        this.beforeMap();
        this.map(funcionMap);
        this.afterMap();
        this.beforeReduce();
        this.result = this.reduce();
        this.afterReduce();
        return this.result;
    }

    protected length(): number{
      let length = 0;
      while(this.data[length] !== undefined){
        length++;
      }
      return length;
    }
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

    protected abstract reduce(): number;


    //Hook

    protected abstract afterMap(): void;
    protected abstract afterReduce(): void;
    protected abstract beforeMap(): void;
    protected abstract beforeReduce(): void;

}