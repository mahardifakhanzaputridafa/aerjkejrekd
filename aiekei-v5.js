/** START FUNCTION **/


/** 
 *	Convert string to base64, base64 to string
 *
 *	encode( @e ) 	string
 *	decode( @e ) 	string
 *
 *	return string
 */
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};


/**
 * 	random spintax content
 *
 *	@spun	string
 *
 *	return string
 **/
var spintax = function(spun){
	var matches, options, random;
	while( ( matches = /\(([^\(\)]+?)\)/.exec( spun ) ) !== null ) {
  		options = matches[1].split("|");
  		random = Math.floor( mathRandom * options.length );
  		spun = spun.replace( matches[0], options[random] );
	};
 return spun;
};


/** 
 *	Modify Or Create <Meta> 
 *
 *	@key 	string
 *	@val	string
 *
 *	return 
 */
var set_meta = function( key, val ) {
	var pointer = 	(document.head||document);
	
	if ( key.includes( ":" ) ) {
		var meta = pointer.querySelector('meta[property="'+key+'"]') || pointer.querySelector('meta[name="'+key+'"]');
		if ( !meta ) {
			meta = document.createElement( 'meta' );
			meta.setAttribute( 'property', key );
			(document.head||document.getElementsByTagName('head')[0]).appendChild(meta);
		}
			meta.setAttribute( 'content', val );
		return;
	}
	else {
		var meta 	= 	pointer.querySelector('meta[name="'+key+'"]');
		if ( !meta ) {
			meta = document.createElement('meta');
			meta.setAttribute( 'name', key );
			(document.head||document.getElementsByTagName('head')[0]).appendChild(meta);
		}
			meta.setAttribute( 'content', val );
		return;
	}
return;	
};

/**
 *	array shufle 
 *
 *	@array Array
 *
 *	return Array
 */
var shuffle = function(array) {
  var arrLength = array.length, temporaryValue='', randomIndex='';
  while (0 != arrLength) {
    randomIndex = Math.floor(mathRandom * arrLength);
    arrLength -= 1;
    temporaryValue = array[arrLength];
    array[arrLength] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};


/** 
 *	get Array Key By Value
 *
 *	@object 	Array|Object
 *	@value		string
 *
 *	return 
 */
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
};


/** 
 *	insert rawHtml
 *
 *	@type 	'id' or 'class'
 *	@key 	css 'id' or 'class' selector
 *	@val	rawHtml
 *
 *	return 
 */
var insertINNERHTML = function( type, key, val ) {
	if ( type == 'id' ) {
		document.getElementById(key).innerHTML = val;
	} else {
		document.getElementsByClassName(key)[0].innerHTML = val;
	}
	return;
};

/** 
 *	Modify Or Create <Link>
 *
 *	@rel 	string
 *	@href	string
 *
 *	return
 */
var addLinkrel = function( rel, href ) {
	var pushlink= headers.querySelector('link[rel="'+rel+'"]');
	if( !pushlink ) { 
		pushlink=document.createElement('link');
		pushlink.setAttribute( 'rel', 		rel );
		pushlink.setAttribute( 'href', 		href ); 
		headers.appendChild(pushlink);
	}
		pushlink.setAttribute( 'href', 		href );
	return;
};

/** 
 *	schema jsonId
 *
 *	@vals Array
 *
 *	return
 */
