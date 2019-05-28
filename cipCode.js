$(document).ready(function() {
	
	var storedDetails = JSON.parse(localStorage.getItem("storedDetails"));
	
	
	// ON LOAD
	
	function loadDetails() {
		
		var answers = $("#detailDiv #answer");
		var detailCats = [name, age, email, password, school, gender, sexuality, bio];
		
		for (i=0;i<answers.length;i++) {
			var token = i;
			if (token == 0) {
				if (answers.eq(token).data("detail") == "name") {
					$("#brodie").text(storedDetails[i]);
				}
			} else {
				answers.each(function() {

					if (detailCats[token] == "password") {
						return false;
					} else {

						var done = false;
						if ($(this).data("detail") == detailCats[token]) {
							if ($(this).text() != storedDetails[token]) {
								$(this).text(storedDetails[token]);
								done = true;
							}
							return false;
						}
					}
				});
			}
		}
		
		console.log(storedDetails);
		
	}
	
	loadDetails();
	
	if (storedDetails) {
		loadDetails();
	}

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
	var password = "password";
	var school = "school";
	var gender = "gender";
	var sexuality = "sexuality";
	var bio = "bio";
	
	// When Submit Is Clicked
	
	$('#submit').on("click", function(e) {
		
		var storedDetails;
		
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
				
				if ($alert.hasClass("none")) {
					$alert.toggleClass("none");
				}
				
				if ($(this).data("optional") == "y") {
					return false;
				} else {
					
					empty = true;
					
					if ($firstError.val() != "") {
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
		
		// store details
		
		if (empty === false) {
			
			var answers = $("#detailDiv #answer");
			var detailCats = [name, age, email, password, school, gender, sexuality, bio];
			
			localStorage.clear();
			localStorage.setItem("storedDetails", JSON.stringify(details));
			storedDetails = JSON.parse(localStorage.getItem("storedDetails"));
			
			for (i=0;i<answers.length;i++) {
				var token = i;
				if (token == 0) {
					if (answers.eq(token).data("detail") == "name") {
						$("#brodie").text(storedDetails[i]);
					}
				} else {
					answers.each(function() {
						
						if (detailCats[token] == "password") {
							return false;
						} else {
							
							var done = false;
							if ($(this).data("detail") == detailCats[token]) {
								if ($(this).text() != storedDetails[token]) {
									$(this).text(storedDetails[token]);
									done = true;
								}
								return false;
							}
						}
					});
				}
			}
			
		}
		
		return false;

	});
	
	// When Edit is Clicked ----------------------------------------------------------
	
	/*$("#edit").on("click", function() {
		
		// update details
		
		$inputs = $('#currentDetails input');
		
		var details = [];
		var empty = false;
		
		function push(input) {
			details.push(input);
		}
		
		
		$inputs.each(function() {
			
			var input = $(this);
			var inputVal = input.val();

			if (input.hasClass("radio") || input.hasClass("submit")) {
				if (input.prop("checked")) {
					push(inputVal);
				}
			} else {
				push(inputVal);
			}
		});
		
		
		// update details
		
		$("#submit").on("click", function(e) {
			e.preventDefault();
		
			var $detailDiv = $("#detailDiv");
			console.log($detailDiv);
			for (i=0; i<detailDiv.length; i++) {
				if (i === 0) {
					$("#brodie").text(detailCats[i]);
				} else {
					$detailDiv.eq(0).children().last().text(detailCats[i-1]);
				}
			}
		
		// store details
		
		if (empty === false) { // ------------------------------------ replace old values
			
			for (i=0;i<details.length;i++) {
				
				if (details[i] == "") {
					
					
					
				}
				
			}
			
		}
		
		return false;
		
		});
	});*/
	
});