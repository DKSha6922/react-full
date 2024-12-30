import PropTypes from 'prop-types';

const FunctionSample = (props) => {
    const {handleClick}=props
  return (
    <div>
      <p>this is a function comp</p>
      <button onClick={handleClick}>clickme</button>
    </div>
  )
}

FunctionSample.propTypes ={
    handleClick:PropTypes.func.isRequired
}
export default FunctionSample
