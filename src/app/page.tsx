import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PostSection } from "@/components/postSection";
import { FC } from "react";

interface pageProps {
  params: {};
}

const page: FC<pageProps> = ({ params: {} }) => {
  return (
    <div>
      <Header />
      <Hero />
      <PostSection />
    </div>
  );
};

export default page;