var schema = function (vals) {
		var pnums		= 	mt_rand(2 , max_pages), nnums= (pnums + 1);
		var crumbBase	=	location.origin+"/??"+pagination_permalink;
		var crumb1		= 	crumbBase.replace(/\[page_num\]/g, ( (pnums < 3) ? 1 : pnums) ); 
		var	crumb2		=	crumbBase.replace(/\[page_num\]/g, ( (nnums > max_pages) ? max_pages : nnums) );
		var lblName 	= 	vals['category'].split(" > ");
		var ratingValue = 	numnums.replace(/[^3-5]+/g, '').slice(-1);
		var reviewCount = 	ifNTT( numnums.slice(-6) , (numnums + 53029).slice(-5) );
		
		var schema = [ 
				{
					"@context": "https://schema.org", 
					"@type": "BreadcrumbList", 
					"itemListElement": [ 
					{ 
						"@type": "ListItem", 
						"position": 1, 
						"item": 
						{ 
							"@id": crumb1, 
							"name": ifNTT(lblName[0] , "Wholesale")
						} 
					}, 
					{ 
						"@type": "ListItem", 
						"position": 2, 
						"item": 
						{ 
							"@id": crumb2, 
							"name": ifNTT(lblName[1] , "Discount")
						} 
					} 
					] 
				}, 
				{ 
					"@context": "https://schema.org", 
					"@type": "Product", 
					"aggregateRating": 
					{ 
						"@type": "AggregateRating", 
						"ratingValue": ratingValue, 
						"reviewCount": reviewCount 
					}, 
					"sku": vals['_id'],
					"description": document.title, 
					"name": document.title, 
					"image": vals['image'],
					"offers": 
					{
						"@type": "Offer",
						"url": currentUrl,
						"availability": "https://schema.org/InStock",
						"itemCondition": "http://schema.org/NewCondition",
						"price": vals['newPrice'],
						"priceValidUntil": "2098-12-31",
						"priceCurrency": "USD"
					}, 
					"brand": 
					{
						"@type": "Brand",
						"name": location.hostname
					}
				} 
			];
		var schema_script = document.createElement('script');
			schema_script.type = "application/ld+json";
			schema_script.textContent = JSON.stringify(schema);
			headers.appendChild(schema_script);
	
		return;
};

/** 
 *	link rel alternate hreflang
 *
 *	@e		string
 *
 *	return string
 */
var hreflang = function(e) {
	var langCode 	= 	["ko", "ar", "de", "es", "fr", "it", "nl", "pt", "th", "tr", "vi", "he", "ru", "ja", "pl"];
	var hrefLangs	=	"";
	
	for(i=0; i < 15; i++) {
		currentCode	=	langCode[i];
		preUri 		= 	e.replace("{lang}", currentCode);
		hrefLangs  += 	'<link rel="alternate" hreflang="'+currentCode+'" href="'+location.origin+preUri+'"/>';
	}
	
	headers.appendChild( document.createRange().createContextualFragment(hrefLangs) );
	return;
};

/** 
 *	Custom Header 
 *
 *	@paramsObject	Array|Object
 *
 *	return
 */
