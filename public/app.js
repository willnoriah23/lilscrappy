$(document).ready(function() {
	
	$("#scrape").on("click", function() {

		$.getJSON("/scrape", function(data) {
		
			console.log("/scrape" + data);
	 for (var i = 0; i < data.length; i++) {
	 $("scrape").append()	
   $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
  }
		});
	});
});


// How to send the data we're pulling to the web browser through an AJAX call. 
// Use above code to append.
// After, work on Mongoose and saving to a DB.