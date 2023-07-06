import { memo } from 'react';

import TagItem from '../tag-item/tag-item.component';

import { TagListWrap } from './tag-list.styles';

type TagListProps = {
  tags: string[];
  onRemove: (tag: string) => void;
};

const TagList = memo(({ tags, onRemove }: TagListProps) => (
  <TagListWrap>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListWrap>
));

export default TagList;
