$(document).ready(fucntion(){
	
})

function getInput(){
	$(".numInput").on("click", function(c){
		diplay($(".numInput").val());
	});
}
function displayInput(input){
	$("#display").html(input);
}