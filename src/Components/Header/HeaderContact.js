import styled from "styled-components";

import { config } from "../../config";
const { contactColor, contactColorDark } = config.header;

export const HeaderContact = styled.h1`
  font-weight: 400;
  color: ${(props) =>
    props.theme.mode === "light" ? contactColor : contactColorDark};
  line-height: 1.15;
  margin: 1.25rem 0;
  font-size: 1.5em;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 2em;
  }
`;
