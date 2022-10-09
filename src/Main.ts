import * as Plugin from "iitcpluginkit";
import myicon from "./icon.svg";


class countPortals implements Plugin.Class {

    init() : void {
        console.log("countPortals " + VERSION);

        // eslint-disable-next-line unicorn/prefer-module
        require("./styles.css");
        $("#toolbox").append(
            $("<a>", {
                text: "Count",
                click: () => this.doCount()
            })
        )

    }

    const toolbarGroup = $("<div>", {class: "leaflet-bar leaflet-control"})
        .append(
            $("<a>")
                .addClass("leaflet-bar-part")
                .css("background-image", 'url("' + myicon + '")')
                .css("background-size", "24px")
                .click(() => this.doCount())

        );

    const parent = $(".leaflet-top.leaflet-left", window.map.getContainer()).first();
    parent.append(toolbarGroup);
    
    doCount(): void {
        alert("Hello World");
    }  

}

/**
 * use "main" to access you main class from everywhere
 * (same as window.plugin.countPortals)
 */
export const main = new countPortals();
Plugin.Register(main, "countPortals");
