import Atom from './Atom.js';

class Carbon extends Atom {
    // C => 70pm
    static radiusC = 70;
    static internalGeo = new THREE.SphereBufferGeometry(Carbon.radiusC / 3, 100, 100);
    static externalGeo = new THREE.SphereBufferGeometry(Carbon.radiusC, 100, 100);
    static color = 0xC0392B;

    constructor() {
        super(Carbon.internalGeo, Carbon.externalGeo, Carbon.color, Carbon.color);
    }
}

export default Carbon;
