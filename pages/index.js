import Card from "../components/Card";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Testimonal from "../components/Testimonal";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
      </main>
      <div className="relative top-[25rem]">
        <div className="">
          <Card />
        </div>
        <div>
          <Testimonal />
        </div>
        <div className="top-[25rem]">
          <Form />
        </div>
      </div>
    </div>
  );
}
