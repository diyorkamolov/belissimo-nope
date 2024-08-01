import { Fade, Stack } from "@mui/material";
import React, { ReactNode } from "react";
import SearchAppBar from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <SearchAppBar />
      <Stack display={"flex"} minHeight={"100vh"} flexDirection={"column"}>
        <Fade in {...{ timeout: 1000 }}>
          <Stack flex={1}>{props.children}</Stack>
        </Fade>
      </Stack>
    </>
  );
};

export default Layout;