
import { Song } from "../types/song"
import { FaPlayCircle } from 'react-icons/fa';
import React from "react";
import { Axios } from "axios";
import  tarjetamusica  from "../components/Tarjetamusica";

    interface song  {
    title: string;
    author: string;
    image: {
        url: string;
    }
}

interface Props  {
    cancion: song;
};



export default function Tarjetamusica(Props: Props) {
    const handleclick = () => {
        alert(`Reproduciendo: $Props.cancion.title} - ${Props.cancion.author}`);
    }
    
    return (
    <div className="flex items-center gap-4 relative p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer"
        onClick={handleclick}
    >
        <img className="w-26 rounded-full"
        src={Props.cancion.image.url}
        alt={Props.cancion.title}
        />
        <div className="flex flex-col">
        <h3 className="text-white font-semibold">{Props.cancion.title}</h3>
        <p className="text-gray-400">{Props.cancion.author}</p>
        </div>
        
        
        <div className="text-black">
        <FaPlayCircle size={24} className="hover:text-white" />
        </div>
    </div>
)
}
 


interface props {
    cancion: Song;
    
     }

     <style>

     </style>