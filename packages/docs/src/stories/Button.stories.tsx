import { Button, ButtonProps } from '@apollo-ds/react'
import { StoryObj, Meta } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'


export default {
    title: 'Components/Button',
    component: Button,

    args: {
        children: 'Send',
        variant: 'primary',
        size: 'md',
        disabled: false,
    },

    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: {
               type: 'inline-radio',
            },
        },

        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio',
            }
        },

        disabled: {
            type: 'boolean',
        },

        onClick: {
            action: 'click',
        }
    }

} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary',
        children: 'Create'
    }
}

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary',
        children: 'Cancel'
    }
}

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm',
    }
}

export const Large: StoryObj<ButtonProps> = {
    args: {
        size: 'lg',
    }
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true,
    }
}

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
                Next
                <ArrowRight weight='bold' />
            </>
        )
    }
}
