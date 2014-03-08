function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    if (Alloy.isTablet) {
        $.__views.master = Alloy.createController("master", {
            id: "master"
        });
        $.__views.detail = Alloy.createController("detail", {
            id: "detail"
        });
        $.__views.index = Ti.UI.iPad.createSplitWindow({
            masterView: $.__views.master.getViewEx({
                recurse: true
            }),
            detailView: $.__views.detail.getViewEx({
                recurse: true
            }),
            id: "index"
        });
        $.__views.index && $.addTopLevelView($.__views.index);
    }
    var __alloyId2 = [];
    $.__views.beritaTab = Ti.UI.createTab({
        window: $.__views.master.getViewEx({
            recurse: true
        }),
        title: "Berita",
        id: "beritaTab",
        icon: "KS_nav_ui.png"
    });
    __alloyId2.push($.__views.beritaTab);
    $.__views.kandidatWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "kandidatWin",
        title: "Kandidat"
    });
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Kandidat",
        id: "__alloyId4"
    });
    $.__views.kandidatWin.add($.__views.__alloyId4);
    $.__views.kandidatTab = Ti.UI.createTab({
        window: $.__views.kandidatWin,
        title: "Kandidat",
        id: "kandidatTab",
        icon: "KS_nav_views.png"
    });
    __alloyId2.push($.__views.kandidatTab);
    $.__views.partaiTWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "partaiTWin",
        title: "Partai"
    });
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Partai",
        id: "__alloyId5"
    });
    $.__views.partaiTWin.add($.__views.__alloyId5);
    $.__views.partaiTab = Ti.UI.createTab({
        window: $.__views.partaiTWin,
        title: "Partai",
        id: "partaiTab",
        icon: "KS_nav_views.png"
    });
    __alloyId2.push($.__views.partaiTab);
    $.__views.tentangWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "tentangWin",
        title: "Tentang"
    });
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Tentang",
        id: "__alloyId6"
    });
    $.__views.tentangWin.add($.__views.__alloyId6);
    $.__views.tentangTab = Ti.UI.createTab({
        window: $.__views.tentangWin,
        title: "Tentang",
        id: "tentangTab",
        icon: "KS_nav_views.png"
    });
    __alloyId2.push($.__views.tentangTab);
    $.__views.tabGroup = Ti.UI.createTabGroup({
        tabs: __alloyId2,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var isIpad = true && Alloy.isTablet;
    var usesNavGroup = true && Alloy.isHandheld || false;
    usesNavGroup && (Alloy.Globals.navgroup = $.index);
    $.master.on("detail", function(e) {
        var controller = isIpad ? $.detail : Alloy.createController("detail");
        var win = controller.getView();
        controller.setArticle(e.row.articleUrl);
        usesNavGroup && Alloy.Globals.navgroup.openWindow(win);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;