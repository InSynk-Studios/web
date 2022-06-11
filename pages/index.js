import Card from "../components/Card";
import Client from "../components/Client";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Background from "../components/ui/Background";

export default function Home() {
  return (
    <Background>
      <Hero />
      <div className="relative top-96">
        <Card />
        <Client />
        <Form />
      </div>
    </Background>
  );
}
