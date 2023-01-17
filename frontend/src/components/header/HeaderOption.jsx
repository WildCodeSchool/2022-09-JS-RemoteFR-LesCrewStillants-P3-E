import "./headeroption.css";

// eslint-disable-next-line react/prop-types
function HeaderOption({ Icon, title }) {
  return (
    <div className="header_option">
      {Icon && <Icon className="header_option_icon" />}

      <h3 className="header_option_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
