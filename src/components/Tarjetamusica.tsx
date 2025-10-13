import React from 'react';
import { Song } from '../types/song';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import Songbar from '../components/Songbar';
import axios from 'axios';


const canciones  =  await  axios.get ("https://api.institutoalfa.org/api/songs")

interface Props {
    cancion: Song;  
}

export default function Barradesonido(Props: Props) {
    const [isMuted, setIsMuted] = useState(false);

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <img className="w-12 h-12 rounded-full"
                    src={Props.cancion.image.url}
                    alt={Props.cancion.title}
                />
                <div className="flex flex-col">
                    <h3 className="text-white font-semibold">{Props.cancion.title}</h3>
                    <p className="text-gray-400">{Props.cancion.author}</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <IconContext.Provider value={{ size: '1.5em' }}>
                    {isMuted ? (
                        <FaVolumeMute onClick={toggleMute} />
                    ) : (
                        <FaVolumeUp onClick={toggleMute} />
                    )}
                </IconContext.Provider>
            </div>
        </div>
    );
}