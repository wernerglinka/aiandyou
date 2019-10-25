import react from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 30px;

  @media (max-width: 767px) {
    padding: 0 15px;
  }
`;

export default Container;
