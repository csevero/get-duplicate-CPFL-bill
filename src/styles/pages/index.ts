import styled from 'styled-components'

export const MainWrapper = styled.main`
  /**Desktop Stylization - Start */
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

        .header-input-block {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          button {
            width: 30px;
            height: 30px;
            display: flex;
            margin-left: 10px;
            border-radius: 100px;
            align-items: center;
            justify-content: center;
            background: #7556ea;
          }
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

  .modal-mask {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #00000066;

    .modal-view-image {
      width: 90%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .modal-content {
        display: flex;
        flex-direction: column;
        padding: 50px;
        border-radius: 0 10px 10px 10px;
        background: #edf7ff;
        position: relative;

        span {
          font-size: 16px;
          margin: 0 auto;
          max-width: 280px;
        }

        .preview-image {
          border-radius: 10px;
        }

        .close-button {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;

          position: absolute;
          right: 10px;
          top: 10px;
        }
      }
    }
  }

  /**Desktop Stylization - End */

  /**Mobile Stylization - Start */
  @media (max-width: 998px) {
    width: 90vw;
  }
  /**Mobile Stylization - End */

  /**Animations - Start */
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
  /**Animations - End */
`
