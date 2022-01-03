import { baseStyle, extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const fonts = {
    heading: "Lexend",
    body: "Lexend",
}

const breakpoints = createBreakpoints({
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "80em",
})

const colors = {
    brand: {
        "standartGreen": "#359740",
        "hoverGreen": "#2BB159",
        "activeGreen": "#4FA083",
        "text_primary": "#1F2533",
        "text_secondary": "#70737C",
        "primary_color": "#4FA083",
        "green_brand": "#359740",
        "light_grey_stroke": "#EFEFEF",
        "light_geen": "#EAF1EB",
        "yellow": "#FFCF55",
        "danger": "#E55C5C",
        "hover": "#2BB159"
    }
}

const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: "#fff",
                fontSize: "16px"
            },
        },
    },
    components: {
        IconButton: {
            baseStyle: {
                borderRadius: "8px",
                padding: "12px",
                backgroundColor: "#fff",
                _hover: {
                    bg: "#359740",
                },
                _active: {
                    bg: "#359740",
                    border: "1px solid #359740"
                }
            },
            // variants: {
            //     outline: {
            //         border: "1px solid",
            //         borderColor: "black",
            //     },
            //     secondary: {
            //         bg: "#fff",
            //         padding: "12px",
            //         border: "1px solid black",
            //         _hover: {
            //             // bg: "rgba(53, 151, 64, 0.08)",
            //             bg: "#359740",
            //         },
            //         _active: {
            //             bg: "#359740",
            //             border: "1px solid #359740"
            //         }
            //     }
            // }
        },
        Button: {
            baseStyle: {
                borderRadius: "8px",
            },
            variants: {
                primary: {
                    bg: colors.brand.standartGreen,
                    fontWeight: "normal",
                    color: "#fff",
                    _hover: {
                        bg: colors.brand.hoverGreen,
                    },
                    _active: {
                        bg: colors.brand.activeGreen,
                    }
                },
                secondary: {
                    bg: "#fff",
                    color: colors.brand.green_brand
                },
                outlined: {
                    border: "2px solid",
                    borderColor: colors.brand.light_grey_stroke,
                    color: colors.brand.text_primary,
                    fontSize: "14px",
                    padding: "20px",
                    fontWeight: "400",
                    _hover: {
                        bg: colors.brand.light_grey_stroke
                    }
                },
            },
        },
        Link: {
            baseStyle: {
                color: colors.brand.text_secondary,
                textTransform: "uppercase",
                fontSize: "14px",
                _hover: {
                    color: colors.brand.text_primary,
                    textDecoration: "none"
                }
            }
        },
        Input: {
            baseStyle: {
                field: {
                    borderColor: "#EFEFEF",
                    borderWidth: 1,
                    borderRadius: "70px !important",
                }
            },
            sizes: {},
            variants: {},
            defaultProps: {
                variant: null // null here
            }
        }
    },
    fonts,
    breakpoints,
    colors
})

export default theme
