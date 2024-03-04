import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="m-2">
      <NavBar />
      <Hero />
      <Footer />
    </div>
  );
}
