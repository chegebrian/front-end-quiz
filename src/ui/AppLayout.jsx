import React from "react";
import Header from "./Header";
import { Outlet} from "react-router-dom";

function AppLayout() {

  
  return (
    <>
      <Header />
      <main >
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
