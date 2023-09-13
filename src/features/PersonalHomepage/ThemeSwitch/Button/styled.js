import { styled, css } from "styled-components";
import { ReactComponent as SunIcon } from "./brightness 1.svg";
import { ReactComponent as SwitchIcon } from "./bg.svg";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const Switch = styled(SwitchIcon)`
  display: flex;
  align-items: center;
`;

export const Bullet = styled.span`
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.text.secondaryText};
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3px;
  transition: transform 0.3s;
  ${({ moveToRight }) =>
    moveToRight &&
    css`
      transform: translateX(20px);
    `};
`;

export const Sun = styled(SunIcon)``;