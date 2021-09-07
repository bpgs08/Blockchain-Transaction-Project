import React from "react";
import styled from "styled-components";
import { media, colors } from "../../utils/theme";

const HomePageSearch = ({ children }) => {
  return (
    <HomePageSearchContainer>
      <HomePageSearchWrapper>
        <HomePageSearchContent>
          <HomePageSearchFullWidth>
            <HomePageSearchInnerContainer>
              {children}
            </HomePageSearchInnerContainer>
          </HomePageSearchFullWidth>
        </HomePageSearchContent>
      </HomePageSearchWrapper>
    </HomePageSearchContainer>
  );
};

const HomePageSearchContainer = styled.div`
  box-sizing: content-box;
  max-width: 62.5rem;
  margin: 0px auto;
  padding: 0px 2.5rem;
`;

const HomePageSearchWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: -70px;
`;

const HomePageSearchContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 62.5rem;
  width: 100%;
`;

const HomePageSearchFullWidth = styled.div`
  width: 100%;
`;

const HomePageSearchInnerContainer = styled.div`
  max-width: 950px;
  margin: 20px auto 40px;
  padding: 0px 10px 0px 15px;
  height: 100px;
  border: 1px solid ${colors.white3};
  background: ${colors.white1};
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 5%) 0px 2px 10px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${media.tablet`
    margin: 20px auto 4px;
  `}
`;

export default HomePageSearch;
