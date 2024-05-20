import { Skill } from "@/types/skills";

export const skillData: Skill[] = [
    {
        id:"javascript",
        title:"Javascript",
        icon:"javascript",
        description:"初めての言語はJavascriptでした。バニラJavascriptで簡単なゲームも作って基礎を磨きました。"
    },
    {
        id:"typescript",
        title:"Typescript",
        icon:"typescript",
        description:"Typescriptはオブジェクト指向プログラムを学ぶために学習にTypescriptを学習しました。今では、TypescriptでNextJsを書いています。"
    },
    {
        id:"react",
        title:"react",
        icon:"react",
        description:"ReactはhooksやReduxの理念を理解することに戸惑いが理ましたが、開発を進めるごとに理解が深まり開発の効率を上げてくれました。"
    },
    {
        id:"next",
        title:"Next.js",
        icon:"next",
        description:"Next.Jsでは、サーバーサイドレンダリングに魅力を感じこのフレームワーク一つで作成を完結できてしまうのでここ最近ではずっとNextJsを使用して開発をしています。"
    },
    {
        id:"three",
        title:"Three.JS",
        icon:"three",
        description:"Three.Jsは趣味程度で学習しており、将来的には3D Webアプリケーションの作成に手がけていきたいです。"
    },
    {
        id:"css",
        title:"CSS",
        icon:"css",
        description:"CSSではHTMLと共に学んできたこともありその基礎が様々なフレームワークを使用しても困ることなく使える技術を取得しました。"
    },
    {
        id:"tailwind",
        title:"Tailwind",
        icon:"tailwind",
        description:"TailwindはNext.Jsでよく使って開発しています。 CSSと比べ速効性があり描きやすいためTailwindを好んで使用しています。"
    },
]as const;