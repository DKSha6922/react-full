import PropTypes from "prop-types";
const Student = (props) => {
   return (
     <div className="student">
       <table>
        <thead>
        <tr>
            <th>Name</th>
            <td>{props.name}</td>
        </tr>
        <tr>
            <th>Age</th>
            <td>{props.age}</td>
        </tr>
        <tr>
            <th>isMaried</th>
            <td>{props.isMarried?"yes":"no"}</td>
        </tr>
        </thead>
      </table>
     </div>
   )
 }
 

 
 Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
};

Student.defaultProps = {
  name: "No name",
  age: 0,  // Default to a number instead of a string
  isMarried: false,
};

export default Student