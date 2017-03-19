
this.addEventListener('message', function(e) {
  var data = e.data;
  var n = 1;
  var num=0;
  primelist = "";
  search: while (n<data) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
  // found a prime!
    primelist += " " + n;
    i++;

    if(num==300){
      self.postMessage(primelist);
      primelist="";
      num=0;
    }
  }
  self.postMessage(primelist);
}, false);