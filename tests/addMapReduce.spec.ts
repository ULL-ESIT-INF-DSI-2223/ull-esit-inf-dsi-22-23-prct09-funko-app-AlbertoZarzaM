import 'mocha';
import {expect} from 'chai';
import {AddMapReduce} from '../src/AddMapReduce';


describe('addMapReduce', () => {
  it('should reduce a vector', () => {
    const addMapReduce = new AddMapReduce([1, 2, 3, 4, 5]);
    expect(addMapReduce.execute((item) => item * 2)).to.be.equal(30);
  });
});