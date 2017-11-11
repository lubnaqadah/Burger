var currentURL = window.location.origin;

$(function() {
	$(".devoured").on("click", function(event) {
		var id = $(this).data("id");


		// Send the PUT request.
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
		}).then(function() {
			// Reload the page to get the updated list
			
			console.log("relode");
			location.reload();
		}
			   );
	});

	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newburger ={
			burger_name : $("#burger").val().trim(),
			devoured: false
		}


		// Send the POST request.
		$.post(currentURL + '/api/burgers', newburger)
			.then(function(res) {
			console.log("created new burger", res);
			location.reload();
		}
				 );
	});



});
