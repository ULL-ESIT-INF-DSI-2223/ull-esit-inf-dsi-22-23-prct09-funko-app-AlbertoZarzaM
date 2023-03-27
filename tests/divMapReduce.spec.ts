

import 'mocha';
import {expect} from 'chai';
import {DivMapReduce} from '../src/DivMapReduce';


describe('divMapReduce', () => {

  it('should reduce a vector', () => {
    const divMapReduce = new DivMapReduce([1, 2, 3, 4, 5]);
    expect(divMapReduce.execute((item) => item * 1)).to.be.closeTo(0.0083 , 0.001);
  });
});