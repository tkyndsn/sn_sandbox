import React from "react";
import posed from "react-pose";
import styled, { keyframes } from "styled-components";
import * as variables from "./variables";
import Spacer from "./Spacer";

type Props = { text: string };

export default class DialogAnimation extends React.Component {
  render() {
    return (
      <Container>
        <WordList>
          {listData.map((data, i) => (
            <WordListItem key={i} delay={i * 0.3} translation={i * 22}>
              {data.title + i}
            </WordListItem>
          ))}
        </WordList>
      </Container>
    );
  }
}

const Container = styled.div`
  position: relative;
`;

const WordList = styled.ul``;

const animationWorldListItem = keyframes`
  from {
    transform: translate3d(0px, 0px, 0px);
    opacity: 1;
  }

  to {
    transform: translate3d(0, -22px, 0);
    opacity: 0;
  }
`;

const WordListItem = styled.li`
  background: lightcyan;
  list-style-type: none;
  text-align: center;
  padding: ${variables.spacer1}rem;
  animation: ${animationWorldListItem} 1 1s cubic-bezier(${variables.ease});
  animation-delay: ${props => props.delay}s;
  perspective: 10px;
  &:nth-child(even) {
    background: lightsalmon;
  }
`;

const listData = [
  {
    title: "Hey Snips"
  },
  {
    title: "Chappie!"
  },
  {
    title: "Jarvis!"
  }
];
