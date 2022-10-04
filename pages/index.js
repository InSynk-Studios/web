import Card from "../components/Card";
import Client from "../components/Client";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Background from "../components/ui/Background";

export default function Home() {
  return (
    <Background>
      <Hero />
        <Card />
        {/* <Client /> */}
        <Form />
      {/* <div className="">
      </div> */}
    </Background>
  );
}
