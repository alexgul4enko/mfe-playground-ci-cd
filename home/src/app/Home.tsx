import { FC, useState } from 'react';
import { Button } from 'mfe0-test-button'
import { Modal } from 'mfe0-test-modal'
import {getUser} from 'mfe0-test-lib'

export const Home: FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    return {}
  }
  return (
    <div>
      <h1>Home page</h1>
      <div>
        <Button onClick={handleOpen}>open modal</Button>
        <Modal
          isOpen={open}
          closeModal={handleClose}
          label="Hello world"
        />
        <p><b>User:</b> {getUser('33')}</p>
      </div>
    </div>
  );
};

export default Home
