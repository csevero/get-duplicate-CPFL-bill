import styled from 'styled-components'

export const MainWrapper = styled.main`
  width: 60vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .get-information {
    form {
      .input-block {
        margin: 20px 0;

        p {
          font-weight: 500;
          margin: 0;
        }

        input {
          width: 100%;
          border-radius: 10px;
          padding: 10px;
          margin-top: 10px;
          border: 2px solid #00000066;

          transition: all 0.2s;
          &:focus {
            outline: none;
            border: 2px solid #06d26199;
          }

          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
          }
        }
      }

      button {
        height: 50px;
        width: 100%;
        font-weight: 700;
        background: #06d261;
        color: #ffffff;
        border-radius: 10px;
        border: none;
        cursor: pointer;

        transition: all 0.2s;
        &:hover {
          filter: brightness(0.8);
        }

        &:active {
          filter: brightness(0.6);
        }
      }
    }
  }

  .show-information {
    margin-top: 20px;

    .loading {
      width: 100%;

      h3 {
        color: #7556ea;
      }

      div {
        margin: 0 auto;
        margin-bottom: 20px;
      }
    }

    .success-message {
      .no-pending-debt {
        color: #06d261;
      }

      .pending-bill {
        text-align: start;
        border: 2px solid #00000066;
        border-radius: 0 20px 20px 20px;
        padding: 10px 20px;
        margin: 20px 0;

        transition: all 0.2s;
        &:hover {
          transform: scale(1.02);
          background: #06d26122;
          box-shadow: 1px 3px 3px #00000066;
        }
      }
    }

    .error-message {
      color: #e60000;
      font-weight: 700;
    }
  }

  footer {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;

    a {
      color: initial;
      text-decoration: none;
      animation: switch-color-text 5s reverse infinite;
      position: relative;

      &::before {
        content: '';
        width: 0;
        height: 2px;

        position: absolute;
        bottom: 0;

        animation: switch-color-background 5s reverse infinite;
        transition: all 0.2s;
      }

      &:hover {
        &::before {
          width: 100%;
        }
      }
    }
  }

  @keyframes switch-color-text {
    0%,
    100% {
      color: #06d261;
    }

    50% {
      color: #7556ea;
    }
  }

  @keyframes switch-color-background {
    0%,
    100% {
      background: #06d261;
    }

    50% {
      background: #7556ea;
    }
  }

  @media (max-width: 998px) {
    width: 90vw;
  }
`
