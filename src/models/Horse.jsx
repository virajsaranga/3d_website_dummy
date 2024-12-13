import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import horseScene from "../assets/3d/horse.glb"; // Path to your 3D horse model

export function Horse() {
    const horseRef = useRef();

    // Load the 3D horse model and its animations
    const { scene, animations } = useGLTF(horseScene);

    // Hook to control animations
    const { actions } = useAnimations(animations, horseRef);

    useEffect(() => {
        // Play the "Run" animation (check model's animation names in your GLB file)
        if (actions["Run"]) actions["Run"].play();
    }, [actions]);

    useFrame(({ clock }) => {
        // Simulate a running motion by updating the position
        horseRef.current.position.x += 0.02; // Move forward on the X-axis

        // Optional: Add up-and-down motion to simulate a galloping effect
        horseRef.current.position.y = Math.sin(clock.elapsedTime * 5) * 0.1;
    });

    return (
        <mesh ref={horseRef} position={[-5, 0, 0]} scale={[0.02, 0.02, 0.02]}>
            {/* Render the loaded horse model */}
            <primitive object={scene} />
        </mesh>
    );
}
