<template>
  <div class="contact-form">
    <div class="comp-section-title">
      <h2 class="en-medi section-title">CONTACT</h2>
      <hr>
      <h3>サイトのことやヴィーガンについて、 <br class="sp"> ご相談やご質問があればこちらよりお送りください。</h3>
    </div>

    <form method="POST"  class="flex column form" name="contact" data-netlify="true">
      <input required type="text" name="name" placeholder="お名前">
      <input required type="email" name="email" placeholder="メールアドレス">
      <textarea required name="content" id="" cols="30" rows="10" placeholder="お問い合わせ内容"></textarea>
      <button type="submit">SUBMIT</button>
    </form>
  </div>
</template>

<style lang="scss">
  .contact-form{
    background-color: #333;
    color: #fff;
    padding: get-vh(72px) 0;
    .comp-section-title{
      color: #fff;
    }
    .form{
      width: get-vw(511px);
      margin: get-vh(72px) auto 0;
    }
    input, textarea{
      background-color: #2b2b2b;
      color: #9a9a9a;
      border: solid 0.5px #f2f2f2;
      border-radius: 2px;
      -webkit-appearance: none;
      &:focus{
        outline: none;
        border: solid 0.5px #f2f2f260;
      }
    }
    input{
      height: get-vh(54px);
      padding-left: get-vw(29px);
    }
    input[type="email"]{
      margin: get-vh(36px) 0;
    }
    textarea{
      padding: get-vh(23px) 0 0 get-vw(29px);
      margin-bottom: get-vh(72px);
    }
    button{
      height: get-vh(59px);
      -webkit-backdrop-filter: blur(1.5px);
      backdrop-filter: blur(1.5px);
      border: solid 1px #cbcbcb;
      background-color: #333;
      color: #fff;
      cursor: pointer;
      background-image: linear-gradient(to right, $main-color 50%, transparent 50%);
      background-size: 200% 100%;
      background-position: right bottom;
      transition: all .2s ease-out;
      /*background-color: transparent;*/
      &:hover{
        background-position: left bottom;
        color: #fff;
      }
      &:focus{
        outline: none;
        border: solid 0.5px #f2f2f260;
      }
    }
    @media screen and (max-width: 768px) {
      /*padding: get-vh(89px) 0;*/
      .form{
        width: responsive-vw(362px);
        margin: get-vh(72px) auto 0;
      }
    }
  }
</style>
