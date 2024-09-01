import "../../Styles/about_styles.css";

export const About = () => {
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt reprehenderit maxime totam mollitia, inventore consectetur dolores harum voluptatibus tempore laudantium optio, aliquid voluptates quasi accusamus ipsa odio amet, nesciunt suscipit!";

  return (
    <>
      <div className="about_container">
        <div className="info_container">
          <span className="title_info">
            LET ME <label>INTRODUCE</label> MYSELF
          </span>
          <p className="personal_info">{text}</p>
          <p className="personal_info">{text}</p>
          <p className="personal_info">{text}</p>
          <p className="personal_info">{text}</p>
        </div>

        <img src="src/public/Images/perfil2.jpg" alt="Richard Bonilla" />
      </div>
    </>
  );
};
