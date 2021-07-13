const Layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-defaultBg text-white">
      {children}
    </div>
  );
};

export default Layout;
