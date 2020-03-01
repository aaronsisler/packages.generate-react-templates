const generatePageName = name => {
  const matchIndices = [];
  const nameLength = name.length;

  [...name].forEach((char, index) => {
    if (char === "-") {
      matchIndices.push(index);
    }
  });

  const pageName = [];
  pageName.push(name[0].toUpperCase());

  for (let i = 1; i < nameLength; i++) {
    if (matchIndices.includes(i)) {
      pageName.push(name[i + 1].toUpperCase());
      i++;
    } else {
      pageName.push(name[i]);
    }
  }

  return `${pageName.join("")}Page`;
};

export default generatePageName;
