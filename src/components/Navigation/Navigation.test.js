import React from 'react';
import { render } from '@testing-library/react';
import Navigation from './index';

describe('Navigation', () => {
    it('renders Search Input', () => {
      const { getByRole } = render(<Navigation />);
      expect(getByRole('button')).not.toBeUndefined();
    });
  });
