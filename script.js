	var name;
	var info;
	var mapClickHandle;
	var etapp11Layer;
	var etapp12Layer;
	var etapp13Layer;
	var etapp14Layer;
	var etapp15Layer;
	var etapp16Layer;
	var etapp17Layer;
	var etapp18Layer;
	var etapp19Layer;
	var etapp20Layer;
	var etapp21Layer;
	var etapp22Layer;
	var etappslinga_11Layer;
	var etappslinga_12aLayer;
	var etappslinga_12bLayer;
	var etappslinga_21Layer;
	var bikingelevation_aLayer;
	var bikingelevation_bLayer;
	var walkelevationLayer;
	var gysingeLayer;
	var farnebofjardenLayer;
	var hedesundafjardenLayer;
	
	
    require(["esri/map", 
			"esri/layers/GraphicsLayer",
			"esri/dijit/BasemapGallery", 
			"esri/arcgis/utils",	
			"esri/graphic", 
			"esri/geometry/Point", 
			"esri/symbols/PictureMarkerSymbol", 
			"esri/symbols/SimpleMarkerSymbol",
			"esri/dijit/HomeButton", 
			"esri/dijit/LocateButton", 
			"esri/dijit/Scalebar", 
			"esri/InfoTemplate",
			"esri/Color",
			"dojo/parser",
			"dojo/on",
			"dijit/TitlePane",	
			"dijit/layout/BorderContainer", 
			"dijit/layout/ContentPane",	
			"dojo/domReady!"], 
	
	function(Map, GraphicsLayer, BasemapGallery, arcgisUtils, Graphic, Point, PictureMarkerSymbol, SimpleMarkerSymbol, HomeButton, LocateButton, Scalebar, InfoTemp, Color, parser, On)  {
		parser.parse();
		
		var map = new Map("map", {
			center: [16.884986, 60.291077],
			zoom: 9,
			basemap: "streets"
		});
	  
		var scalebar = new Scalebar({
			map: map,
			attachTo: "bottom-left",
			scalebarUnit: "metric"
		});

		var home = new HomeButton({
			map: map
		}, "HomeButton");
		home.startup();
	  
		geoLocate = new LocateButton({
			map: map
		}, "LocateButton");
		geoLocate.startup();

		var basemapGallery = new BasemapGallery({
			map: map
		}, "basemapGallery");
		basemapGallery.startup();
		
		var test1 = 0;
		var test2 = 0;
		var test3 = 0;
		var test4 = 0;
		var test5 = 0;
		var test6 = 0;
		var test7 = 0;
		var test8 = 0;
		var test9 = 0;
		var test10 = 0;
		var test11 = 0;
		var test12 = 0;
		var test13 = 0;
		var test14 = 0;
		var test15 = 0;
		var test16 = 0;
		var test17 = 0;
		var test18 = 0;
		var test19 = 0;
		var test20 = 0;
		var test21 = 0;
		
		On(buttonEtapp11, "click", function(evt) {
			if(test1 == 0) {
				getEtapp11();
				test1 = 1;
			}
			else {
				etapp11Layer.clear();
				test1 = 0;
			}
		});
		
		On(buttonEtapp12, "click", function(evt) {
			if(test2 == 0) {
				getEtapp12();
				test2 = 1;
			}
			else {
				etapp12Layer.clear();
				test2 = 0;
			}
		});
		
		On(buttonEtapp13, "click", function(evt) {
			if(test3 == 0) {
				getEtapp13();
				test3 = 1;
			}
			else {
				etapp13Layer.clear();
				test3 = 0;
			}
		});
		
		On(buttonEtapp14, "click", function(evt) {
			if(test4 == 0) {
				getEtapp14();
				test4 = 1;
			}
			else {
				etapp14Layer.clear();
				test4 = 0;
			}
		});
		
		On(buttonEtapp15, "click", function(evt) {
			if(test5 == 0) {
				getEtapp15();
				test5 = 1;
			}
			else {
				etapp15Layer.clear();
				test5 = 0;
			}
		});
		
		On(buttonEtapp16, "click", function(evt) {
			if(test6 == 0) {
				getEtapp16();
				test6 = 1;
			}
			else {
				etapp16Layer.clear();
				test6 = 0;
			}
		});
		
		On(buttonEtapp17, "click", function(evt) {
			if(test7 == 0) {
				getEtapp17();
				test7 = 1;
			}
			else {
				etapp17Layer.clear();
				test7 = 0;
			}
		});
		
		On(buttonEtapp19, "click", function(evt) {
			if(test8 == 0) {
				getEtapp19();
				test8 = 1;
			}
			else {
				etapp19Layer.clear();
				test8 = 0;
			}
		});
		
		On(buttonEtapp20, "click", function(evt) {
			if(test9 == 0) {
				getEtapp20();
				test9 = 1;
			}
			else {
				etapp20Layer.clear();
				test9 = 0;
			}
		});
		
		On(buttonEtapp21, "click", function(evt) {
			if(test10 == 0) {
				getEtapp21();
				test10 = 1;
			}
			else {
				etapp21Layer.clear();
				test10 = 0;
			}
		});
		
		On(buttonEtapp22, "click", function(evt) {
			if(test11 == 0) {
				getEtapp22();
				test11 = 1;
			}
			else {
				etapp22Layer.clear();
				test11 = 0;
			}
		});
		
		On(buttonEtappSlinga11, "click", function(evt) {
			if(test12 == 0) {
				getEtappSlinga11_1();
				test12 = 1;
			}
			else {
				etappslinga_11Layer.clear();
				test12 = 0;
			}
		});
		
		On(buttonEtappSlinga12a, "click", function(evt) {
			if(test13 == 0) {
				getEtappSlinga12_1();
				test13 = 1;
			}
			else {
				etappslinga_12aLayer.clear();
				test13 = 0;
			}
		});
		
		On(buttonEtappSlinga12b, "click", function(evt) {
			if(test14 == 0) {
				getEtappSlinga12_2();
				test14 = 1;
			}
			else {
				etappslinga_12bLayer.clear();
				test14 = 0;
			}
		});
		
		On(buttonEtappSlinga21, "click", function(evt) {
			if(test15 == 0) {
				getEtappSlinga21_1();
				test15 = 1;
			}
			else {
				etappslinga_21Layer.clear();
				test15 = 0;
			}
		});
		
		On(buttonBikingElevation_a, "click", function(evt) {
			if(test16 == 0) {
				getBikingElevation();
				test16 = 1;
			}
			else {
				bikingelevation_aLayer.clear();
				test16 = 0;
			}
		});
		
		On(buttonBikingElevation_b, "click", function(evt) {
			if(test17 == 0) {
				getBikingElevation2();
				test17 = 1;
			}
			else {
				bikingelevation_bLayer.clear();
				test17 = 0;
			}
		});
		
		
		On(buttonWalkElevation, "click", function(evt) {
			if(test18 == 0) {
				getWalkElevation();
				test18= 1;
			}
			else {
				walkelevationLayer.clear();
				test18 = 0;
			}
		});
		
		On(buttonGysinge, "click", function(evt) {
			if(test19 == 0) {
				getGysinge();
				test19 = 1;
			}
			else {
				gysingeLayer.clear();
				test19 = 0;
			}
		});
		
		On(buttonFarnebofjarden, "click", function(evt) {
			if(test20 == 0) {
				getFarnebofjarden();
				test20 = 1;
			}
			else {
				farnebofjardenLayer.clear();
				test20 = 0;
			}
		});
	
		On(buttonHedesundafjarden, "click", function(evt) {
			if(test21 == 0) {
				getHedesundafjarden();
				test21 = 1;
			}
			else {
				hedesundafjardenLayer.clear();
				test21 = 0;
			}
		});
		
		/*On(resetButton, "click", function(evt) {
			etapp11Layer.hide();
			etapp12Layer.hide();
			etapp13Layer.hide();
			etapp14Layer.hide();
			etapp15Layer.hide();
			etapp16Layer.hide();
			etapp17Layer.hide();
			etapp19Layer.hide();
			etapp20Layer.hide();
			etapp21Layer.hide();
			etapp22Layer.hide();
			etappslinga_11Layer.hide();
			etappslinga_12aLayer.hide();
			etappslinga_12bLayer.hide();
			etappslinga_21Layer.hide();
			bikingelevation_aLayer.hide();
			bikingelevation_bLayer.hide();
			walkelevationLayer.hide();
			gysingeLayer.hide();
			farnebofjardenLayer.hide();
			hedesundafjardenLayer.hide();
		});*/
	
		var graphics = new GraphicsLayer();
		map.addLayer(graphics)
		var SimpleMarkerSymbol = new SimpleMarkerSymbol().setStyle(
		SimpleMarkerSymbol.STYLE_CIRCLE).setSize(10).setColor(new Color([255,0,0,2]));
		
		On(button1, "click", function(evt){
		mapClickHandle && mapClickHandle.remove();
			mapClickHandle = On(map, "click", function(evt){ 
				var PictureMarkerSymbol1 = new PictureMarkerSymbol("images/info/info.png", 20, 20);
				var mapPoint = esri.geometry.webMercatorToGeographic(evt.mapPoint); 
				var pointClick = new Graphic(new Point (evt.mapPoint), PictureMarkerSymbol1);
				graphics.add(pointClick);
				name = prompt("Vad vill du ange för namn för denna punkt");
				info = prompt("Vänligen mata in information till punkten");
				url = prompt("Bifoga gärna en bild på informationspunkten");
				pointClick = pointClick.setInfoTemplate(new InfoTemp(name, info + "<br>" +  "<img src = " + url + ">"));
				//alert(mapPoint.x + ", " + mapPoint.y);
			});
		});
		
		On(button2, "click", function(evt){
			mapClickHandle && mapClickHandle.remove();
			mapClickHandle = On(map, "click", function(evt){ 
				var PictureMarkerSymbol2 = new PictureMarkerSymbol("images/rastplats/rastplats.png", 20, 20);
				var mapPoint = esri.geometry.webMercatorToGeographic(evt.mapPoint); 
				var pointClick = new Graphic(new Point (evt.mapPoint), PictureMarkerSymbol2);
				graphics.add(pointClick);
				name = prompt("Ange namn på rastplatsen");
				info = prompt("Ange information för rastplatsen");
				url = prompt("Bifoga en bild på rastplatsen");
				pointClick = pointClick.setInfoTemplate(new InfoTemp(name, info + "<br>" +  "<img src = " + url + ">"));
			});
		});
		
		On(button3, "click", function(evt){
			mapClickHandle && mapClickHandle.remove();
			mapClickHandle = On(map, "click", function(evt){ 
				var PictureMarkerSymbol3 = new PictureMarkerSymbol("images/matplats/matplats.png", 20, 20);
				var mapPoint = esri.geometry.webMercatorToGeographic(evt.mapPoint); 
				var pointClick = new Graphic(new Point (evt.mapPoint), PictureMarkerSymbol3);
				graphics.add(pointClick);
				name = prompt("Skriv namn på matplatsen");
				info = prompt("Ange information för matplatsen");
				url = prompt("Länka en bild på matplatsen");
				pointClick = pointClick.setInfoTemplate(new InfoTemp(name, info + "<br>" +  "<img src = " + url + ">"));
			});
		});
		
		On(off, "click", function(evt) {
			mapClickHandle && mapClickHandle.remove();
		});
		
		On(graphics, "mouse-over", function(evt) {
          var g = evt.graphic;
          map.infoWindow.setContent(g.getContent());
          map.infoWindow.setTitle(g.getTitle());
          map.infoWindow.show(evt.screenPoint,map.getInfoWindowAnchor(evt.screenPoint));
        });
		
		On(graphics, "mouse-out", function() {
				map.infoWindow.hide();
		});
		

		
		function getEtapp11(){
			var bikingWalkingData = {url: "JSON_data/json/Biking_walking_no_elevation/Etapp_11_wgs84.json", handleAs: "json", content: {}, load: showData11};
			dojo.xhrGet(bikingWalkingData);
		}
				
		function showData11(bikingWalkingData){
			etapp11Layer = new GraphicsLayer;
			map.addLayer(etapp11Layer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/vandring/vandring.png", 8, 8);

			dojo.forEach(bikingWalkingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Etapp 11"));
				etapp11Layer.add(graphic);
			});
		}	
		
		function getEtapp12(){
			var bikingWalkingData = {url: "JSON_data/json/Biking_walking_no_elevation/Etapp_12_wgs84.json", handleAs: "json", content: {}, load: showData12};
			dojo.xhrGet(bikingWalkingData);
		}
				
		function showData12(bikingWalkingData){
			etapp12Layer = new GraphicsLayer;
			map.addLayer(etapp12Layer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/vandring/vandring.png", 8, 8);

			dojo.forEach(bikingWalkingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Etapp 12"));
				etapp12Layer.add(graphic);
			});
		}
		
		function getEtapp13(){
			var bikingWalkingData = {url: "JSON_data/json/Biking_walking_no_elevation/Etapp_13_wgs84.json", handleAs: "json", content: {}, load: showData13};
			dojo.xhrGet(bikingWalkingData);
		}
				
		function showData13(bikingWalkingData){
			etapp13Layer = new GraphicsLayer;
			map.addLayer(etapp13Layer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/vandring/vandring.png", 8, 8);

			dojo.forEach(bikingWalkingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Etapp 13"));
				etapp13Layer.add(graphic);
			});
		}
		
		function getEtapp14(){
			var bikingWalkingData = {url: "JSON_data/json/Biking_walking_no_elevation/Etapp_14_wgs84.json", handleAs: "json", content: {}, load: showData14};
			dojo.xhrGet(bikingWalkingData);
		}
				
		function showData14(bikingWalkingData){
			etapp14Layer = new GraphicsLayer;
			map.addLayer(etapp14Layer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/vandring/vandring.png", 8, 8);

			dojo.forEach(bikingWalkingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Etapp 14"));
				etapp14Layer.add(graphic);
			});
		}
		function getEtapp15(){
			var bikingWalkingData = {url: "JSON_data/json/Biking_walking_no_elevation/Etapp_15_wgs84.json", handleAs: "json", content: {}, load: showData15};
			dojo.xhrGet(bikingWalkingData);
		}
				
		function showData15(bikingWalkingData){
			etapp15Layer = new GraphicsLayer;
			map.addLayer(etapp15Layer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/vandring/vandring.png", 8, 8);

			dojo.forEach(bikingWalkingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Etapp 15"));
				etapp15Layer.add(graphic);
			});
		}
		
		function getEtapp16(){
			var bikingWalkingData = {url: "JSON_data/json/Biking_walking_no_elevation/Etapp_16_wgs84.json", handleAs: "json", content: {}, load: showData16};
			dojo.xhrGet(bikingWalkingData);
		}
				
		function showData16(bikingWalkingData){
			etapp16Layer = new GraphicsLayer;
			map.addLayer(etapp16Layer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/vandring/vandring.png", 8, 8);

			dojo.forEach(bikingWalkingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Etapp 16"));
				etapp16Layer.add(graphic);
			});
		}
		
		function getEtapp17(){
			var bikingWalkingData = {url: "JSON_data/json/Biking_walking_no_elevation/Etapp_17_wgs84.json", handleAs: "json", content: {}, load: showData17};
			dojo.xhrGet(bikingWalkingData);
		}
				
		function showData17(bikingWalkingData){
			etapp17Layer = new GraphicsLayer;
			map.addLayer(etapp17Layer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/vandring/vandring.png", 8, 8);

			dojo.forEach(bikingWalkingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Etapp 17"));
				etapp17Layer.add(graphic);
			});
		}
		
		function getEtapp19(){
			var bikingWalkingData = {url: "JSON_data/json/Biking_walking_no_elevation/Etapp_19_wgs84.json", handleAs: "json", content: {}, load: showData19};
			dojo.xhrGet(bikingWalkingData);
		}
				
		function showData19(bikingWalkingData){
			etapp19Layer = new GraphicsLayer;
			map.addLayer(etapp19Layer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/vandring/vandring.png", 8, 8);

			dojo.forEach(bikingWalkingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Etapp 19"));
				etapp19Layer.add(graphic);
			});
		}
		
		function getEtapp20(){
			var bikingWalkingData = {url: "JSON_data/json/Biking_walking_no_elevation/Etapp_20_wgs84.json", handleAs: "json", content: {}, load: showData20};
			dojo.xhrGet(bikingWalkingData);
		}
				
		function showData20(bikingWalkingData){
			etapp20Layer = new GraphicsLayer;
			map.addLayer(etapp20Layer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/vandring/vandring.png", 8, 8);

			dojo.forEach(bikingWalkingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Etapp 20"));
				etapp20Layer.add(graphic);
			});
		}
		
		function getEtapp21(){
			var bikingWalkingData = {url: "JSON_data/json/Biking_walking_no_elevation/Etapp_21_wgs84.json", handleAs: "json", content: {}, load: showData21};
			dojo.xhrGet(bikingWalkingData);
		}
				
		function showData21(bikingWalkingData){
			etapp21Layer = new GraphicsLayer;
			map.addLayer(etapp21Layer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/vandring/vandring.png", 8, 8);

			dojo.forEach(bikingWalkingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Etapp 21"));
				etapp21Layer.add(graphic);
			});
		}
		
		function getEtapp22(){
			var bikingWalkingData = {url: "JSON_data/json/Biking_walking_no_elevation/Etapp_22_wgs84.json", handleAs: "json", content: {}, load: showData22};
			dojo.xhrGet(bikingWalkingData);
		}
			
		function showData22(bikingWalkingData){
			etapp22Layer = new GraphicsLayer;
			map.addLayer(etapp22Layer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/vandring/vandring.png", 8, 8);

			dojo.forEach(bikingWalkingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Etapp 22"));
				etapp22Layer.add(graphic);
			});
		}
		
		
		function getEtappSlinga11_1(){
			var bikingWalkingData = {url: "JSON_data/json/Biking_walking_no_elevation/Etapp_Slinga_11_1_wgs84.json", handleAs: "json", content: {}, load: showEtappSlinga11_1};
			dojo.xhrGet(bikingWalkingData);
		}
				
		function showEtappSlinga11_1(bikingWalkingData){
			etappslinga_11Layer = new GraphicsLayer;
			map.addLayer(etappslinga_11Layer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/vandring/vandring.png", 8, 8);

			dojo.forEach(bikingWalkingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Etapp Slinga 11.1"));
				etappslinga_11Layer.add(graphic);
			});
		}
		function getEtappSlinga12_1(){
			var bikingWalkingData = {url: "JSON_data/json/Biking_walking_no_elevation/Etapp_Slinga_12_1_wgs84.json", handleAs: "json", content: {}, load: showEtappSlinga12_1};
			dojo.xhrGet(bikingWalkingData);
		}
				
		function showEtappSlinga12_1(bikingWalkingData){
			etappslinga_12aLayer = new GraphicsLayer;
			map.addLayer(etappslinga_12aLayer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/vandring/vandring.png", 8, 8);

			dojo.forEach(bikingWalkingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Etapp Slinga 12.1"));
				etappslinga_12aLayer.add(graphic);
			});
		}
		
		function getEtappSlinga12_2(){
			var bikingWalkingData = {url: "JSON_data/json/Biking_walking_no_elevation/Etapp_Slinga_12_2_inkl_kolkoja_wgs84.json", handleAs: "json", content: {}, load: showEtappSlinga12_2};
			dojo.xhrGet(bikingWalkingData);
		}
				
		function showEtappSlinga12_2(bikingWalkingData){
			etappslinga_12bLayer = new GraphicsLayer;
			map.addLayer(etappslinga_12bLayer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/vandring/vandring.png", 8, 8);

			dojo.forEach(bikingWalkingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Etapp Slinga 12.2"));
				etappslinga_12bLayer.add(graphic);
			});
		}
		
		function getEtappSlinga21_1(){
			var bikingWalkingData = {url: "JSON_data/json/Biking_walking_no_elevation/Etapp_Slinga_21_1_wgs84.json", handleAs: "json", content: {}, load: showEtappSlinga21_1};
			dojo.xhrGet(bikingWalkingData);
		}
				
		function showEtappSlinga21_1(bikingWalkingData){
			etappslinga_21Layer = new GraphicsLayer;
			map.addLayer(etappslinga_21Layer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/vandring/vandring.png", 8, 8);

			dojo.forEach(bikingWalkingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Etapp Slinga 21.1"));
				etappslinga_21Layer.add(graphic);
			});
		}
		
		
		
		function getBikingElevation(){
			var bikingData = {url: "JSON_data/json/biking_walking_with_elevation/Biking_elevation161008.json", handleAs: "json", content: {}, load: showEtapp};
			dojo.xhrGet(bikingData);
		}
				
		function showEtapp(bikingData){
			bikingelevation_aLayer = new GraphicsLayer;
			map.addLayer(bikingelevation_aLayer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/cykel/cykel.png", 8, 8);

			dojo.forEach(bikingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Etapp Biking elevation"));
				bikingelevation_aLayer.add(graphic);
			});
		}
		
		function getWalkElevation(){
			var bikingData = {url: "JSON_data/json/biking_walking_with_elevation/Walk_elevation_123547.json", handleAs: "json", content: {}, load: showWalk123};
			dojo.xhrGet(bikingData);
		}
				
		function showWalk123(bikingData){
			walkelevationLayer = new GraphicsLayer;
			map.addLayer(walkelevationLayer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/vandring/vandring.png", 8, 8);

			dojo.forEach(bikingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Walk_elevation_123547"));
				walkelevationLayer.add(graphic);
			});
		}

		function getBikingElevation2(){
			var bikingData = {url: "JSON_data/json/biking_walking_with_elevation/Walk_elevation_151851.json", handleAs: "json", content: {}, load: showWalk151};
			dojo.xhrGet(bikingData);
		}
				
		function showWalk151(bikingData){
			bikingelevation_bLayer = new GraphicsLayer;
			map.addLayer(bikingelevation_bLayer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/vandring/vandring.png", 8, 8);

			dojo.forEach(bikingData.posts, function(post){
				var latitude = post.latitude;
				var longitude = post.longitude;
				var point = new Point(longitude, latitude);
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp("Walk_elevation_151851"));
				bikingelevation_bLayer.add(graphic);
			});
		}

		function getGysinge(){
			var poiData = {url: "JSON_data/json/POI/Paddla_Gysinge_POI.json", handleAs: "json", content: {}, load: showGysinge};
			dojo.xhrGet(poiData);
		}
			
		function showGysinge(poiData){
			gysingeLayer = new GraphicsLayer;
			map.addLayer(gysingeLayer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/kanot/kanot.png", 15, 15);
		
			dojo.forEach(poiData.POI, function(poi){
				var latitude = poi.latitude;
				var longitude = poi.longitude;
				var point = new Point(longitude, latitude);
				var poiName = poi.name;
				var poiImage = poi.image;
				var info= poi.info;
				var text = poi.about;
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp(poiName, "<h3>"+"Välkommen!"+"</h3>"+"<br>" 
												+ "<b>" +"<u>" + "Här är lite information om platsen:" +"</u>" + "</b>"+ "<br>"
												+ info +"<br>"+"<br>"
												+"<img src = " + poiImage + ">"+ text));
				gysingeLayer.add(graphic);
			});
		}	
		
		function getFarnebofjarden(){
			var poiData = {url: "JSON_data/json/POI/Paddla_Färnebofjärden_POI.json", handleAs: "json", content: {}, load: showFarnebofjarden};
			dojo.xhrGet(poiData);
		}
			
			function showFarnebofjarden(poiData){
				farnebofjardenLayer = new GraphicsLayer;
				map.addLayer(farnebofjardenLayer);
				var pictureMarkerSymbol = new PictureMarkerSymbol("images/kanot/kanot.png", 15, 15);
		
			dojo.forEach(poiData.POI, function(poi){
				var latitude = poi.latitude;
				var longitude = poi.longitude;
				var point = new Point(longitude, latitude);
				var poiName = poi.name;
				var poiImage = poi.image;
				var info = poi.info;
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp(poiName, info + "<br>" + "<img src = " + poiImage + ">" + "<br>"));
				farnebofjardenLayer.add(graphic);
			});
		}
		
		function getHedesundafjarden(){
			var poiData = {url: "JSON_data/json/POI/Paddla_Hedesundafjärden_POI.json", handleAs: "json", content: {}, load: showHedesundafjarden};
			dojo.xhrGet(poiData);
		}
			
			function showHedesundafjarden(poiData){
			hedesundafjardenLayer = new GraphicsLayer;
			map.addLayer(hedesundafjardenLayer);
			var pictureMarkerSymbol = new PictureMarkerSymbol("images/kanot/kanot.png", 15, 15);
		
			dojo.forEach(poiData.POI, function(poi){
				var latitude = poi.latitude;
				var longitude = poi.longitude;
				var point = new Point(longitude, latitude);
				var poiName = poi.name;
				var poiImage = poi.image;
				var text= poi.text;
				var graphic = new Graphic(point, pictureMarkerSymbol);
				graphic = graphic.setInfoTemplate(new InfoTemp(poiName, "<h3>"+"Välkommen!" +"</h3>"+"<img src = " + poiImage + ">" + "<br>" + text));
				hedesundafjardenLayer.add(graphic);
			});
		}
	});