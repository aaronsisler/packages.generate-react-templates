const generateLowerName = (name, templateType) => {
  const lowerName = name.toLowerCase();

  switch (templateType) {
    case "COMP":
    case "PAGE":
      return lowerName;
    case "CONT":
      return `${lowerName}-container`;
    default:
      throw new Error(`type not found: ${templateType}`);
  }
};

export default generateLowerName;
