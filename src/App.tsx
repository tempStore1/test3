import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const App: React.FC = () => {
  return (
    <div className="demo-relative demo-w-full demo-text-white demo-h-screen  demo-bg-slate-700">
      <div className="demo-absolute demo-top-1/2 demo-left-1/2 demo--translate-y-1/2 demo--translate-x-1/2 demo-w-[1024px]">
        <div className="demo-container demo-p-4 demo-border demo-shadow  demo-mx-auto demo-rounded demo-text-center">
          <h1 className="demo-text-2xl">Hello World</h1>
          <p>This is a sample Starter Kit !</p>
        </div>
        <div className="demo-mx-auto demo-text-center demo-mt-5">
          <a
            target="_blank"
            href="https://github.com/BardKidd/base-starter-kit"
            className="demo-border demo-inline-block  demo-rounded demo-p-3 demo-bg-white demo-cursor-pointer demo-ease-in-out demo-duration-150 hover:demo-ring-4	"
          >
            <FontAwesomeIcon
              icon={brands("github")}
              className="demo-text-slate-700 demo-pr-2 demo-text-2xl"
            />
            <button
              type="button"
              className="demo-text-slate-700 demo-font-bold demo-text-2xl"
            >
              GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
