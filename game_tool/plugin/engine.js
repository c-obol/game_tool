import './class.js'

var scene = [];
function init (init_setting, option) {
    if (init_setting) {
        scene.push(new Scene("Main", {"init_setting" : true}))
    }
}


function setup () {
    for (var i = 0; i < scene.length; i++) {
        scene[i].setup();
    }
} 
function update () {
    for (var i = 0; i < scene.length; i++) {
        scene[i].setup();
    }
}
function render () {
    for (var i = 0; i < scene.length; i++) {
        scene[i].setup();
    }
}


function start () {
    setup();
    while (1) {
        update();
        render();
    }
}