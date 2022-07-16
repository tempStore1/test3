import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as WaifuAction from "./WaifuAction";
import { connect } from "react-redux";
import { compose } from "redux";
import { initStateType } from "./WaifuReducer";

const Waifu: React.FC = (props: any) => {
  const dispatch = useDispatch();
  const { test, getWaifuInfo } = props;

  useEffect(() => {
    getWaifuInfo();
  }, []);

  return (
    <div className="demo-relative demo-w-full demo-text-white demo-h-screen  demo-bg-slate-700">
      <div className="demo-absolute demo-top-1/2 demo-left-1/2 demo--translate-y-1/2 demo--translate-x-1/2 demo-w-[1024px]">
        <div className="demo-container demo-p-4 demo-mx-auto demo-text-center">
          <h1 className="demo-text-4xl">彼女は俺の嫁が！</h1>
        </div>
        <div className="demo-mx-auto demo-text-center demo-mt-5">
          <button
            type="button"
            onClick={() => {
              dispatch(test());
            }}
          >
            可以發 Action
          </button>
        </div>
        <div className="demo-mx-auto demo-text-center demo-mt-5">
          <img src="#" alt="" />
        </div>
        <div className="demo-mx-auto demo-mt-5 demo-flex  demo-items-center demo-justify-center">
          <Link
            to="/other"
            className="demo-text-xl demo-flex demo-items-center"
          >
            Other
            <FontAwesomeIcon
              icon={solid("angle-right")}
              className="demo-pl-2 demo-text-2xl"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: initStateType) => {
  return {};
};

const mapDispatchToProps = {
  test: WaifuAction.test,
  getWaifuInfo: WaifuAction.getWaifuInfo,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Waifu);
