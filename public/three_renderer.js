/* global THREE */

let width = window.innerWidth - 17;
let height = window.innerHeight - 17;

// renderer setup
const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setClearColor( 0x000000, 0 );
renderer.setSize( width, height );
renderer.outputEncoding = THREE.sRGBEncoding;
document.body.appendChild( renderer.domElement );

// camera placement in the scene
let camera = new THREE.PerspectiveCamera( 30.0, width / height, 0.0001, 20.0 );
camera.position.set( 0, 0.002, 0.005 );

const scene = new THREE.Scene();

// controll the lighting of the scene
const light = new THREE.DirectionalLight( 0xffffff );
light.position.set( 1.0, 1.0, 1.0 ).normalize();
scene.add( light );

// import the gltf file

function loadGLTF( modelUrl ) {
    const loader = new THREE.GLTFLoader();
    
    return loader.loadAsync( modelUrl );
}

let currentGLTF = undefined;
let scroll = window.scrollY;

const modelUrl = 'https://cdn.glitch.global/eb8bd69b-8c93-4ffa-941c-f88777d66504/untitled.glb?v=1730044971515';

loadGLTF( modelUrl ).then( ( gltf ) => {
    currentGLTF = gltf;
    scene.add( gltf.scene );

    gltf.scene.scale.set( 0.0001, 0.0001, 0.0001 );
} );

// update
const clock = new THREE.Clock();
clock.start();

function update() {
    width = window.innerWidth - 17;
    height = window.innerHeight - 17;
    scroll = window.scrollY;
    
    camera.updateProjectionMatrix() 
    
    requestAnimationFrame( update );
    renderer.setSize( width, height );
    camera.aspect = width / height;

    const delta = clock.getDelta();

    if ( currentGLTF ) {
        currentGLTF.scene.rotation.x += delta/2;
        currentGLTF.scene.position.y = scroll/100000;
    }
    
    renderer.render( scene, camera );
};
update();