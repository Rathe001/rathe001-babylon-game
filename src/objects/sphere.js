import { IcoSphereBuilder } from '@babylonjs/core/Meshes/Builders/icoSphereBuilder';
import scene from 'core/scene';

const sphere = IcoSphereBuilder.CreateIcoSphere('sphere1', { size: 16 }, scene);

export default sphere;
