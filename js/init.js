$(function(){
	$('.button-collapse').sideNav();
	$('.parallax').parallax();
	$('select').material_select();
	DOC_CONFIG={}
	$.getJSON("site.json",function(data){
		DOC_CONFIG = data
		generateCatSite(DOC_CONFIG);
	});
	//DOC_CONFIG = jQuery.parseJSON('{"main":{"name":{"fr_FR":"Général","en_US":"Main"},"icon":"","docs":[{"name":"installation","url":"installation/#language#/index.html"},{"name":"Compatibilité","url":"compatibility/#language#/index.html"}]},"howto":{"name":{"fr_FR":"Tutoriaux","en_US":"How to"},"icon":"","docs":[{"name":"Howto1","url":"installation/#language#/index.html"},{"name":"Howto2","url":"compatibility/#language#/index.html"}]},"plugins":{"name":{"fr_FR":"Plugins","en_US":"Plugins"},"icon":"","docs":[{"name":"plugin1","url":"installation/#language#/index.html"},{"name":"PLUGIN2","url":"compatibility/#language#/index.html"},{"name":"pLuGiN tOtO3","url":"compatibility/#language#/index.html"}]}}')
	//generateCatSite(DOC_CONFIG);

	THIRD_CONFIG={}
	$.getJSON("site_third.json",function(data){
		THIRD_CONFIG = data
		generateThirdSite(THIRD_CONFIG);
	});
	//THIRD_CONFIG = jQuery.parseJSON('{"third_plugin":{"docs":[{"url":"third_plugin/ecowatt/#language#/index.html","name":"Eco-2-watt"},{"url":"third_plugin/ecowatt/#language#/index.html","name":"Test1"},{"url":"third_plugin/ecowatt/#language#/index.html","name":"Test2"},{"url":"third_plugin/ecowatt/#language#/index.html","name":"Test3"}],"name":{"en_US":"Thierd plugins","fr_FR":"Plugins tierces"}}}')
	//generateThirdSite(THIRD_CONFIG);

	$('#sel_language').on('change',function(){
		generateCatSite(DOC_CONFIG);
		generateThirdSite(THIRD_CONFIG);
	})
	$('#ul_listCategory').on('click','.collection-item',function(){
		generateDocSite(DOC_CONFIG[$(this).attr('data-key')]);
	})

});


function convertCase(_string){
	return _string.charAt(0).toUpperCase()+_string.substr(1).toLowerCase();
}

function generateCatSite(data){
	$('#ul_listCategory').empty();
	$('#ul_listDoc').empty();
	for(var i in data){
		$('#ul_listCategory').append('<a class="collection-item" data-key="'+i+'">'+convertCase(data[i].name[$('#sel_language').val()])+'<span class="badge">'+data[i].docs.length+'</span>'+'</a>');
	}
}

function generateDocSite(data){
	$('#ul_listDoc').empty();
	for(var i in data.docs){
		$('#ul_listDoc').append('<a class="collection-item" target="_blank" href="'+data.docs[i].url.replace('#language#',$('#sel_language').val())+'">'+convertCase(data.docs[i].name)+'</a>');
	}
}

function generateThirdSite(data){
	$('#ul_listThird').empty();
	nb_third=data.third_plugin.docs.length;
	//alert(nb_third);
	for(var i in data.third_plugin.docs){
		$('#ul_listThird').append('<a class="collection-item" target="_blank" href="'+data.third_plugin.docs[i].url.replace('#language#',$('#sel_language').val())+'">'+convertCase(data.third_plugin.docs[i].name)+'</a>');
	}
}
