/**
 * @author Eric Wishnu Saputra
 */
var win = Titanium.UI.currentWindow;
var provinsiPicker = $.provinsiPicker;
var dapilPicker = $.dapilPicker;
http://api.pemiluapi.org/candidate/api/provinsi?apiKey=06ec082d057daa3d310b27483cc3962e
var provinsiVal;

var dapilHTTPClient = Titanium.Network.createHTTPClient({
	onload : function(e) {

		//create a json object using the JSON.PARSE function

		var jsonObject = JSON.parse(this.responseText);
		var results = jsonObject.data.results;
		var dapil = jsonObject.data.results.dapil;
		var total = jsonObject.data.results.count;
		var dapilData = [];
		//get through each item

		for (var i = 0; i < total; i++) {

			var aFeed = dapil[i];
			//create table row

			var row = Ti.UI.createPickerRow({
				title : aFeed.nama,
				_id : aFeed.id,
				className : 'module-row',
				filter : aFeed.module_name,
				height : 'auto',
				backgroundColor : '#fff',
			});

			dapilPicker.addRow(row);

			//title label for row at index i

		}
		// set the data to tableview's data
		//provinsiPicker.data = data;

		isLoad = true;
	},
	onerror : function(e) {
		// log the error to our Ti tanium Studio console

		Ti.API.debug(e.error);
		alert("Failed to retrieve data. \n Please make sure you're connected to internet.");
		if (!isLoad)
			isLoad = false;
		//Ti.API.error(this.status + ' - ' + this.statusText);
	},
	timeout : 3000
});

var kandidatHTTPClient = Titanium.Network.createHTTPClient({

	onload : function(e) {

		//create a json object using the JSON.PARSE function

		var jsonObject = JSON.parse(this.responseText);
		var results = jsonObject.data.results;
		var provinsi = jsonObject.data.results.provinsi;
		var total = jsonObject.data.results.count;
		var provinsiData = [];
		//get through each item

		for (var i = 0; i < total; i++) {

			var aFeed = provinsi[i];
			//create table row

			var row = Ti.UI.createPickerRow({
				title : aFeed.nama,
				_id : aFeed.id,
				className : 'module-row',
				filter : aFeed.module_name,
				height : 'auto',
				backgroundColor : '#fff',
				id : 'provinsiLow'
			});

			provinsiPicker.addRow(row);

			//title label for row at index i

		}
		// set the data to tableview's data
		//provinsiPicker.data = data;

		isLoad = true;
	},
	onerror : function(e) {
		// log the error to our Ti tanium Studio console

		Ti.API.debug(e.error);
		alert("Failed to retrieve data. \n Please make sure you're connected to internet.");
		if (!isLoad)
			isLoad = false;
		//Ti.API.error(this.status + ' - ' + this.statusText);
	},
	timeout : 3000
});

//tablerow selected function: create new window
provinsiPicker.addEventListener('click', function(e) {

	//get the selected row index
	var selectedRow = e.rowData;

	// create detail window
	var detailWindow = Titanium.UI.createWindow({
		_title : selectedRow._title,
		_id : selectedRow._id,
		_moduleSlug : selectedRow.moduleSlug,
		_username : selectedRow.username,
		id_user : selectedRow.id_user,
		backgroundColor : '#fff',
		url : 'detailModule.js',
		title : selectedRow._title,
		id : 0
	});
	Titanium.UI.currentTab.open(detailWindow);
});

loadKandidat();

// function
function loadKandidat() {
	//open the modules xml feed

	kandidatHTTPClient.open('GET', 'http://api.pemiluapi.org/candidate/api/provinsi?apiKey=06ec082d057daa3d310b27483cc3962e');
	//execute the call to the remote feed
	kandidatHTTPClient.send();

}

function loadDapil(x) {
	//open the modules xml feed
	var httpreq = 'http://api.pemiluapi.org/candidate/api/dapil?apiKey=06ec082d057daa3d310b27483cc3962e&provinsi=';
	dapilHTTPClient.open('GET', httpreq.concat(x));
	//execute the call to the remote feed
	dapilHTTPClient.send();

}

var args = [];

$.buttonSearch.addEventListener('click', function(e) {
	var win = Alloy.createController('kandidat', args).getView();
	win.open();
});

$.picker1.addEventListener('change', function(e) {
	$.dapilPicker.removeAllChildren();
	var provinsiVal = e.row._id;
	loadDapil(provinsiVal);
	args[0] = provinsiVal;
});

$.picker2.addEventListener('change', function(e) {
	var dapilVal = e.row._id;
	alert(dapilVal);
	args[1] = dapilVal;
});

$.picker3.addEventListener('change', function(e) {
	var lembagaVal = e.row.title;
	Ti.App.Properties.setString('lembagaVal', lembagaVal);
	args[2] = lembagaVal;
});

$.picker4.addEventListener('change', function(e) {
	var yearVal = e.row.title;
	Ti.App.Properties.setString('yearVal', yearVal);
	args[3] = yearVal;
});
