import "../Styles/comp_styles.css";

export const DirButton = ({ texto, dir, icon }) => {
  return (
    <div className="dirButton_container">
      <a href={dir} className="a_dir" target="_blank">
        <button className="dir_btn">
          <span className="dir_span">{texto}</span>
          <div className="iconDir_container">
            <img src={icon} className="icon_dir" />
          </div>
        </button>
      </a>
    </div>
  );
};
