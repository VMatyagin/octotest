import App from 'next/app'
import { BasicTheme } from '../ui/utills/styles'
import { ThemeProvider } from 'styled-components'

const theme = BasicTheme

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
