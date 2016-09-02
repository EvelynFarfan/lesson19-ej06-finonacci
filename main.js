function numFibonacci(n) {
	var a = 0;
  var b = 1;
  while (n > 0) {
    [a, b] = [b + a, a];
    n--;
    document.write(b, " ");
  }
  
}
numFibonacci(10);



