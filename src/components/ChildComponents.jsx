import PropTypes from "prop-types";

const ChildComponents = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}
ChildComponents.propTypes ={
  children: PropTypes.node,
  }

export default ChildComponents

