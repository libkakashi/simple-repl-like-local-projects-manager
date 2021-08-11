import { execSync } from "child_process";

function deleteCmd(ctx, { name }){
  if(!name){
    throw new Error("Required argument name.");
  }
  if(!ctx.projects[name]){
    throw new Error("Project doesn't exist.");
  }
  delete ctx.projects[name];
  execSync(`rm -rf ${process.env.SRLPM_PATH}/${name}`, { stdio: "inherit" });

  console.log(`Created project ${name}`);
};

export default deleteCmd;
