<template>
  <div class="about-us single-post-page">
    <div class="single-post ">
      <div class="section">

        <h2>ABOUT US</h2>
        <br>
        <p>OX(オックス）は、ヴィーガンのライフスタイルに興味があるけれど、<br>
          何から始めたらいいか分からないという方のための情報サイトです。 <br>
        </p>
        <p>
          わたしたちは健康的に、強く大きくなるためには <br>
          肉が絶対に必要だと勘違いしていました。<br>
          今も同じように考えている方たちや、　<br>
          それが勘違いだと気づいたあとに、 <br>
          「じゃあ結局何すればいいの？」<br>
          と思って一歩踏み出せずにいる方たちへ <br>
          情報提供ができればと思い立ち上げました。
        </p>
        <p>わたしたちが「強く大きくなるには肉を食わねば!!」と思っていたのは、 <br>
          実は昔タバコ会社がアスリートや医者を使ったプロモーションを行って <br>
          無理やりタバコと強靭・健康なイメージを結びつけたのと同じ背景。 <br>
          科学的データが揃っていても無視して人々を混乱させるマーケティング手法でした。 <br>
          今は大規模食品会社が同じスキームを使っています。</p>

        <p>
          一生肉食わない！というドラマティックなものじゃなくて、なるべく菜食を選んで、<br>
          すこしでも健康的に、パフォーマンス高く、毎日をよりエネルギッシュに生きる手助けをできればと思っています。
        </p>
        <p>
          OXという名前の由来はドイツの伝説的ストロングマンであるパトリック・バブミアンが、 <br>
          ドキュメンタリー映画The Game Changerで語ったエピソードに由来しています。 <br>
          「ある人が俺に、”なんで肉を食べないのに、雄牛（OX）のように強くなれるの？”と聞いてきた。 <br>
          俺はこう答えたんだ。”君は今まで一度でも、雄牛が肉を食うのを見たことがあるか？」 <br>
          菜食で、OXのように強くたくましく、健康的に生活しましょう。
        </p>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
  .about-us{
    padding: 10vh 0;
    margin-bottom: 0;
  }
  .single-post{
    width: get-vw(620px);
    /*max-width: 620px;*/
    margin: auto;
    @media screen and (max-width: 768px){
      width: 100%;
    }
    p{
      margin-bottom: get-vw(30px);
    }
    .section{
      @media screen and (max-width: 768px){
        width: responsive-vw(310px);
        margin: auto;
      }
    }
  }
</style>

<script>
    export default {
        head: {
            title: 'ABOUT US'
        }
    }
</script>
