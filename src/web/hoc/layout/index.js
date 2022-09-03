import Footer from "./footer";
import Header from "./header";

const Layout = ({ flags, children }) => {
  const { showHeader, showFooter } = flags;
  return (
    <div>
      {showHeader && <Header />}
      {children}
      {showFooter && <Footer />}
    </div>
  );
};
export default Layout;
