import * as Plugin from "iitcpluginkit";


class CountPortals implements Plugin.Class {

    init() {
        console.log("CountPortals " + VERSION);

        // eslint-disable-next-line unicorn/prefer-module
        require("./styles.css");

        alert("hello world!");
    }

}

/**
 * use "main" to access you main class from everywhere
 * (same as window.plugin.CountPortals)
 */
export const main = new CountPortals();
Plugin.Register(main, "CountPortals");
