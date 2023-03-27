import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-2 bg-[#f6f8ff] dark:bg-[#141D2F]">
      <h1 className="text-[#4b6a9b] dark:text-white">
        Made with ❤️ by &nbsp;
        <a
          href="https://github.com/pritamtirpude"
          className="underline"
          target="_blank"
        >
          Pritam Tirpude
        </a>
      </h1>
    </footer>
  );
};

export default Footer;
