import styled from 'styled-components';

export const Loading = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  text-transform: uppercase;
  font-weight: bold;
  color: red;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Field = styled.input`
  margin-top: 20px;
`;
