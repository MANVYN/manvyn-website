const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1280px] px-2 sm:px-4 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

// const Container = ({ children, className = "" }) => {
//   return (
//     <div
//       className={`mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8 ${className}`}
//     >
//       {children}
//     </div>
//   );
// };

// export default Container;
