var testModule = (function () {
 
  var counter = 0;
 
  return {
 
    incrementCounter: function () {
      return counter++;
     },
 
    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    },

     displayCounter: function () {
     	console.log("counter is " + counter);
     }
  };
 
})();
 
// Usage:
 
// Increment our counter
testModule.incrementCounter();
testModule.displayCounter();