import Carbon from '../atoms/Carbon.js';
import Hydrogen from '../atoms/Hydrogen.js';
import Bond from './Bond.js';

class Benzene {
    // C-C => 139pm
    // C-H => 109pm
    static distCC = 139
    static distCH = 109
    static orientations = [
        [0, 0, -1],
        [Math.sin(Math.PI / 3), 0, -Math.cos(Math.PI / 3)],
        [Math.sin(Math.PI / 3), 0, Math.cos(Math.PI / 3)],
        [0, 0, 1],
        [-Math.sin(Math.PI / 3), 0, Math.cos(Math.PI / 3)],
        [-Math.sin(Math.PI / 3), 0, -Math.cos(Math.PI / 3)],
    ];

    groups = {
        ring: null,
        hydrogens: [],
    }

    elements = {
        carbons: [],
        hydrogens: [],
        bonds: [],
    }

    constructor() {
        this._buildRing();
        this._buildHydrogens();

        this.group = new THREE.Group();
        this.group.add(this.groups.ring);
        this.groups.hydrogens
            .forEach((hydrogenGroup) => this.group.add(hydrogenGroup));
    }

    addToScene = (scene) => {
        scene.add(this.group);
    }

    animate = () => {
        this.group.rotation.x += 0.005;
        this.group.rotation.y += 0.01;
    }

    _buildRing = () => {
        this.groups.ring = new THREE.Group();

        this.elements.carbons = Benzene.orientations.map((pos) => {
            const carbon = new Carbon();
            carbon.setPosition(
                pos[0] * Benzene.distCC,
                pos[1] * Benzene.distCC,
                pos[2] * Benzene.distCC
            );

            this.groups.ring.add(carbon.group);
            return carbon;
        })

        for (let i = 0; i < 6; i++) {
            const bond = new Bond(
                this.elements.carbons[i],
                this.elements.carbons[(i + 1) % 6],
                1
            );

            this.groups.ring.add(bond.group);
            this.elements.bonds.push(bond);
        }
    }

    _buildHydrogens = () => {
        for (let i = 0; i < 6; i++) {
            const group = new THREE.Group();

            const hydrogen = new Hydrogen();
            hydrogen.setPosition(
                Benzene.orientations[i][0] * (Benzene.distCH + Benzene.distCC),
                Benzene.orientations[i][1] * (Benzene.distCH + Benzene.distCC),
                Benzene.orientations[i][2] * (Benzene.distCH + Benzene.distCC)
            );

            const bond = new Bond(hydrogen, this.elements.carbons[i], 1);

            group.add(hydrogen.group);
            group.add(bond.group);
            this.groups.hydrogens.push(group);

            this.elements.hydrogens.push(hydrogen);
            this.elements.bonds.push(bond);
        }
    }
}

export default Benzene;
