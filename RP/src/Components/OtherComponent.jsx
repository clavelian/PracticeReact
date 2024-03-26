import PropTypes from 'prop-types'

function OtherComponent(props) {
    const { inputText } = props;
  
    // You can use the received inputText prop here
    return (
      <div>
        <p>Received Text: {inputText}</p>
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