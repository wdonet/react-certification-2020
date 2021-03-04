import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const faSizeMapping = {
  xsmall: '1x',
  small: '2x',
  medium: '3x',
  large: '4x',
  xlarge: '5x',
};

const Icon = ({ icon, size }) => {
  return <FontAwesomeIcon icon={icon} size={faSizeMapping[size] || '2x'} />;
};

Icon.propTypes = {
  icon: PropTypes.shape().isRequired,
  size: PropTypes.string,
};

Icon.defaultProps = {
  size: 'small',
};

export default Icon;