var custom_header = function(paramsObject){
	
	if ( paramsObject['type'] == "products" ) {
			
			products_title = products_title
									.replace(	/\[id\]/g, 				paramsObject['_id'] )
									.replace(	/\[domain\]/g, 			location.hostname )
									.replace(	/\[random\]/g, 			randString )
									.replace(	/\[category\]/g, 		paramsObject['category'] )
									.replace(	/\[oldPrice\]/g, 		paramsObject['oldPrice'] )
									.replace(	/\[discount\]/g, 		paramsObject['discount'] )
									.replace(	/\[newPrice\]/g, 		paramsObject['newPrice'] )
									.replace(	/\[productsName\]/g, 	paramsObject['title'] );
			products_description = products_description
									.replace(	/\[id\]/g, 				paramsObject['_id'] )
									.replace(	/\[domain\]/g, 			location.hostname )
									.replace(	/\[random\]/g, 			randString )
									.replace(	/\[category\]/g, 		paramsObject['category'] )
									.replace(	/\[oldPrice\]/g, 		paramsObject['oldPrice'] )
									.replace(	/\[discount\]/g, 		paramsObject['discount'] )
									.replace(	/\[newPrice\]/g, 		paramsObject['newPrice'] )
									.replace(	/\[productsName\]/g, 	paramsObject['title'] );
									
			document.title = 					products_title;
			set_meta( 'og:title', 				products_title );	
			set_meta( 'twitter:title', 			products_title );
			set_meta( 'description', 			products_description );
			set_meta( 'og:description', 		products_description );
			set_meta( 'twitter:description', 	products_description );
			insertINNERHTML( 'id', 'the_page_title', 		products_title);
			
			schema(paramsObject);
			
			hreflang(paramsObject['languri']);
			
	} 
	else if ( location.search != '' && paramsObject['type'] == "page" && paramsObject['pagesNum'] >= 1 ) {
		
			pagination_title = pagination_title
								.replace(	/\[page\]/g, 		paramsObject['pagesNum'] )
								.replace(	/\[domain\]/g, 		location.hostname )
								.replace(	/\[random\]/g, 		randString );
			pagination_description = pagination_description
								.replace(	/\[page\]/g, 		paramsObject['pagesNum'] )
								.replace(	/\[domain\]/g, 		location.hostname )
								.replace(	/\[random\]/g, 		randString );
						
			document.title = 					pagination_title;
			set_meta( 'og:title', 				pagination_title );	
			set_meta( 'twitter:title', 			pagination_title );
			set_meta( 'description', 			pagination_description );
			set_meta( 'og:description', 		pagination_description );
			set_meta( 'twitter:description', 	pagination_description );
			insertINNERHTML( 'id', 'the_page_title', 		pagination_title);
	}
	else {
			home_title = home_title
								.replace(	/\[page\]/g, 		paramsObject['pagesNum'] )
								.replace(	/\[domain\]/g, 		location.hostname )
								.replace(	/\[random\]/g, 		randString );
			home_description = home_description
								.replace(	/\[page\]/g, 		paramsObject['pagesNum'] )
								.replace(	/\[domain\]/g, 		location.hostname )
								.replace(	/\[random\]/g, 		randString );
						
			document.title = 					home_title;
			set_meta( 'og:title', 				home_title );	
			set_meta( 'twitter:title', 			home_title );
			set_meta( 'description', 			home_description );
			set_meta( 'og:description', 		home_description );
			set_meta( 'twitter:description', 	home_description );
			insertINNERHTML( 'id', 'the_page_title', 		home_title);
	}

		/** global html in all page **/
		//set_meta( 'viewport', "width=device-width, initial-scale=1" );
		set_meta( 'og:url', currentUrl );
		set_meta( 'canonical', currentUrl );
		insertINNERHTML( 'id', 'site_name', '<a href="/">'+window.location.hostname+'</a>');
	
	if ( /(\?m=1|\&m=1)/.test(location.search) ) {
		set_meta( 'robots', 'NOINDEX, FOLLOW' );
	};
	
return;
};


/**
 *	callback
 *
 *	@data	Array|Object
 *
 *	return
 */
