const { execSync } = require("child_process");

function initCmd(ctx){
  if(!ctx.root){
    throw new Error("Define SRLPM_PATH env var");
  }
  execSync(`echo "{\\"projects\\": {}}" > ${ctx.root}/context.json`);
};

module.exports = initCmd;
