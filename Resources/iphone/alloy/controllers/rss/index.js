function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rss/index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
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
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;