import { NavLink } from "react-router-dom";
import { CardContainer, ImageOverlay } from "./styles";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  linkTo: string;
}

const ServiceCard = ({
  title,
  description,
  image,
  linkTo,
}: ServiceCardProps) => {
  const saveScrollPosition = () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    localStorage.setItem('scrollPosition', scrollPosition.toString());
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <NavLink
      to={linkTo}
      style={{ textDecoration: "none" }}
      onClick={() => { saveScrollPosition(); scrollToTop(); }} // Corrected this line
    >
      <CardContainer style={{ backgroundImage: `url(${image})` }}>
        <h4 style={{ zIndex: "100", marginLeft: "1em" }}>{title}</h4>
        <p
          style={{
            zIndex: "100",
            marginLeft: "1em",
            marginBottom: "1em",
            color: "#FFB629",
          }}
        >
          {description}
        </p>
        <ImageOverlay />
      </CardContainer>
    </NavLink>
  );
};

export default ServiceCard;
