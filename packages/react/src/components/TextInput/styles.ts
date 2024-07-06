import { styled } from "../../styles";

export const TextInputContainer = styled('div', {
    backgroundColor: '$white',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px solid $obsidian200',
    display: 'flex',
    alignItems: 'center',

    variants: {
        size:{
            sm:{
                padding: '$space100',
            },
            md:{
                padding: '$space150',
            },
        },
    },

    '&:has(input:focus)': {
        border: '2px solid $blueSpark600'
    },

    '&:has(input:disabled)': {
        opacity: 0.5,
        cursor: 'not-allowed',
    },

    defaultVariants: {
        size: "md",
    }
})

export const Prefix = styled('span', {
    fontFamily: '$default',
    fontSize: '$bodyMedium',
    color: '$obsidian600',
    fontWeight: 'regular'
})

export const Input = styled('input', {
    fontFamily: '$default',
    fontSize: '$bodyMedium',
    color: '$black100',
    fontWeight: 'regular',
    background: 'transparent',
    border: 0,
    width: '100%',

    '&:focus': {
        outline: 0,
    },

    '&:disabled': {
        cursor: 'not-allowed',
    },

    '&::placeholder': {
        color: '$obsidian400'
    }
})