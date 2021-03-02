import { ArcRotateCamera } from '@babylonjs/core/Cameras';
import { Vector3 } from '@babylonjs/core/Maths/math';
import scene from 'core/scene';

const camera1 = new ArcRotateCamera('camera1', 10, 0, 10, new Vector3(10, -6, 20), scene);

export default camera1;
