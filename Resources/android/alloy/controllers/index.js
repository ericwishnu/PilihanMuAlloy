function Controller() {
    function __alloyId6() {
        $.__views.tabGroup.removeEventListener("open", __alloyId6);
        if ($.__views.tabGroup.activity) $.__views.tabGroup.activity.onCreateOptionsMenu = function(e) {
            var __alloyId5 = {
                id: "menuItem",
                title: "",
                icon: "configure.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.menuItem = e.menu.add(_.pick(__alloyId5, Alloy.Android.menuItemCreateArgs));
            $.__views.menuItem.applyProperties(_.omit(__alloyId5, Alloy.Android.menuItemCreateArgs));
            doClick ? $.__views.menuItem.addEventListener("click", doClick) : __defers["$.__views.menuItem!click!doClick"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function doClick(e) {
        var settingWin = Ti.UI.createWindow({
            title: "Setting"
        });
        var settingTableView = Ti.UI.createTableView({
            title: "settingTableView"
        });
        var accountTableRow = Ti.UI.createTableViewRow({
            title: "Account",
            height: "100dp"
        });
        var accountLabel = Ti.UI.createLabel({
            text: "Account",
            color: "#fff"
        });
        accountTableRow.addEventListener("click", function() {
            alert("ACCOUNT");
        });
        accountTableRow.add(accountLabel);
        var aboutTableRow = Ti.UI.createTableViewRow({
            title: "About",
            height: "100dp"
        });
        var aboutLabel = Ti.UI.createLabel({
            text: "About",
            color: "#fff"
        });
        aboutTableRow.add(aboutLabel);
        aboutTableRow.addEventListener("click", function() {
            alert("ABOUT");
        });
        var data = [];
        data.push(accountTableRow);
        data.push(aboutTableRow);
        settingTableView.data = data;
        settingWin.add(settingTableView);
        settingWin.open();
        Ti.API.info("Menu item clicked: " + e.source.title);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId0 = [];
    $.__views.master = Alloy.createController("master", {
        id: "master"
    });
    $.__views.beritaTab = Ti.UI.createTab({
        window: $.__views.master.getViewEx({
            recurse: true
        }),
        title: "Berita",
        id: "beritaTab"
    });
    __alloyId0.push($.__views.beritaTab);
    $.__views.kandidat = Alloy.createController("kandidat", {
        id: "kandidat"
    });
    $.__views.kandidatTab = Ti.UI.createTab({
        window: $.__views.kandidat.getViewEx({
            recurse: true
        }),
        title: "Kandidat",
        id: "kandidatTab"
    });
    __alloyId0.push($.__views.kandidatTab);
    $.__views.partai = Alloy.createController("partai", {
        id: "partai"
    });
    $.__views.partaiTab = Ti.UI.createTab({
        window: $.__views.partai.getViewEx({
            recurse: true
        }),
        title: "Partai",
        id: "partaiTab"
    });
    __alloyId0.push($.__views.partaiTab);
    $.__views.tentangWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "tentangWin",
        title: "Tentang"
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
        text: "Tentang",
        id: "__alloyId4"
    });
    $.__views.tentangWin.add($.__views.__alloyId4);
    $.__views.tentangTab = Ti.UI.createTab({
        window: $.__views.tentangWin,
        title: "Tentang",
        id: "tentangTab"
    });
    __alloyId0.push($.__views.tentangTab);
    $.__views.tabGroup = Ti.UI.createTabGroup({
        tabs: __alloyId0,
        id: "tabGroup"
    });
    $.__views.tabGroup.addEventListener("open", __alloyId6);
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
    __defers["$.__views.menuItem!click!doClick"] && $.__views.menuItem.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;