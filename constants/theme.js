export const COLORS = {
    primary: "#061D3F",
    secondary: "#0166F6",
    tertiary: '#0166F6',

    white: "#FFF",
    gray: 'rgba(5, 4, 33, 0.7)',
    pink: 'rgba(255, 9, 53, 0.05)',
    danger: 'rgba(255, 9, 53, 1)'
};

export const SIZES = {
    base: '8',
    small: '12',
    font: '14',
    medium: '16',
    large: '18',
    extraLarge: '24',
};

export const FONTS = {
    bold: "InterBold",
    semiBold: "InterSemiBold",
    medium: "InterMedium",
    regular: "InterRegular",
    light: "InterLight",
};

export const SHADOWS = {
    light: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    medium: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    dark: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
};
