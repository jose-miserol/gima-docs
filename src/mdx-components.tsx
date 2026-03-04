import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import MermaidWrapper from './components/MermaidWrapper'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components?: Record<string, React.ComponentType>) {
    return {
        ...docsComponents,
        pre: ({ children, ...props }: any) => {
            const codeEl = children?.props
            const className = codeEl?.className || ''
            if (className.includes('mermaid')) {
                return <MermaidWrapper chart={codeEl.children} />
            }
            return <docsComponents.pre {...props}>{children}</docsComponents.pre>
        },
        ...components,
    }
}
