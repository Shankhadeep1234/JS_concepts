let Singleton = (function () {
  let instance;

  function createInstance() {
    var object = new Object("I am an object instance");
    return object;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// driver code
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
