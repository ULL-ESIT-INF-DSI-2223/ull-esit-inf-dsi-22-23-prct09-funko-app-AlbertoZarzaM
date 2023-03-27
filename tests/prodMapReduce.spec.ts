import 'mocha';
import {expect} from 'chai';
import {ProdMapReduce} from '../src/ProdMapReduce';


describe('prodMapReduce', () => {

  it('should reduce a vector', () => {
    const prodMapReduce = new ProdMapReduce([1, 2, 3, 4, 5]);
    expect(prodMapReduce.execute((item) => item * 1)).to.be.equal(120);
  });

});