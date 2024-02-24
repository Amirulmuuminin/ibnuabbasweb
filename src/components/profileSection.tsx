import { FC } from "react";
import { SectionHeader } from "./sectionHeader";
import Image from "next/image";
import { Button } from "./button";
import ibnuAbbasText from "@/../public/ibnuAbbas.svg";

type Props = {};
const ProfileSection: FC<Props> = ({}) => {
  return (
    <>
      <SectionHeader text="Profil" />
      <div className="profil">
        <div className="glass-box">
          <Image
            src={ibnuAbbasText}
            height={120}
            alt="sekolah islam billingual ibnu abbas"
          />
          <div className="mt-7 flex justify-center">
            <Button text="Profile" color="bg-primary text-TWhite" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileSection;
