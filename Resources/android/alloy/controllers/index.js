function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId0 = [];
    $.__views.master = Alloy.createController("master", {
        id: "master"
    });
    $.__views.beritaTab = Ti.UI.createTab({
        window: $.__views.master.getViewEx({
            recurse: true
        }),
        title: "Berita",
        id: "beritaTab",
        icon: "KS_nav_ui.png"
    });
    __alloyId0.push($.__views.beritaTab);
    $.__views.kandidatQuery = Alloy.createController("kandidatQuery", {
        id: "kandidatQuery"
    });
    $.__views.kandidatTab = Ti.UI.createTab({
        window: $.__views.kandidatQuery.getViewEx({
            recurse: true
        }),
        title: "Kandidat",
        id: "kandidatTab",
        icon: "KS_nav_views.png"
    });
    __alloyId0.push($.__views.kandidatTab);
    $.__views.partaiTWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "partaiTWin",
        title: "Partai"
    });
    $.__views.__alloyId2 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Partai",
        id: "__alloyId2"
    });
    $.__views.partaiTWin.add($.__views.__alloyId2);
    $.__views.partaiTab = Ti.UI.createTab({
        window: $.__views.partaiTWin,
        title: "Partai",
        id: "partaiTab",
        icon: "KS_nav_views.png"
    });
    __alloyId0.push($.__views.partaiTab);
    $.__views.tentangWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "tentangWin",
        title: "Tentang"
    });
    $.__views.__alloyId3 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Tentang",
        id: "__alloyId3"
    });
    $.__views.tentangWin.add($.__views.__alloyId3);
    $.__views.tentangTab = Ti.UI.createTab({
        window: $.__views.tentangWin,
        title: "Tentang",
        id: "tentangTab",
        icon: "KS_nav_views.png"
    });
    __alloyId0.push($.__views.tentangTab);
    $.__views.tabGroup = Ti.UI.createTabGroup({
        tabs: __alloyId0,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var isIpad = false;
    var usesNavGroup = false;
    usesNavGroup && (Alloy.Globals.navgroup = $.index);
    $.master.on("detail", function(e) {
        var controller = isIpad ? $.detail : Alloy.createController("detail");
        var win = controller.getView();
        controller.setArticle(e.row.articleUrl);
        usesNavGroup ? Alloy.Globals.navgroup.openWindow(win) : win.open();
    });
    $.tabGroup.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;