const { execSync } = require("child_process");

function deleteCmd(ctx, { name }){
  if(!name){
    throw new Error("Required argument name.");
  }
  if(!ctx.projects[name]){
    throw new Error("Project doesn't exist.");
  }
  delete ctx.projects[name];
  execSync(`rm -rf ${ctx.root}/${name}`, { stdio: "inherit" });

  console.log(`Deleted project ${name}`);
};

module.exports = deleteCmd;
