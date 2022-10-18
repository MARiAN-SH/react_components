import styled from 'styled-components';

export const MaterialItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 15px;

  &:not(:last-child) {
    border-bottom: 1px solid red;
  }
`;
export const MaterialLink = styled.a`
  width: 80%;
`;
