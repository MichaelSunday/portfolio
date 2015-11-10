$(document).ready(function() {
    var url = window.location.href;
		if( url.indexOf('#about') > -1 ){
			aboutAnimation();
		} else if( url.indexOf('#project') > -1 ) {
			projectAnimation();
		} else if( url.indexOf('#contact') > -1 ) {
			contactAnimation();
		}


//full page scrolling
	$('#fullpage').fullpage({
		anchors:['', 'about', 'project', 'contact'],
		navigation: true,
	    scrollOverflow: true,
	    navigationPosition: 'right',
	    navigationTooltips: ['hello', 'about', 'projects', 'contact'],
	    // autoScrolling: false,
	});
});