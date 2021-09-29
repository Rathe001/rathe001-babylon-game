import { LavaMaterial } from '@babylonjs/materials';
import { Texture } from '@babylonjs/core/Materials/Textures';
import scene from 'core/scene';

const lava = new LavaMaterial('lava', scene);
lava.noiseTexture = new Texture('/rathe001-babylon-game/images/lava.png', scene);
lava.diffuseTexture = new Texture('/rathe001-babylon-game/images/lava.png', scene);

export default lava;
