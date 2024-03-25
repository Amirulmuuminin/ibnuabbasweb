import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import PostSection from "@/components/postSection";
import ProfileSection from "@/components/profileSection";
import YoutubeSection from "@/components/youtubeSection";
import { deletePostBySlug, getAllSlug } from "@/services/postService";

import { FC } from "react";

interface pageProps {
  params: {};
}

const page: FC<pageProps> = async ({ params: {} }) => {
  // console.log(
  //   await deletePostBySlug("stronghari-tenang-untuk-persiapan-ujianstrong"),
  // );
  // console.log(await getAllSlug(), "in main page.tsx");
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
