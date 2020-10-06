"use strict";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight);
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});

///

scene.background = new THREE.Color();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.set(1, 1, 4);
const orbit = new THREE.OrbitControls(camera);


///



const material1 = new THREE.MeshNormalMaterial();
const cubeGeometry = new THREE.BoxGeometry(4, 4, 0.1);
const cube = new THREE.Mesh(cubeGeometry,material1);
scene.add(cube);

scene.add(new THREE.AmbientLight(0xF7F7F7));


///
function animate(){
	requestAnimationFrame(animate);
	renderer.render(scene, camera);

}

animate();

