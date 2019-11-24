declare class TextEncoder {
    readonly encoding: string;
    constructor(encoding?: string);
    encode(str?: string): Uint8Array;
}
declare class TextDecoder {
    readonly encoding: string;
    readonly fatal: string;
    readonly ignoreBOM: string;
    constructor(encoding?: string, options?: {fatal?: boolean, ignoreBOM?: boolean});
    decode(view?: Uint8Array | Uint8ClampedArray | Uint16Array | Uint32Array | Int8Array | Int16Array | Int32Array | Float32Array | Float64Array, options?: {stream?: boolean}): string;
}
export {
    TextEncoder,
    TextDecoder
};