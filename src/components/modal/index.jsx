import React, { useEffect } from "react";
import styled from "styled-components";

function Modal({ showModal, bookInfo, onClose }) {
  let thumbnail =
    bookInfo.volumeInfo.imageLinks && bookInfo.volumeInfo.imageLinks.thumbnail;

  useEffect(() => {
    if (showModal === true) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [showModal]);

  if (!showModal) {
    return null;
  }

  return (
    <Bg>
      <ModalBg onClick={onClose} />
      <ModalWrap>
        <img src={thumbnail} alt="" />
        <InfoWrap>
          <h2>
            {bookInfo.volumeInfo.title}
            <a href={bookInfo.volumeInfo.infoLink}>
              <span className="material-icons-outlined">link</span>
            </a>
          </h2>
          <h3>{bookInfo.volumeInfo.authors}</h3>
          <p>{bookInfo.volumeInfo.description}</p>
        </InfoWrap>
        <Icon>
          <span className="material-icons-outlined" onClick={onClose}>
            close
          </span>
        </Icon>
      </ModalWrap>
    </Bg>
  );
}

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  inline-size: 100%;
  block-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBg = styled.div`
  position: fixed;
  inline-size: 100%;
  block-size: 100%;
  background-color: rgba(0, 0, 0, 0.01);
  backdrop-filter: blur(0.8px);
`;

const ModalWrap = styled.div`
  position: fixed;
  z-index: 3;
  padding: 1rem;
  inline-size: 50rem;
  background-color: whitesmoke;
  border-radius: 6px;
  transition: all 0.5s ease-in-out;
  display: flex;
  margin: auto;

  & img {
    margin: auto 0;
    padding: 1.2rem;
  }

  & p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    font-size: 1rem;
    line-height: 1rem;
    height: 6.6rem;
  }

  @media (max-width: 900px) and (min-width: 550px) {
    inline-size: 30rem;

    & img {
      margin: auto 1.2rem;
    }
  }

  @media (max-width: 549px) {
    inline-size: 20rem;
    flex-flow: column;

    & img {
      margin: 0 auto;
    }
  }
`;

const InfoWrap = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  margin: 1rem 0;

  & h2,
  h3,
  p {
    margin: 0;
    padding-bottom: 0.4rem;
  }

  & a {
    text-decoration-line: none;
  }

  & span {
    margin-left: 0.2rem;
    transform: translate(0%, 10%);
  }
`;

const Icon = styled.span`
  cursor: pointer;
  position: absolute;
  margin: 1rem;
  right: 0;
  top: 0;
`;

export default Modal;
