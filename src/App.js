import { Modal, ModalOpenButton, ModalContent } from './modal';

function App() {
  return (
    <Modal>
      <ModalOpenButton>
        <button>Open modal</button>
      </ModalOpenButton>
      <ModalContent title="Modal title here!" imageSrc="./forest.jpg">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </ModalContent>
    </Modal>
  );
}

export default App;
