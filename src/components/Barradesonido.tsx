import { Song } from "../types/song"
import React from "react"


    
const PlayerBar: React.FC = () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#222',
      padding: '12px 24px',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      color: '#fff',
      zIndex: 100,
    }}>
      {/* Botón de anterior */}
      <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: 18 }}>⏮️</button>
      {/* Botón de reproducir/pausa */}
      <button style={{
        background: '#1db954',
        border: 'none',
        borderRadius: '50%',
        width: 40,
        height: 40,
        color: '#fff',
        fontSize: 22,
        margin: '0 16px',
      }}>▶️</button>
      {/* Botón de siguiente */}
      <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: 18 }}>⏭️</button>
      {/* Barra de progreso */}
      <div style={{ flex: 1, margin: '0 16px', display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: 12, marginRight: 8 }}>0:02</span>
        <input
          type="range"
          min="0"
          max="158"
          defaultValue="2"
          style={{ flex: 1 }}
        />
        <span style={{ fontSize: 12, marginLeft: 8 }}>2:38</span>
      </div>
      {/* Volumen */}
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: 16 }}>
        <span style={{ fontSize: 16, marginRight: 5 }}>🔊</span>
        <input type="range" min="0" max="100" defaultValue="80" />
      </div>
    </div>
  );
  
  export default PlayerBar;