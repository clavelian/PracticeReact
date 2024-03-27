import PropTypes from 'prop-types'

function OtherComponent(props) {
    const { inputText } = props;
  
    // You can use the received inputText prop here
    return (
      <div>
        <p> OtherComponent: {inputText}</p>
      </div>
    );
  }
  OtherComponent.propTypes = {
    inputText: PropTypes.string.isRequired
  }
  OtherComponent.defaultProps = {
    inputText: '',
  };

  
  export default OtherComponent;