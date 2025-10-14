import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import type { Song } from '../types/song';

interface Props {
    cancion: Song
}


export default function tarjetamusica(props: Props) {
    const handerclick = () => {
        alert("reproduciendo" + props.cancion.title);
    }


    return (
        <div className='bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4 hover:bg-gray-700 cursor-pointer' onClick={handerclick}>

            <img className='w-26 rounded-full' 
             src={props.cancion.image.url} 
             alt={props.cancion.title} 
             />
             <div className='flex-1'>
                <h3 className='text-white text-lg font-semibold'>{props.cancion.title}</h3>
                <p className="text-gray-400">{props.cancion.author}</p>
             </div>
        
        
             <div className='text-clack-500'> 
                <FaPlayCircle size={30} className='hover:text-white'/>
            </div>
        </div >
    )

}