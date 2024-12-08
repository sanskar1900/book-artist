export const determineColor = (activeSection) => {
  if (activeSection == "intro") {
    return "white";
  } else if (activeSection == "whyElevn") {
    return "white";
  } else if (activeSection == "howElevnWorks") {
    return "#351B4F";
  } else if (activeSection == "elevnEffect") {
    return "white";
  } else if (activeSection == "ourFeatures") {
    return "#351B4F";
  } else if (activeSection == "privacy") {
    return "#351B4F";
  } else if (activeSection == "tnc") {
    return "#351B4F";
  } else if (activeSection == "guidelines") {
    return "#351B4F";
  } else if (activeSection == "contact") {
    return "#351B4F";
  } else if (activeSection == "footer") {
    return "white";
  } else {
    return "white";
  }
};

export const determineBackgroundColor = (activeSection) => {
  if (activeSection == "intro") {
    return "transparent";
  } else if (activeSection == "whyElevn") {
    return "black";
  } else if (activeSection == "howElevnWorks") {
    return "#D4D7FF";
  } else if (activeSection == "elevnEffect") {
    return "#351B4F";
  } else if (activeSection == "ourFeatures") {
    return "#D4D7FF";
  } else if (activeSection == "privacy") {
    return "#D4D7FF";
  } else if (activeSection == "tnc") {
    return "#D4D7FF";
  } else if (activeSection == "guidelines") {
    return "#D4D7FF";
  } else if (activeSection == "contact") {
    return "#D4D7FF";
  } else if (activeSection == "footer") {
    return "black";
  } else {
    return "white";
  }
};
