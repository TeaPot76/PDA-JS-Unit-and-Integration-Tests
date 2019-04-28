  var Calculator = require('../../public/js/calculator.js')
  var assert = require('assert')

  describe('calculator', function () {
    beforeEach(function () {
      calculator = new Calculator()
    });

    // write unit tests here in the form of "it should do something..."

    it('it has a test', function(){
    assert.equal(true, true)
  })


  it('it can add two numbers together', function() {
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
  })


  it('it can subtract two numbers together', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('it can multipy two numbers together', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('it can divide two numbers together', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should be able to concatenate multiple button clicks', function() {
      calculator.numberClick(2);
      calculator.numberClick(1),
      calculator.numberClick(1);
      assert.strictEqual(calculator.runningTotal, 211);
    })

    it('it should be able to chain multiple operator clicks together', function() {
      calculator.numberClick(6);
      calculator.operatorClick('-');
      calculator.numberClick(2);
      calculator.operatorClick('*');
      calculator.numberClick(2);
      calculator.operatorClick('/');
      assert.strictEqual(calculator.runningTotal, 8)
    })
    //
    it('it should be able to clear running total without affecting calculation', function() {
      calculator.previousOperator = 7;
      calculator.clearClick();
      calculator.numberClick(2)
      calculator.operatorClick('+')
      calculator.numberClick(2)
      calculator.operatorClick('=')
      assert.equal(calculator.runningTotal, 4);
    })


   });
