$(function(){
	$('.button-collapse').sideNav();
	$('.parallax').parallax();
	$('select').material_select();
	DOC_CONFIG={}
	$.getJSON("site.json",function(data){
		DOC_CONFIG = data
		generateCatSite(DOC_CONFIG);
	});
	//DOC_CONFIG = jQuery.parseJSON('{"main":{"name":{"fr_FR":"Général","en_US":"Main"},"icon":"","docs":[{"name":"Installation","link":"installation/#language#/index.html"},{"name":"Compatibilité","link":"compatibility/#language#/index.html"}]},"howto":{"name":{"fr_FR":"Tutoriaux","en_US":"How to"},"icon":"","docs":[{"name":"Howto1","link":"installation/#language#/index.html"},{"name":"Howto2","link":"compatibility/#language#/index.html"}]},"plugins":{"name":{"fr_FR":"Plugins","en_US":"Plugins"},"icon":"","docs":[{"name":"plugin1","link":"installation/#language#/index.html"},{"name":"plugin2","link":"compatibility/#language#/index.html"},{"name":"plugin3","link":"compatibility/#language#/index.html"}]}}')
	generateCatSite(DOC_CONFIG);

	$('#sel_language').on('change',function(){
		generateCatSite(DOC_CONFIG);
	})
	$('#ul_listCategory').on('click','.collection-item',function(){
		generateDocSite(DOC_CONFIG[$(this).attr('data-key')]);
	})

});



function generateCatSite(data){
	$('#ul_listCategory').empty();
	$('#ul_listDoc').empty();
	for(var i in data){
		$('#ul_listCategory').append('<a class="collection-item" data-key="'+i+'">'+data[i].name[$('#sel_language').val()]+'<span class="badge">'+data[i].docs.length+'</span>'+'</a>');
	}
}

function generateDocSite(data){
	console.log(data);
	$('#ul_listDoc').empty();
	for(var i in data.docs){
		$('#ul_listDoc').append('<a class="collection-item" target="_blank" href="'+data.docs[i].link.replace('#language#',$('#sel_language').val())+'">'+data.docs[i].name+'</a>');
	}
}