import Header from "../../components/Header";
import { ImageContainer, WholePage } from "./styles";

export default function Home() {
  return (
    <WholePage>
      <Header />
      <ImageContainer></ImageContainer>
      <div style={{ height: "10em", backgroundColor: "pink" }} />
      <div style={{ height: "10em", backgroundColor: "blue" }} />

      <div style={{ height: "10em", backgroundColor: "pink" }} />
      <div style={{ height: "10em", backgroundColor: "blue" }} />

      <div style={{ height: "10em", backgroundColor: "pink" }} />
      <div style={{ height: "10em", backgroundColor: "pink" }} />
      <div style={{ height: "10em", backgroundColor: "blue" }} />

      <div style={{ height: "10em", backgroundColor: "pink" }} />
      <div style={{ height: "10em", backgroundColor: "blue" }} />
    </WholePage>
  );
}
