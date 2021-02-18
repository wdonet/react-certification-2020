import React from 'react';
import { Grid } from '@material-ui/core';

import { StyledGrid, StyledGridItemDiv } from './Content.styles';
import ContentCard from '../ContentCard';

const Content = ({ data }) => (
  <StyledGrid container justify="center" spacing={3}>
    <Grid item xs={12}>
      <StyledGridItemDiv>
        {data.map((item) => (
          <ContentCard key={item.etag} item={item} />
        ))}
      </StyledGridItemDiv>
    </Grid>
  </StyledGrid>
);

export default Content;
