import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineWorld() {

  const objectToAnimate = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName('Cube');
    // save the object in a ref for later use
    objectToAnimate.current = obj;
  }

  function triggerAnimation() {
    objectToAnimate.current.emitEvent('mouseHover');
  }

  return (
    <Spline scene="https://prod.spline.design/qQdLTNUyLguIvRWh/scene.splinecode" />
  );
}
