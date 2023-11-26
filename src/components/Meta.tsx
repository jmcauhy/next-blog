import Head from 'next/head'

const Meta = () => {
   return (
      <Head>
         <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
         <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
         <link rel="manifest" href="/favicon/site.webmanifest" />
         <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000"/>
         <link rel="shortcut icon" href="/favicon/favicon.ico" />
         <meta name="msapplication-TileColor" content="#000" />
         <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
         <meta name="theme-color" content="#000" />
         <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
         <meta name="description" content="Blog" />
         <meta
            property="og:image"
            content="https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"
         />
      </Head>
   )
}

export default Meta
