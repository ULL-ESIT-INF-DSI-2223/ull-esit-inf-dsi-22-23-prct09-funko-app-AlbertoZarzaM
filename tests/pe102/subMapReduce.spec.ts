

import 'mocha';
import {expect} from 'chai';
import {SubMapReduce} from '../../src/pe102/SubMapReduce.js';


describe('subMapReduce', () => {

  it('should reduce a vector', () => {
    const subMapReduce = new SubMapReduce([1, 2, 3, 4, 5]);
    expect(subMapReduce.execute((item) => item * 2)).to.be.equal(-30);
  });

  it('should reduce a vector', () => {
    const subMapReduce = new SubMapReduce([1, 2, 3, 4, 5]);
    expect(subMapReduce.execute((item) => item * 3)).to.be.equal(-45);
  });

  it('should reduce a vector', () => {
    const subMapReduce = new SubMapReduce([1, 2, 3, 4, 5]);
    expect(subMapReduce.execute((item) => item * 4)).to.be.equal(-60);
  });

});