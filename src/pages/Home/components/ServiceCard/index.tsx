import { IconType } from "react-icons";
import { Service } from "./styles";
import { NavLink } from "react-router-dom";

interface IServiceCard {
  title: string;
  description: string;
  Icon: IconType;
  fadeType: "left" | "right";
  linkTo: string;
}

export default function ServiceCard({
  title,
  description,
  Icon,
  fadeType,
  linkTo,
}: IServiceCard) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Service data-aos={`fade-${fadeType}`} data-aos-duration="1000">
      <Icon
        style={{
          color: "black",
          fontSize: "2.4em",
          marginBottom: "0.8em",
          opacity: "0.8",
        }}
      />
      <NavLink
        to={linkTo}
        onClick={scrollToTop}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <h2
          style={{
            color: "black",
            fontWeight: "500",
            lineHeight: "1",
            marginBottom: "0.5em",
          }}
        >
          {title}
        </h2>
      </NavLink>
      <p
        style={{
          color: "black",
          textAlign: "inherit",
        }}
      >
        {description}
      </p>
    </Service>
  );
}
