
function findWaldo(arr, found) {
	/*for (var i = 0; i < arr.length; i++) {
   if (arr[i] === "Waldo") {
     found(i);*/
     
	arr.forEach(function(name, index){
		console.log(name);
		if (name === "Waldo")
		{
			found(index);
		}

	});
 
}
    

function actionWhenFound(index) {
  console.log("Found him! at ", index );

}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);