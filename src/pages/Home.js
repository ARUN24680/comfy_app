import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../component";

function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
}

export default Home;
