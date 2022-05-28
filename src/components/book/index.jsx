import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { SearchInput } from "../input/Input.styles";
import BookItem from "../book-item";

function Book() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
          <SearchInput
            type="text"
            placeholder="Input the name of the book and press Enter"
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
  justify-content: center;
  align-items: center;
  block-size: 100vh;
`;
export default Book;
