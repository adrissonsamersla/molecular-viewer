class Atom {
    constructor(internalGeo, externalGeo, internalColor = 0x000000, externalColor = 0x000000) {
        const internalMaterial = new THREE.MeshLambertMaterial(
            {
                color: internalColor
            }
        );

        const externalMaterial = new THREE.MeshLambertMaterial(
            {
                color: externalColor,
                transparent: true,
                opacity: 0.5
            }
        );

        this.internal = new THREE.Mesh(internalGeo, internalMaterial);
        this.external = new THREE.Mesh(externalGeo, externalMaterial);

        const group = new THREE.Group();
        group.add(this.internal);
        group.add(this.external);
        this.group = group;
    }

    get position() {
        return this.internal.position;
    }

    setPosition(x, y, z) {
        this.internal.position.set(x, y, z);
        this.external.position.set(x, y, z);
    }
}

export default Atom;
