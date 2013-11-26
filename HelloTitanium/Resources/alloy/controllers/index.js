function Controller() {
    function doClick() {
        alert("Holaa titanium");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId1 = Ti.UI.createView({
        backgroundColor: "#0065B0",
        height: "10%",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        font: {
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontSize: "18dp"
        },
        color: "white",
        text: "HOLAAA TITANIUM!",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        backgroundColor: "#EAEAEA",
        id: "__alloyId3"
    });
    $.__views.index.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createButton({
        borderWidth: 2,
        borderRadius: 4,
        font: {
            fontFamily: "Helvetica",
            fontSize: "24dp",
            fontStyle: "normal",
            fontWeight: "bold"
        },
        width: "70%",
        height: "70dp",
        title: "Alerta",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    doClick ? $.__views.__alloyId4.addEventListener("click", doClick) : __defers["$.__views.__alloyId4!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId4!click!doClick"] && $.__views.__alloyId4.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;