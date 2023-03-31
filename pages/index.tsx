import { useEffect, useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const modalRef = useRef(null);
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(modalRef);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <button
          onClick={() => setOpen(true)}
          className="rounded-md bg-white p-4"
        >
          Open Modal
        </button>
      </div>
      {open && (
        <>
          <div className="fixed top-0 bottom-0 right-0 left-0 z-[100] h-screen w-screen bg-black opacity-60 backdrop-filter" />
          <div className="fixed right-1/2 bottom-1/2 z-[1000] h-1/5 w-2/5 translate-x-1/2 translate-y-1/2 rounded-2xl bg-white">
            <div
              ref={modalRef}
              className="relative flex h-full items-center justify-center"
            >
              <XMarkIcon
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 h-5 w-5"
              />
              <span>Modal</span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
