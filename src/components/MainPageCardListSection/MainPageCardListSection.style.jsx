import styled from 'styled-components';

export const MainPageCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin: 30px auto 0px auto;
  gap: 35px;
`;

export const MainPageCardItem = styled.div`
  width: 100%;
  height: 190px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 23.5px;
  border-radius: 25px;
`;

export const CardTargetCafe = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #4d2c0e;
`;

export const CardTargetCafeAddress = styled.p`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  color: #5d442c;
`;

export const CardHashtagSection = styled.section`
  display: flex;
  margin: 10px auto auto 28px;
  gap: 10px;
`;

export const CardHashtagItem = styled.div`
  border-width: 2.25pt;
  border-color: #dbc5b1;
  border-style: solid;
  background-color: #dbc5b1;
  padding: 3px 15px;
  border-radius: 19px;
  color: white;
  font-weight: bold;
  font-size: 1rem;
`;

export const CardReviewText = styled.p`
  margin: 20px 30px auto 35px;

  text-align: justify;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  height: 45px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
