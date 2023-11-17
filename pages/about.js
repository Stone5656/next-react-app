import Container from "@/components/container";
import Hero from "@/components/hero";
import Postbody from "@/components/post-body";
import Contact from "@/components/contact";

export default function About() {
  return (
  <Container large>
    <Hero title="About" subtitle="About development activities" />
    <Postbody></Postbody>
    </Postbody>
    <Contact />
  </Container>
  )
}
