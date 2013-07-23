$(document).ready(function() {
	$("#instagram").on('pageinit',function(){
		$(function() {
			$.ajax({
				type: "GET",
				dataType: "jsonp",
				cache: false,
				url: "https://api.instagram.com/v1/media/popular?client_id=1003d9b3eaf04af8b8a649fd90936a32",
				success: function(data) {
					html = '';
					for (var i=0; i<1; i++) {
						html += "<fieldset class='ui-grid-a'><div class='ui-block-a'><a target='_blank' href='" + data.data[i].link +"'><img style='padding:5px' src='" + data.data[i].images.thumbnail.url +"' /></a></div><div class='ui-block-b'><ol>";
						for(var n=0; n<1; n++){
							var picture = data.data[i].comments.data[n].from.profile_picture;
							var name = data.data[i].comments.data[n].from.full_name;
							var comments = data.data[i].comments.data[n].text;
							console.log(JSON.stringify(picture))
							console.log(JSON.stringify(name))
							console.log(JSON.stringify(comments))
							html += "<li><fieldset class='ui-grid-a'><div class='ui-block-a'><img src='" + picture + "' /><br />" + JSON.stringify(name) + "</div><div class='ui-block-b'><p>" + JSON.stringify(comments) + "</p></div></fieldset></li>";
						}
						html += '</ol></div></fieldset>';
					}
					$('#photos').html(html)
				}
			});
		});
		$('#instaRefresh').on('click', function(){window.location.reload(true)})
	});
	$("#flickr").on('pageinit', function(){
		$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",{
			tagmode: "any",
			format: "json"
	  	},
	  	function(data) {
			for(var i=0; i<10; i++){
				$('#flickrPhotos').append("<a target='_blank' href='" + data.items[i].link +"'><img style='padding:5px' src='" + data.items[i].media.m +"' /></a>");
			}
	    });
		$('#flickrRefresh').on('click', function(){window.location.reload(true)})
	})
});