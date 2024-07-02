import { MultiStep, MultiStepProps, Box } from '@apollo-ds/react'
import { StoryObj, Meta } from '@storybook/react'


export default {
    title: 'Components/MultiStep',
    component: MultiStep,

    args: {
        size: 4,
        currentStep: 1,
    },
    decorators: [
        (Story) => {
        return (
        <Box
            as="Label"
            css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
            {Story()}
        </Box>
        )
      },
    ],    

} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
    args: {},
}

export const Full: StoryObj<MultiStepProps> = {
    args: {
        currentStep: 4,
    },
}


