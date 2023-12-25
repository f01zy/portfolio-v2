import Navigation from '@/ui/Navigation/Navigation'
import type { Metadata } from 'next'
import { Inter, Roboto_Serif, Roboto_Slab, Roboto } from 'next/font/google'
import localFont from "next/font/local"
import "@/styles/base.scss"
import Footer from '@/ui/Footer/Footer'
import { Provider } from '@/hooks/provider.hook'

const roboto_serif = Roboto_Serif({ subsets: ['latin'] })
const inter = Inter({ subsets: ["latin"], variable: "--inter" })
const roboto_slab = Roboto_Slab({ subsets: ["latin"], variable: "--roboto-slab" })
const roboto = Roboto({ subsets: ["latin"], variable: "--roboto", weight: ["400", "500", "700", "300"] })

const sugarpunch = localFont({
  src: [
    { path: "../styles/fonts/SugarpunchDEMO.otf" },
  ],
  variable: "--sugarpunch"
})

const organic_relief = localFont({
  src: [
    { path: "../styles/fonts/OrganicRelief.ttf" },
  ],
  variable: "--organic-relief"
})

export const metadata: Metadata = {
  title: '<>Aminov Ali</>',
  description: 'Aminov Ali portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto_serif.className} ${sugarpunch.variable} ${inter.variable} ${roboto_slab.variable} ${roboto.variable} ${organic_relief.variable}`}>
        <Provider>
          <Navigation />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
