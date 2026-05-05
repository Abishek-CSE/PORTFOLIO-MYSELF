import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

export default function AboutBg() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen overflow-hidden opacity-30">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <Sparkles count={500} scale={12} size={2.8} speed={0.15} opacity={0.4} color="#22d3ee" />
            </Canvas>
        </div>
    );
}