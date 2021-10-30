import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import BookIcon from "@mui/icons-material/Book";

const Footer = () => {
  return (
    <footer className="bg-green-400 mt-4 h-full items-center p-4 footer bg-neutral text-neutral-content flex justify-between">
      <div className="items-center grid-flow-col">
        <p className="text-white">
          <BookIcon className="text-white mb-2"></BookIcon> Copyright ©{" "}
          {new Date().getFullYear()}
        </p>
      </div>
      <div className="mr-2 text-gray-50 grid grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://twitter.com/iisahaji">
          <TwitterIcon></TwitterIcon>
        </a>
        <a href="https://github.com/isahaji">
          <GitHubIcon> </GitHubIcon>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
