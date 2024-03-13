import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import PostSection from "@/components/postSection";
import ProfileSection from "@/components/profileSection";
import YoutubeSection from "@/components/youtubeSection";
import {
  migrateOldDataPost,
  migrateOldDataProfile,
} from "@/utils/migrateOldData";
import { FC } from "react";

interface pageProps {
  params: {};
}

const page: FC<pageProps> = async ({ params: {} }) => {
  // await migrateOldDataPost();
  // await migrateOldDataProfile();

  return (
    <>
      <Header />
      <Hero />
      <PostSection />
      <YoutubeSection />
      <ProfileSection />
      <Footer />
    </>
  );
};

export default page;
