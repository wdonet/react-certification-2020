import styled from 'styled-components';

export const SwitchContainer = styled.div`
  position: relative;
  width: 55px;
  flex-grow: 0;
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  text-align: left;

  input {
    display: none;
  }

  label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border-radius: 20px;
    margin: 0;
  }

  .inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;

    :before,
    :after {
      display: block;
      float: left;
      width: 50%;
      height: 28px;
      padding: 0;
      line-height: 28px;
      font-size: 20px;
      color: white;
      font-weight: bold;
      box-sizing: border-box;
    }

    :before {
      content: '${({ textOn }) => textOn}';
      text-transform: uppercase;
      padding-left: 6px;
      background-color: ${({ theme }) => theme.switchBackgroundOn};
      color: ${({ theme }) => theme.switchColorOn};
    }

    :after {
      content: '${({ textOff }) => textOff}';
      font-size: 16px;
      line-height: 30px;
      text-transform: uppercase;
      padding-right: 6px;
      background-color: ${({ theme }) => theme.switchBackgroundOff};
      color: ${({ theme }) => theme.switchColorOff};
      text-align: right;
    }
  }

  .switch {
    display: block;
    width: 20px;
    margin: 4px;
    background: ${({ theme }) => theme.switchColorOff};
    position: absolute;
    top: 0;
    bottom: 0;
    right: 26px;
    border: 0 solid #bbb;
    border-radius: 20px;
    transition: all 0.3s ease-in 0s;
  }

  input:checked {
    ~ .inner {
      margin-left: 0;
    }

    ~ .switch {
      right: 0px;
      background: ${({ theme }) => theme.switchColorOn};
    }
  }
`;
