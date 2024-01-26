import { IconType } from "react-icons";
import { Service } from "./styles";

interface IServiceCard {
  title: string;
  description: string;
  Icon: IconType;
  fadeType: "left" | "right";
}

export default function ServiceCard({
  title,
  description,
  Icon,
  fadeType,
}: IServiceCard) {
  return (
    <Service data-aos={`fade-${fadeType}`}>
      <Icon
        style={{
          color: "black",
          fontSize: "2.4em",
          marginBottom: "0.8em",
          opacity: "0.8",
        }}
      />
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
