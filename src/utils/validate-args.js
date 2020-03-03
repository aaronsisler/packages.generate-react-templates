/* eslint-disable no-console */

const validateArgs = ({ name, type }) => {
  const validTemplateTypes = ["PAGE", "CONT", "COMP"];

  if (type === undefined) {
    console.log("type' is required\ni.e. --type=PAGE (2 dashes)");
    process.exit(1);
  }

  if (!validTemplateTypes.includes(type)) {
    console.log(
      "type' must be PAGE, CONT, or COMP\ni.e. --type=PAGE (2 dashes)"
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
