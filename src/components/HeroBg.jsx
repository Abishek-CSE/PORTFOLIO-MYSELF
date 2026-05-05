import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Shape = () => {
    const meshRef = useRef();
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.1;
            meshRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <mesh ref={meshRef} scale={2.5}>
            <icosahedronGeometry args={[2, 0]} />
            <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.18} />
        </mesh>
    );
};

export default function HeroBg() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen overflow-hidden opacity-30">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <Shape />
            </Canvas>
        </div>
    );
}

