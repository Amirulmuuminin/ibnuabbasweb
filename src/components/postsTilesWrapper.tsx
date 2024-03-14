import { FC } from "react";
import PostTile from "./postTile";
import { Post } from "@prisma/client";

type Props = {
  nextPost: Post[];
};
const PostTiles: FC<Props> = ({ nextPost }) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 px-sm md:px-lg">
      {nextPost.map((item, i) => {
        return <PostTile key={i} postData={item} />;
      })}
    </div>
  );
};
export default PostTiles;
