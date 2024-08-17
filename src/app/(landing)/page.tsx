import { auth } from "~/server/auth";
import { Hero } from "./components/hero";
import { Feat } from "./components/feat";

export default async function HomePage() {
  const session = await auth();
  return (
    <main>
      <Hero />
      <Feat/>
    </main>
  );
}
