import styled from 'styled-components';

const Container = styled.button`
  border-radius: 20px;
  border: 0;
  outline: 0;
  padding: 0;
  margin: 8px 5px;

  background-color: transparent;

  cursor: pointer;

  width: 345px;
  height: 245px;

  position: relative;
`;

const ImageFit = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const GradientContainer = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 0 0 20px 20px;
  background: linear-gradient(
    180deg,
    rgba(252, 254, 255, 0) 15%,
    rgba(41, 46, 50, 0.8) 70%
  );

  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.h2`
  font-size: 0.875rem;
  text-align: left;
  color: #fff;
`;

const Description = styled.span`
  font-size: 0.75rem;
  text-align: left;
  color: #fff;
  width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TagChannel = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 30px;

  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.base};
  color: #fff;
`;

export { Container, ImageFit, GradientContainer, Title, Description, TagChannel };
