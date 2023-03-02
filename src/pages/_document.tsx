import { Html, Head, Main, NextScript } from 'next/document'


const GTMHead = () => (
  <script
    dangerouslySetInnerHTML={
      {
        __html: `
          <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P5GSPVG');</script>
        `,
      }
    }
  />
)

const GTMBody = () => (
  <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-P5GSPVG"
      height="0"
      width="0"
      style={{ visibility: 'hidden', display: 'none' }}
    />
  </noscript>
)

const title = 'Dune Pro Wizards'
const description = 'Upgrade your Dune Analytics experience with Dune Pro Wizards! This must-have Chrome extension makes the query editor bigger, improves styles, and lets you view results in a separate modal window.'
const ogImage = 'https://dunewizards.xyz/images/og.jpg'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content={description} />
        <meta name="og:url" content="https://dunewizards.xyz/" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={ogImage} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <GTMHead />
      </Head>
      <body>
        <GTMBody />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
