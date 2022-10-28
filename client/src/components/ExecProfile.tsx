// Library imports.
import { useState } from "react";
// import Slider from "react-slick";

// Component imports.
import { execMembersData as data } from "../utils/config";

// Media imports.
import profileDefault from "../images/squareImage.png";


/**
 * Renders an ExecProfile.
 * @param {*} props Properties passed to the component.
 * @returns {JSX.Element} JSX Component.
 */
const ExecProfile = (props: any) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    arrows: false,
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    focusOnSelect: true,
    speed: 500,
    autoplaySpeed: 7000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: true,
    beforeChange: (current: number, next: number) => setImageIndex(next),
  };

  return (
    <div className="execProfile">
      {/* <Slider {...settings}> */}
        {data.map((member, index) => (
          <div
            key={index}
            className={index === imageIndex ? "execSlide active" : "execSlide"}
          >
            <div className="card">
              <img
                className="cardImage"
                src={member.image || profileDefault}
                alt={member.name}
              />
              <div className="cardContent">
                <h3>
                  <b>{member.title.toUpperCase()}</b>
                </h3>
                <h5>{member.name}</h5>
                {index === imageIndex ? (
                  <blockquote>{member.description}</blockquote>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      {/* </Slider> */}
    </div>
  );
}

export default ExecProfile;
