import validateComponent from "./validate-component";
import validateContainer from "./validate-container";
import validatePage from "./validate-page";

const validateProject = ({ name, type }) => {
  switch (type) {
    case "PAGE":
      validatePage(name);
      validateContainer(name);
      break;
    case "CONT":
      validateContainer(name);
      break;
    case "COMP":
      validateComponent(name);
      break;
    default:
      break;
  }
};

export default validateProject;
