import * as Plugin from "iitcpluginkit";

class countPortals implements Plugin.Class {

    init() : void {
        console.log("countPortals " + VERSION);

        // eslint-disable-next-line unicorn/prefer-module
        require("./styles.css");

        this.createButtons();

    }

    private createButtons():void {
        $("#toolbox").append(
            $("<a>", {
                text: "Count",
                click: () => this.doCount()
            })
        );

        const toolbarGroup = $("<div>", {class: "leaflet-bar leaflet-control"})
        .append(
            $("<a>")
                .addClass("mybutton leaflet-bar-part")
                .on("click", () => this.doCount())

        );

        const parent = $(".leaflet-top.leaflet-left", window.map.getContainer()).first();
        parent.append(toolbarGroup);
    }

    private doCount(): void {
            alert("Hello World");
    }
}

/**
 * use "main" to access you main class from everywhere
 * (same as window.plugin.countPortals)
 */
export const main = new countPortals();
Plugin.Register(main, "countPortals");
