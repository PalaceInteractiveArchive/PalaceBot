import { ICommand } from "./command";
import { Apply } from "./apply";
import { IP } from "./ip";

export let commands: ICommand[] = [new Apply, new IP];
