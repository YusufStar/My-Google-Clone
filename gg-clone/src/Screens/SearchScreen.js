import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const SearchScreen = () => {
  const { id } = useParams();

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyBqZHlCCtA3X9kV34CGkikoQGjkyDLyepA&cx=017576662512468239146:omuauf_lfve&q=" +
        id
    )
      .then((res) => res.json())
      .then((data) => console.log(data.items))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="h-screen w-full flex flex-col overflow-y-auto bg-[#202124]"></div>
  );
};

export default SearchScreen;