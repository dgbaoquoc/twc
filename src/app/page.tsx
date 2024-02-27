import Hero from "./_components/hero";
import Projects from "./_components/projects";
import Values from "./_components/values";
import ValuesWithNumbers from "./_components/values-with-numbers";

export default function Home() {
  return (
    <main>
      <Hero />
      <Values />
      <ValuesWithNumbers />
      <Projects />
    </main>
  );
}
