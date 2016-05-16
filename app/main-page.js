"use strict";
var observable_array_1 = require("data/observable-array");
var list_view_1 = require("ui/list-view");
var timer = require("timer");
function onPageLoaded(args) {
    var page = args.object;
    var array = new observable_array_1.ObservableArray();
    var listView = page.getViewById("listview");
    array.push({ title: "Title1", src: 'res://icon' });
    array.push({ title: "Title2", src: 'res://icon' });
    listView.on(list_view_1.ListView.itemTapEvent, function (args) {
        var tappedItemIndex = args.index;
        var tappedItemView = args.view;
        timer.setInterval(function () {
            console.log("test setinterval listview tap");
        }, 1000);
    });
    page.bindingContext = { myItems: array };
}
exports.onPageLoaded = onPageLoaded;
function onTap(args) {
    timer.setInterval(function () {
        console.log("test setinterval button tap");
    }, 1000);
}
exports.onTap = onTap;
//# sourceMappingURL=main-page.js.map