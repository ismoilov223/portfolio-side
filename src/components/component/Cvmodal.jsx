import React from "react";
import Button from "./Button";
import Cvuzbek from "../../CV/Shukurullo_Ismoilov_DeveloperCVu.pdf";
import Cvenglish from "../../CV/Shukurullo_Ismoilov_DeveloperCVe.pdf";
export default function Cvmodal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="px-12 py-4 text-white text-2xl gradient-btn"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Download CV
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#1d283f] outline-none focus:outline-none">
                {/*header*/}

                {/*body*/}
                <div className="relative p-6 flex flex-col gap-4">
                  <a
                    href={Cvenglish}
                    download="Shukurullo_Ismoilov_DeveloperCVe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button text={"English CV"}></Button>
                  </a>
                  <a
                    href={Cvuzbek}
                    download="Shukurullo_Ismoilov_DeveloperCVu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button text={"Uzbek CV"}></Button>
                  </a>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
