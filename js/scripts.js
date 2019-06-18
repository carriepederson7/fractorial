$(document).ready(function() {
  $("#fractorial").submit(function(event) {
    event.preventDefault();

    // var inputNumber = parseInt($("input#number".val()));
    var inputNumber = parseInt($("input#number").val());

    var total = 0
    for (var currentNumber = inputNumber; currentNumber <= inputNumber; currentNumber += 1)
    // {
    //   total += currentNumber;
    // }

    var result = total;
    console.log(total)
    $("#result").show();

  });
});
