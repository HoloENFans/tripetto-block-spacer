import {NodeBlock} from "@tripetto/runner";

export interface ISpacer {
    /** The size of spacer in em. */
    readonly size: number;
}

export abstract class Spacer extends NodeBlock<ISpacer> {
    get size(): number {
        return this.props.size;
    }
}
