import { WaterMaterial } from '@babylonjs/materials';
import { Texture } from '@babylonjs/core/Materials/Textures';
import { Vector2 } from '@babylonjs/core/Maths/math';
// import { Color3 } from '@babylonjs/core/Maths/math.color';
import scene from 'core/scene';
import sphere from 'objects/sphere';
import skybox from 'objects/skybox';

const water = new WaterMaterial('water', scene);
water.bumpTexture = new Texture('../images/water.jpg', scene);
water.windForce = 3;
water.waveHeight = 0.3;
water.bumpHeight = 0.3;
water.windDirection = new Vector2(1.0, 1.0);
// TODO: experiment with this later
// water.waterColor = new Color3(0.1, 0.1, 0.6);
// water.colorBlendFactor = 2.0;
water.waveLength = 0.1;

water.addToRenderList(sphere);
water.addToRenderList(skybox);

export default water;
