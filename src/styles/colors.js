export const legacyColors = {
    white: '#fff',
    black: '#000',
    gray: '#444',
    mediumGray: '#a6a6a6',
    lightGray: '#eee',
    turquoiseBright: '#00ffc6',
    turquoiseMed: '#00C3B6',
    aqua: '#1be6d0',
    brightRed: '#ff7070',
    darkRed: '#d0021b',
    persimmon: '#ff644e',
    semiGray: 'rgba(0,0,0,.65)',
    lemonYellow: '#fefc66',
    semiBlack: 'rgba(0, 0, 0, 0.4)',
    gold: '#F0D52D'
}

export const primaryColors = {
    white: '#fff',
    black: '#000'
}

export const uiColors = {
    // pinkish reds
    lightSalmon: '#FFB6AE',
    salmon: '#FF7E79',
    coral: '#FF644E',
    // green
    kiwi: '#56E900',
    // red
    scarlet: '#FF2400',
    // gray
    cloud: '#DBDDDD',
    // gray
    lightGray: 'rgba(0,0,0,.35)'
}

export const accentColors = {
    lightAqua: '#85FFEF',
    aqua: '#17E7CF',
    teal: '#00C3B6',
    lemon: '#FAFF53'
}

const colors = {
    ...primaryColors,
    ...uiColors,
    ...accentColors
}

export const colorNames = Object.keys(colors)

export default colors
