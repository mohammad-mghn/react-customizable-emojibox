/* eslint-disable prettier/prettier */
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root{
        --background:${({ theme }) => theme.background};
        --borderColor:${({ theme }) => theme.borderColor};
        --iconColor:${({ theme }) => theme.iconColor};
        --activeIconColor:${({ theme }) => theme.activeIconColor};
        --searchInputBC:${({ theme }) => theme.searchInputBC};
        --searchInputColor:${({ theme }) => theme.searchInputColor};
    }
`
