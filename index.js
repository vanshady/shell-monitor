require('shelljs/global');

const Jetty = require("jetty");
const jetty = new Jetty(process.stdout);

const command = '';
const timeout = 5000;
const color = 1; // -1: white, 0: black, 1: red, 2: green, 3: yellow, 4: blue
jetty.clear();

(function runCommand() {
    exec(command, function(code, stdout, stderr) {
            if (code != 0) return; // break if error
            jetty.clear();
            jetty.moveTo([0, 0]);
            jetty.rgb(color);
            jetty.text(stdout);
            setTimeout(runCommand, timeout);
        });
}()) // this is a closure
