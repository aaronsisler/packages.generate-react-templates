const generateUpperName = (name, templateType) => {
  const matchIndices = [];
  const nameLength = name.length;

  [...name].forEach((char, index) => {
    if (char === "-") {
      matchIndices.push(index);
    }
  });

  const upperName = [];
  upperName.push(name[0].toUpperCase());

  for (let i = 1; i < nameLength; i++) {
    if (matchIndices.includes(i)) {
      upperName.push(name[i + 1].toUpperCase());
      i++;
    } else {
      upperName.push(name[i]);
    }
  }

  switch (templateType) {
    case "PAGE":
    case "CONTAINER":
      return `${upperName.join("")}Container`;
    case "COMPONENT":
      return upperName.join("");
    default:
      throw new Error("templateType not found");
  }
};

export default generateUpperName;
