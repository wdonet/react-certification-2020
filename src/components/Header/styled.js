import styled from 'styled-components';
import { Bars } from '../Icons';

const HeaderContainer = styled.div`
  height: 60px;
  background-color: white;
  padding: 10px 0 10px 0;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftItems = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  padding: 0 0 0 20px;
`;

const CenterItems = styled.div`
  text-align: center;
`;

const RightItems = styled.div`
  text-align: right;
  padding: 0 20px 0 0;
`;

const StyledBars = styled(Bars)`
  height: 40px;
`;

export { HeaderContainer, StyledBars, LeftItems, CenterItems, RightItems };
