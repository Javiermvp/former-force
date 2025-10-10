import { Song } from "../types/song"
import { FaPlayCircle } from 'react-icons/fa';


export default function (props: props) {
    
    // AQUI VOY A ESCRIBIR LA LOGICA DE COMO VA A FUNCIONAR
    
    
    function handlerclick () {
        alert(`Reproduciendo: ${props.cancion.title} - ${props.cancion.author}`);
    }
    
    
    
    return (
    <div className="flex items-center gap-4"
    onClick={handlerclick}>
        <img  className="w-26 rounded-full" src={props.cancion.image.url} alt="" />
        <div className="flex-1">
            <h3 className="text-lg font-semibold">
            {props.cancion.title}</h3>
            <p>{props.cancion.author}</p>
        </div>
        <div className="text-black">

        <FaPlayCircle size={24}
        className="hover:text-white" />
        </div>
    </div>
    )
}

interface props {
cancion: Song
}