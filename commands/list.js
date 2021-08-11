import { execSync } from "child_process";

function listCmd(ctx){
  for(const name in ctx.projects){
    const project = ctx.projects[name];

    process.stdout.write(`${name}:
    - language: ${project.language}
    - description: ${project.description}
    - size: `);

    execSync(`du -hs ${process.env.SRLPM_PATH}/${name}`, { stdio: "inherit" });
    console.log();
  }
};

export default listCmd;
