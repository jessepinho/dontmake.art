import React from 'react'

import App from '../components/App'
import SEO from '../components/seo'

const IndexPage = () => (
  <>
    <SEO
      title="Don't make art!"
      meta={[
        {
          property: 'og:image',
          content: 'https://dontmake.art/og-image.e449db6f.png',
        },
        {
          property: 'og:image:width',
          content: '1401',
        },
        {
          property: 'og:image:height',
          content: '1000',
        },
        {
          property: 'og:image:alt',
          content: "A screenshot of Don't Make Art",
        },
      ]}
    />
    <App />
  </>
)

export default IndexPage
