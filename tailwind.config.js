/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
 theme: {
  extend: {
    colors: {
      bg: '#7177FF',
      main: '#1e1818',
      mainAccent: '#B0C0FD', // not needed for shadcn
      text:'#1e1818',
      heart:'#B31C19',
      golden:'#FBD475',
      accent:'#E8E5E5'
    },
    borderRadius: {
      base: '5px'
    },
    boxShadow: {
      base: '4px 4px 0px 0px rgba(0,0,0,1)',
    },
    translate: {
      boxShadowX: '6px',
      boxShadowY: '6px',
    },
    fontWeight: {
      base: '500',
      heading: '700',
    },
    fontFamily:{
        display:['"04b"'],
        body:['"sora"']
      },
  }
},
  plugins: [],
}

