/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled/macro';
import React from 'react';
import timeSVG from './time.svg';

const ModalContext = React.createContext();

function Modal(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
}

function ModalOpenButton({ children: child }) {
  const [, setIsOpen] = React.useContext(ModalContext);
  return React.cloneElement(child, {
    onClick: () => setIsOpen(true),
  });
}

function ModalCloseButton() {
  const [, setIsOpen] = React.useContext(ModalContext);
  return (
    <button
      onClick={() => setIsOpen(false)}
      css={{
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '15px',
        right: '15px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: '#E9C46A',
      }}
    >
      <img alt="" src={timeSVG} />
    </button>
  );
}

const Overlay = styled.div({
  position: 'fixed',
  zIndex: '1',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  height: '100vh',
  overflowY: 'auto',
  backgroundColor: 'rgba(0,0,0,0.6)',
});

function ModalContent({ children, title, imageSrc }) {
  const [isOpen, setIsOpen] = React.useContext(ModalContext);
  return isOpen ? (
    <Overlay onClick={() => setIsOpen(false)}>
      <div
        css={{
          margin: '20vh auto',
          width: '80%',
          minHeight: '312px',
          maxWidth: '700px',
          overflow: 'hidden',
          borderRadius: '20px',
          backgroundColor: '#2A9D8F',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          color: 'white',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          css={{
            position: 'relative',
            backgroundImage: `
              linear-gradient(
                to bottom, rgba(0, 0, 0, 0) 67%, rgba(0, 0, 0, 0.80)
              ), 
              url(${imageSrc})
            `,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            padding: '20px',
            height: '153px',
          }}
        >
          <h2
            css={{
              position: 'absolute',
              bottom: '-10px',
              color: '#E9C46A',
            }}
          >
            {title}
          </h2>
          <ModalCloseButton />
        </div>
        <div css={{ padding: '20px' }}>{children}</div>
      </div>
    </Overlay>
  ) : null;
}

export { Modal, ModalOpenButton, ModalContent };
