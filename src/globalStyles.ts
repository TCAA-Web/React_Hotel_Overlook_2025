import { css } from '@emotion/react'
import { Theme } from './theme'

export const globalStyles = [
  css`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  `,
  {
    body: { backgroundColor: Theme.colors.secondary },
  },
]
