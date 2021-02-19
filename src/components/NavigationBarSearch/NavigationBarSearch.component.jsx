import React from 'react';
import Styled from './NavigationBarSearch.styled';

function NavigationBarSearch() {
  return (
    <Styled.Form className="d-flex flex-grow-1" data-testid="NavigationBarSearch">
      <Styled.Field
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <Styled.Button className="btn btn-outline-light" type="submit">
        Search
      </Styled.Button>
    </Styled.Form>
  );
}

export default NavigationBarSearch;
