export default `
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    font-display: fallback;
    src: url(/fonts/inter-var.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 100 900;
    font-display: fallback;
    src: url(/fonts/space-grotesk-var.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Menlo';
    font-style: normal;
    font-weight: 100 900;
    font-display: fallback;
    src: url(/fonts/menlo.ttf) format('ttf');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
  font-family: "Menlo";
  font-style: normal;
  font-weight: 100 900;
  font-display: fallback;
  src: url(/fonts/menlo.ttf) format("ttf");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

code {
  margin: 0 !important;
}

/* Inline code */
code[class="inline"] {
  background-color: #f1f1f1;
  font-size: 14px !important;
  color: #006172;
  padding: 2px 6px;
  border-radius: 5px;
}

/* Code block title */
.remark-code-title {
  padding: 15px 20px;
  background-color: #eaeaea;
  margin: 0;
  font-family: "Menlo", Consolas, Roboto Mono, monospace;
  font-size: 14px;
  font-weight: bold;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

/* Big code block */
code[class*="language-"],
pre[class*="language-"] {
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  color: #283136;
  background: #fafafa;
  font-family: "Menlo", Consolas, Roboto Mono, monospace;
  font-size: 14px;
  line-height: 1.5em;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  margin: 0;
}

code[class*="language-"]::-moz-selection,
pre[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection,
pre[class*="language-"] ::-moz-selection {
  background: #cceae7;
  color: #263238;
}

code[class*="language-"]::selection,
pre[class*="language-"]::selection,
code[class*="language-"] ::selection,
pre[class*="language-"] ::selection {
  background: #cceae7;
  color: #263238;
}

:not(pre) > code[class*="language-"] {
  white-space: normal;
  border-radius: 0.2em;
  padding: 0.1em;
}

pre[class*="language-"] {
  overflow: auto;
  position: relative;
  padding: 2em;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid #eaeaea;
}

.language-css > code,
.language-sass > code,
.language-scss > code {
  color: #f76d47;
}

[class*="language-"] .namespace {
  opacity: 0.7;
}

.token.atrule {
  color: #7c4dff;
}

.token.attr-name {
  color: #39adb5;
}

.token.attr-value {
  color: #f6a434;
}

.token.attribute {
  color: #f6a434;
}

.token.boolean {
  color: #7c4dff;
}

.token.builtin {
  color: #39adb5;
}

.token.cdata {
  color: #39adb5;
}

.token.char {
  color: #39adb5;
}

.token.class {
  color: #39adb5;
}

.token.class-name {
  color: #2960b8;
}

.token.comment {
  color: #aabfc9;
}

.token.constant {
  color: #7c4dff;
}

.token.deleted {
  color: #e53935;
}

.token.doctype {
  color: #aabfc9;
}

.token.entity {
  color: #e53935;
}

.token.function {
  color: #0eb47d;
}

.token.hexcode {
  color: #f76d47;
}

.token.id {
  color: #7c4dff;
  font-weight: bold;
}

.token.important {
  color: #7c4dff;
  font-weight: bold;
}

.token.inserted {
  color: #39adb5;
}

.token.keyword {
  color: #2f00af;
}

.token.number {
  color: #f76d47;
}

.token.operator {
  color: #39adb5;
}

.token.prolog {
  color: #aabfc9;
}

.token.property {
  color: #39adb5;
}

.token.pseudo-class {
  color: #f6a434;
}

.token.pseudo-element {
  color: #f6a434;
}

.token.punctuation {
  color: #39adb5;
}

.token.regex {
  color: #6182b8;
}

.token.selector {
  color: #e53935;
}

.token.string {
  color: #ff9c11;
}

.token.symbol {
  color: #7c4dff;
}

.token.tag {
  color: #e53935;
}

.token.unit {
  color: #f76d47;
}

.token.url {
  color: #e53935;
}

.token.variable {
  color: #e53935;
}
`;
