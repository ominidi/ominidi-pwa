import React from 'react';
import PropTypes from 'prop-types';
import Triangles from './animation/Triangles';

/**
 * Render a canvas where the animation will be paint.
 * @author Gabriele D'Arrigo <darrigo.g@gmail.com>
 */
export default class Imaginery extends React.Component {
  renderCanvas(el) {
    const { getRatio } = this.props;
    const {
      width,
      height,
      ratio,
      isMobile,
    } = getRatio();

    const scene = Triangles.getScene();
    const camera = Triangles.getCamera((isMobile ? 30 : 75), ratio);
    const renderer = Triangles.getRenderer(width, height);
    const shapes = [
      Triangles.getTetra(width / 1.7, 2, '#FFFFFF'),
      Triangles.getTetra(width / 1.6, 1, '#EFEFEF'),
      Triangles.getTetra(width / 1.5, 2, '#95989A'),
      Triangles.getTetra(width / 1.4, 1, '#2E2E2E'),
    ];

    shapes.forEach((shape) => {
      scene.add(shape);
    });

    el.appendChild(renderer.domElement);
    Triangles.start(renderer, scene, camera, shapes)();

    window.addEventListener('resize', () => {
      /* eslint-disable */
      const {
        width,
        height,
        ratio,
      } = getRatio();
       /* eslint-enable */

      camera.aspect = ratio;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }, false);
  }

  render() {
    return (
      <figure className="masthead__picture imaginery" ref={(el) => { this.renderCanvas(el); }} />
    );
  }
}

Imaginery.propTypes = {
  getRatio: PropTypes.func.isRequired,
};
