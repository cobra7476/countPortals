import * as Plugin from "iitcpluginkit";


class countPortals implements Plugin.Class {

    init() {
        console.log("countPortals " + VERSION);

        // eslint-disable-next-line unicorn/prefer-module
        require("./styles.css");

        alert("hello world");
    }

}

/**
 * use "main" to access you main class from everywhere
 * (same as window.plugin.countPortals)
 */
export const main = new countPortals();
Plugin.Register(main, "countPortals");
