import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import PostSection from "@/components/postSection";
import { FC } from "react";

interface pageProps {
  params: {};
}

const page: FC<pageProps> = ({ params: {} }) => {
  return (
    <>
      <Header />
      <Hero />
      <PostSection/>
    </>
  );
};

export default page;
