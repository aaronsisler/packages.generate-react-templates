const fse = require("fs-extra");

const copyTemplateDirectory = () => {
  fse.mkdir(`${__dirname}/../../dist/templates`);
  const files = fse.readdirSync(`${__dirname}/../templates/`);
  files.forEach(file => {
    fse.copyFileSync(
      `${__dirname}/../templates/${file}`,
      `${__dirname}/../../dist/templates/${file}`
    );
  });
};

copyTemplateDirectory();
