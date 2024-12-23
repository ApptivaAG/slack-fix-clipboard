import { expect, test } from "bun:test";
import { readFromClipboard, writeToClipboard } from "./clipboard";

test("writeToClipboard & readToClipboard", ()=>{
    const text = "hello clipboard";
    writeToClipboard(text);

    expect(readFromClipboard()).toBe(text);
});
