'use client'

import React, { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

const Mermaid = ({ chart }: { chart: string }) => {
    const [svg, setSvg] = useState('')
    const id = useRef(`mermaid-${Math.random().toString(36).substr(2, 9)}`).current

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: false,
            theme: 'default',
            securityLevel: 'loose',
            fontFamily: 'inherit',
        })

        if (chart) {
            mermaid.render(id, chart).then(({ svg }) => {
                setSvg(svg)
            }).catch((error) => {
                console.error('Mermaid render error:', error);
                setSvg(`<pre class="text-red-500">${error.message}</pre>`)
            })
        }
    }, [chart, id])

    return (
        <div
            className="mermaid-diagram flex justify-center my-4 overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    )
}

export default Mermaid
