const Container = ({ children, className = "" }) => {
  return (
    <div
    //   className={`mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-10 ${className}`}
      className={`mx-auto w-full max-w-[1280px] px-2 sm:px-4 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;