import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/theme";

const HomePageHeader = () => {
  return (
    <HomePageHeaderContainer>
      <HomePageHeaderWrapper>
        <HomePageHeaderContent>
          <HomePageHeaderTitle>Blockchain Explorer</HomePageHeaderTitle>
        </HomePageHeaderContent>
      </HomePageHeaderWrapper>
    </HomePageHeaderContainer>
  );
};

const HomePageHeaderContainer = styled.div`
  padding-top: 4.75rem;
  background-color: ${colors.black1};
  background-image: url(/static/home-hero-gradient.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  color: ${colors.grey2};
`;

const HomePageHeaderWrapper = styled.div`
  box-sizing: content-box;
  max-width: 62.5rem;
  margin: 0px auto;
  padding: 0px 2.5rem;
`;

const HomePageHeaderContent = styled.div`
  padding: 10rem 0px;
`;

const HomePageHeaderTitle = styled.h1`
  color: ${colors.white1};
  margin-bottom: 1.5rem;
  font-size: 3rem;
  font-weight: 600;
  line-height: 3.625rem;
  text-align: center;
`;

export default HomePageHeader;
