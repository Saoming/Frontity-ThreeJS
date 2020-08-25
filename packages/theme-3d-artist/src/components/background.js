import React from "react";
import * as THREE from  'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Wolf from "../static/my-wolf.obj";

class ThreeJSBackground extends React.Component {
    componentDidMount () {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.scene = new THREE.Scene();

        // add renderer 
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setClearColor("#263238");
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement);

        //add Camera
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        this.camera.position.z = 8;
        this.camera.position.y = 5;

        //Camera Controls
        const controls = new OrbitControls(this.camera, this.renderer.domElement);

        //LIGHTS
        var lights = [];
        lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
        lights[1] = new THREE.PointLight(0xffffff, 1, 0);
        lights[2] = new THREE.PointLight(0xffffff, 1, 0);
        lights[0].position.set(0, 200, 0);
        lights[1].position.set(100, 200, 100);
        lights[2].position.set(-100, -200, -100);
        this.scene.add(lights[0]);
        this.scene.add(lights[1]);
        this.scene.add(lights[2]);

        // add 3D Models
        this.addModels();

        this.renderScene();
        //start animation
        this.start();
        controls.update();

    }
    addModels() {
        
        //Loading 3D Models
        var objLoader = new OBJLoader();
        objLoader.load(
            "./static/my-wolf.obj",
            object => {
                this.wolf = object;
                this.wolf.position.setY(3); //or  this
                this.wolf.scale.set(0.02, 0.02, 0.02);
                this.scene.add(this.wolf);
              },
              xhr => {
                console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
              },
              // called when loading has errors
              error => {
                console.log("An error happened" + error);
              }
        )
    }

    componentWillUnmount() {
        this.stop();
        this.mount.removeChild(this.renderer.domElement);
    }

    start = () => {
        if (!this.frameId) {
        this.frameId = requestAnimationFrame(this.animate);}
    };

    stop = () => {
        cancelAnimationFrame(this.frameId);
    };

    animate = () => {
    //Animate Models Here
    if (this.wolf) this.wolf.rotation.y += 0.01;
    
    //ReDraw Scene with Camera and Scene Object
    this.frameId = window.requestAnimationFrame(this.animate);

    this.renderScene();
    };

    renderScene = () => {
        if (this.renderer) this.renderer.render(this.scene, this.camera);
    };

    render() {
        return (<div 
            style={{ width: "800px", height: "800px" }}
            ref={mount => { this.mount = mount}}
            />)
    };
};

export default ThreeJSBackground