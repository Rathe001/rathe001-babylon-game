import 'pepjs';
import { Vector3 } from '@babylonjs/core/Maths/math';
import '@babylonjs/core/Debug/debugLayer';
import '@babylonjs/inspector';
import '@babylonjs/core/Meshes/meshBuilder';
import elCanvas from 'core/elCanvas';
import engine from 'core/engine';
import camera1 from 'cameras/camera1';
import scene from 'core/scene';
import hemisphericLight1 from 'lights/hemisphericLight1';
import grid from 'materials/grid';
import water from 'materials/water';
import sky from 'materials/sky';
import sphere from 'objects/sphere';
import ground from 'objects/ground';
import skybox from 'objects/skybox';
import renderLoop from 'core/renderLoop';
import actionManager from 'core/actionManager';
import actions from 'core/actions';

camera1.setTarget(Vector3.Zero());
camera1.attachControl(elCanvas, true);

hemisphericLight1.intensity = 0.7;

sphere.position.y = 2;
sphere.position.x = 0;
sphere.position.z = 0;
sphere.material = grid;

ground.material = water;

skybox.material = sky;

scene.actionManager = actionManager;
scene.onBeforeRenderObservable.add(actions);

engine.runRenderLoop(() => renderLoop());

window.addEventListener('keydown', (ev) => {
  // Shift+Ctrl+Alt+I
  if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
    if (scene.debugLayer.isVisible()) {
      scene.debugLayer.hide();
    } else {
      scene.debugLayer.show();
    }
  }
});

window.addEventListener('resize', () => {
  engine.resize();
});
