/* eslint-disable no-console */

const validateArgs = ({ templateType, name }) => {
  const validTemplateTypes = ["PAGE", "CONTAINER", "COMPONENT"];

  if (templateType === undefined) {
    console.log(
      "templateType' is required\ni.e. --templateType=PAGE (2 dashes)"
    );
    process.exit(1);
  }

  if (!validTemplateTypes.includes(templateType)) {
    console.log(
      "templateType' must be PAGE, CONTAINER, or COMPONENT\ni.e. --templateType=PAGE (2 dashes)"
    );
    process.exit(1);
  }

  if (name === undefined) {
    console.log("name' is required\ni.e. --name=taco (2 dashes)");
    process.exit(1);
  }

  if (name.length === 0) {
    console.log("'name' must be populated");
    console.log("name: ", name);
    process.exit(1);
  }

  if (name.includes("page")) {
    console.log("'name' does not need 'page' added");
    console.log("name: ", name);
    process.exit(1);
  }

  if (name.includes("container")) {
    console.log("'name' does not need 'container' added");
    console.log("name: ", name);
    process.exit(1);
  }

  if (name.substr(-1) === "-") {
    console.log("'name' should not end with a hyphen");
    console.log("name: ", name);
    process.exit(1);
  }
};

export default validateArgs;
