

import 'mocha';
import {expect} from 'chai';
import {SubMapReduce} from '../src/SubMapReduce';


describe('subMapReduce', () => {

  it('should reduce a vector', () => {
    const subMapReduce = new SubMapReduce([1, 2, 3, 4, 5]);
    expect(subMapReduce.execute((item) => item * 2)).to.be.equal(-30);
  });

});