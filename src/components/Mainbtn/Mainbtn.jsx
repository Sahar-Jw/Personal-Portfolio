import React from 'react'

export default function Mainbtn({text,style,children,onClick}) {
    return (
        <button className={`${style}`} onClick={onClick}>
            {text}
            {children}
        </button>
    )
}
