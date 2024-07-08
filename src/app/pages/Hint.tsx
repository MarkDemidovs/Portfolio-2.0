interface HintProps{
    imgSrc: string,
    text: string
}

export default function Hint({imgSrc, text}:HintProps) {
    return(
        <div className="flex flex-col rounded-2xl bg-additionalGround min-w-24 min-h-24 max-h-32 max-w-32">
            <img src={imgSrc}></img>
            <p className="">{text}</p>
        </div>
    ) 
}