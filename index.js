const callOnceInInterval = (functionTobeCalled, interval = 600) => {
  let isCalled = false, timer;
  return (...args) => {
    if (!isCalled) {
      isCalled = true;
      clearTimeout(timer);
      timer = setTimeout(() => {
        isCalled = false;
      }, interval);
      return functionTobeCalled(...args);
    }
    return;
  };
};

module.exports = callOnceInInterval;
