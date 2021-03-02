import { BoxBuilder } from '@babylonjs/core/Meshes/Builders/boxBuilder';
import scene from 'core/scene';

const skybox = BoxBuilder.CreateBox('skybox', { size: 1500.0 }, scene);
skybox.infiniteDistance = true;
skybox.disableLighting = true;

export default skybox;
