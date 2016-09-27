$(function(){
	$('.button-collapse').sideNav();
	$('.parallax').parallax();
	$('select').material_select();
	DOC_CONFIG={}
	//$.getJSON("site_test.json",function(data){
	//	DOC_CONFIG = data
	//	generateDocSite(DOC_CONFIG);
	//});
	DOC_CONFIG = jQuery.parseJSON('{"categories":{"main":{"name":{"fr_FR":"Général","en_US":"Main"},"icon":"","docs":[{"name":"Installation","link":"installation/#language#/index.html"},{"name":"Compatibilité","link":"compatibility/#language#/index.html"}]},"howto":{"name":{"fr_FR":"Tutoriaux","en_US":"How to"},"icon":""},"plugins":{"name":{"fr_FR":"Plugins","en_US":"Plugins"},"icon":""}}}')
	generateDocSite(DOC_CONFIG);

	$('#sel_language').on('change',function(){
		generateDocSite(DOC_CONFIG);
	})

});



function generateDocSite(data){
	$('#ul_listCategory').empty();
	console.log(data);
	for(var i in data.categories){
		$('#ul_listCategory').append('<li class="collection-item">'+data.categories[i].name[$('#sel_language').val()]+'</li>');

		
	//	console.log(data.categories[i])
}
}