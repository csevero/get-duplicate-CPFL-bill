import React from 'react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

/*
documento foi copiado do site https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.js. Onde é um exemplo do próprio styled components, para que nosso site, seja renderizado já com as estilizações aplicadas, pois por padrão o next carregaria o site e depois aplicaria os styles, com essas configurações ele já aplica durante a renderização.
Foi adicionado tipos
*/
export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  //o conteúdo abaixo adicionamos para definirmos conteúdos para todas as páginas da aplicação, por exemplo, fontes, ou outras coisas necessárias, aqui não aceita title, ou coisas dessa forma, pois aqui é um arquivo de configuração global
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link ref="icon" rel="favicon.ico" />
          <meta name="language" content="pt-BR" />
          <meta
            name="description"
            content="Esse site vai te ajudar a pegar o código de barras da sua conta de energia de forma simples!"
          />
          <meta name="robots" content="all" />
          <meta name="author" content="Carlos Eduardo Severo" />
          <meta
            property="og:description"
            content="Esse site vai te ajudar a pegar o código de barras da sua conta de energia de forma simples!"
          />
        </Head>
        <script src="https://unpkg.com/react@16.0.0/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-copy-to-clipboard/build/react-copy-to-clipboard.js"></script>
        <body>
          {/* dentro do main é onde será renderizado o conteúdo da nossa página */}
          <Main />
          {/* aqui é onde será aplicativo os scripts que dão vida a nossa aplicação */}
          <NextScript />
        </body>
      </Html>
    )
  }
}
