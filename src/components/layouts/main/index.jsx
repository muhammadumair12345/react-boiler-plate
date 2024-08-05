import ASide from "./aside";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";

function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <ASide />
        <Main>{children}</Main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
