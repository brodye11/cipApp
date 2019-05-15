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
	
	
	
	// SiGNUP PAGE
	
	// collect details
	
	$('#submit').on("click", function(e) {
		
		e.preventDefault();
		
		var $inputs = $('#details input');
		var details = [];
		var $alert = $("#alert");
		var $errorList = $("#errorList");
		var missingMsg = $errorList.children();
		var empty = false;
		
		function push(input) {
			details.push(input);
		}
		
		
		$inputs.each(function() {
			
			var errorMsg = $(this).attr("name") + " field is required";
			var $firstError = $errorList.children().first();
			
			if ($(this).val() === "") { //if input is empty
				
				empty = true;
				
				missingMsg.eq(1).text("test");
				
				for (i=0; i<missingMsg.length; i++) {
					missingMsg.filter("nth-child(" + i+1 + ")").text = "";
					console.log(i);
				}
				
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
				var input = $(this);
				var inputVal = input.val();
				
				if (input.hasClass("radio") || input.hasClass("submit")) {
					if (input.prop("checked")) {
						push(inputVal);
					}
				} else {
					push(inputVal);
				}
			}
			
		});
		
		return false;

	});
	
});