const scene = new THREE.Scene(); 

const camera = new THREE.PerspectiveCamera( 
    75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 

const domElem = document.getElementById("mycanvas");

const renderer = new THREE.WebGLRenderer( {
    canvas: domElem,
    alpha: true,
    antialias: true,
}); 
renderer.setSize( window.innerWidth, window.innerHeight );

const controls = new THREE.OrbitControls( camera, domElem );

const axesHelper = new THREE.AxesHelper( 75 );
scene.add( axesHelper );

export {
    scene,
    camera,
    renderer,
    controls,
};
