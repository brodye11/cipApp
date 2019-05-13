$(document).ready(function() {	

	// HOME PAGE

	$('#newCrush').on('click', function() {
		location.href = "#search";
	});
	
	
	
	// pop up code
	
	function closePopUp() {
		$("#popUp").toggleClass("none");
	}
	
	var removing;
	$("#no").on('click', closePopUp);
	$("#yes").on('click', closePopUp);
	
	function removeCrush() {
		removing.remove();
	}
	
	function showPopUp(query) {
		$('#popUp').toggleClass("none");
		$('#popUp>#popUpQuery').text(query);
	}

	$('.removeCrush').on('click', function () {
		showPopUp("Are you sure you want to remove this crush?");
		removing = $(this).parent();
		$("#yes").on("click", removeCrush);
	});
	
	
	
	// find out who
	
	$(".toggleRevealCrush").on("click", function(){
		$("#revealCrush").toggleClass("none");
	});
	
	
	
	// SIGNUP PAGE
	
	// collect details
	
	$('#submit').on("click", function(e) {
		
		e.preventDefault();
		
		var $inputs = $('#details input');
		var details = [];
		var $alert = $("#alert");
		var $errorList = $("#errorList");
		var empty = false;
		
		
		$inputs.each(function() {
			
			var errorMsg = $(this).attr("name") + " field was empty";
			var $firstError = $errorList.children().first();
			
			if ($(this).val() === "") { //if input is empty
				
				empty = true;
				
				if ($alert.hasClass("none")) {
					$alert.toggleClass("none");
				}
				if ($(this).data("optional") == "y") {
					
					return false;
					
				} else {
					
					if ($firstError.text() !== "") {
						$errorList.append("<li>" + errorMsg + "</li>");
					} else {
						$firstError.text(errorMsg);
					}					
				}
				
			} else {
				$input = $(this);
				function push(input) {
					details.push(input);
				}
				
				if ($input.hasClass("radio")) {
					if ($input.attr("checked")) {
						push($input);
					}
				} else {
					
				}
			}
			
		});
		
		for(i=0; i<values.length; i++) {
			console.log(values.i);
		}
		
		return false;

	});
	
});