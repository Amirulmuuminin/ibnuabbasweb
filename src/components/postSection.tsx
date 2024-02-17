import { FC } from 'react';
import { SectionHeader } from './sectionHeader';

type Props = {
  
}
const PostSection: FC<Props> = ({}) => {
  return (
    <>
      <SectionHeader text='Postingan Terbaru' textLink='Selengkapnya' link='1'/>
    </>
  );
};
export default PostSection;