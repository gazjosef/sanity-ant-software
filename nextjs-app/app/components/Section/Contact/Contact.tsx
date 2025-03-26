import { Grid, Section, Wrapper } from "@/app/styles/Layout.styles";
// import { HeroSection } from "./Hero.styles";
import Image from "next/image";
import UnDrawImg from "@/app/assets/img/illustrations/undraw_programming_2svr.svg";
import { Paragraph, PrimaryHeading } from "@/app/styles/Typography.styles";

export default function Contact() {
  return (
    <Section>
      {/* <Grid placeItems="center"> */}
      <Wrapper>
        <PrimaryHeading className="u-margin-bottom-small">
          We are here to <span className="">help and answer</span> any questions
          you might have.
        </PrimaryHeading>
        <Grid columns="2">
          <Image src={UnDrawImg} alt="responsive" width={500} height={350} />
          <section>
            <h1>Contact Form</h1>
          </section>
        </Grid>
      </Wrapper>
      {/* </Grid> */}
    </Section>
  );
}
