import actionInputMap from 'core/actionInputMap';
import sphere from 'objects/sphere';

const actions = () => {
  if (actionInputMap.w) {
    sphere.position.z += 0.1;
  }
  if (actionInputMap.a) {
    sphere.position.x -= 0.1;
  }
  if (actionInputMap.s) {
    sphere.position.z -= 0.1;
  }
  if (actionInputMap.d) {
    sphere.position.x += 0.1;
  }
};

export default actions;