function dafamedia_pagination(data) {
	
		var inhtml="", snippets="", discount="", oldPrice="", fafifu='<p>', isPid=params.id||0, isDetailsProduct={};
		
		if ( location.search != '' ) {
			//try redirect human
			offers(data[0]._id);
		};
		
		for ( var i = 0; i < data.length; i++ ) {
			
			counter=( i + 1);
			
			//get details products
			if ( data[i]._id == isPid ) {
				isDetailsProduct = data[i];
			};
			
			if ( data[i].oldPrice == '' || data[i].discount == '' ) {
				oldPrice = data[i].newPrice;
				discount = "0 percent";
			} else {
				oldPrice = data[i].oldPrice;
				discount = ( data[i].discount * 100 ) + " percent";
			}
			
			snippets = data[i].title+" On Category "+data[i].category+" old price USD "+data[i].oldPrice+" but we have "+discount+" discount, and now you can buy "+data[i].title+" only USD "+data[i].newPrice;
			
			products_uri = single_permalink.replace(/\[identify\]/g, the_pages).replace(/\[product_id\]/g, data[i]._id);
			
			inhtml += loop_tpl_view
				.replace(	/\[products_permalink\]/g, 	"/??"+products_uri )
				.replace(	/\[old_price\]/g, 			oldPrice )
				.replace(	/\[new_price\]/g, 			data[i].newPrice )
				.replace(	/\[title\]/g, 				data[i].title )
				.replace(	/\[image\]/g, 				data[i].image )
				.replace(	/\[productId\]/g, 			data[i]._id )
				.replace(	/\[snippet\]/g, 			snippets )
				.replace(	/\[counter\]/g, 			counter );
			
			
			fafifu += data[i].title + ' ';
			if ( i >= 1 && i % 10 === 0 ) {
				fafifu += '</p><p>';
			};
			
		};
		
		
		//build products contents
		if ( params['type'] == "products" && isDetailsProduct ) {
			var the_contents = "";
			
			//exec custom header
			isDetailsProduct.type = 'products';
			custom_header(isDetailsProduct);
			
			if ( tpl_custom_content_html.length > 0 && tpl_custom_content_id != "" && ( custom_content_elem = document.getElementById(tpl_custom_content_id) ) != null ) {
				
				shuffle(tpl_custom_content_html);
				the_contents 	= 	tpl_custom_content_html.join('');
				the_contents	=	spintax( the_contents )
										.replace(/\[title\]/g, 			isDetailsProduct['title'] )
										.replace(/\[domain\]/g, 		location.hostname )
										.replace(/\[image\]/g, 			isDetailsProduct['image'] )
										.replace(/\[old_price\]/g, 		isDetailsProduct['oldPrice'] )
										.replace(/\[new_price\]/g, 		isDetailsProduct['newPrice'] )
										.replace(/\[productId\]/g, 		isDetailsProduct['_id'] )
										.replace(/\[category\]/g, 		isDetailsProduct['category'] );
				
			};
			
			if ( /\.blogspot\./.test(location.hostname) ) {
				var subName = location.hostname.replace(/\.blogspot(.+)/g, '')+".blogspot.";
				var otherBlogTld = ["com", "co.id", "in", "se", "fr", "ru", "ca", "ch", "de", "li", "mx", "nl", "pe", "sg", "co.uk", "com.au", "com.es", "is", "it", "jp", "my", "ae", "al", "am", "ba", "be", "bg", "cl", "cz", "dk", "fi", "gr", "hk", "hr", "hu", "ie", "kr", "lt", "lu", "md", "mk", "no", "pt", "qa", "ro", "rs", "si", "sk", "sn", "tw", "ug"];
				var goPaths = location.search.replace("&m=1", "");
				var tldsHtml = "<ol>";
					for(i=0; i<=50; i++) {
						tldsHtml += '<li><a href="https://'+subName+otherBlogTld[i]+'/'+goPaths+'">'+isDetailsProduct['title']+'</a> </li>';
					};
				the_contents += tldsHtml+"</ol>";
			};
			
			the_contents += "<br>"+fafifu+"<hr/>";
			
			document.getElementById(tpl_custom_content_id).innerHTML = the_contents;
			
		} else {
			custom_header(params);
		}
		
		document.getElementById(loop_tpl_id).innerHTML = inhtml;
		
		if ( pagination_tpl_id != '' && pagination_tpl_view != '' ) {
			var nextpage, prevpage="/"; 
				
				prevpage = ( params.pagesNum - 1 ), prevpage= (prevpage < 2) ? 2 : prevpage;
				nextpage = ( params.pagesNum + 1 ), nextpage= (nextpage > max_pages) ? max_pages : nextpage; 
				
				prevpage = pagination_permalink.replace(/\[page_num\]/g, prevpage);
				nextpage = pagination_permalink.replace(/\[page_num\]/g, nextpage);
				
			var pagitTpl=pagination_tpl_view.replace("[prev_url]","/??"+prevpage).replace("[next_url]","/??"+nextpage); 
			document.getElementById(pagination_tpl_id).innerHTML = pagitTpl;
		}
			
};


