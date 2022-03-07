// Tutorial: https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

// global.js -> renamed _themes
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle  } from 'styled-components'
import samskabTheme from './theme.samskab'
import paleTheme from './theme.pale'
import nightTheme from './theme.night'
import darkTheme from './theme.dark'
import omstillingnuTheme from './theme.omstillingnu'
import gnfTheme from './theme.gnf'


function t(c) {
  return {
    body: c.bgColor,
    text: c.textColor,
    toggleBorder: c.primaryDarkColor,
    primaryGradient: `linear-gradient(45deg, ${c.primaryColor}, ${c.primaryDarkColor})`,
    primaryContrastGradient: `linear-gradient(45deg, ${c.primaryColor},${c.primaryDarkColor},${c.primaryContrastColor})`,
    secondaryGradient: `linear-gradient(45deg, ${c.secondaryColor}, ${c.secondaryDarkColor})`,
    secondaryContrastGradient: `linear-gradient(45deg, ${c.secondaryColor}, ${c.secondaryDarkColor},${c.secondaryContrastColor})`,
    primaryColor: c.primaryColor,
    primaryDarkColor: c.primaryDarkColor,
    primaryContrastColor: c.primaryContrastColor || 'red',
    secondaryColor: c.secondaryColor,
    secondaryDarkColor: c.secondaryDarkColor,
    secondaryContrastColor: c.secondaryContrastColor || 'green',

  }
}

const participantsColors = {
  ku: '#901a1e',
  nb: '#1a4443',
  bb: '#9ebc99',
  on: '#a8c350'
}
export const themes = [
  { id: 0, name: 'samskab', theme: t(samskabTheme) },
  {id: 1, name: 'dark', theme: t(darkTheme) },
  { id: 2, name: 'night', theme: t(nightTheme) },
  { id: 3, name: 'pale', theme: t(paleTheme) },
  { id: 4, name: 'gnf', theme: t(gnfTheme) },
  { id: 5, name: 'omstillingNU', theme: t(omstillingnuTheme) },
]

export const themeColors = ({ theme }) => t(theme)

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  h1,h2,h3,h4, button, .themed-title {
    font-family: 'Barlow Condensed', open-sans;
    text-transform: uppercase;
  }
  a {
    color: ${({ theme }) => theme?.text || 'grey'};
  }
  a:hover {
    opacity: .87;
  }
  *:visited {
    color: ${({ theme }) => theme?.text || 'grey'};
  }
  :root {
    --text-color: ${({ theme }) => theme?.text ? theme.text : 'black'};
    --background-color: ${({ theme }) => theme?.body ? theme.body : 'white'};
    --primary-color: ${({ theme }) => theme?.primaryColor ? theme.primaryColor : 'darkgrey'};
    --secondary-color: ${({ theme }) => theme?.secondaryColor ? theme.secondaryColor : 'white'};
    --primary-dark-color: ${({ theme }) => theme?.primaryDarkColor || 'black'};
    --primary-contrast-color: ${({ theme }) => theme?.primaryContrastColor ? theme.primaryContrastColor : 'white'};
    --secondary-dark-color: ${({ theme }) => theme?.secondaryDarkColor || 'grey'};
    --secondary-contrast-color: ${({ theme }) => theme?.secondaryContrastColor ? theme.secondaryContrastColor : 'white'};
    --primary-gradient: ${({ theme }) => theme?.primaryGradient || 'linear-gradient(45deg,black,white)'};
    --secondary-gradient: ${({ theme }) => theme?.secondaryGradient || 'linear-gradient(45deg,white,black)'};
    --primary-contrast-gradient: ${({ theme }) => theme?.primaryContrastGradient || 'linear-gradient(45deg,black,white)'};
    --secondary-contrast-gradient: ${({ theme }) => theme?.secondaryContrastGradient || 'linear-gradient(45deg,white,black)'};
    --color-ku: ${participantsColors.ku};
    --color-bb: ${participantsColors.bb};
    --color-nb: ${participantsColors.nb};
    --color-on: ${participantsColors.on};

  }
  body {
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme?.body};
    color: ${({ theme }) => theme?.text};
    margin: 0;
    padding: 0;
    transition: background 250ms ease-in, color 250ms linear;
  }`
