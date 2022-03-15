function Header(props) {
  return (
    <div className="header">
      <h1>calc</h1>
      <div className="theme-switcher">
        <h2>Theme</h2>

        <div className="toggle">
          <span>1</span>
          <span>2</span>
          <span>3</span>

          <div className="toggle-btn">
            <span className={`slicer slicer--${props.currentThemeNo}`}></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;