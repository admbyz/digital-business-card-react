import lauraImg from "../assets/img/laura.png";

const Info = () => {
  return (
    <header>
      <nav className="nav-bar">
        <img src={lauraImg} alt="Laura Smith" />
        <h2>Laura Smith</h2>
        <h4>Frontend Developer</h4>
        <span>laurasmith.website</span>
        <div>
          <button className="btn">
            <i className="fa fa-home"></i> Home
          </button>
          <button className="btn-in">
            <i className="fa fa-bars"></i> Menu
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Info;