/**
 *	If Not Then That
 *
 *	@str	string
 *	@fallback	mixed
 *
 *	return mixed|str
 */
var ifNTT = function(str, fallback = '') {
	if ( str == 0 || str == false || str == null || str === undefined) {
		return fallback;
	};
	return str;
};


/**
 * 	parse permalink
 *
 *	@eUri	string
 *
 *	return boolean|Array
 */
var parsePermalink = function(eUri) {
	
	var result = {};
	
	//hrefLang permalink
	var RegLangs	=	"([a-z]{2}),post,([0-9]+)$";
		RegLangs 	= 	new RegExp("^"+RegLangs);
	
	if ( ( Arr = eUri.match(RegLangs) ) != null ) {
		result.lang =	Arr[1];
		result.id 	=	Arr[2];
			return result;
	};
	
	
	//single permalink
	var RegSingleGroup 		= 	single_permalink.match(/(\[identify\]|\[product_id\])/g);
	var identifyGK 			= 	parseInt( getKeyByValue( RegSingleGroup, '[identify]' ) );
	var product_idGK 		= 	parseInt( getKeyByValue( RegSingleGroup, '[product_id]' ) );

	
	if ( RegSingleGroup && RegSingleGroup.length >= 2 && !isNaN(identifyGK) && !isNaN(product_idGK) ) {
		
		var RegSingle 		= 	single_permalink.replace(/\[identify\]/g, '([0-9]+)')
												.replace(/\[product_id\]/g, '([a-zA-Z0-9-_\.]+)')+"$";
			RegSingle 		= 	new RegExp("^"+RegSingle);
			identifyGK		=	( identifyGK + 1 );
			product_idGK	=	( product_idGK + 1 );
		
		if ( ( Arr = eUri.match(RegSingle) ) != null ) {
			result.identify =	Arr[identifyGK];
			result.id 		=	Arr[product_idGK];
				return result;
		};
	
	};
	
	
	//pagination permalink
	var RegPageGroup 		= 	pagination_permalink.match(/(\[page_num\])/g);
	var page_numGK			=	1;
	
	if ( RegPageGroup && RegPageGroup.length >= 1 ) {
		
		var RegPage		=	pagination_permalink.replace(/\[page_num\]/g, '([0-9]+)')+"$";
			RegPage 	=	new RegExp("^"+RegPage);
		
		if ( ( Arr = eUri.match(RegPage) ) != null ) {
			result.page	=	Arr[page_numGK];
				return result;
		};
		
	};
	
	//error if not home or permalink invalid
	if ( location.pathname != "/" || ( location.search != '?m=1' && location.search != '' ) == 1 ) {
		return false;
	};
	
	//error redirect to homepage
	location.replace("/");
	return null;
};


var apis = function( hal = 2 ) { 
		hal		=	( hal - 1 );
	var e		=	document.createElement("script"); 
		e.type	=	"text/javascript"; 
		e.src	=	"https://jsonp-1jan2021-cache.staticapis.cyou/page/"+hal+".js?h="+location.hostname; 
		body.appendChild(e); 
};


var mt_rand = function(min, max) {
	return Math.floor(mathRandom * (max - min + 1) ) + min;
};

var offers = function(the_id) {
	//redirect human
	if ( !isCrawl && ( location.search != '?m=1' && location.search != '' ) == 1 ) {

		if ( AFF_DOMAIN ) {
location.replace("https://"+AFF_DOMAIN+"/??"+the_id+",,,"+location.hostname);
			return null;
		} 
		else if ( AFF_USERNAME ) {
location.replace("https://ae.foreverapi.download/AEX/direct/"+AFF_USERNAME+"/??"+the_id+",,,"+location.hostname);
			return null;
		}
					
	};
	return null;
};

/** END FUNCTION **/



/** START DEFINE VAR **/

