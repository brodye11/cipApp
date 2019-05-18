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

	
	
	// Collect Details
	
	var $inputs = $('#details input');
	var $alert = $("#alert");
	var $errorList = $("#errorList");
	var missingMsg = $errorList.children();
	
	var name = "name";
	var age = "age";
	var email = "email";
	var school = "school";
	var gender = "gender";
	var sexuality = "sexuality";
	var bio = "bio";
	
	var detailCats = [name, age, email, school, gender, sexuality, bio];
	
	// When Submit Is Clicked
	
	$('#submit').on("click", function(e) {
		
		e.preventDefault();
		
		var details = [];
		var empty = false;
		
		function push(input) {
			details.push(input);
		}
		
		$errorList.each(function() {
			$(this).text("");
		});
		
		
		$inputs.each(function() {
			
			
			// errorMsg
			
			
			
			var errorMsg = $(this).attr("name") + " field is required";
			var $firstError = missingMsg.first();
			
			if ($(this).val() == "") { //if input is empty
				
				empty = true;
				
				if ($alert.hasClass("none")) {
					$alert.toggleClass("none");
				}
				if ($(this).data("optional") == "y") {
					
					return false;
					
				} else {
					
					if ($firstError.val() !== "") {
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
		
		
		// update details
		
		function updateProfile() {
			var $detailDiv = $("#detailDiv");
			for (i=0; i<detailDiv.length; i++) {
				if (i === 0) {
					$("#brodie").text(detailCats[i]);
				} else {
					$detailDiv.eq(0).children().last().text(detailCats[i-1]);
				}
			}
		}
		
		// store details
		
		if (empty === false) {
			
			for (i=0;i<details.length;i++) {
				
				if (details[i] == "") {
					
					localStorage.setItem(detailCats[i], details[i]);
					detailCats[i] = details[i];	
					
				}
				
			}
			
		}
		
		return false;

	});
	
});