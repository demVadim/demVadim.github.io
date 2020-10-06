"use strict";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight);
const renderer = new THREE.WebGLRenderer();

///

scene.background = new THREE.Color();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 5;


///



const material1 = new THREE.MeshBasicMaterial({color: 0xC7A5D4});
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(cubeGeometry,material1);
scene.add(cube);

scene.add(new THREE.AmbientLight(0xF7F7F7));


///
function animate(){
	requestAnimationFrame(animate);
	renderer.render(scene, camera);

	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;
}

animate();

