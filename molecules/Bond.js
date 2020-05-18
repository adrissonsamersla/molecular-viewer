class Bond {
    static material = new THREE.MeshLambertMaterial({ color: 0x000000 });

    constructor(begin, end, radius) {
        // creating
        const height = begin.position.distanceTo(end.position);
        const geometry = new THREE.CylinderBufferGeometry(radius, radius, height, 100);
        this.mesh = new THREE.Mesh(geometry, Bond.material);

        // positioning
        const originalOrientation = new THREE.Vector3(0, 1, 0);
        const finalOrientation = end.position.clone().sub(begin.position).normalize();

        this.axis = finalOrientation.clone();

        this.mesh.quaternion.setFromUnitVectors(
            originalOrientation,
            finalOrientation
        )

        const translation =
            finalOrientation
                .multiplyScalar(height / 2)
                .add(begin.position);

        this.mesh.position.set(
            translation.x,
            translation.y,
            translation.z
        )

        this.group = new THREE.Group();
        this.group.add(this.mesh);
    }

    get position() {
        return this.mesh.position;
    }
}

export default Bond;
