import { ComponentProps } from "react";
import { styled } from "../styles";

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

export const TextArea = styled('textarea', {
    backgroundColor: '$white',
    padding: '$space150',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px solid $obsidian200',

    fontFamily: '$default',
    fontSize: '$bodyMedium',
    color: '$black',
    fontWeight: '$regular',
    resize: 'vertical',
    minHeight: 80,
    

    '&:focus': {
        border: '2px solid $blueSpark600',
        outline: 0,
    },

    '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
    },

    '&:placeholder': {
        color: '$obsidian400',
    }
})