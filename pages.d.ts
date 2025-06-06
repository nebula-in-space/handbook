interface ParsedPage {
  title: string;
  pageid: number;
  revid: number;
  text: WrappedString;
  categories: WrappedString[];
  links: WrappedString[];
  templates: WrappedString[];
  images: string[];
  sections: WikiSection[];
  displaytitle: string;
}

interface WrappedString {
  "*": string;
}

interface WikiSection {
  toclevel: number;
  level: string;
  line: string;
  number: string;
  index: string;
  fromtitle: string;
  byteoffset: number;
  anchor: string;
}

declare module "@assets/*.svg"
declare module "@assets/*.gif"
declare module "@assets/*.png"

declare module "@pages/*.json" {
  const src: ParsedPage;
  export default src;
}

interface BlocksMap {
  [key: string]: string;
  }

declare module "@json/*.json" {
  const src: BlocksMap;
  export default src;
}
