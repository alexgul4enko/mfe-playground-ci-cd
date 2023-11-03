import { FC } from 'react';
import ModalNPM from 'react-modal';
import {getUser} from 'mfe0-test-lib'
import {Button} from 'mfe0-test-button'

export type ModalProps = {
  isOpen: boolean;
  closeModal?: () => void;
  label?: string
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    borderRadius: 16
  },
};

export const Modal: FC<ModalProps> = ({
  isOpen,
  closeModal,
  label
}) => {
  return (
    <ModalNPM
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={label || 'asdasd'}
      appElement={document.body}
    >
      <div>
        <h1 style={{textAlign: 'center', marginBottom: 28}}>
          {label || 'asdasd'}
        </h1>
        <div>
          <p><b>User:</b> {getUser()}</p>
        </div>
        <Button style={{ float: 'right'}} onClick={()=>{closeModal && closeModal()}}>
          submit
        </Button>
      </div>
    </ModalNPM>
  );
};

export default Modal
