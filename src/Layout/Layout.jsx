const Layout = ({ children, state, setState }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-defaultBg text-white">
      <div className="absolute top-2 left-4 text-center text-md mb-4 text-yellow-600">
        (Demo)
      </div>
      {children}
    </div>
  );
};

export default Layout;
