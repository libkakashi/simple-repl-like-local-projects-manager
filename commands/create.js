const { execSync } = require("child_process");
const cuteName = require("../lib/cuteName");

function createCmd(ctx, { name, language, description }){
  if(name != "_default" && ctx.projects[name]){
    throw new Error("Project already exists.");
  }
  if(!name || name == "_default"){
    do {
      name = cuteName();
    } while(ctx.projects[name]);
  }

  ctx.projects[name] = { language, description };
  execSync(`mkdir ${ctx.root}/${name}`, { stdio: "inherit" });

  console.log(`Created project ${ctx.root}/${name}`);
};

module.exports = createCmd;
