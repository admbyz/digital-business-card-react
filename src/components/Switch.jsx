//TODO Dark mode

const Switch = ({ isDark, changeColor }) => {
  if (isDark === true) {
    return (
      <button onClick={changeColor} className="btn-switch">
        <i className="fa fa-sun-o"></i> Switch Light
      </button>
    );
  } else {
    return (
      <button onClick={changeColor} className="btn-switch">
        <i className="fa fa-moon-o"></i> Switch Dark
      </button>
    );
  }
};

export default Switch;
