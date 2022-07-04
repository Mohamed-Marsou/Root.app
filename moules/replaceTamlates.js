//*-------------------------## replace Tamplate ##-------------------------.
module.exports = (temp, path) => {
  let output = temp.replace(/{%PATHTEMPICON%}/g, path.pathTempIcon);
  output = output.replace(/{%PATHNAME%}/g, path.pathname);
  output = output.replace(/{%DURATION%}/g, path.duration);
  output = output.replace(/{%PATHDESCRPTION%}/g, path.description);
  output = output.replace(/{%ID%}/g, path.id);

  output = output.replace(/{%PATHLINK1%}/g, path.langugesLinks[0]);
  output = output.replace(/{%LANGNAME1%}/g, path.langNames[0]);

  output = output.replace(/{%PATHLINK2%}/g, path.langugesLinks[1]);
  output = output.replace(/{%LANGNAME2%}/g, path.langNames[1]);

  output = output.replace(/{%PATHLINK3%}/g, path.langugesLinks[2]);
  output = output.replace(/{%LANGNAME3%}/g, path.langNames[2]);

  output = output.replace(/{%PATHLINK4%}/g, path.langugesLinks[3]);
  output = output.replace(/{%LANGNAME4%}/g, path.langNames[3]);

  output = output.replace(/{%PATHLINK5%}/g, path.langugesLinks[4]);
  output = output.replace(/{%LANGNAME5%}/g, path.langNames[4]);

  output = output.replace(/{%PATHLINK6%}/g, path.langugesLinks[5]);
  output = output.replace(/{%LANGNAME6%}/g, path.langNames[5]);

  return output;
};
