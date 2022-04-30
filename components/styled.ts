import styled, { css } from "styled-components"
import { colors, metrics } from "../utils/constants"


export const SFullPage = styled.div(
    () => css`
        height: 100vh;
        background: ${colors.black};
        overflow: hidden;
        color: ${colors.white};
    `
)

export const SAuthPage = styled.div(
    () => css`
        background: url('https://res.cloudinary.com/dyj6pqx6d/image/upload/v1651275005/ims-prototype/pexels-sam-kolder-2387873_hr7jxd.jpg');
        background-size: cover;
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `
)

export const SContainer = styled.div(
    () => css`
        display: flex;
        justify-center: center;
        align-items: center;
        /* outline: 2px solid crimson; */
    `
    )

export const SPage = styled.div(
    () => css`
        background: ${colors.black};
        color: ${colors.white};
    `
)

export const SInput = styled.input(
    () => css`
        background: ${colors.lightBlack};
        padding: 1rem 2rem;
        font-size: ${metrics.normalFont};
        outline: 0;
        color: ${colors.white};
        border: 0;
        border-radius: ${metrics.borderRadius};
        &::placeholder {
            color: ${colors.white};
        }
    `
)

export const SFormContainer = styled.div(
    () => css`
        background-color: ${colors.black};
        color: ${colors.white};
        display: inline-flex;
        justify-content: flex-end;
        align-items: center;
        gap: 2rem;
        border-radius: ${metrics.borderRadius};
        width: 400px;
        padding: 4rem;
        flex-direction: column;
    `
)

export const SButton = styled.button(
    () => css`
        padding: 1rem 4rem;
        border: none;
        background: ${colors.white};
        transition: background 150ms ease-out, transform 100ms ease-in;
        border-radius: ${metrics.buttonRadius};
        font-size: ${metrics.normalFont};
        &:hover {
            cursor: pointer;
            background: ${colors.red};
            color: ${colors.white};
        }

        &:active {
            transform: translateY(.3rem);
        }
    `
)
export const SCenteredIcon = styled.span(
    () => css`
        font-size: ${metrics.bigFont};
        /* text-align: center; */
        height: 50px;
        width: 50px;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: ${colors.lightBlack};
        display: flex;
        border-radius: ${metrics.buttonRadius};
    `
)

export const SCenteredText = styled.h2(
    () => css`
        font-size: ${metrics.mediumFont};
        text-align: center;
    `
)

export const SRow = styled.div(
    () => css`
        width: 100%;
    `
)