import Meta from "@/components/meta";
import Container from "@/components/container";
import Hero from "@/components/hero";
import Postbody from "@/components/post-body";
import Contact from "@/components/contact";
import { TwoColumn,TwoColumnMain,TwoColumnSidebar } from "@/components/two-column";
import Image from "next/image";
import eyecath from 'images/dog.jpg'
import Accordion from "@/components/accordion";


export default function About() {
  return (
    <>
      <Container large>
        <Meta pageTitle="アバウト"
        pageDesc="About development activities"
        pageImg={eyecath.src}
        pageImgW={eyecath.width}
        pageImgH={eyecath.height}
        />
        <Hero title="About" subtitle="About development activities" />
        <figure>
          <Image
            src={eyecath}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <Postbody>
            <p>
              今までと違うものを作ることで愛着がわいてきます。そこで興味を持ったことは小さなことでも
              いいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み
              出すようなモノづくりは、これからも続けていきたいです。
            </p>
            <h2>FAQ</h2>
            <Accordion heading="プログラミングのポイントについて">
              <p>
                プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、目標
                とゴールを決め、そこに向かって様々な課題を設定していきながら、プログラムを作っていきます。
              </p>
            </Accordion>
            <Accordion heading="古代語の解読について">
              <p>
                古代語を解読するのに必要なのは書かれた文書そのものだけです。古代の世界観や思考方法。
                それらを読み取ってこそ古代の世界観が理解できます。
              </p>
            </Accordion>
            <Accordion heading="公開リポジトリの活用について">
              <p>
                こうかいりぽじとりをかつようすると、全世界のどこからでもアクセスし、開発者が関連するプロジェ
                クトのタスクを利用できます。
              </p>
            </Accordion>
            </Postbody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <Contact />
          </TwoColumnSidebar>
        </TwoColumn>
      </Container>
    </>
  );
}
