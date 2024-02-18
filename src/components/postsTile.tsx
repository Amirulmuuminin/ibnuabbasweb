import { FC } from "react";
import Post from "./post";

type Props = {};
const PostTiles: FC<Props> = ({}) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 px-sm md:px-lg">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};
export default PostTiles;
