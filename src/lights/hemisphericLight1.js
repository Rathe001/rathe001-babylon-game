import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector3 } from '@babylonjs/core/Maths/math';
import scene from 'core/scene';

const hemisphericLight1 = new HemisphericLight('hemisphericLight1', new Vector3(0, 1, 0), scene);

export default hemisphericLight1;
