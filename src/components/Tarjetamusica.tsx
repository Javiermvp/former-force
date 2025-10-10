import { Song } from "../types/song"


export default function (props: props) {
    return (
    <div className="flex items-center">
        <img  className="w-26 rounded" src="{props.cancion.imagen.url" alt="" />
        <div>
            <h3>{props.cancion.title}</h3>
            <p>{props.cancion.author}</p>
        </div>
    </div>
    )
}

interface props {
cancion: Song
}