import { Grid, Wrapper } from "@/app/styles/Layout.styles";
import { HeroSection } from "./Hero.styles";
import Image from "next/image";

export default function Hero() {
  return (
    <HeroSection>
      <Wrapper>
        <Grid>
          <Image
            src="/img/illustrations/undraw_responsive_6c8s.svg"
            alt="responsive"
            width={500}
            height={350}
          />
          <section>
            <h1 className="primary-heading | u-margin-bottom-small">
              Get scalable, modern and reliable{" "}
              <span className="">custom software</span>.
            </h1>

            <p className="paragraph">
              We develop web, mobile and custom software that&apos;s tailor-made
              to capture all your unique and essential requirements.
            </p>
            <p className="paragraph">{/* <CtaBtn /> */}</p>
          </section>
        </Grid>
        {/* <div className="container | u-mt-3xl | u-grid u-even-columns u-gap-5">
          <div>
            <Image
              src="/img/illustrations/undraw_responsive_6c8s.svg"
              alt="responsive"
              width={500}
              height={350}
            />
          </div>

          <div className="section-hero__text">
            <h1 className="primary-heading | u-margin-bottom-small">
              Get scalable, modern and reliable{" "}
              <span className="">custom software</span>.
            </h1>

            <p className="paragraph">
              We develop web, mobile and custom software that&apos;s tailor-made
              to capture all your unique and essential requirements.
            </p>
            <p className="paragraph"></p>
          </div>
        </div> */}
      </Wrapper>
    </HeroSection>
  );
}
