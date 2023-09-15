function Modal({ children, name }) {
  return (
    <div
      id={`${name}-modal`}
      className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
    >
      <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          {children}
        </div>
      </div>
    </div>
  )
}

function ModalHeader({ children }) {
  return (
    <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
      {children}
    </div>
  )
}

function ModalBody({ children }) {
  return <div className="p-4 overflow-y-auto">{children}</div>
}

function ModalFooter({ children }) {
  return (
    <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
      {children}
    </div>
  )
}

export { Modal, ModalHeader, ModalBody, ModalFooter }
