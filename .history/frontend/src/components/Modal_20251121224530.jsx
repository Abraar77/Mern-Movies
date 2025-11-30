const Modal = ({ isOpen, onClose, children }) => {
    return (
      <>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Background Overlay */}
            <div className="fixed inset-0 bg-black opacity-50"></div>
  
            {/* Modal Box */}
            <div className="absolute bg-gray-700 p-4 rounded-lg z-10 text-right 
                            w-[400px] max-w-[90%]">
              <button
                className="text-white font-bold hover:text-red-400 focus:outline-none mr-2 cursor-pointer"
                onClick={onClose} 
              >
                X
              </button>
              {children}
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Modal;
  