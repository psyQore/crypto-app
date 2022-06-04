import styled from "@emotion/styled";

const Text = styled.div`
  background-color: #b7322c;
  color: #FFF;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-align: center;
  border-radius: 4px;
`;

const Error = ({ children }) => {
  return <Text>{children}</Text>;
};

export default Error;
