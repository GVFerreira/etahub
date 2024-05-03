import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontFamily: {
      'sans': ['Lato', 'sans-serif']
    },
    extend: {
      screens: {
        hub: '1320px'
      },
      backgroundImage: {
        'about-us-main': "url('/traveling-together.jpg')",
        'about-us': "url('/about-us.jpg')",
        'nosso-hub': "url('/nosso-hub.jpg')",
        'contato': "url('/contato.jpg')"
      },
      colors: {
        "white": "#FFFFFF",
        "darkblue": "#00111F",
        "lightblue": "#0C93DC",
        "hub-blue": "#0065BB",
        "hub-gray": "#CCCCCC"
      },
      spacing: {
        "192": "48rem",
        "328": "82rem"
      },
      fontSize: {
        "h1": "3.5rem"
      }
    }
  },
  plugins: []
}

export default config