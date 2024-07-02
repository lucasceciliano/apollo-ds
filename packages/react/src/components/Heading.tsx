import { ComponentProps, ElementType } from "react";
import { styled } from "../styles/index";

export const Heading = styled('h2', {
    fontFamily: '$default',
    lineHeight: '$line3',
    margin: 0,
    color: '$grey800',

    variants: {
        size: {
            sm: { fontSize: '$heading6' },
            md: { fontSize: '$heading5'},
            lg: { fontSize: '$heading4'},
            '2xl': { fontSize: '$heading3'},
            '3xl': { fontSize: '$heading2'},
            '4XL': { fontSize: '$heading1'},
            '5xl': { fontSize: '$displaySmall'},
            '6xl': { fontSize: '$displayLarge'},
        },
    },

    defaultVariants: {
        size: 'lg',
    }
    
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
    as?: ElementType
}