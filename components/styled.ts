import styled, { css } from "styled-components"
import { colors, fonts, metrics } from "../utils/constants"


export const SFullPage = styled.div(
    () => css`
        height: 100vh;
        background: ${colors.black};
        overflow: hidden;
        font-family: ${fonts.secondary};
        color: ${colors.white};
    `
)

export const SPageTitle = styled.h1(
    () => css`
        font-family: ${fonts.heading};
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

export const SCartContainer = styled.div(
    () => css`

    `
)

export const SInput = styled.input(
    () => css`
        background: ${colors.lightBlack};
        padding: 1rem 2rem;
        font-size: ${metrics.smallFont};
        outline: 0;
        color: ${colors.white};
        font-family: ${fonts.heading};
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
        padding: .7rem 4rem;
        border: none;
        background: ${colors.white};
        transition: background 150ms ease-out, 
        transform 100ms ease-in,
        letter-spacing 200ms ease-in,
        color 100ms ease-in;
        font-family: ${fonts.text};
        letter-spacing: 3px;
        border-radius: ${metrics.buttonRadius};
        font-size: ${metrics.normalFont};
        &:hover {
            /* letter-spacing: 5px; */
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

export const SCartTable = styled.table(
    () => css`
        border-collapse: collapse;
        /* border: 3px solid ${colors.red}; */

        th, td {
            border: 3px solid ${colors.black};
        }

        tbody {
            tr {
                transition: background 200ms ease-in;
                &:hover {
                    background: ${colors.lightBlack};
                }
            }
        }
        
        td {
            padding: 1rem;
        }

        th {
            background: ${colors.lightBlack};
            
        }
    `
)