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

const banner = (
    <Banner storageKey="gima-preview-1">
        🚀 GIMA Docs - Versión Preview
    </Banner>
)

const navbar = (
    <Navbar
        logo={
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="/logo.svg" alt="GIMA Logo" style={{ height: '32px' }} />
                <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>
                    <span style={{ color: '#0066FF' }}>GIMA</span> Docs
                </span>
            </div>
        }
        projectLink="https://github.com/jose-miserol/gima-docs/"
    />
)

const footer = (
    <Footer>
        <span>
            © {new Date().getFullYear()}{' '}
            <strong style={{ color: '#10b981' }}>GIMA Docs</strong>. Built with Nextra.
        </span>
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
                    banner={banner}
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/your-org/max-attendance-control/edit/main/apps/website2"
                    footer={footer}
                    sidebar={{ defaultMenuCollapseLevel: 1 }}
                    toc={{ title: 'En esta página' }}
                    editLink="Editar esta página →"
                    feedback={{ content: '¿Preguntas? Envíanos feedback →' }}
                >
                    {children}
                </Layout>
            </body>
        </html>
    )
}
