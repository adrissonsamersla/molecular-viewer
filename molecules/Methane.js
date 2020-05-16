import Carbon from '../atoms/Carbon.js';
import Hydrogen from '../atoms/Hydrogen.js';
import Bond from './Bond.js';

class Methane {
    // C-H => 109pm
    static distCH = 109;

    groups = {
        carbon: null,
        hydrogens: [],
    }

    elements = {
        carbons: [],
        hydrogens: [],
        bonds: [],
    }

    constructor () {
        this.group = new THREE.Group();

        this._buildCarbon();
        this._buildHydrogens();

        this.group = new THREE.Group();
        this.group.add(this.groups.carbon);
        this.groups.hydrogens
            .forEach((hydrogenGroup) => this.group.add(hydrogenGroup));
    }

    addToScene = (scene) => {
        scene.add(this.group);
    }

    animate = () => {
        this.group.rotation.x += 0.005;
        this.group.rotation.y += 0.01;

        const angle = 0.05;
        this.group.rotateOnAxis(this.elements.bonds[0].axis, angle);
        this.groups.hydrogens[0].rotateOnAxis(this.elements.bonds[0].axis, -angle);
    }

    _buildCarbon = () => {
        const carbon = new Carbon();
        this.groups.carbon = new THREE.Group();

        this.groups.carbon.add(carbon.group);
        this.elements.carbons.push(carbon);
    }

    _buildHydrogens = () => {
        for (let i = 0; i < 4; i++)
            this.elements.hydrogens.push(new Hydrogen());

        const position = new THREE.Vector3( 0, Methane.distCH, 0 );
        this.elements.hydrogens[0].setPosition( position.x, position.y, position.z);

        let angle = (109 / 180) * Math.PI;
        position.applyAxisAngle(new THREE.Vector3( 0, 0, 1 ), -angle);
        this.elements.hydrogens[1].setPosition( position.x, position.y, position.z );

        angle = (2 / 3) * Math.PI;
        position.applyAxisAngle(new THREE.Vector3( 0, 1, 0 ), angle);
        this.elements.hydrogens[2].setPosition( position.x, position.y, position.z );

        angle = (2 / 3) * Math.PI;
        position.applyAxisAngle(new THREE.Vector3( 0, 1, 0 ), angle);
        this.elements.hydrogens[3].setPosition( position.x, position.y, position.z );

        this.elements.hydrogens.forEach((hydrogen) => {
            const bond = new Bond(this.elements.carbons[0], hydrogen, 1);

            const group = new THREE.Group();
            group.add(bond.group);
            group.add(hydrogen.group);

            this.groups.hydrogens.push(group);
            this.elements.bonds.push(bond);
        });
    }
}

export default Methane;
