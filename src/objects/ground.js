import { Mesh } from '@babylonjs/core/Meshes/mesh';
import scene from 'core/scene';

const ground = Mesh.CreateGround('ground1', 512, 512, 32, scene);

export default ground;
