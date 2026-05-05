import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
    const ref = useRef();
    const positions = useMemo(() => {
        const temp = [];
        for (let i = 0; i < 600; i++) {
            const x = (Math.random() - 0.5) * 30;
            const y = (Math.random() - 0.5) * 30;
            const z = (Math.random() - 0.5) * 10;
            temp.push(x, y, z);
        }
        return new Float32Array(temp);
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta * 0.05;
            ref.current.rotation.y -= delta * 0.02;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial transparent color="#f59e0b" size={0.1} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
        </Points>
    );
};

export default function SkillsBg() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen overflow-hidden opacity-35">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <ParticleField />
            </Canvas>
        </div>
    );
}

