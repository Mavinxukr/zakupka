import React, {
  useEffect,
  useImperativeHandle,
  useState,
  forwardRef,
  useCallback
} from 'react';
import { createPortal } from 'react-dom';
import {
  ModalStyled,
  ModalBody,
  ModalClose,
  ModalOverlay
} from './Modal.styled';

const modalElement = document.getElementById('modal-root')

export function Modal({ children, defaultOpened = false }, ref) {
  const [isOpen, setIsOpen] = useState(defaultOpened)

  const close = useCallback(() => setIsOpen(false), [])

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close
  }), [close])

  const handleEscape = useCallback(event => {
    if (event.keyCode === 27) close()
  }, [close])

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false)
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isOpen])

  return createPortal(
    isOpen ? (
      <ModalStyled >
        <ModalOverlay className="modal-overlay" onClick={close} />
        <ModalClose role="button" aria-label="close" onClick={close}>
          x
        </ModalClose>
        <ModalBody>{children}</ModalBody>
      </ModalStyled>
    ) : null,
    modalElement
  )
}

export default forwardRef(Modal)