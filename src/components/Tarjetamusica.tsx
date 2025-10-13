import React from 'react';
import { Song } from '../types/song';
import onclick from 'react';
import { Props } from 'astro';
import { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { type } from 'os';




export default function tarjetamusica(Props: Song) {
    const handerclick = () => {
alert ("reproduciendo" + Props.cancion.Title);
    }


    return (
        <div className='bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4 hover:bg-gray-700 cursor-pointer'
        onClick={handerclick}>

            <img className='w-26 rounded-full 
             src={Props.cancion.image.url} 
             alt={Props.cancion.Title}' 
             />
             <div className='flex-1'>
                <h3 className='text-white text-lg font-semibold>{cancion.Title}</h3>
                 {Props.cancion.Title}</h3>
                <p className="text-gray-400">{Props.cancion.author}</p>
             </div>
        
        
             <div className='text-clack-500'> 
                <FaPlayCircle size={30} className='hover:text-white'/>
        </div>
        </div>
    )

}