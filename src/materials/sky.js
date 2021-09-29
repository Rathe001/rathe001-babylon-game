import { Color3 } from '@babylonjs/core/Maths/math.color';
import { StandardMaterial } from '@babylonjs/core/Materials';
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture';
import { Texture } from '@babylonjs/core/Materials/Textures';
import scene from 'core/scene';

const sky = new StandardMaterial('sky', scene);
sky.backFaceCulling = false;
sky.reflectionTexture = new CubeTexture('/rathe001-babylon-game/images/textures/TropicalSunnyDay', scene);
sky.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
sky.diffuseColor = new Color3(0, 0, 0);
sky.specularColor = new Color3(0, 0, 0);

export default sky;
