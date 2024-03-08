import { NavLink } from "react-router-dom";
import { CardContainer, ImageOverlay } from "./styles";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
  linkTo: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  linkTo,
}: ServiceCard) {
  return (
    <NavLink
      to={linkTo}
      style={{ textDecoration: "none" }}
      onClick={() => window.scrollTo(0, 0)}
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
}