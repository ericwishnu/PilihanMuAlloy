function Controller() {
    function loadKandidat() {
        kandidatHTTPClient.open("GET", "http://api.pemiluapi.org/candidate/api/caleg?apiKey=fea6f7d9ec0b31e256a673114792cb17&limit=10");
        kandidatHTTPClient.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "kandidat";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.kandidat = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "kandidat"
    });
    $.__views.kandidat && $.addTopLevelView($.__views.kandidat);
    $.__views.kandidatTableView = Ti.UI.createTableView({
        id: "kandidatTableView"
    });
    $.__views.kandidat.add($.__views.kandidatTableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Titanium.UI.currentWindow;
    var kandidatTableView = $.kandidatTableView;
    var data = [];
    var kandidatHTTPClient = Titanium.Network.createHTTPClient({
        onload: function() {
            var jsonObject = JSON.parse(this.responseText);
            jsonObject.data.results;
            var caleg = jsonObject.data.results.caleg;
            var total = jsonObject.data.results.count;
            for (var i = 0; total > i; i++) {
                var aFeed = caleg[i];
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
                var image = aFeed.foto_url;
                var iconImage = Titanium.UI.createImageView({
                    image: image,
                    width: 50,
                    height: 50,
                    left: 10,
                    top: 10
                });
                row.add(iconImage);
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
    kandidatTableView.addEventListener("scroll", function() {});
    kandidatTableView.addEventListener("dragEnd", function() {});
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