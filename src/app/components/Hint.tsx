interface HintProps{
    imgSrc: string,
    text: string
}

export default function Hint({imgSrc, text}:HintProps) {
    return(
        <div className="flex flex-col rounded-2xl bg-additionalGround w-32 h-28 overflow-visible">
            <img className="max-w-14 max-h-14 mx-auto mt-3" src={imgSrc}></img>
            <p className="text-center w-fit h-fit" >{text}</p>
        </div>
    ) 
}