function processData(input) {
  var iS = input.split('\n');
  var sum = 0;
  var aArray = iS[1]
                  .split(' ')
                  .map(function(x) { 
                        var ai = parseInt(x);
                        sum = sum + ai;
                        return ai;
                      });

  var result = [];

  for (var y=1; y<sum; y++) {
    var tmp = 0;

    if (sum % y !== 0) {
      continue;
    }

    aArray.map(function (a, i) {
      tmp = tmp + a;
      if (tmp === y) {
        tmp = 0;
      }
    });

    if (tmp === 0) {
      result.push(y);
    }
  }

  result.push(sum);

  var str = ''
  result.map(function(r){
    str = str + r + ' ';
  })

  console.log(str);
} 

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function (input) {
    _input += input;
});

process.stdin.on('end', function () {
   processData(_input);
});