import styled from "styled-components";

// Define the type for custom props
interface HeadingProps {
  align?: "left" | "center" | "right";
  uppercase?: boolean;
}

export const PrimaryHeading = styled.h1<HeadingProps>`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--primary);
  text-align: ${({ align }) => align || "left"};

  /* margin-inline: auto; */
  /* max-width: 30ch; */

  /* font-size: $fs-primary-heading;
  font-weight: var(--fw-semi-bold);
  text-align: center; */

  span {
    color: var(--clr-primary-300);
  }
`;

export const Paragraph = styled.p`
  /* --font-size-m: 1.6rem */

  max-width: 45ch;

  /* color: $clr-primary-100; */
  font-size: clamp(1.6rem, 1.8vw, 2rem);
  letter-spacing: 0.15rem;
  line-height: 2;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
