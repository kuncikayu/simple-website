// Theme configuration from environment variables

export const getTheme = () => {
    const theme = process.env.NEXT_PUBLIC_THEME || 'dark'
    return theme === 'light' ? 'light' : 'dark'
}

export const THEME = getTheme()

export const isLightMode = () => THEME === 'light'
export const isDarkMode = () => THEME === 'dark'
