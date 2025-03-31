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
          Web development company that vows your .
          <span className="">success</span>.
        </PrimaryHeading>
        <Grid columns="repeat(2, 1fr)">
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
