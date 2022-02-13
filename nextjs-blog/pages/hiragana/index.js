import style from "../characterSet.module.css";
import Table from "../tableComponents/languageTableComponent.js";
import TableComb from "../tableComponents/languageCombTableComponent.js";
import NavBar from "../navigationBar/navigationBar";
import Head from "next/head";
const hiragana = [
  {
    jap: "あ",
    lat: "a",
    infoImg: ["/images/hiragana/a.jpg"],
    examples: [
      {
        jap: "ありがとう ございます",
        lat: "Arigatou gozaimasu",
        meaning: "Thank you",
      },
      { jap: "あなた", lat: "Anata", meaning: "You" },
      { jap: "あした", lat: "Ashita", meaning: "Tomorrow" },
    ],
  },
  {
    jap: "い",
    lat: "i",
    infoImg: ["/images/hiragana/i.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "う",
    lat: "u",
    infoImg: ["/images/hiragana/u.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "え",
    lat: "e",
    infoImg: ["/images/hiragana/e.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "お",
    lat: "o",
    infoImg: ["/images/hiragana/o.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "か",
    lat: "ka",
    infoImg: ["/images/hiragana/ka.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "き",
    lat: "ki",
    infoImg: ["/images/hiragana/ki.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "く",
    lat: "ku",
    infoImg: ["/images/hiragana/ku.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "け",
    lat: "ke",
    infoImg: ["/images/hiragana/ke.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "こ",
    lat: "ko",
    infoImg: ["/images/hiragana/ko.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "が",
    lat: "ga",
    infoImg: ["/images/hiragana/ga.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ぎ",
    lat: "gi",
    infoImg: ["/images/hiragana/gi.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ぐ",
    lat: "gu",
    infoImg: ["/images/hiragana/gu.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "げ",
    lat: "ge",
    infoImg: ["/images/hiragana/ge.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ご",
    lat: "go",
    infoImg: ["/images/hiragana/go.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "さ",
    lat: "sa",
    infoImg: ["/images/hiragana/sa.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "し",
    lat: "shi",
    infoImg: ["/images/hiragana/shi.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "す",
    lat: "su",
    infoImg: ["/images/hiragana/su.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "せ",
    lat: "se",
    infoImg: ["/images/hiragana/se.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "そ",
    lat: "so",
    infoImg: ["/images/hiragana/so.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ざ",
    lat: "za",
    infoImg: ["/images/hiragana/za.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "じ",
    lat: "ji",
    infoImg: ["/images/hiragana/ji.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ず",
    lat: "zu",
    infoImg: ["/images/hiragana/zu.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ぜ",
    lat: "ze",
    infoImg: ["/images/hiragana/ze.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ぞ",
    lat: "zo",
    infoImg: ["/images/hiragana/zo.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "た",
    lat: "ta",
    infoImg: ["/images/hiragana/ta.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ち",
    lat: "chi",
    infoImg: ["/images/hiragana/chi.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "つ",
    lat: "tsu",
    infoImg: ["/images/hiragana/tsu.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "て",
    lat: "te",
    infoImg: ["/images/hiragana/te.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "と",
    lat: "to",
    infoImg: ["/images/hiragana/to.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "だ",
    lat: "da",
    infoImg: ["/images/hiragana/da.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ぢ",
    lat: "ji",
    infoImg: ["/images/hiragana/dji.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "づ",
    lat: "zu",
    infoImg: ["/images/hiragana/dzu.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "で",
    lat: "de",
    infoImg: ["/images/hiragana/de.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ど",
    lat: "do",
    infoImg: ["/images/hiragana/do.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "な",
    lat: "na",
    infoImg: ["/images/hiragana/na.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "に",
    lat: "ni",
    infoImg: ["/images/hiragana/ni.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ぬ",
    lat: "nu",
    infoImg: ["/images/hiragana/nu.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ね",
    lat: "ne",
    infoImg: ["/images/hiragana/ne.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "の",
    lat: "no",
    infoImg: ["/images/hiragana/no.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "は",
    lat: "ha",
    infoImg: ["/images/hiragana/ha.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ひ",
    lat: "hi",
    infoImg: ["/images/hiragana/hi.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ふ",
    lat: "fu",
    infoImg: ["/images/hiragana/fu.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "へ",
    lat: "he",
    infoImg: ["/images/hiragana/he.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ほ",
    lat: "ho",
    infoImg: ["/images/hiragana/ho.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ば",
    lat: "ba",
    infoImg: ["/images/hiragana/ba.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "び",
    lat: "bi",
    infoImg: ["/images/hiragana/bi.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ぶ",
    lat: "bu",
    infoImg: ["/images/hiragana/bu.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "べ",
    lat: "be",
    infoImg: ["/images/hiragana/be.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ぼ",
    lat: "bo",
    infoImg: ["/images/hiragana/bo.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ぱ",
    lat: "pa",
    infoImg: ["/images/hiragana/pa.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ぴ",
    lat: "pi",
    infoImg: ["/images/hiragana/pi.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ぷ",
    lat: "pu",
    infoImg: ["/images/hiragana/pu.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ぺ",
    lat: "pe",
    infoImg: ["/images/hiragana/pe.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ぽ",
    lat: "po",
    infoImg: ["/images/hiragana/po.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ま",
    lat: "ma",
    infoImg: ["/images/hiragana/ma.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "み",
    lat: "mi",
    infoImg: ["/images/hiragana/mi.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "む",
    lat: "mu",
    infoImg: ["/images/hiragana/mu.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "め",
    lat: "me",
    infoImg: ["/images/hiragana/me.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "も",
    lat: "mo",
    infoImg: ["/images/hiragana/mo.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "や",
    lat: "ya",
    infoImg: ["/images/hiragana/ya.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  { jap: "", lat: "", infoImg: "" },
  {
    jap: "ゆ",
    lat: "yu",
    infoImg: ["/images/hiragana/yu.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  { jap: "", lat: "", infoImg: "" },
  {
    jap: "よ",
    lat: "yo",
    infoImg: ["/images/hiragana/yo.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ら",
    lat: "ra",
    infoImg: ["/images/hiragana/ra.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "り",
    lat: "ri",
    infoImg: ["/images/hiragana/ri.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "る",
    lat: "ru",
    infoImg: ["/images/hiragana/ru.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "れ",
    lat: "re",
    infoImg: ["/images/hiragana/re.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ろ",
    lat: "ro",
    infoImg: ["/images/hiragana/ro.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "わ",
    lat: "wa",
    infoImg: ["/images/hiragana/wa.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  { jap: "", lat: "", infoImg: "" },
  { jap: "", lat: "", infoImg: "" },
  { jap: "", lat: "", infoImg: "" },
  {
    jap: "を",
    lat: "wo",
    infoImg: ["/images/hiragana/wo.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
  {
    jap: "ん",
    lat: "n/m",
    infoImg: ["/images/hiragana/n.jpg"],
    examples: [
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
      { jap: "", lat: "", meaning: "" },
    ],
  },
];
const hiraganaCombinations = [
  {
    jap: "きゃ",
    lat: "kya",
    infoImg: ["/images/hiragana/ki.jpg", "/images/hiragana/ya.jpg"],
  },
  {
    jap: "きゅ",
    lat: "kyu",
    infoImg: ["/images/hiragana/ki.jpg", "/images/hiragana/yu.jpg"],
  },
  {
    jap: "きょ",
    lat: "kyo",
    infoImg: ["/images/hiragana/ki.jpg", "/images/hiragana/yo.jpg"],
  },
  {
    jap: "ぎゃ",
    lat: "gya",
    infoImg: ["/images/hiragana/gi.jpg", "/images/hiragana/ya.jpg"],
  },
  {
    jap: "ぎゅ",
    lat: "gyu",
    infoImg: ["/images/hiragana/gi.jpg", "/images/hiragana/yo.jpg"],
  },
  {
    jap: "ぎょ",
    lat: "gyo",
    infoImg: ["/images/hiragana/gi.jpg", "/images/hiragana/yo.jpg"],
  },
  {
    jap: "しゃ",
    lat: "sha",
    infoImg: ["/images/hiragana/shi.jpg", "/images/hiragana/ya.jpg"],
  },
  {
    jap: "しゅ",
    lat: "shu",
    infoImg: ["/images/hiragana/shi.jpg", "/images/hiragana/yu.jpg"],
  },
  {
    jap: "しょ",
    lat: "sho",
    infoImg: ["/images/hiragana/shi.jpg", "/images/hiragana/yo.jpg"],
  },
  {
    jap: "じゃ",
    lat: "ja",
    infoImg: ["/images/hiragana/ji.jpg", "/images/hiragana/ya.jpg"],
  },
  {
    jap: "じゅ",
    lat: "ju",
    infoImg: ["/images/hiragana/ji.jpg", "/images/hiragana/yu.jpg"],
  },
  {
    jap: "じょ",
    lat: "jo",
    infoImg: ["/images/hiragana/ji.jpg", "/images/hiragana/yo.jpg"],
  },
  {
    jap: "ちゃ",
    lat: "cha",
    infoImg: ["/images/hiragana/chi.jpg", "/images/hiragana/ya.jpg"],
  },
  {
    jap: "ちゅ",
    lat: "chu",
    infoImg: ["/images/hiragana/chi.jpg", "/images/hiragana/yu.jpg"],
  },
  {
    jap: "ちょ",
    lat: "cho",
    infoImg: ["/images/hiragana/chi.jpg", "/images/hiragana/yo.jpg"],
  },
  {
    jap: "にゃ",
    lat: "nya",
    infoImg: ["/images/hiragana/ni.jpg", "/images/hiragana/ya.jpg"],
  },
  {
    jap: "にゅ",
    lat: "nyu",
    infoImg: ["/images/hiragana/ni.jpg", "/images/hiragana/yu.jpg"],
  },
  {
    jap: "にょ",
    lat: "nyo",
    infoImg: ["/images/hiragana/ni.jpg", "/images/hiragana/yo.jpg"],
  },
  {
    jap: "ひゃ",
    lat: "hya",
    infoImg: ["/images/hiragana/hi.jpg", "/images/hiragana/ya.jpg"],
  },
  {
    jap: "ひゅ",
    lat: "hyu",
    infoImg: ["/images/hiragana/hi.jpg", "/images/hiragana/yu.jpg"],
  },
  {
    jap: "ひょ",
    lat: "hyo",
    infoImg: ["/images/hiragana/hi.jpg", "/images/hiragana/yo.jpg"],
  },
  {
    jap: "びゃ",
    lat: "bya",
    infoImg: ["/images/hiragana/bi.jpg", "/images/hiragana/ya.jpg"],
  },
  {
    jap: "びゅ",
    lat: "byu",
    infoImg: ["/images/hiragana/bi.jpg", "/images/hiragana/yu.jpg"],
  },
  {
    jap: "びょ",
    lat: "byo",
    infoImg: ["/images/hiragana/bi.jpg", "/images/hiragana/yo.jpg"],
  },
  {
    jap: "ぴゃ",
    lat: "pya",
    infoImg: ["/images/hiragana/pi.jpg", "/images/hiragana/ya.jpg"],
  },
  {
    jap: "ぴゅ",
    lat: "pyu",
    infoImg: ["/images/hiragana/pi.jpg", "/images/hiragana/yu.jpg"],
  },
  {
    jap: "ぴょ",
    lat: "pyo",
    infoImg: ["/images/hiragana/pi.jpg", "/images/hiragana/yo.jpg"],
  },
  {
    jap: "みゃ",
    lat: "mya",
    infoImg: ["/images/hiragana/mi.jpg", "/images/hiragana/ya.jpg"],
  },
  {
    jap: "みゅ",
    lat: "myu",
    infoImg: ["/images/hiragana/mi.jpg", "/images/hiragana/yu.jpg"],
  },
  {
    jap: "みょ",
    lat: "myo",
    infoImg: ["/images/hiragana/mi.jpg", "/images/hiragana/yo.jpg"],
  },
  {
    jap: "りゃ",
    lat: "rya",
    infoImg: ["/images/hiragana/ri.jpg", "/images/hiragana/ya.jpg"],
  },
  {
    jap: "りゅ",
    lat: "ryu",
    infoImg: ["/images/hiragana/ri.jpg", "/images/hiragana/yu.jpg"],
  },
  {
    jap: "りょ",
    lat: "ryo",
    infoImg: ["/images/hiragana/ri.jpg", "/images/hiragana/yo.jpg"],
  },
];

export default function Hiragana() {
  return (
    <div className="container">
      <Head>
        <title>NiponABC Hiragana</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <h1 className={style.title}>
        <p>Hiragana</p>
        <p>ひらがな</p>
      </h1>
      <p>
        The characters in the chart below are called Hiragana. Hiragana is the
        main alphabet or character set for Japanese.{" "}
      </p>
      <div className={style.vowelsText}>
        <p>There are 5 vowels in Japanese. </p>
        <ul className={style.vowelsListItem}>
          <li>{hiragana[0].jap + " " + hiragana[0].lat}</li>
          <li>{hiragana[1].jap + " " + hiragana[1].lat}</li>
          <li>{hiragana[2].jap + " " + hiragana[2].lat}</li>
          <li>{hiragana[3].jap + " " + hiragana[3].lat}</li>
          <li>{hiragana[4].jap + " " + hiragana[4].lat}</li>
        </ul>
      </div>
      <p>
        All Hiragana characters end with one of these vowels, with the exception
        of (n).{" "}
      </p>
      <h2>Hiragana character set</h2>
      <p>Tap on any character to get more information.</p>
      <Table arrayProps={hiragana} />
      <h2>Hiragana combinations</h2>
      <TableComb arrayProps={hiraganaCombinations} />
      <style jsx global>{`
        :root {
          --step--2: clamp(0.91rem, 0.89rem + 0.1vw, 0.96rem);
          --step--1: clamp(1.09rem, 1.05rem + 0.21vw, 1.2rem);
          --step-0: clamp(1.31rem, 1.24rem + 0.37vw, 1.5rem);
          --step-1: clamp(1.58rem, 1.46rem + 0.59vw, 1.88rem);
          --step-2: clamp(1.89rem, 1.71rem + 0.89vw, 2.34rem);
          --step-3: clamp(2.27rem, 2.01rem + 1.29vw, 2.93rem);
          --step-4: clamp(2.72rem, 2.36rem + 1.83vw, 3.66rem);
          --step-5: clamp(3.27rem, 2.75rem + 2.56vw, 4.58rem);
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: var(--step--1);
          font-family: Oshidashi;
        }
        a {
          font-family: Oshidashi;
          text-decoration: none;
          color: black;
        }

        * {
          box-sizing: border-box;
        }
        .container {
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          font-size: 1.325rem;
          padding: 1rem;
          gap: 1rem;
        }
        .container p {
          width: min(50ch, 90%);
          word-break: break-word;
          text-align: center;
        }
        .container h1 p {
          width: 100%;
        }
        h2 {
          padding-top: 1rem;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
