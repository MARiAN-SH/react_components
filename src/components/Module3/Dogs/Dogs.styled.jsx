import styled from 'styled-components';

export const Thumb = styled.div`
  margin: 50px auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
  @media (min-width: 768px) {
    width: 600px;
    height: 400px;
  }
`;
export const ImgApi = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: contain;
  /* object-fit: cover; */
  object-position: top center;
`;
