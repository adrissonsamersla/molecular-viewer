import Atom from './Atom.js';

class Hydrogen extends Atom {
    // H => 53pm
    static radiusH = 53
    static internalGeo = new THREE.SphereBufferGeometry( Hydrogen.radiusH / 3, 100, 100 );
    static externalGeo = new THREE.SphereBufferGeometry( Hydrogen.radiusH, 100, 100 );
    static color = 0xFFFFFF;

    constructor () {
        super(Hydrogen.internalGeo, Hydrogen.externalGeo, Hydrogen.color, Hydrogen.color);
    }
}

export default Hydrogen;
