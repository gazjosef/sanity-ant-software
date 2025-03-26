import { Grid, Section, Wrapper } from "@/app/styles/Layout.styles";
// import { HeroSection } from "./Hero.styles";
import Image from "next/image";
import UnDrawImg from "@/app/assets/img/illustrations/undraw_developer_activity_bv83.svg";
import { Paragraph, PrimaryHeading } from "@/app/styles/Typography.styles";

export default function About() {
  return (
    <Section>
      {/* <Grid placeItems="center"> */}
      <Wrapper>
        <PrimaryHeading className="u-margin-bottom-small">
          Get scalable, modern and reliable{" "}
          <span className="">custom software</span>.
        </PrimaryHeading>
        <Grid columns="2">
          <Image src={UnDrawImg} alt="responsive" width={500} height={350} />
          <section>
            <Paragraph>
              Founded in 2016, Ant Software is a web development company that
              helps clients meet the challenges of the digital age. We
              specialize in brand design, web design and development, and custom
              software.
            </Paragraph>
          </section>
        </Grid>
      </Wrapper>
      {/* </Grid> */}
    </Section>
  );
}
