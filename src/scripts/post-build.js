const fse = require("fs-extra");

const copyTemplateDirectory = () => {
  fse.mkdirSync(`${__dirname}/../../dist/templates`);
  fse.mkdirSync(`${__dirname}/../../dist/templates/javascript`);
  fse.mkdirSync(`${__dirname}/../../dist/templates/typescript`);

  const tsFiles = fse.readdirSync(`${__dirname}/../templates/typescript/`);
  tsFiles.forEach(file => {
    fse.copyFileSync(
      `${__dirname}/../templates/typescript/${file}`,
      `${__dirname}/../../dist/templates/typescript/${file}`
    );
  });

  const jsFiles = fse.readdirSync(`${__dirname}/../templates/javascript/`);
  jsFiles.forEach(file => {
    fse.copyFileSync(
      `${__dirname}/../templates/javascript/${file}`,
      `${__dirname}/../../dist/templates/javascript/${file}`
    );
  });

  const otherFiles = fse
    .readdirSync(`${__dirname}/../templates/`)
    .filter(item => item.includes(".scss") || item.includes(".js"));

  otherFiles.forEach(file => {
    fse.copyFileSync(
      `${__dirname}/../templates/${file}`,
      `${__dirname}/../../dist/templates/${file}`
    );
  });
};

copyTemplateDirectory();
