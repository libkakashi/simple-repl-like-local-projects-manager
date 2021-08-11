const { loadContext, saveContext } = require("./lib/context.js");

const initCmd = require("./commands/init");
const createCmd = require("./commands/create");
const deleteCmd = require("./commands/delete");
const listCmd = require("./commands/list");

const PATH = process.env.SRLPM_PATH;

const execCmd = (cmd, args) => {
  if(cmd == "init"){
    return initCmd({ root: PATH });
  }
  const ctx = loadContext(PATH);
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