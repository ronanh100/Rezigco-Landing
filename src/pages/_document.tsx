import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          
          {/* Preconnect to domains */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          {/* Load Bricolage Grotesque font - optimized loading */}
          <link 
            rel="preload" 
            href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700&display=swap" 
            as="style" 
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700&display=swap" />
          
          {/* Preload critical assets */}
          <link rel="preload" href="/ziggy_new.png" as="image" type="image/png" />

          {/* Enable DNS prefetching */}
          <meta httpEquiv="x-dns-prefetch-control" content="on" />
          <link rel="dns-prefetch" href="https://cal.com" />
          
          {/* Performance optimization headers */}
          <meta name="theme-color" content="#ffffff" />
          <meta httpEquiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cal.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' https://fonts.gstatic.com;" />

          {/* Preload Ziggy image at document level for earliest possible loading */}
          <link rel="preload" as="image" href="/ziggy_new.png" />
          
          {/* Inline script to start loading image as early as possible */}
          <script dangerouslySetInnerHTML={{
            __html: `
              // Preload Ziggy image as early as possible
              const img = new Image();
              img.src = "/ziggy_new.png";
            `
          }} />
        </Head>
        <body>
          {/* Add an extra preload link in the body, like in production */}
          <link rel="preload" as="image" href="/ziggy_new.png" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument; 