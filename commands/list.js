const { execSync } = require("child_process");

function listCmd(ctx){
  for(const name in ctx.projects){
    const project = ctx.projects[name];

    process.stdout.write(`${name}:
    - language: ${project.language}
    - description: ${project.description}
    - size: `);

    execSync(`du -hs ${ctx.root}/${name}`, { stdio: "inherit" });
    console.log();
  }
};

module.exports = listCmd;
