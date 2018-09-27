function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var rollCount = 0
  return function() {
  	fakeRoll = Math.floor(1 + Math.random() * 6);

  		while (list[rollCount] !== fakeRoll)
  		{
  			fakeRoll = Math.floor(1 + Math.random() * 6);
  		}
  		if (rollCount < list.length)
  		{
  			rollCount += 1;
  		}
  	
  		return fakeRoll;
  	}
  	
    
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
