import { commands } from "./commands";

/**
 * Set the meta for a specific command
 *
 * @export
 * @param {string} [name]
 * @returns
 */
export function CommandMeta(name?: string) {
    return (target: Function) => {
        if (Reflect.hasMetadata("annotation:commandMeta", target)) {
            throw new Error(`CommandMeta already exists on ${target.name}`)
        }

        Reflect.defineMetadata("annotation:commandMeta", CommandMeta, target);

        target.prototype.commandName = name || target.name.toLowerCase();

        Object.seal(target);
        Object.freeze(target);
        
        commands.push({commandName: target.prototype.commandName, buildResponse: target.prototype.buildResponse});
    }
}
