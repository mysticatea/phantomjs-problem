/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

var page = require("webpage").create();

page.paperSize = {
    format: "A4",
    orientation: "portrait",
    margin: "0"
};

page.open("source.html", function(status) {
    if (status === "success") {
        // Show pixelated size.
        page.evaluate(function() {
            bb.appendChild(
                document.createTextNode(
                    "width: " + bb.offsetWidth + "px, " +
                    "height: " + bb.offsetHeight + "px"
                )
            );
        });

        page.render("result.pdf", {format: "pdf"});
        phantom.exit(0);
    }
    else {
        console.error("Faild to open: " + status);
        phantom.exit(1);
    }
});
