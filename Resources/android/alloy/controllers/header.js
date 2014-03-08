function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "header";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createView({
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.back = Ti.UI.createView({
        id: "back"
    });
    $.__views.container.add($.__views.back);
    $.__views.backImage = Ti.UI.createImageView({
        id: "backImage"
    });
    $.__views.back.add($.__views.backImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.back.addEventListener("click", function() {
        $.back.enabled && $.trigger("back");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;