import ExtendedScene3D from "../../classes/base/ExtendedScene3D";
import GameObject from "../../classes/base/GameObject";

export default class Stove extends GameObject {
	constructor(scene: ExtendedScene3D) {
		super(scene, {
			name: "Stove",
			assets: {
				model: "/models/furnature/kitchenStove.glb",
			},
		});
	}

	static create(scene: ExtendedScene3D) {
		return new Stove(scene);
	}
}
