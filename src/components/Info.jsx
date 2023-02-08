import lauraImg from "../assets/img/laura.png";

const Info = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <img src={lauraImg} alt="Laura Smith" />
        <h2>Laura Smith</h2>
        <h4>Frontend Developer</h4>
        <h5>laurasmith.website</h5>
        <div className="btn-container">
          <button className="btn-big btn-mail">
            <i className="fa fa-envelope"></i> Email
          </button>
          <button className="btn-big btn-in">
            <i className="fa fa-linkedin-square"></i> LinkedIn
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Info;
