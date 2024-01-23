import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FC } from "react";

interface pageProps {
  params: {};
}

const page: FC<pageProps> = ({ params: {} }) => {
  return (
    <div className="main">
      <Header />
      <Hero />
    </div>
  );
};

export default page;
