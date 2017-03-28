var html = "";
var inputArr=[];


function getInput(){
	var val = $(".numInput").val();
	displayInput(val);
}
function displayInput(input){
	inputArr.push(input);
	//inputArr.map(function(c){ return parseInt(c);});
	
	$("#display").html("<p>"+inputArr.join("")+"</p>");
}
function clearInput(){
	inputArr=[];
	
	$("#display").html("<p>"+inputArr.join("")+"</p>");
}
function submit(input){
	
	input = input.join("");
	inputArr=[];
	
	var answer = math.eval(input);
	
	$("#display").html("<p>"+answer+"</p>");
}
$(document).ready(function(){
	$("input:button").on("click", function(c){
		c.preventDefault();
		
		displayInput($(this).val());
	});
	
	$("#clear").on("click", function(c){
		clearInput();
	});
	$("#enter").on("click", function(c){
		c.preventDefault();
		submit(inputArr);
	});
	

	
})