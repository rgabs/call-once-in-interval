const callOnceInInterval = (functionTobeCalled, interval = 600) => {
  let isCalled = false, timer;
  return () => {
    if (!isCalled) {
      isCalled = true;
      clearTimeout(timer);
      timer = setTimeout(() => {
        isCalled = false;
      }, interval);
      return functionTobeCalled();
    }
    return;
  };
};

module.exports = callOnceInInterval;
