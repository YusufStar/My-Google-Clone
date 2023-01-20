import React, { Children, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search !== "") {
        navigate("Search/" + search)
    }
  };
  return (
    <div className="h-screen w-full bg-[#202124] overflow-hidden flex flex-col">
      {/* Navbar */}
      <div className="py-3 flex items-center justify-end px-4 bg-[#202124]">
        <a
          href="https://gmail.com/"
          className="hover:underline text-white text-[13px] mr-4"
        >
          Gmail
        </a>
        <img
          className="rounded-full"
          src="https://lh3.googleusercontent.com/ogw/AAEL6sizfsW0SqaHgEH9SiD9YNPVCQvRzDjBV2Eze_5Ugg=s32-c-mo"
        />
      </div>

      <div className="h-full w-full flex flex-col items-center justify-center gap-6">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
          className="w-[272px] h-[92px]"
        />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[584px] h-[45px] px-6 text-white rounded-full border-[1px] border-[#3c4043] bg-transparent focus:bg-[#3c4043] outline-none"
          />
        </form>
      </div>

      {/* Footer */}
      <div className="py-4 border-b-[1px] border-b-[#3c4043] px-3 text-[#9aa0a6] text-[15px] bg-[#171717] flex items-center justify-start">
        Türkiye
      </div>
    </div>
  );
};

export default HomeScreen;