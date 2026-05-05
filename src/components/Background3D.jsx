import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Background3D = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-30 overflow-hidden">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars 
                    radius={40} 
                    depth={35} 
                    count={800} 
                    factor={2.5} 
                    saturation={1} 
                    fade 
                    speed={0.2} 
                />
                <ambientLight color="#22d3ee" intensity={0.4} />
            </Canvas>
        </div>
    );
};

export default Background3D;