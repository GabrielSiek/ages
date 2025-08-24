import styled from "styled-components";
import { color } from "../theme/helpers";

const Box = styled.div`
  background: ${color("primary.main")};  
  color: ${color("background.default")};
  border: 2px solid ${color("border")}; 
  padding: 16px;
  border-radius: 8px;

  &:hover {
    background: ${color("primaryHover")};
  }
`;

export default function TestColors() {
  return <Box>Testando cores do theme </Box>;
}
