import { FC } from "react";
import { SectionHeader } from "./sectionHeader";
import { Card } from "./ui/card";
import YoutubeEmbed from "./youtubeEmbed";
import yt from "../../public/ytColored.svg";
import Image from "next/image";

type Props = {};
const YoutubeSection: FC<Props> = ({}) => {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeader text="Youtube Channel" />
      <a
        href="https://www.youtube.com/@ibnuabbasbsd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card className="mx-auto flex w-fit items-center gap-3 px-4 py-1">
          <Image alt="sibia bsd" src={yt} className="size-6" />
          <p className="-mt-[2px]">Channel</p>
        </Card>
      </a>

      <div className="grid w-full grid-cols-1 gap-4 px-sm md:grid-cols-2 md:px-lg">
        <YoutubeEmbed embedId="Zc5IOU-4g6Q" />
        <YoutubeEmbed embedId="kJ2VX9DEShM" />
      </div>
    </div>
  );
};
export default YoutubeSection;
