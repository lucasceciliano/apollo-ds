import { colorsSemantic } from "@apollo-ds/tokens";
import { styled } from "../../styles";
import { Text } from "../Text";

export const MultStepContainer = styled('div', {
    
})

export const Label = styled(Text, {

    color: colorsSemantic.text.secondary,

    defaultVariants: {
        size: '$caption',
    }
})

export const Steps = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(var(--steps-sizes), 1fr)',
    gap: '$space100',
    marginTop: '$space100',
    
})

export const Step = styled('div', {
    height: '$space050',
    borderRadius: '$xs',
    backgroundColor: colorsSemantic.background.tertiary,

    variants: {
        active: {
            true: {
                backgroundColor: colorsSemantic.background.brandBold
            }
        }
    }
})