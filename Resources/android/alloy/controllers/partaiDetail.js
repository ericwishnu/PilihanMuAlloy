function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "partaiDetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.partaiDetail = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "partaiDetail"
    });
    $.__views.partaiDetail && $.addTopLevelView($.__views.partaiDetail);
    $.__views.__alloyId12 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId12"
    });
    $.__views.partaiDetail.add($.__views.__alloyId12);
    $.__views.partaiName = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 48
        },
        id: "partaiName"
    });
    $.__views.__alloyId12.add($.__views.partaiName);
    $.__views.partaiLongName = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 28
        },
        id: "partaiLongName"
    });
    $.__views.__alloyId12.add($.__views.partaiLongName);
    $.__views.partaiImage = Ti.UI.createImageView({
        width: 300,
        height: 200,
        id: "partaiImage"
    });
    $.__views.__alloyId12.add($.__views.partaiImage);
    $.__views.partaiWebsite = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "partaiWebsite"
    });
    $.__views.__alloyId12.add($.__views.partaiWebsite);
    $.__views.partaiFacebook = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "partaiFacebook"
    });
    $.__views.__alloyId12.add($.__views.partaiFacebook);
    $.__views.partaiTwitter = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "partaiTwitter"
    });
    $.__views.__alloyId12.add($.__views.partaiTwitter);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.partaiName.text = args._nama;
    $.partaiLongName.text = args._nama_lengkap;
    $.partaiImage.image = args._url_logo_medium;
    $.partaiDetail.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;