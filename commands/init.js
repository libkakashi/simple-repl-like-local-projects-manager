import { execSync } from "child_process";

function initCmd(ctx){
  if(!process.env.SRLPM_PATH){
    throw new Error("Define SRLPM_PATH env var");
  }
  execSync(`echo "{\\"projects\\": {}}" > ${process.env.SRLPM_PATH}/context.json`);
};

export default initCmd;
