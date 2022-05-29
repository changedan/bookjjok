import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { SearchInput } from "../input/Input.styles";
import BookItem from "../book-item";

function Book() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState("");
  const text = "Input the name of the book and press Enter";

  useEffect(() => {
    const nextTyping = text.slice(0, typing.length + 1);

    if (nextTyping === typing) return;
    const timeout = setTimeout(() => {
      setTyping(text.slice(0, typing.length + 1));
    }, 150);

    return () => clearTimeout(timeout);
  }, [text, typing]);

  const searchBook = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {loading ? (
        <LoadingWrap>
          <SearchInput
            type="text"
            onKeyPress={searchBook}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <BookItem book={data} />{" "}
        </LoadingWrap>
      ) : (
        <NotLoadingWrap>
          <TypingWrap>{typing}</TypingWrap>
          <SearchInput
            type="text"
            placeholder=""
            onKeyPress={searchBook}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </NotLoadingWrap>
      )}
    </>
  );
}

const LoadingWrap = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 6rem 0;
`;

const NotLoadingWrap = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  block-size: 100vh;
  inline-size: 100vw;
`;

const TypingWrap = styled.div`
  opacity: 0.3;
  font-size: 1.2rem;
  margin: 1rem;
  :after {
    content: "|";
    animation: blink 1s step-start infinite;
  }
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 900px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export default Book;
