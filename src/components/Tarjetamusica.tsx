import { Song } from "../types/song"


export default function (props: props) {
    
    // AQUI VOY A ESCRIBIR LA LOGICA DE COMO VA A FUNCIONAR
    
    
    function handlerclick () {
        alert(`Reproduciendo: ${props.cancion.title} - ${props.cancion.author}`);
    }
    
    
    
    return (
    <div className="flex items-center gap-4"> 
        <img  className="w-26 rounded-full" src={props.cancion.image.url} alt="" />
        <div>
            <h3 className="text-lg font-semibold">
            {props.cancion.title}</h3>
            <p>{props.cancion.author}</p>
        </div>
    </div>
    )
}

interface props {
cancion: Song
}