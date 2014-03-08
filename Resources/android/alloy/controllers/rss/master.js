function Controller() {
    function __alloyId15() {
        $.__views.master.removeEventListener("open", __alloyId15);
        if ($.__views.master.activity) $.__views.master.activity.onCreateOptionsMenu = function(e) {
            var __alloyId14 = {
                title: "Refresh",
                icon: "/refresh_icon.png",
                id: "__alloyId13"
            };
            $.__views.__alloyId13 = e.menu.add(_.pick(__alloyId14, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId13.applyProperties(_.omit(__alloyId14, Alloy.Android.menuItemCreateArgs));
            refreshRss ? $.__views.__alloyId13.addEventListener("click", refreshRss) : __defers["$.__views.__alloyId13!click!refreshRss"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rss/master";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.master = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        title: "RSS Reader",
        id: "master"
    });
    $.__views.master && $.addTopLevelView($.__views.master);
    $.__views.master.addEventListener("open", __alloyId15);
    $.__views.header = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "RSS Reader",
        id: "header"
    });
    $.__views.table = Ti.UI.createTableView({
        headerView: $.__views.header,
        id: "table"
    });
    $.__views.master.add($.__views.table);
    openDetail ? $.__views.table.addEventListener("click", openDetail) : __defers["$.__views.table!click!openDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId13!click!refreshRss"] && $.__views.__alloyId13.addEventListener("click", refreshRss);
    __defers["$.__views.refreshButton!click!refreshRss"] && $.__views.refreshButton.addEventListener("click", refreshRss);
    __defers["$.__views.table!click!openDetail"] && $.__views.table.addEventListener("click", openDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;