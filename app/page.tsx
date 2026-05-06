import Header from "../components/Header";
import Hero from "../components/Hero";
import Row from "../components/Row";

const mockItems = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  title: `Movie ${i + 1}`,
  src: "/screen.png",
}));

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="mx-auto max-w-7xl px-12 pt-32">
        <Hero />

        <section className="mt-8">
          <Row title="New this week" items={mockItems} />
          <Row title="Trending Now" items={mockItems} />
          <Row title="Recommended" items={mockItems} />
        </section>
      </main>
    </div>
  );
}
