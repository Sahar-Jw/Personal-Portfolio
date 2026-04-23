import React from 'react'

export default function Section({ children, sectionStyle,id }) {
    return (
        <section className={`${sectionStyle}`} id={id}>
            {children}
        </section>
    )
}
