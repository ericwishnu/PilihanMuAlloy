function Controller() {
    function loadKandidat() {
        kandidatHTTPClient.open("GET", "http://api.pemiluapi.org/candidate/api/provinsi?apiKey=06ec082d057daa3d310b27483cc3962e");
        kandidatHTTPClient.send();
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
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.kandidatTableView = Ti.UI.createPicker({
        id: "kandidatTableView"
    });
    $.__views.win.add($.__views.kandidatTableView);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        top: "70",
        selectionIndicator: "true",
        useSpinner: "false",
        width: Ti.UI.FILL,
        height: "60"
    });
    $.__views.win.add($.__views.picker);
    var __alloyId7 = [];
    $.__views.lembaga = Ti.UI.createPickerColumn({
        id: "lembaga"
    });
    __alloyId7.push($.__views.lembaga);
    $.__views.__alloyId8 = Ti.UI.createPickerRow({
        title: "DPR",
        id: "__alloyId8"
    });
    $.__views.lembaga.addRow($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createPickerRow({
        title: "DPD",
        id: "__alloyId9"
    });
    $.__views.lembaga.addRow($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createPickerRow({
        title: "DPRDI",
        id: "__alloyId10"
    });
    $.__views.lembaga.addRow($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createPickerRow({
        title: "DPRDII",
        id: "__alloyId11"
    });
    $.__views.lembaga.addRow($.__views.__alloyId11);
    $.__views.picker.add(__alloyId7);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        top: "130",
        selectionIndicator: "true",
        useSpinner: "false",
        width: Ti.UI.FILL,
        height: "60"
    });
    $.__views.win.add($.__views.picker);
    var __alloyId12 = [];
    $.__views.year = Ti.UI.createPickerColumn({
        id: "year"
    });
    __alloyId12.push($.__views.year);
    $.__views.__alloyId13 = Ti.UI.createPickerRow({
        title: "2014",
        id: "__alloyId13"
    });
    $.__views.year.addRow($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createPickerRow({
        title: "2013",
        id: "__alloyId14"
    });
    $.__views.year.addRow($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createPickerRow({
        title: "2012",
        id: "__alloyId15"
    });
    $.__views.year.addRow($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createPickerRow({
        title: "2011",
        id: "__alloyId16"
    });
    $.__views.year.addRow($.__views.__alloyId16);
    $.__views.picker.add(__alloyId12);
    $.__views.__alloyId17 = Ti.UI.createButton({
        title: "Search",
        top: "190",
        width: "90",
        height: "35",
        borderRadius: "1",
        id: "__alloyId17"
    });
    $.__views.win.add($.__views.__alloyId17);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Titanium.UI.currentWindow;
    var kandidatTableView = $.kandidatTableView;
    var data = [];
    var kandidatHTTPClient = Titanium.Network.createHTTPClient({
        onload: function() {
            var jsonObject = JSON.parse(this.responseText);
            jsonObject.data.results;
            jsonObject.data.results.provinsi;
            var total = jsonObject.data.results.count;
            for (var i = 0; total > i; i++) {
                var aFeed = provinsi[i];
                var row = Titanium.UI.createTableViewRow({
                    _nama: aFeed.nama,
                    _id: aFeed.id,
                    hasChild: true,
                    className: "module-row",
                    filter: aFeed.module_name,
                    height: "auto",
                    backgroundColor: "#fff"
                });
                var titleLabel = Titanium.UI.createLabel({
                    text: aFeed.nama,
                    font: {
                        fontSize: 14,
                        fontWeight: " bold"
                    },
                    left: 70,
                    top: 5,
                    height: 20,
                    width: 210,
                    color: "#232"
                });
                row.add(titleLabel);
                var descriptionLabel = Titanium.UI.createLabel({
                    text: aFeed.lembaga,
                    font: {
                        fontSize: 10,
                        fontWeight: " normal "
                    },
                    left: 70,
                    top: titleLabel.height + 10,
                    width: 200,
                    color: "#9a9"
                });
                row.add(descriptionLabel);
                data.push(row);
            }
            kandidatTableView.data = data;
            if (true == reloading) {
                moduleTable.setContentInsets({
                    top: 0
                }, {
                    animated: true
                });
                reloading = false;
                statusLabel.text = "Pull to refresh...";
                actIndicator.hide();
                arrowImage.backgroundImage = "img/refreshArrow.png";
                arrowImage.show();
            }
            isLoad = true;
        },
        onerror: function(e) {
            reloading = false;
            pulling = false;
            arrowImage.hide();
            actIndicator.hide();
            statusLabel.text = "";
            moduleTable.setContentInsets({
                top: 0
            }, {
                animated: true
            });
            Ti.API.debug(e.error);
            alert("Failed to retrieve data. \n Please make sure you're connected to internet.");
            isLoad || (isLoad = false);
        },
        timeout: 3e3
    });
    kandidatTableView.addEventListener("click", function(e) {
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;