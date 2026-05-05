import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function EducationBg() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen overflow-hidden opacity-25">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars radius={42} depth={40} count={700} factor={2.5} saturation={1} fade speed={0.18} />
                <ambientLight color="#fbbf24" intensity={0.7} />
            </Canvas>
        </div>
    );
}