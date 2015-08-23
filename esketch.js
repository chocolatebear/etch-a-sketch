$(document).ready(function(){
	var defaultSize = 16;
	createCanvas(defaultSize);

	$('.grid').on('mouseenter', function(){
		$(this).addClass('color-change');
	});
	$('#border').on('click', function(){
		$('.grid').toggleClass('gridBorder');
	});

//the following will reset the canvas
	$('#reset').on('click', function(){
		//$('.grid').removeClass('color-change');
		var gridSize = prompt("What size grid do you want? Please enter a number between 1 and 80. Note: If an invalid number is entered the default size of 16 will be used.");
		clearCanvas();
		if(gridSize > 0 && gridSize < 81){
			createCanvas(gridSize);
			$('.grid').on('mouseenter', function(){
				$(this).addClass('color-change');
			});
		}
		else{
			createCanvas(defaultSize);
			$('.grid').on('mouseenter', function(){
				$(this).addClass('color-change');
			});
		}
	});
});

function createCanvas(number){
	var row = number;
	var gridDiv = "<div class= 'grid gridBorder'></div>";
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

function clearCanvas(){
	$('.row').remove();
	//$(document).ready();
}

