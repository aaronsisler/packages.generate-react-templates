import mini from "minimist";
import generatePage from "./generate-page";
import generateComponent from "./generate-component";
import generateContainer from "./generate-container";
import { validateArgs } from "./utils";

const rootMethod = () => {
  const { name, type } = mini(process.argv.slice(2));
  validateArgs({ name, type });
  switch (type) {
    case "PAGE":
      generatePage(name);
      generateContainer(name);
      break;
    case "CONT":
      generateContainer(name);
      break;
    case "COMP":
      generateComponent(name);
      break;
    default:
      console.log(` Template Type: ${type} not found`); // eslint-disable-line no-console
      console.log(`Template Types: PAGE, CONT, COMP`); // eslint-disable-line no-console
      break;
  }
};

export default rootMethod();
