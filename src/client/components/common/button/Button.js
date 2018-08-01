const React = require('react');
const PropTypes = require('prop-types');

const Button = (props) => {
  const {
    label,
    type,
    ...otherProps
  } = props;

  return (
    <button
      type={type}
      {...otherProps}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

module.exports = Button;
