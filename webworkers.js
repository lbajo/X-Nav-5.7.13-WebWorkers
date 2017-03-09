
this.addEventListener('message', function(e) {
  var data = e.data;
  var n = 1;
  primelist = "";
  search: while (n<data) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
  // found a prime!
    primelist += " " + n;
    self.postMessage(primelist);
  }
}, false);