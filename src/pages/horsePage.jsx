import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Horse } from "./components/Horse"; // Path to Horse component

const App = () => {
    return (
        <Canvas>
            {/* Optional: Add lights */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} />
            
            {/* Add the Horse */}
            <Horse />

            {/* Add controls to rotate and zoom the camera */}
            <OrbitControls />
        </Canvas>
    );
};

export default App;
