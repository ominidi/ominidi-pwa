import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  TetrahedronGeometry,
  Mesh,
  MeshBasicMaterial,
} from 'three';

const randomNumber = (start, end) => Math.floor(Math.random() * end) + start;

const getRenderer = (width, height) => {
  const renderer = new WebGLRenderer();
  renderer.setSize(width, height);
  return renderer;
};

const getCamera = (fov = 55, ratio) => {
  const camera = new PerspectiveCamera(fov, ratio, 1, 2000);
  camera.position.z = 500;
  return camera;
};

const getScene = () => new Scene();

const getTetra = (radius, detail, color) => {
  const tetra = new Mesh(new TetrahedronGeometry(radius, detail), new MeshBasicMaterial({
    wireframe: true,
    color,
  }));
  tetra.rotation.x = Math.PI * randomNumber(0, 1);
  tetra.rotation.y = Math.PI * randomNumber(1, 2);
  return tetra;
};

const start = (renderer, scene, camera, objs = []) => {
  let lastTime = 0;
  const ANGULAR_SPEED = 0.15;

  return function animate() {
    const time = (new Date()).getTime();
    const timeDiff = time - lastTime;
    const angleChange = ANGULAR_SPEED * timeDiff * 2 * Math.PI / 750;

    /* eslint-disable */
    objs.forEach((obj) => {
      obj.rotation.y += angleChange / randomNumber(4, 5);
      obj.rotation.x += angleChange / randomNumber(11, 12);
    });
    /* eslint-enable */

    lastTime = time;
    renderer.render(scene, camera);
    window.requestAnimationFrame(() => animate());
  };
};

export default {
  getRenderer,
  getCamera,
  getScene,
  getTetra,
  start,
};
