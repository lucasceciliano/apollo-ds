import { colorsSemantic } from "@apollo-ds/tokens";
import { styled } from "../styles/index";
import { ComponentProps, ElementType } from "react";

export const Box = styled('div', {
    padding: '$space300',
    borderRadius: '$xlg',
    backgroundColor: colorsSemantic.background.primary,
    boxShadow: '1px solid $grey700',
    width: '100%',
    
})

export interface BoxProps extends ComponentProps<typeof Box> {
    as?: ElementType
}