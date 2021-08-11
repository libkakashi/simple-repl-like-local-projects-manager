import createCmd from "./commands/create.js";
import deleteCmd from "./commands/delete.js";
import initCmd from "./commands/init.js";
import listCmd from "./commands/list.js";
import { loadContext, saveContext } from "./lib/context.js";

const PATH = process.env.SRLPM_PATH;

const execCmd = (cmd, args) => {
  if(cmd == "init"){
    return initCmd({ root: PATH });
  }
  const ctx = loadContext();
  ctx.root = PATH;

  switch(cmd){
  case "create":
    createCmd(ctx, { name: args[0], language: args[1], description: args[2] });
    break;
  case "delete":
    deleteCmd(ctx, { name: args[0] });
    break;
  case "list":
    listCmd(ctx);
    break;
  }
  saveContext(ctx);
};

const args = process.argv;
const cmd = args[2];

execCmd(cmd, args.slice(3));