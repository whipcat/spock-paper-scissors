import Styled from "styled-components";
import { Beacon } from "../../core/keyframes";

const Column = Styled.div`
  display: flex;
  flex-flow: column;
  align-items: ${props => props.align};
`;

const Icon = Styled.span`
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  width: 1.28571429em;
  text-align: center;
  font-size: 65%;
  cursor: pointer;
`;

const Chip = Styled.div`
   width: 1em;
  height: 1em;
  border-radius: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.2em 0.35em -0.15em rgba(35, 41, 44, 0.5);

  &:hover {
    cursor: pointer;
  }

  &.bg-light {
    background: #f3f4f5;
    color: #23292C;
  }

  &.bg-dark {
    background: #23292C;
    color: #f3f4f5;
  }

  &.beacon-1 {
    animation: ${Beacon} 1s infinite linear;
  }
  &.beacon-2 {
    animation: ${Beacon} 1s infinite linear;
    animation-delay: .15s;
  }
  &.beacon-3 {
    animation: ${Beacon} 1s infinite linear;
    animation-delay: .3s;
  }
`;

export { Column, Chip, Icon };
