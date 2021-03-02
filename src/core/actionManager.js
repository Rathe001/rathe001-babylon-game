import { ActionManager } from '@babylonjs/core/Actions/actionManager';
import { ExecuteCodeAction } from '@babylonjs/core/Actions/directActions';
import scene from 'core/scene';
import actionInputMap from 'core/actionInputMap';

const actionManager = new ActionManager(scene);

actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnKeyDownTrigger, ((e) => {
  actionInputMap[e.sourceEvent.key] = e.sourceEvent.type === 'keydown';
})));

actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnKeyUpTrigger, ((e) => {
  actionInputMap[e.sourceEvent.key] = e.sourceEvent.type === 'keydown';
})));

export default actionManager;
