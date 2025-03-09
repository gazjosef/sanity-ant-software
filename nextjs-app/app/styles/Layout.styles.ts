"use client";
import styled from "styled-components";

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["padding"].includes(prop),
})<{
  padding?: string;
}>`
  min-width: var(--max-width);
  width: 100%;
  max-width: 100%;
  margin-inline: auto;
  padding: ${({ padding }) =>
    padding || "0 4rem"}; /* Default padding to 4rem, can be overridden */

  /* For smaller screens (below 1200px), calculate width minus padding */
  @media (max-width: 1200px) {
    width: calc(100% - ${({ padding }) => padding || "4rem"});
  }
`;

export const CenteredGrid = styled.div.withConfig({
  shouldForwardProp: (prop) => !["fullScreen"].includes(prop), // Filter `fullWidth` prop
})<{
  fullScreen?: boolean;
  height?: string;
  width?: string;
}>`
  display: grid;
  place-items: center;
  height: ${({ fullScreen, height }) =>
    fullScreen ? "100vh" : height || "auto"};
  width: ${({ fullScreen, width }) => (fullScreen ? "100vw" : width || "auto")};
`;

export const Flex = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "justifyContent",
      "alignItems",
      "flexDirection",
      "gap",
      "fullWidth",
      "height",
    ].includes(prop),
})<{
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: "row" | "column"; // Allow 'row' or 'column'
  gap?: string;
  fullWidth?: boolean;
  height?: string;
}>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  flex-direction: ${({ flexDirection }) =>
    flexDirection || "row"}; // Default to row
  gap: ${({ gap }) => gap || "0"};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  height: ${({ height }) => height || "auto"};
`;
