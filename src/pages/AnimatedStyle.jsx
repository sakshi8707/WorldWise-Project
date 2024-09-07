import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-dark--1);
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 678px;
  max-width: 100%;
  min-height: 400px;
`;


export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: ${(props) => (props.signinIn !== true ? "1" : "0")};
  z-index: ${(props) => (props.signinIn !== true ? "5" : "1")};
  transform: ${(props) =>
    props.signinIn !== true ? "translateX(100%)" : "translateX(0)"};
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: ${(props) => (props.signinIn ? "1" : "0")};
  z-index: ${(props) => (props.signinIn ? "5" : "1")};
  transform: ${(props) =>
    props.signinIn ? "translateX(0)" : "translateX(100%)"};
`;



export const navBar = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  z-index: 10; /* Ensures the navbar stays on top */
`;

export const EntireContentLogin = styled.div`
  margin: 2.5rem;
  padding: 2.5rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 50px);
  background-color: var(--color-dark--1);
  position: relative;
`;


export const Form = styled.form`
  background-color: ;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid var(--color-brand--2);
  background-color: var(--color-brand--2);

  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out, border-radius 0.6s ease-in-out;
  z-index: 100;
  border-radius: ${(props) =>
    props.signinIn ? " 150px 0 0 100px " : "0 150px 100px 0"};
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

// border-radius: 0 150px 100px 0;
// border-radius: 150px 0 0 100px;

export const Overlay = styled.div`
  background: linear-gradient(
    to right,
    var(--color-brand--2),
    var(--color-brand--2)
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: ;
  position: relative;
  left: -100%;
  // border-radius: 0 150px 100px 0;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) => (props.signinIn !== true ? `transform: translateX(0);` : null)}
  border-radius: 30px;
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signinIn !== true ? `transform: translateX(20%);` : null)}
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;
