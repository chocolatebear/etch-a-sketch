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
		var input = getGridSize();
		clearCanvas();
		if(input > 0 && input < 81){
			createCanvas(input);
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

// the following will reset the canvas then use a random color for each grid when drawing on the canvas
	$('#randomColor').on('click', function(){
		var input = getGridSize();
		clearCanvas();
		if(input > 0 && input < 81){
			createCanvas(input);
			$('.grid').on('mouseenter', function(){
				$(this).css('background-color', getRandomColor());
			});
		}
		else{
			createCanvas(defaultSize);
			$('.grid').on('mouseenter', function(){
				$(this).css('background-color', getRandomColor());
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

function getGridSize(){
	var gridSize = prompt("What size grid do you want? Please enter a number between 1 and 80. Note: If an invalid number is entered the default size of 16 will be used.");
	return gridSize;
}

function clearCanvas(){
	$('.row').remove();
}

//this function gets a random color. Using only main distinct colors so it shows up better.
function getRandomColor(){
	var randomColor = ["#000000", "#FF0000", "#0000FF", "#00FFFF", "#FF00FF", "#FFFFFF", "#FFFF00"]
	return randomColor[Math.floor(Math.random() * 7)];
}

