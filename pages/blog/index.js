import Meta from "@/components/meta";
import Container from "@/components/container";
import Hero from "@/components/hero";

export default function Blog() {
  return (
    <Container large>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事" />
      <Hero title="Blog" subtitle="Recent Posts" />
    </Container>
  )
}
