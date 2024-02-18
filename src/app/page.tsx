import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import PostSection from "@/components/postSection";
import ProfileSection from "@/components/profileSection";
import YoutubeSection from "@/components/youtubeSection";
import { FC } from "react";

interface pageProps {
  params: {};
}

const page: FC<pageProps> = ({ params: {} }) => {
  return (
    <>
      <Header />
      <Hero />
      <PostSection />
      <YoutubeSection />
      <ProfileSection />
    </>
  );
};

export default page;
