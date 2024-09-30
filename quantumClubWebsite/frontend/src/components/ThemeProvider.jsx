'use client'
import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

const CustomThemeProvider = ({ children, ...props }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export default CustomThemeProvider
