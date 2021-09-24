window.onload = () => {
    Main_scene.setup();
    while (1) {
        Main_scene.update();
        Main_scene.render();
    }
}