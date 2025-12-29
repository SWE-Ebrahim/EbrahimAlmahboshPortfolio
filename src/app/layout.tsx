import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ebrahim Almahbosh | Software Engineer | Full Stack Developer',
  description: 'Full Stack Software Engineer specializing in web development. Explore my portfolio and projects showcasing React, Next.js, and modern web technologies.',
  icons: {
    icon: '/IconsCover.svg',
  },
  keywords: ['Full Stack Developer', 'Software Engineer', 'Ebrahim Almahbosh', 'Web Developer', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Ebrahim Almahbosh' }],
  openGraph: {
    title: 'Ebrahim Almahbosh | Full Stack Developer',
    description: 'Full Stack Software Engineer Portfolio',
    url: 'https://ebrahimalmahbosh.com',
    siteName: 'Ebrahim Almahbosh Portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/IconsCover.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}