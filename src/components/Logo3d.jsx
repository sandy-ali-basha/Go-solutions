import { useCallback, useEffect, useMemo, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useMotionValueEvent } from "framer-motion";
import * as THREE from "three";
import logoModel from "assets/model/3dLogo.glb?url";

const logoMaterial = new THREE.MeshStandardMaterial({
  color: "#FE572A",
  emissive: "#c03d19",
  emissiveIntensity: 0.22,
  roughness: 0.20,
  metalness: 0.30,
});

function Model({ scrollYProgress }) {
  const ref = useRef();
  const { invalidate } = useThree();
  const { scene } = useGLTF(logoModel, false, true);
  const orangeScene = useMemo(() => {
    const clonedScene = scene.clone(true);

    clonedScene.traverse((child) => {
      if (!child.isMesh) return;

      child.material = logoMaterial;
      child.castShadow = false;
      child.receiveShadow = false;
    });

    return clonedScene;
  }, [scene]);

  const applyScroll = useCallback((scroll) => {
    if (!ref.current) return;

    const orbit = Math.sin(scroll * Math.PI * 2.3);

    ref.current.rotation.y = scroll * Math.PI * 4.25;
    ref.current.rotation.x = scroll * Math.PI * 0.35;
    ref.current.rotation.z = orbit * 0.1;
    ref.current.position.x = orbit * 1.5;
    ref.current.position.y = 0.75 - scroll * 1.8;
    ref.current.scale.setScalar(0.72 + Math.sin(scroll * Math.PI) * 0.2);

    invalidate();
  }, [invalidate]);

  useEffect(() => {
    applyScroll(scrollYProgress.get());
  }, [applyScroll, scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", applyScroll);

  return <primitive ref={ref} object={orangeScene} />;
}

export default function Logo3D({ scrollYProgress }) {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.35]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={1.15} />
      <directionalLight position={[2, 2, 5]} intensity={1.25} />

      <Model scrollYProgress={scrollYProgress} />
    </Canvas>
  );
}

useGLTF.preload(logoModel, false, true);
