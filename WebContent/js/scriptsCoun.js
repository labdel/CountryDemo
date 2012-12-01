function  createTabs (container) {

		container.find('.tab-content').hide();
		container.find("ul.tabs li:first").addClass("active").show();
		container.find(".tab-content:first").show();

		container.find("ul.tabs li").click(function() {
			container.find("ul.tabs li").removeClass("active");
			$(this).addClass("active");
			container.find(".tab-content").hide();

			var activeTab = $(this).find("a").attr("href");
			$(activeTab).fadeIn();
			return false;
		});



    }



function  actualizarPantalla (type) {
    
	$("#main-content").empty()
	$("#main-content").load('../snippets/' + type +'.html', function() {
	 	createTabs($("#tab-panel-1"))
	});
}
	
function  bindMenuEvents () {
	    
	$('#actividad').bind("click", function(e) {
		actualizarPantalla("actividad")

});
	
	$('#reclamo').bind("click", function(e) {
		actualizarPantalla("reclamo")
});

}

