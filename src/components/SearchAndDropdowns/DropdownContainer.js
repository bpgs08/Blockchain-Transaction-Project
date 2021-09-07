import React from "react";
import styled from "styled-components";
import { media, colors } from "../../utils/theme";

const DropdownContainer = ({ children, marginRight }) => {
  return (
    <DropdownWrapper marginRight={marginRight}>{children}</DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  width: 150px;
  position: relative;
  ${(props) => props.marginRight && `margin-right: 4px`};
  ${media.tablet`
    width: 100%;
    &:first-child {
      margin-right: 4px;
    }
    &:nth-child(2) {
      margin-left: 4px;
      margin-right: 0px;
    }
  `}
  select {
    width: 100%;
    background-color: ${colors.grey1};
    border-radius: 4px;
    height: 45px;
    border: none;
    padding-left: 8px;
    &:focus {
      outline: none;
    }
  }
`;

export default DropdownContainer;
