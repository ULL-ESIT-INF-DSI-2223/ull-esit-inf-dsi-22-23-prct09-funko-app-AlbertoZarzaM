import 'mocha';
import {expect} from 'chai';
import {AddMapReduce} from '../../src/pe102/AddMapReduce';


describe('addMapReduce', () => {
  it('should reduce a vector', () => {
    const addMapReduce = new AddMapReduce([1, 2, 3, 4, 5]);
    expect(addMapReduce.execute((item) => item * 2)).to.be.equal(30);
  });

  it('should reduce a vector', () => {
    const addMapReduce = new AddMapReduce([1, 2, 3, 4, 5]);
    expect(addMapReduce.execute((item) => item * 3)).to.be.equal(45);
  });

  it('should reduce a vector', () => {
    const addMapReduce = new AddMapReduce([1, 2, 3, 4, 5]);
    expect(addMapReduce.execute((item) => item * 4)).to.be.equal(60);
  });


});