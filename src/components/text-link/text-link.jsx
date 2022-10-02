import React from 'react';
import PropTypes from 'prop-types';
import Text  from '../text/text.jsx';

const TextLink = ({ children, href, target }) => {
  return (
    <a href={href} target={target} style={{textDecoration: 'none'}}>
      <Text link>{children}</Text>
    </a>
  );
};

TextLink.defaultProps = {
  href: null,
  target: null,
};

TextLink.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
};

export default TextLink;