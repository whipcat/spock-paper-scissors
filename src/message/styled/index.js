import Styled from "styled-components";
import { lighter } from "./colors";

const MessageContainer = Styled.div`
  bottom: 35%;
  left: 50%;
  position: absolute;
  transform: translateX(-50%) scale(0);
  transition: .3s cubic-bezier(0.5, 0.1, 0.3, 1.4);
  transition-delay: 0s;
  z-index: 2;

  &.show {
    bottom: 50%;
    transform: translateX(-50%) scale(1);
    transition-delay: .3s * 3;
  }
`;

const Background = Styled.div`
  display: flex;
  flex-flow: row;
  padding: .5em 1em;
  align-items: center;

  justify-content: center;
  border-radius: 3em;
  box-shadow: 0 0 2em -0.3em rgba(18, 21, 22, 0.65);
  line-height: 1.5;
  opacity: .9;
  background: ${props => props.bg};
  color: ${lighter};

  .refresh {
    font-size:1em;
  }
`;

const Text = Styled.div`
  margin-right: 1em;
  font-size: 1.5em;
`;

export { MessageContainer, Background, Text };
