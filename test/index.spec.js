const callOnce = require('../index');
describe('callOnceInInterval: A JavaScript module which calls the passed function once in the passed interval.', ()=>{

  it('callOnce: should not call the function till the passed interval', () => {
      const spy = jest.fn();
      const inst = callOnce(spy, 2000);
      inst();
      inst();
      inst();
      expect(spy).toHaveBeenCalledTimes(1);
    });
    it('callOnce: should call the function again after the interval', () => {
      const spy = jest.fn();
      const inst = callOnce(spy, 2000);
      inst();
      inst();
      inst();
      setTimeout(() => {
        inst();
        expect(spy).toHaveBeenCalledTimes(2);
      }, 2000);
    });
});
