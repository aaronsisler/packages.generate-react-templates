import copyTemplate from "./copy-template";

const copyTemplates = (
  { indexFile, markupFile, stylesFile },
  useTypescript
) => {
  if (useTypescript) {
    copyTemplate(`${__dirname}/../templates/typescript/markup.tsx`, markupFile);
    copyTemplate(`${__dirname}/../templates/typescript/index.ts`, indexFile);
  } else {
    copyTemplate(`${__dirname}/../templates/javascript/markup.jsx`, markupFile);
    copyTemplate(`${__dirname}/../templates/javascript/index.js`, indexFile);
  }

  copyTemplate(`${__dirname}/../templates/styles.scss`, stylesFile);
};

export default copyTemplates;
