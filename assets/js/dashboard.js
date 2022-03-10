// global. currently active menu item 
var current_item = 0;

// few settings
var section_hide_time = 1000;
var section_show_time = 1000;

// jQuery stuff
jQuery(document).ready(function($) {

	// Switch section
	$("a", '.mainmenu').click(function() 
	{
		if( ! $(this).hasClass('active') ) { 
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
				
				// remove fragment as much as it can go without adding an entry in browser history:
				window.location.replace("#");

				// slice off the remaining '#' in html5:    
				if (typeof window.history.replaceState == 'function') {
					history.replaceState({}, '', window.location.href.slice(0, -1));
				}
			} );
		}
		return false;
	});		

	// Switch section
	$("a", '.botondashboard').click(function() 
	{
		$("a", '.botondashboard').removeClass( 'active' );  
		if( ! $(this).hasClass('active') ) { 
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		return false;
	});	
});