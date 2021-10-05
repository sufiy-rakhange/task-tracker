import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>

      <Button text={showAddTask ? "Close" : "Add"} color={showAddTask ?  'red': 'steelblue'} onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyles = {
//     color: '#fff',
//     backgroundColor: 'black'
// }

export default Header;
