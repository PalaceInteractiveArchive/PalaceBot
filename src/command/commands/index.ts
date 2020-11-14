import { ICommand } from "./command";
import { Apply } from "./apply";
import { IP } from "./ip";
import {Appeal} from "./appeal";
import { Store } from "./store";
import { Forums } from "./forums"
import {Rules} from "./rules";

export let commands: ICommand[] = [new Apply, new IP, new Appeal, new Store, new Forums, new Rules];
