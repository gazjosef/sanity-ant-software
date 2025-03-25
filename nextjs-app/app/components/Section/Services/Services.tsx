import { Grid, Section, Wrapper } from "@/app/styles/Layout.styles";
// import { HeroSection } from "./Hero.styles";
import Image from "next/image";
import UnDrawImg from "@/app/assets/img/illustrations/undraw_responsive_6c8s.svg";
import { Paragraph, PrimaryHeading } from "@/app/styles/Typography.styles";

export default function Services() {
  return (
    <Section>
      {/* <Grid placeItems="center"> */}
      <Wrapper>
        <PrimaryHeading className="u-margin-bottom-small">
          Get scalable, modern and reliable{" "}
          <span className="">custom software</span>.
        </PrimaryHeading>
        <Grid columns="2"></Grid>
      </Wrapper>
      {/* </Grid> */}
    </Section>
  );
}
