

import 'mocha';
import {expect} from 'chai';
import {DivMapReduce} from '../../src/pe102/DivMapReduce';


describe('divMapReduce', () => {

  it('should reduce a vector', () => {
    const divMapReduce = new DivMapReduce([1, 2, 3, 4, 5]);
    expect(divMapReduce.execute((item) => item * 1)).to.be.closeTo(0.0083 , 0.001);
  });

  it('should reduce a vector', () => {
    const divMapReduce = new DivMapReduce([1, 2, 3, 4, 5]);
    expect(divMapReduce.execute((item) => item * 2)).to.be.closeTo(0.00026 , 0.0001);
  });

  it('should reduce a vector', () => {
    const divMapReduce = new DivMapReduce([1, 2, 3, 4, 5]);
    expect(divMapReduce.execute((item) => item * 3)).to.be.closeTo(0.000034 , 0.00001);
  });

});