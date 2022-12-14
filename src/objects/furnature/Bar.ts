import GameObject, { GameObjectOptions } from "../../classes/base/GameObject";

export default class Bar extends GameObject {
	constructor(options: GameObjectOptions) {
		super(options);
	}

	static create() {
		return new Bar({
			name: "Bar",
			assets: {
				model: {
					path: "/models/furnature/kitchenBar.glb",
					scale: 2,
				},
			},
			physics: true,
		});
	}

	createCollisionBox() {
		this.scene?.third.physics.add.existing(this, {
			shape: "mesh",
			collisionFlags: 1,
		});
		this.body.setRestitution(0);
	}
}