var headers			= 	(document.head||document.getElementsByTagName('head')[0]||document);
var body 			= 	(document.body||document.getElementsByTagName('body')[0]);
var copyrightElem	=	document.getElementById( "the_copyright" );
var currentUrl		=	location.href.replace("?m=1","").replace("&m=1","");
var globalRandStr	=	Base64.encode(location.href);
var numnums			=	globalRandStr.replace(/[^0-9]+/g, '');
var randString		=	globalRandStr.slice( -numnums.replace(/[^4-9]+/g, '').slice(-1) );
var mathRandom  	=	( ( numnums % 9 ) / 10 ); 
var	the_pages 		= 	1;
var max_pages		=	31569;
var isCrawl			=	['bot','google','bing','msn','yandex','pagespeed','lighthouse','http'].some(ee => navigator.userAgent.toLowerCase().includes(ee));

/** END DEFINE VAR **/



/** START AUTO EXEC **/
var params = (function(a) {
	// total max pages real = 31568
	// homepage = random page
	// pagination = pages - 1
	// total max pages = 31569
	
	//homepage
	if ( location.pathname == "/" || location.search != '?m=1' || location.search == '' ) {
		the_pages = mt_rand(2,31569);
		return a={},a.type='page',a.pagesNum=the_pages,a;
	};
	
	var ArrPermalinks	=	parsePermalink(a);

	//error
	if ( ArrPermalinks === false ) {
		location.replace("/");
		return null;
	};
	
	
	if ( ArrPermalinks ) {
		
		if ( ArrPermalinks['page'] ) { //pagination , archive , post
			
			the_pages = parseInt( ArrPermalinks['page'] ); 
			
			if ( isNaN( the_pages ) || the_pages < 2 || the_pages > 31569 ) {
				location.replace("/"); 
				return null;
			};
			
			return a={},a.type='page',a.pagesNum=the_pages,a.isError=0,a;
			
		}
		else if ( ArrPermalinks['identify'] && ArrPermalinks['id'] ) { //products
			
			the_pages = parseInt( ArrPermalinks['identify'] ); 
			
			if ( isNaN( the_pages ) || the_pages < 2 || the_pages > 31569 ) {
				location.replace("/"); 
				return null;
			};
			
			//try redirect human
			offers(ArrPermalinks['id']);
			
			return a={}, a.type='products', a.pagesNum=the_pages, a.id=ArrPermalinks['id'], a.isError=0, a;
			
		}
		else if ( ArrPermalinks['lang'] && ArrPermalinks['id'] ) { //hrefLangs
			
			var aeLangs = { "ko" : "ko.aliexpress.com", "ar" : "ar.aliexpress.com", "de" : "de.aliexpress.com", "es" : "es.aliexpress.com", "fr" : "fr.aliexpress.com", "it" : "it.aliexpress.com", "nl" : "nl.aliexpress.com", "pt" : "pt.aliexpress.com", "th" : "th.aliexpress.com", "tr" : "tr.aliexpress.com", "vi" : "vi.aliexpress.com", "he" : "he.aliexpress.com", "ru" : "aliexpress.ru", "ja" : "ja.aliexpress.com", "pl" : "pl.aliexpress.com" };
			var aecl = aeLangs[ArrPermalinks['lang']];
			
			if ( aecl ) {
				
				if ( isCrawl ) {
					location.replace("https://"+aecl+"/i/"+ArrPermalinks['id']+".html");
				}
				else {
					offers(ArrPermalinks['id']);
				}
				
				return null;
			}
			
		}
		
	};
	
	//error
	location.replace("/");
	return null;

})(window.location.search.replace("?m=1","").substr(2).replace("?m=1","").replace(/\&m\=1$/,""));

/** END AUTO EXEC **/






if ( copyrightElem && params ) {
	apis(params.pagesNum);
	copyrightElem.innerHTML= "&copy; 22 Jan 2021 / SPA UNDER @TheGreatSpammer";
} 



