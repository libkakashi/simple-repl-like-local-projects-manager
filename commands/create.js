import { execSync } from "child_process";
import cuteName from "../lib/cuteName.js";

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
  execSync(`mkdir ${process.env.SRLPM_PATH}/${name}`, { stdio: "inherit" });

  console.log(`Created project $SRLPM_PATH/${name}`);
};

export default createCmd;
