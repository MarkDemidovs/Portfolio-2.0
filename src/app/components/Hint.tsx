interface HintProps{
    imgSrc: string,
    text: string
}

export default function Hint({imgSrc, text}:HintProps) {
    return(
        <div className="flex flex-col rounded-2xl bg-additionalGround w-32 h-fit overflow-visible">
            <img className="max-w-14 max-h-14 mx-auto mt-3" src={imgSrc}></img>
            <p className="text-center w-auto text-sm px-1 pt-1 pb-2" >{text}</p>
        </div>
    ) 
}