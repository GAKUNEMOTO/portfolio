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
        description:"TypescriptはNextJsでWebアプリケーション開発をしています。"
    },
    {
        id:"react",
        title:"react",
        icon:"react",
        description:"TypescriptはNextJsでWebアプリケーション開発をしています。"
    },
    {
        id:"next",
        title:"Next.js",
        icon:"next",
        description:"Next.JsはTypescriptとTailwindでWebsプリケーション開発をしています。"
    },
    {
        id:"three",
        title:"Three.JS",
        icon:"three",
        description:"Three.Jsは趣味程度で簡単な3D Webサイトを作成しています。"
    },
    {
        id:"css",
        title:"CSS",
        icon:"css",
        description:"CSSではHTMLとJacascriptやReactで使用して開発をしています。"
    },
    {
        id:"tailwind",
        title:"Tailwind",
        icon:"tailwind",
        description:"TailwindはNext.Jsでよく使って開発しています。"
    },
]as const;