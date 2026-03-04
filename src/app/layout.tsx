import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../styles/globals.css'
import '../styles/sidebar-variants.css'

export const metadata = {
    title: {
        default: 'GIMA Docs',
        template: '%s – GIMA Docs'
    },
    description: 'Sistema de Gestión Integral de Mantenimiento y Activos',
    icons: {
        icon: '/favicon.ico',
    },
}

const navbar = (
    <Navbar
        logo={
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="/logo.svg" alt="GIMA Logo" style={{ height: '32px' }} />
                <span style={{ fontWeight: 600, fontSize: '1rem', letterSpacing: '-0.02em', color: 'var(--gima-text-primary)' }}>
                    GIMA <span style={{ fontWeight: 400, opacity: 0.5 }}>Docs</span>
                </span>
            </div>
        }
        projectLink="https://github.com/jose-miserol/gima-docs/"
    />
)

const footer = (
    <Footer>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', fontSize: '0.8125rem', opacity: 0.6 }}>
            <span>© {new Date().getFullYear()} GIMA. Built with Nextra.</span>
        </div>
    </Footer>
)

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" dir="ltr" suppressHydrationWarning>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <body className={inter.className}>
                <Layout
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/jose-miserol/gima-docs"
                    footer={footer}
                    sidebar={{ defaultMenuCollapseLevel: 1 }}
                >
                    {children}
                </Layout>
            </body>
        </html>
    )
}
