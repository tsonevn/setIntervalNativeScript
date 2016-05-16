import {ObservableArray}  from "data/observable-array";
import {EventData} from "data/observable";
import { ListView, ItemEventData } from "ui/list-view";
import {Page} from "ui/page";
var timer = require("timer");
export function onPageLoaded(args:EventData) {
  var page:Page =<Page> args.object;
  var array = new ObservableArray();
  
  var listView =page.getViewById("listview");

  array.push({title: "Title1", src: 'res://icon'});
  array.push({title: "Title2", src: 'res://icon'});


    listView.on(ListView.itemTapEvent, function (args: ItemEventData) {
        var tappedItemIndex = args.index;
        var tappedItemView = args.view;
         timer.setInterval(() => {
            console.log("test setinterval listview tap");
        }, 1000);
    });


  page.bindingContext = {myItems: array};
}
export function onTap(args: EventData){
  timer.setInterval(() => {
            console.log("test setinterval button tap");
        }, 1000);
}