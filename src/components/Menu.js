import React, { useState } from 'react';
import { useStore } from "../hooks/useStore";
import './Minecraft.css';
import image from './image.png'; // Adjust the path accordingly


export const Menu = () => {
    const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld]);
    const [showHowToPlay, setShowHowToPlay] = useState(true);

    return (
        <div className={`menu absolute ${showHowToPlay ? 'how-to-play-background' : ''}`}>
            {showHowToPlay ? (
                <div className="how-to-play centered-content">
                    <img src={image} alt="How to Play" style={{ width: '200px', height: 'auto' }} />
                    <p>Move with WASD</p>
                    <p>Number 1-5 to switch blocks</p>
                    <p>Left click to add a block</p>
                    <p>ALT + Left click to remove a block</p>

                    <button onClick={() => setShowHowToPlay(false)} style={{ fontSize: '16px', padding: '10px 20px' }}>I Understand</button>
                </div>
            ) : (
                <>
                    <button onClick={() => saveWorld()}>Save</button>
                    <button onClick={() => resetWorld()}>Reset</button>
                    <div className="version-info">Basecraft 0.3 (beta)</div>
                </>
            )}
        </div>
    );
};
