import styled, { css, keyframes } from "styled-components"
import { colors, fonts, metrics } from "../utils/constants"


export const dangle = keyframes`
    0% {
        transform: rotateZ(30deg);
    }

    30% {
        transform: rotateZ(-30deg);
    }
    70% {
        transform: rotateZ(10deg);
    }

    100% {
        transform: rotateZ(0);
    }
`

export const SFullPage = styled.div(
    () => css`
        height: 100vh;
        /* background: ${colors.black}; */
        background: url('https://res.cloudinary.com/dyj6pqx6d/image/upload/v1651275005/ims-prototype/pexels-sam-kolder-2387873_hr7jxd.jpg');
        overflow: hidden;
        font-family: ${fonts.secondary};
        display: flex;
        justify-content: center;
        color: ${colors.white};
    `
)

export const SPageTitle = styled.h1(
    () => css`
        font-family: ${fonts.heading};
        color: ${colors.black};
        margin-bottom: 1rem;
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

export const SGhostButton = styled.button(
    () => css`
        background: transparent;
        /* padding:  */
    `
)

export const SIconButton = styled.button(
    () => css`
        background: transparent;
        padding: .3rem;
        display: inline-flex;
        align-items: center;
        color: ${colors.white};
        justify-content: center;
        border-radius: ${metrics.buttonRadius};
        font-size: ${metrics.normalFont};
        border: none;
        transition: transform 150ms ease-in;
         &:hover {
            cursor: pointer;
            transform: scale(1.1);
            background: ${colors.white};
            color: ${colors.black};
            animation: ${dangle} 400ms;
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
        /* border: 3px solid ${colors.lightBlack}; */
        opacity: .9;
        width: 100%;
        background: ${colors.black};
        padding: 3rem;

        th, td {
            /* border: 3px solid ${colors.lightBlack}; */
            text-align: center;
            padding: 1rem;
        }

        .quantity {
            margin: 0 .5rem;
        }

        tbody {
            /* .cart-item {
                td {
                    display: flex;
                    justify-content: center;
                }
            } */
            padding: 1rem;
            .quantity-td {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            tr {
                transition: background 200ms ease-in;
                &:nth-child(even) {
                    transition: border-color 200ms ease-out;
                    &:hover {
                        background: ${colors.red};
                        border-color: ${colors.red};
                        td {
                            border-color: ${colors.red};
                        }
                    }
                }
                &:hover {
                    background: ${colors.lightBlack};
                }
            }
        }
        

        th {
            background: ${colors.lightBlack};
            /* width: 100%; */
            td {
                /* border-color: ${colors.red}; */
            }
        }

        tfoot {
            td {
                padding: 2rem;
                border-color: ${colors.black};
            }
        }
    `
)