/** Package information retrieved from `package.json` using webpack. */
declare const PACKAGE_NAME: string;
declare const PACKAGE_VERSION: string;

/** Dependencies */
import {definition, editor, Forms, NodeBlock, tripetto,} from "@tripetto/builder";

/** Assets */
import ICON from "../../assets/icon.svg";

@tripetto({
    type: "node",
    identifier: PACKAGE_NAME,
    version: PACKAGE_VERSION,
    icon: ICON,
    label: "Spacer",
})
export class Spacer extends NodeBlock {
    @definition
    size!: number;

    @editor
    defineEditor(): void {
        this.editor.groups.settings();
        this.editor.option({
            name: "Spacer size",
            form: {
                title: "Spacer size in em, 1em = 16px",
                controls: [
                    new Forms.Numeric(
                        Forms.Numeric.bind(this, "size", 1, 1)
                    ),
                ],
            },
            activated: true,
        });
    }
}
