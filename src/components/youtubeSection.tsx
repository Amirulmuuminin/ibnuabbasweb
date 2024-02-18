import { FC } from "react";
import { SectionHeader } from "./sectionHeader";
import { Card } from "./ui/card";
import YoutubeEmbed from "./youtubeEmbed";

type Props = {};
const YoutubeSection: FC<Props> = ({}) => {
  return (
    <div className="flex flex-col gap-[60px]">
      <SectionHeader text="Youtube Channel" />
      <Card className="w-fit px-4 py-1 mx-auto">
        <p>link youtube</p>
      </Card>
      <div className="grid grid-cols-2 w-full gap-4 px-sm md:px-lg">
        <YoutubeEmbed embedId="Zc5IOU-4g6Q" />
        <YoutubeEmbed embedId="kJ2VX9DEShM" />
      </div>
    </div>
  );
};
export default YoutubeSection;
