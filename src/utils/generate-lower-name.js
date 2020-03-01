const generateLowerName = (name, templateType) => {
  const lowerName = name.toLowerCase();

  switch (templateType) {
    case "COMPONENT":
    case "PAGE":
      return lowerName;
    case "CONTAINER":
      return `${lowerName}-container`;
    default:
      throw new Error("templateType not found");
  }
};

export default generateLowerName;
