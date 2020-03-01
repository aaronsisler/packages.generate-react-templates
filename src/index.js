import mini from "minimist";
import generatePage from "./generate-page";
import { validateArgs } from "./utils";

const rootMethod = () => {
  const { name, templateType } = mini(process.argv.slice(2));
  validateArgs({ name, templateType });
  switch (templateType) {
    case "PAGE":
      generatePage(name);
      break;
    default:
      console.log(`Template Type: ${templateType} not found`); // eslint-disable-line no-console
      break;
  }
};

export default rootMethod();
