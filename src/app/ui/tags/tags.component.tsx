import { Link } from 'react-router-dom';

import { TagsContainer } from './tags.styles';

type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps) => {
  return (
    <TagsContainer>
      {tags.map((tag) => (
        <Link className="tag" to={`/?tag=${tag}`} key={tag}>
          # ${tag}
        </Link>
      ))}
    </TagsContainer>
  );
};

export default Tags;
