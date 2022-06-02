import Card from "../components/Card";
import Client from "../components/Client";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Background from "../components/ui/Background";

export default function Home() {
  return (
    <Background>
      <main>
        <Hero />
      </main>
      <div className="relative top-[25rem]">
        <div>
          <Card />
        </div>
        <div>
          <Client />
        </div>
        <div className="top-[25rem]">
          <Form />
        </div>
      </div>
    </Background>
  );
}
