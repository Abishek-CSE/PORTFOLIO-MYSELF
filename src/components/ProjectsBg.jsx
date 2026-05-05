import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const GlowingRing = ({ radius, speed, rotationOffset, color }) => {
    const ringRef = useRef();
    useFrame((state, delta) => {
        if (ringRef.current) {
            ringRef.current.rotation.x += delta * speed;
            ringRef.current.rotation.y += delta * (speed * 0.5);
        }
    });
    return (
        <mesh ref={ringRef} rotation={rotationOffset}>
            <torusGeometry args={[radius, 0.02, 16, 100]} />
            <meshBasicMaterial color={color} transparent opacity={0.2} wireframe />
        </mesh>
    );
};

const Rings = () => (
    <group position={[0, 0, -5]}>
        <GlowingRing radius={3} speed={0.2} rotationOffset={[0, 0, 0]} color="#22d3ee" />
        <GlowingRing radius={5} speed={-0.15} rotationOffset={[Math.PI / 4, 0, 0]} color="#fbbf24" />
        <GlowingRing radius={7} speed={0.1} rotationOffset={[0, Math.PI / 3, 0]} color="#67e8f9" />
    </group>
);

export default function ProjectsBg() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen overflow-hidden opacity-25">
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
                <Rings />
            </Canvas>
        </div>
    );
}