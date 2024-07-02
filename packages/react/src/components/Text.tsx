import { ComponentProps, ElementType } from "react";
import { styled } from "../styles/index";

export const Text = styled('p', {
    fontFamily: '$default',
    lineHeight: '$line1',
    margin: 0,
    color: '$grey800',

    variants: {
        size: {
            displayLarge: {fontSize: '$displayLarge'},
            displaySmall: {fontSize: '$displaySmall'},
            heading1: {fontSize: '$heading1'},
            heading2: {fontSize: '$heading2'},
            heading3: {fontSize: '$heading3'},
            heading4: {fontSize: '$heading4'},
            heading5: {fontSize: '$heading5'},
            heading6: {fontSize: '$heading6'},
            bodyLarge: {fontSize: '$bodyLarge'},
            bodyMedium: {fontSize: '$bodyMedium'},
            bodySmall: {fontSize: '$bodySmall'},
            caption: {fontSize: '$caption'},
            overlineLarge: {fontSize: '$overlineLarge'},
            overlineSmall: {fontSize: '$overlineSmall'},
            actionLarge: {fontSize: '$actionLarge'},
            actionMedium: {fontSize: '$actionMedium'},
            actionSmall: {fontSize: '$actionSmall'},
            utilityDisplay: {fontSize: '$utilityDisplay'},
            utilityHeading: {fontSize: '$utilityHeading'},
            utilityContentLarge: {fontSize: '$utilityContentLarge'},
            utilityContentMedium: {fontSize: '$utilityContentMedium'},
            utilityContent: {fontSize: '$utilityContent'}
        },
    },

    defaultVariants: {
        size: 'bodyMedium',
    }
    
})

export interface TextProps extends ComponentProps<typeof Text> {
    as?: ElementType
}