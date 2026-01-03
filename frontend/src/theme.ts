import { createTheme } from '@mantine/core'

export const theme = createTheme({
  fontFamily:
    'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial',

  primaryColor: 'brand',

  radius: {
    sm: '7px',
    md: '8px',
    lg: '10px',
  },

  shadows: {
    sm: '0 6px 18px rgba(12,15,35,0.06)',
  },

  colors: {
    brand: [
      '#eef4ff',
      '#dbe7ff',
      '#b6d0ff',
      '#8fb6ff',
      '#669aff',
      '#3b7cff',
      '#0f62fe',
      '#0b4ed1',
      '#083aa3',
      '#052675',
    ],
  },
})
