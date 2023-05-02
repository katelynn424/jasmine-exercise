
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 15000,
    years: 10,
    rate: 6.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('168.04');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 15003,
    years: 8,
    rate: 6.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('198.63');
});

it('should handle high interest values', function(){
  const values = {
    amount: 20000,
    years: 15,
    rate: 89
  };
  expect(calculateMonthlyPayment(values)).toEqual('1483.34');
})

/// etc
