import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="m-2">
      <NavBar />
      <Footer />
    </div>
  );
}
