import { useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { InputPayload } from '@/app/posts/index';

import { EditorBlock, TitleInput } from './post-editor.styles';

type EditorProps = {
  title: string;
  body: string;
  onChangeField: (payload: InputPayload) => void;
};

const Editor = ({ title, body, onChangeField }: EditorProps) => {
  // quill 인스턴스를 설정
  const QuillRef = useRef<ReactQuill>(null);

  // quill 에서 사용할 모듈을 정의
  // useMemo를 사용하지 않으면, 키를 입력할 때마다, imageHandler로 인하여 focus가 풀림
  // https://quilljs.com/docs/modules/toolbar/ 참고
  const modules = useMemo(
    () => ({
      toolbar: {
        // container에 등록되는 순서대로 tool 배치
        container: [
          ['link', 'image', 'video'],
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
        ],
      },
    }),
    [],
  );

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeField({ key: 'title', value: event.target.value });
  };

  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        onChange={handleChangeTitle}
        value={title}
      />
      <ReactQuill
        ref={QuillRef}
        style={{ height: '320px' }}
        theme="snow"
        placeholder="내용을 작성하세요..."
        modules={modules}
        formats={formats}
        value={body}
        onChange={(value, delta, source, editor) => {
          onChangeField({ key: 'body', value: editor.getHTML() });
        }}
      />
    </EditorBlock>
  );
};

export default Editor;
