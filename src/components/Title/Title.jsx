
export default function Title({ title, subTitle, divStyle, titleStyle, subTitleStyle,span,spanStyle }) {
    return (
        <div className={`title ${divStyle}`}>
            <h1 className={`${titleStyle}`}>
                {title}
            </h1>
            <p className={`${subTitleStyle} `}>
                {subTitle}
                <span className={`${spanStyle}`}>
                    {span}
                </span>
            </p>
        </div>
    )
}
