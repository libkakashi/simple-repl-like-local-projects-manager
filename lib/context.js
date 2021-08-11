import { readFileSync, writeFileSync } from "fs";

const SRLPM_PATH = process.env.SRLPM_PATH;

export const loadContext = () => {
  return JSON.parse(readFileSync(`${SRLPM_PATH}/context.json`));
};

export const saveContext = (ctx) => {
  return writeFileSync(`${SRLPM_PATH}/context.json`, JSON.stringify(ctx));
};
