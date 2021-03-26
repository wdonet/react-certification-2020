import styled from 'styled-components';
import { Col, Row } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

export const StyledVideoDetail = styled(Row)`
  padding: 0.5rem 2rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
`;

export const IFrameContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  border-radius: 4px;
`;

export const StyledIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledRelatedVideosColumn = styled(Col)`
  height: 100vh;
  overflow: scroll;
`;

export const NonFavoriteIcon = styled(HeartOutlined)`
  color: red;
`;

export const FavoriteIcon = styled(HeartFilled)`
  color: red;
`;
