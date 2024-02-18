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
      <YoutubeEmbed embedId="Zc5IOU-4g6Q" />
    </div>
  );
};
export default YoutubeSection;
