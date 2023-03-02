import { Html, Head, Main, NextScript } from 'next/document'

const title = 'Dune Pro Wizards'
const description = 'Upgrade your Dune Analytics experience with Dune Pro Wizards! This must-have Chrome extension makes the query editor bigger, improves styles, and lets you view results in a separate modal window.'

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
        <meta name="og:image" content="https://dunewizards.xyz/images/og.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
