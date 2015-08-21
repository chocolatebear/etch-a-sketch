$(document).ready(function(){
	
	createCanvas(16);
	
	$('.grid').on('mouseenter', function(){
		$(this).addClass('color-change');
	});
//the following will reset the canvas
	$('button').on('click', function(){
		$('.grid').removeClass('color-change');
	});
});

function createCanvas(number){
	var row = number;
	var gridDiv = "<div class= 'grid'></div>";
	for(var i = number; i > 0; i--){ //This loop will create rows
		var newRow = "<div class= 'row' id= 'row"+i+"'></div>";
		$('#main').append(newRow);
		var currentRow = "#row"+i;
		
		for(var j = number; j > 0; j--){// This loop will add grids to the rows
			var currentRow = "#row"+row;
			$(currentRow).append(gridDiv);
		}
		row--;// keeps track of which row to put grids in
	}
}

