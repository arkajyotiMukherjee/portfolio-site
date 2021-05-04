import React from "react";
import styled from "styled-components";
import { Body2 } from "../texts";

interface IWrappedList {
  list: string[];
  noOfRows?: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  list-style: none;
  display: flex;
  margin-bottom: 0.5rem;

  ::before {
    content: "";
    align-self: center;
    margin-right: 1rem;
    width: ${props => (props.theme.screens.md ? "6px" : "10px")};
    height: ${props => (props.theme.screens.md ? "6px" : "10px")};
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 50%;
  }
`;

const WrappedList: React.FC<IWrappedList> = ({
  list,
  noOfRows = list.length,
}) => {
  const wrappedListCollection: Array<string[]> = [];
  for (let i = 0; i < list.length; i += noOfRows) {
    wrappedListCollection.push(list.slice(i, i + noOfRows));
  }

  return (
    <Wrapper>
      {wrappedListCollection.map(wrappedList => {
        return (
          <Ul>
            {wrappedList.map(item => {
              return (
                <Li>
                  <Body2>{item}</Body2>
                </Li>
              );
            })}
          </Ul>
        );
      })}
    </Wrapper>
  );
};

export { WrappedList };
