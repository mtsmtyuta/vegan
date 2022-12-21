<template>
    <div class="single-post-page">
        <div class="single-post">
            <div class="section">
                <div class="headline">
                    <h1 class="title">ABOUT US</h1>
                    <img class="img-box hero"
                         src="~assets/img/ox_about.png"
                         alt="about background ox image"
                    />
                </div>
                <div class="content">
                    <p>OX(オックス）は、ヴィーガンや菜食・ホールフードに興味があるけれど、
                        何から始めたらいいか分からないという方のための情報サイトです。
                    </p>
                    <p>
                        わたしたちは健康的に、強くたくましく生きるためには
                        肉が絶対に必要だと勘違いしていました。
                        今も同じように考えている方たちや、
                        それが勘違いだと気づいたあとに、
                        「じゃあ結局何すればいいの？」
                        と思って一歩踏み出せずにいる方たちへ
                        情報提供ができればと思い立ち上げました。
                    </p>
                    <p>
                        一生肉食わない！というドラマティックなものじゃなくて、なるべく菜食を選んで、
                        すこしでも健康的に、パフォーマンス高く、毎日をよりエネルギッシュに生きる手助けをできればと思っています。
                    </p>
                    <p>
                        OXという名前の由来はドイツの伝説的ストロングマンである
                        パトリック・バブミアンが、 ドキュメンタリー映画
                        The Game Changerで語ったエピソードに由来しています。
                        「ある人が俺に、”君はなんで肉を食べないのに、
                        雄牛（OX）のように強くなれるの？”と聞いてきた。
                        俺はこう答えたんだ。”君は今まで一度でも、
                        雄牛が肉を食うのを見たことがあるか？」
                        菜食で、雄牛のように強くたくましく、健康的に生活しましょう。
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

.headline{
    @media screen and (max-width: 767px){
        padding-top: 180px;
    }
}
.single-post-page{
    /*background-color: #f2f2f2;*/
    padding-top: get-vw(133px);

    @media screen and (max-width: 767px){
        padding-top: 0;
    }
    .content{
        font-size: 20px;
        line-height: 2.6;
        letter-spacing: 0.4px;
        /*letter-spacing: get-vw(1.5px);*/
        text-align: left;
        color: #191919;
        font-weight: 300;
        @media screen and (max-width: 767px){
            font-size: 16px;
        }
    }

}
.hero{
    background-size: cover;
    background-position: top;
    height: get-vw(599px);
    max-height: 599px;
    @media screen and (max-width: 767px){
        width: 100%;
        height: responsive-vw(275px);
        margin-bottom: responsive-vw(36px);
    }
}
.single-post{
    @include content-container();
    p, ul, ol{
        margin-bottom: get-vw(30px);
        line-height: 40px;
        @media screen and (max-width: 767px){
            margin-bottom: 30px;
            line-height: 30px;
        }
    }
    ol{
        img{
            @media screen and (max-width: 767px){
                position: relative;
                right: 40px;
            }
        }
    }

    h2{
        font-size: 30px;
        margin-top: get-vw(20px);
        margin-bottom: get-vw(30px);
        line-height: 1.23;
        @media screen and (max-width: 1280px) {
            font-size: 28px;
        }
        @media screen and (max-width: 767px){
            font-size: 20px;
            margin: responsive-vw(20px) 0 30px;
        }
    }
    h3{
        font-size: 22px;
        margin-top: get-vw(20px);
        line-height: 1.23;
        @media screen and (max-width: 1280px) {
            font-size: 18px;
        }
    }
    .title{
        font-size: 36px;
        line-height: 1.5;
        margin-bottom: 36px;
        font-weight: 400;
        text-align: right;
        @media screen and (max-width: 767px){
            font-size: 18px;
            margin-bottom: 18px;
        }
    }
    .content{
        margin-top: get-vw(42px);
    }

    @media screen and (max-width: 767px){
        width: 100%;
    }
    .section{
        @media screen and (max-width: 767px){
            width: $sp-contents;
            margin: auto;
        }
    }
}

</style>

<script>
export default {
    layout: 'article',
    head: {
        title: 'ABOUT US'
    }
}
</script>
