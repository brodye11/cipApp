$(document).ready(function() {
	
	var storedDetails = JSON.parse(localStorage.getItem("storedDetails"));
	
	var name = "name";
    var age = "age";
    var email = "email";
    var password = "password";
    var school = "school";
    var gender = "gender";
    var sexuality = "sexuality";
    var bio = "bio";

    var detailCats = [name, age, email, password, school, gender, sexuality, bio];
    
	// ON LOAD
	
	$("#profilePage").ready(function() {

		var answers = $("#detailDiv #answer");
		
		storedDetails = JSON.parse(localStorage.getItem("storedDetails"));

		for (i=0;i<answers.length;i++) {
			var token = i;
			if (token == 0) {
				$("#brodie").text(storedDetails[i]);
			} else {
				answers.each(function() {

					if (detailCats[token] == "password") {
						return false;
					} else {
						if ($(this).data("detail") == detailCats[token]) {
							if ($(this).text() != storedDetails[token]) {
								$(this).text(storedDetails[token]);
							}
							return false;
						}
					}
				});
			}
		}
		
	});
	
	/*if (storedDetails) {
		loadDetails();
	}*/

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
	
	var $alert = $("#alert");
	var $errorList = $("#errorList");
	var missingMsg = $errorList.children();
	
	// When Submit Is Clicked
	
	$('#submitSignUp').on("click", function(e) {
        
        var $inputs = $('#details input');
		
		var storedDetails;
        
        var details = [];
    
        function push(input) {
            details.push(input);
        }
		
		e.preventDefault();
        
		var empty = false;
		
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
			
			var name = "name";
			var age = "age";
			var email = "email";
			var password = "password";
			var school = "school";
			var gender = "gender";
			var sexuality = "sexuality";
			var bio = "bio";
			
			var answers = $("#detailDiv #answer");
			var detailCats = [name, age, email, password, school, gender, sexuality, bio];
			
			localStorage.clear();
			localStorage.setItem("storedDetails", JSON.stringify(details));
			storedDetails = JSON.parse(localStorage.getItem("storedDetails"));
			
			for (i=0;i<answers.length;i++) {
				var token = i;
				if (token == 0) {
				    $("#brodie").text(storedDetails[i]);
				} else {
					answers.each(function() {
						
						if (detailCats[token] == "password") {
							return false;
						} else {
							if ($(this).data("detail") == detailCats[token]) {
								if ($(this).text() != storedDetails[token]) {
									$(this).text(storedDetails[token]);
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
    
    // When edit loads
    
    $("#editDetails").ready(function() {
        
        //I want to loop through each input, test which storedDetail it corresponds to by looping through each different detailCats then updating the val()
        
        var $inputEdit = $('#currentDetails input');
        
        for (i=0;i<$inputEdit.length; i++) {
            
            var thiss = $inputEdit.eq(i);
            
            for(p=0;p<detailCats.length;p++) {
                
                if (thiss.data("detail") == detailCats[p]) {
                    thiss.val(storedDetails[p]);
                }
                
            }
        }
        
    });
	
	// When Edit is Clicked ----------------------------------------------------------
	
	$("#submitEdit").on("click", function(e) {
        
        // loop through each input, test whether its val() is the same as current storedDetail for that cat, if it isn't then change the storedDetail for that cat and loadDetails.
        
        e.preventDefault();
        
        var $inputEdit = $('#currentDetails input').not(".radio");
        var $radios = $('#currentDetails .radio');
        
        $radios.each(function() {
            if ($(this).prop("checked")) {
                storedDetails[5] = $(this).val();
            }
        });
        
        for(i=0;i<$inputEdit.length;i++) {
            
            var input = $inputEdit.eq(i);
            var inputVal = $inputEdit.eq(i).val();
            var storedVal = storedDetails[i];
            
            if (!input.hasClass("submit")) {
                if (inputVal !== storedVal) {
                    storedDetails[i] = inputVal;
                }
            }
            
        }
        
        console.log(storedDetails);
        
        return false;
        
    });
	
});