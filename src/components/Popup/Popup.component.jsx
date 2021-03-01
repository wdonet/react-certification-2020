import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import { Backdrop, PopupContainer } from './Popup.styles';

const Popup = ({ children, visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(visible || false);
  }, [visible]);

  const closePopup = () => {
    setIsVisible(false);
    onClose(false);
  };

  const nodeRef = React.useRef(null);
  return (
    <>
      <Transition
        in={isVisible}
        mountOnEnter
        unmountOnExit
        timeout={400}
        nodeRef={nodeRef}
      >
        {(state) => (
          <>
            <Backdrop state={state} data-testid="backdrop" onClick={closePopup} />
            <PopupContainer ref={nodeRef} state={state} data-testid="popup">
              {children}
            </PopupContainer>
          </>
        )}
      </Transition>
    </>
  );
};

export default Popup;
