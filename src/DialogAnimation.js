import React from "react";
import posed from "react-pose";
import styled, { keyframes } from "styled-components";
import * as variables from "./variables";

type Props = { text: string };

export default class DialogAnimation extends React.Component {
  render() {
    return (
      <Container>
        <WordList>
          {listData.map((data, i) => (
            <WordListItem key={i} delay={i * 0.3} pose={position}>
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
    transform: translate3d(0, 0px, 0);
    opacity: 1;
  }
`;

const animProps = {
  left: { x: -100 },
  right: { x: 100 }
};

const WordListItem = styled(posed.li(animProps))`
  background: lightcyan;
  list-style-type: none;
  text-align: center;
  padding: ${variables.spacer1}rem;
`;

const listData = [
  {
    title: "Hey Snips"
  },
  {
    title: "Chappie!"
  }
];
