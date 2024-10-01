'use client'

import { ThemeProvider } from "next-theme";
import StyledComponentsRegistry from "./app/lib/registry";
import GlobalStyle from "./app/global.style";

export default function Providers(props: React.PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>
        <GlobalStyle />
        {props.children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
