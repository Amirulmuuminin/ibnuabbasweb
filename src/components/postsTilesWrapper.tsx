import { FC } from "react";
import PostTile from "./postTile";
import { Post } from "@prisma/client";

type Props = {
  postDatas: Post[];
};
const PostTilesWrapper: FC<Props> = ({ postDatas }) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 px-sm md:px-lg">
      {postDatas.map((item, i) => {
        return <PostTile key={item.slug} postData={item} />;
      })}
    </div>
  );
};
export default PostTilesWrapper;
