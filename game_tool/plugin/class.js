class Scene {
    constructor (name = String, option = Object) {
        this.name = name;

        var init_setting;
        try { init_setting = option.init_setting }
        catch { init_setting = true; }

        try { this.Camera = option.Camera; }
        catch {
            this.Camera = new Sprite();
            if (init_setting) {
                this.Camera = undefined;
            }
        }

        try { this.Stand_Position = option.Stand_Position }
        catch {
            this.Stand_Position = {x : 0, y : 0}
            if (init_setting) {
                this.Stand_Position = undefined;
            }
        }
        
        this.mecro = [
            new Mecro("Main")
        ];
        this.layer = [
            new Layer("First")
        ]
        if (init_setting) {
            this.mecro = {};
            this.layer = {};
        }
    }

    setup () {
        for (var i = 0; i < Object.keys(this.mecro).length; i++) {
            this.mecro[Object.keys(this.mecro)[i]].setup();
        }
        for (var i = 0; i < this.layer.length; i++) {
            this.layer[i].setup();
        }
    }
    update () {
        for (var i = 0; i < Object.keys(this.mecro).length; i++) {
            this.mecro[Object.keys(this.mecro)[i]].update();
        }
        for (var i = 0; i < this.layer.length; i++) {
            this.layer[i].update();
        }
    }
    render () {
        for (var i = 0; i < Object.keys(this.mecro).length; i++) {
            this.mecro[Object.keys(this.mecro)[i]].render();
        }
        for (var i = 0; i < this.layer.length; i++) {
            this.layer[i].render();
        }
    }
}

class Mecro {
    constructor (name = String) {

    }

    setup () {

    }
    update () {

    }
    render () {

    }
}

class Layer {
    constructor (name = String, option = Object) {

    }

    setup () {

    }
    update () {

    }
    render () {

    }
}

class Sprite {
    constructor(name = String, option = Object) {
        this.type = option.type;
        this.position = option.position;
    }

    setup () {

    }
    update () {

    }
    render () {

    }
}