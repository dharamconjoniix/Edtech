import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import Script from 'next/script';
export const metadata = {
  title: 'Edtech | Education for everyone!',
  description: 'Learning with pride',
}

const clairtyCode = `
(function (c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "kj1e00sic7")`;

export default function RootLayout(
  {
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Script id="ms-clarity" strategy="afterInteractive">
        {clairtyCode}
      </Script>
      </body>
    </html>
  )
}
