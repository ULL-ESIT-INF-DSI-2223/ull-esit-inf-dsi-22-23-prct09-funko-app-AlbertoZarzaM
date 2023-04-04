import 'mocha';
import {expect} from 'chai';
import {ProdMapReduce} from '../../src/pe102/ProdMapReduce.js';


describe('prodMapReduce', () => {

  it('should reduce a vector', () => {
    const prodMapReduce = new ProdMapReduce([1, 2, 3, 4, 5]);
    expect(prodMapReduce.execute((item) => item * 1)).to.be.equal(120);
  });

  it('should reduce a vector', () => {
    const prodMapReduce = new ProdMapReduce([1, 2, 3, 4, 5]);
    expect(prodMapReduce.execute((item) => item * 2)).to.be.equal(3840);
  });

  it('should reduce a vector', () => {
    const prodMapReduce = new ProdMapReduce([1, 2, 3, 4, 5]);
    expect(prodMapReduce.execute((item) => item * 3)).to.be.equal(29160);
  });

});