import { scene, camera, renderer, controls } from './setup.js';
import Benzene from './molecules/Benzene.js';
import Methane from './molecules/Methane.js';

const main = () => {
    // Setting camera
    camera.position.set( 350, 350, 350 );

    // Setting light
    const ambientLight = new THREE.AmbientLight( 0x404040, 1 );
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
    directionalLight.position.set(0, 700, 0);
    scene.add( ambientLight );
    scene.add( directionalLight );

    // adding object
    //const molecule = new Benzene();
    const molecule = new Methane();

    molecule.addToScene(scene);

    // animation
    function animate() { 
        requestAnimationFrame( animate ); 
        controls.update();

        molecule.animate();
        
        //cube.rotation.x += 0.01;
        //cube.rotation.y += 0.01;
        renderer.render( scene, camera ); 
    } 

    animate();
};

export default main;
