import mini from "minimist";
import generatePage from "./generate-page";
import generateComponent from "./generate-component";
import generateContainer from "./generate-container";
import { validateArgs, validateProject } from "./utils";

const rootMethod = () => {
  const { name, type, useTypescript } = mini(process.argv.slice(2));
  validateArgs({ name, type });
  validateProject({ name, type });
  switch (type) {
    case "PAGE":
      generatePage(name);
      generateContainer(name);
      break;
    case "CONT":
      generateContainer(name, useTypescript);
      break;
    case "COMP":
      generateComponent(name, useTypescript);
      break;
    default:
      break;
  }
};

export default rootMethod();
