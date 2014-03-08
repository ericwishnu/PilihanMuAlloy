function Controller() {
    function loadPartai() {
        partaiHTTPClient.open("GET", "http://api.pemiluapi.org/candidate/api/partai?apiKey=06ec082d057daa3d310b27483cc3962e");
        partaiHTTPClient.send();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "partai";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.partai = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "partai"
    });
    $.__views.partai && $.addTopLevelView($.__views.partai);
    $.__views.partaiTableView = Ti.UI.createTableView({
        id: "partaiTableView"
    });
    $.__views.partai.add($.__views.partaiTableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Titanium.UI.currentWindow;
    var partaiTableView = $.partaiTableView;
    var data = [];
    var partaiHTTPClient = Titanium.Network.createHTTPClient({
        onload: function() {
            var jsonObject = JSON.parse(this.responseText);
            jsonObject.data.results;
            var partai = jsonObject.data.results.partai;
            var total = jsonObject.data.results.count;
            for (var i = 0; total > i; i++) {
                var aFeed = partai[i];
                var row = Titanium.UI.createTableViewRow({
                    _nama: aFeed.nama,
                    _nama_lengkap: aFeed.nama_lengkap,
                    _id: aFeed.id,
                    _url_logo_medium: aFeed.url_logo_medium,
                    _url_logo_small: aFeed.url_logo_small,
                    hasChild: true,
                    height: "70dp",
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
                    text: aFeed.nama_lengkap,
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
                var image = aFeed.url_logo_medium;
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
            partaiTableView.data = data;
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
            partaiTableView.setContentInsets({
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
    partaiTableView.addEventListener("scroll", function() {});
    partaiTableView.addEventListener("dragEnd", function() {});
    partaiTableView.addEventListener("click", function(e) {
        var selectedRow = e.rowData;
        var detailWindow = Titanium.UI.createWindow({
            _nama: selectedRow._nama,
            _id: selectedRow._id,
            backgroundColor: "#fff",
            url: "partaiDetail.js",
            title: selectedRow._nama,
            id: 0
        });
        var args = selectedRow;
        var win = Alloy.createController("partaiDetail", args).getView();
        Ti.API.info(win);
        Ti.API.info("selected:" + detailWindow._nama);
    });
    loadPartai();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;