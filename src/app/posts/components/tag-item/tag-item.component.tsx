import { memo } from 'react';

import { Tag } from './tag-item.styles';

interface TagItemProps {
  tag: string;
  onRemove: (tag: string) => void;
}

const TagItem = memo(({ tag, onRemove }: TagItemProps) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

export default TagItem;
