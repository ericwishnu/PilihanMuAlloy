function Controller() {
    function loadKandidat() {
        kandidatHTTPClient.open("GET", "http://api.pemiluapi.org/candidate/api/provinsi?apiKey=06ec082d057daa3d310b27483cc3962e");
        kandidatHTTPClient.send();
    }
    function loadDapil(x) {
        var httpreq = "http://api.pemiluapi.org/candidate/api/dapil?apiKey=06ec082d057daa3d310b27483cc3962e&provinsi=";
        dapilHTTPClient.open("GET", httpreq.concat(x));
        dapilHTTPClient.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "kandidatQuery";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: true,
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.picker1 = Ti.UI.createPicker({
        id: "picker1",
        selectionIndicator: "true",
        top: "0",
        useSpinner: "false",
        width: Ti.UI.FILL,
        height: "60"
    });
    $.__views.win.add($.__views.picker1);
    var __alloyId9 = [];
    $.__views.provinsiPicker = Ti.UI.createPickerColumn({
        id: "provinsiPicker",
        width: Ti.UI.FILL,
        height: "60"
    });
    __alloyId9.push($.__views.provinsiPicker);
    $.__views.picker1.add(__alloyId9);
    $.__views.picker2 = Ti.UI.createPicker({
        id: "picker2",
        selectionIndicator: "true",
        top: "60",
        useSpinner: "false",
        width: Ti.UI.FILL,
        height: "60"
    });
    $.__views.win.add($.__views.picker2);
    var __alloyId10 = [];
    $.__views.dapilPicker = Ti.UI.createPickerColumn({
        id: "dapilPicker",
        width: Ti.UI.FILL,
        height: "60"
    });
    __alloyId10.push($.__views.dapilPicker);
    $.__views.picker2.add(__alloyId10);
    $.__views.picker3 = Ti.UI.createPicker({
        id: "picker3",
        top: "120",
        selectionIndicator: "true",
        useSpinner: "false",
        width: Ti.UI.FILL,
        height: "60"
    });
    $.__views.win.add($.__views.picker3);
    var __alloyId11 = [];
    $.__views.lembaga = Ti.UI.createPickerColumn({
        id: "lembaga"
    });
    __alloyId11.push($.__views.lembaga);
    $.__views.__alloyId12 = Ti.UI.createPickerRow({
        title: "DPR",
        id: "__alloyId12"
    });
    $.__views.lembaga.addRow($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createPickerRow({
        title: "DPD",
        id: "__alloyId13"
    });
    $.__views.lembaga.addRow($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createPickerRow({
        title: "DPRDI",
        id: "__alloyId14"
    });
    $.__views.lembaga.addRow($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createPickerRow({
        title: "DPRDII",
        id: "__alloyId15"
    });
    $.__views.lembaga.addRow($.__views.__alloyId15);
    $.__views.picker3.add(__alloyId11);
    $.__views.picker4 = Ti.UI.createPicker({
        id: "picker4",
        top: "180",
        selectionIndicator: "true",
        useSpinner: "false",
        width: Ti.UI.FILL,
        height: "60"
    });
    $.__views.win.add($.__views.picker4);
    var __alloyId16 = [];
    $.__views.year = Ti.UI.createPickerColumn({
        id: "year"
    });
    __alloyId16.push($.__views.year);
    $.__views.__alloyId17 = Ti.UI.createPickerRow({
        title: "2014",
        id: "__alloyId17"
    });
    $.__views.year.addRow($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createPickerRow({
        title: "2013",
        id: "__alloyId18"
    });
    $.__views.year.addRow($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createPickerRow({
        title: "2012",
        id: "__alloyId19"
    });
    $.__views.year.addRow($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createPickerRow({
        title: "2011",
        id: "__alloyId20"
    });
    $.__views.year.addRow($.__views.__alloyId20);
    $.__views.picker4.add(__alloyId16);
    $.__views.buttonSearch = Ti.UI.createButton({
        id: "buttonSearch",
        title: "Search",
        top: "240",
        width: "90",
        height: "35",
        borderRadius: "1"
    });
    $.__views.win.add($.__views.buttonSearch);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Titanium.UI.currentWindow;
    var provinsiPicker = $.provinsiPicker;
    var dapilPicker = $.dapilPicker;
    var dapilHTTPClient = Titanium.Network.createHTTPClient({
        onload: function() {
            var jsonObject = JSON.parse(this.responseText);
            jsonObject.data.results;
            var dapil = jsonObject.data.results.dapil;
            var total = jsonObject.data.results.count;
            for (var i = 0; total > i; i++) {
                var aFeed = dapil[i];
                var row = Ti.UI.createPickerRow({
                    title: aFeed.nama,
                    _id: aFeed.id,
                    className: "module-row",
                    filter: aFeed.module_name,
                    height: "auto",
                    backgroundColor: "#fff"
                });
                dapilPicker.addRow(row);
            }
            isLoad = true;
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("Failed to retrieve data. \n Please make sure you're connected to internet.");
            isLoad || (isLoad = false);
        },
        timeout: 3e3
    });
    var kandidatHTTPClient = Titanium.Network.createHTTPClient({
        onload: function() {
            var jsonObject = JSON.parse(this.responseText);
            jsonObject.data.results;
            var provinsi = jsonObject.data.results.provinsi;
            var total = jsonObject.data.results.count;
            for (var i = 0; total > i; i++) {
                var aFeed = provinsi[i];
                var row = Ti.UI.createPickerRow({
                    title: aFeed.nama,
                    _id: aFeed.id,
                    className: "module-row",
                    filter: aFeed.module_name,
                    height: "auto",
                    backgroundColor: "#fff",
                    id: "provinsiLow"
                });
                provinsiPicker.addRow(row);
            }
            isLoad = true;
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("Failed to retrieve data. \n Please make sure you're connected to internet.");
            isLoad || (isLoad = false);
        },
        timeout: 3e3
    });
    provinsiPicker.addEventListener("click", function(e) {
        var selectedRow = e.rowData;
        var detailWindow = Titanium.UI.createWindow({
            _title: selectedRow._title,
            _id: selectedRow._id,
            _moduleSlug: selectedRow.moduleSlug,
            _username: selectedRow.username,
            id_user: selectedRow.id_user,
            backgroundColor: "#fff",
            url: "detailModule.js",
            title: selectedRow._title,
            id: 0
        });
        Titanium.UI.currentTab.open(detailWindow);
    });
    loadKandidat();
    var args = [];
    $.buttonSearch.addEventListener("click", function() {
        var win = Alloy.createController("kandidat", args).getView();
        win.open();
    });
    $.picker1.addEventListener("change", function(e) {
        $.dapilPicker.removeAllChildren();
        var provinsiVal = e.row._id;
        loadDapil(provinsiVal);
        args[0] = provinsiVal;
    });
    $.picker2.addEventListener("change", function(e) {
        var dapilVal = e.row._id;
        alert(dapilVal);
        args[1] = dapilVal;
    });
    $.picker3.addEventListener("change", function(e) {
        var lembagaVal = e.row.title;
        Ti.App.Properties.setString("lembagaVal", lembagaVal);
        args[2] = lembagaVal;
    });
    $.picker4.addEventListener("change", function(e) {
        var yearVal = e.row.title;
        Ti.App.Properties.setString("yearVal", yearVal);
        args[3] = yearVal;
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;