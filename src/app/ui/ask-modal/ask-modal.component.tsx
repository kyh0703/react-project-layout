import { FullScreen, AskModalContainer, StyledButton } from './ask-modal.styles';

type AskModalProps = {
  isVisible: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const AskModal = ({
  isVisible,
  title,
  description,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
}: AskModalProps) => {
  if (!isVisible) return null;
  return (
    <FullScreen>
      <AskModalContainer>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <StyledButton color="red" onClick={onCancel}>
            {cancelText}
          </StyledButton>
          <StyledButton color="cyan" onClick={onConfirm}>
            {confirmText}
          </StyledButton>
        </div>
      </AskModalContainer>
    </FullScreen>
  );
};

export default AskModal;
