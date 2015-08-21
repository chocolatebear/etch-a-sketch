function test(number){
	for(var i = number; i > 0; i--){
		console.log("i is currently at " + i);
		for(var j = number; j > 0; j--){
			console.log("j is currently at " + j);
		}
	}
}

test(3);