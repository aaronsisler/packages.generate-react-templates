import copyTemplate from "./copy-template";

const copyTemplates = (lowerName, useTypescript) => {
  if (useTypescript) {
    copyTemplate(
      `${__dirname}/../templates/typescript/markup.tsx`,
      `${__dirname}/${lowerName}/${lowerName}.tsx`
    );
    copyTemplate(
      `${__dirname}/../templates/typescript/index.ts`,
      `${__dirname}/${lowerName}/index.ts`
    );
  } else {
    copyTemplate(
      `${__dirname}/../templates/javascript/markup.jsx`,
      `${__dirname}/${lowerName}/${lowerName}.jsx`
    );
    copyTemplate(
      `${__dirname}/../templates/javascript/index.js`,
      `${__dirname}/${lowerName}/index.js`
    );
  }

  copyTemplate(
    `${__dirname}/../templates/styles.scss`,
    `${__dirname}/${lowerName}/${lowerName}.scss`
  );
};

export default copyTemplates;
