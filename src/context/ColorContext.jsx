import { createContext, useContext, useState } from 'react';

// array of psychedelic / neo-brutalist background colors
 const cardBackgroundColors = [
    {
        hex: '#DAF5F0',
        inUse: false,
    },
    {
        hex: '#BAFCA2',
        inUse: false,
    },
    {
        hex: '#FDFD96',
        inUse: false,
    },
    {
        hex: '#F8D6B3',
        inUse: false,
    },
    {
        hex: '#FCDFFF',
        inUse: false,
    },
    {
        hex: '#E3DFF2',
        inUse: false,
    },
];

const ColorContext = createContext(cardBackgroundColors);

export const ColorProvider = ({ children }) => {

    // if a color is in use, it shouldn't be used twice
    const [colors, setColors] = useState(cardBackgroundColors);

    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        if (randomColor.inUse) {
            return getRandomColor();
        } else {
            randomColor.inUse = true;
            return randomColor;
        }
    };

    const releaseColor = (color) => {
        color.inUse = false;
    };

    return <ColorContext.Provider value={{ colors, setColors, getRandomColor, releaseColor }}>{children}</ColorContext.Provider>;
};

export const useColor = () => {
    return useContext(ColorContext);
};
