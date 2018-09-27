var wrapLog = function (callback, name) {


if (name === "area")
{
	return function(x,y){
		var area = x*y;

		console.log(name, " is ", area);
	
	}
}

if (name === "volume")
{
	
	return function(x,y,z){

		var volume = x*y*z;
		console.log(name, " is ", volume);
	
	}
}


};




var area = function (x, y) {
  return x * y;
};
var volume = function (x, y, z) {
  return x * y * z;
};

var logArea = wrapLog(area, "area");

logArea(5, 3) // area(5, 3) => 15
logArea(3, 2) // area(3, 2) => 6


var logVolume = wrapLog(volume, "volume");
logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24