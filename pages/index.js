import Card from "../components/Card";
import Client from "../components/Client";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Background from "../components/ui/Background";
import "../components/svg/circle.svg";

export default function Home() {
  if (typeof window !== "undefined") {
    function callback(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let x = 50 * Number(entry.target.id.replace("sec-", "") - 1); //change to whatever you want the x to be for sec-n
          bg.style.setProperty("--x", x + "%");
        }
      });
    }
    const bg = document.querySelector(".bg");
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(callback);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }
  return (
    <Background>
      <circle />
      <div className="bg"></div>
      <section id="sec-1" className="relative">
        <Hero />
      </section>
      <section id="sec-2" className="relative top-96">
        <Card />
      </section>
      <section id="sec-3" className="relative top-96">
        <Client />
      </section>
      <section id="sec-4" className="relative top-96">
        <Form />
      </section>
    </Background>
  );
}
