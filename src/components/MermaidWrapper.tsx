'use client'

import dynamic from 'next/dynamic'

const Mermaid = dynamic(() => import('./Mermaid'), { ssr: false })

export default function MermaidWrapper(props: any) {
    return <Mermaid {...props} />
}
