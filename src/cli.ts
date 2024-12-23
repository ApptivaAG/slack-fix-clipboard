import {fixSlackText} from "./fix-slack-text"
import { readFromClipboard, writeToClipboard } from "./clipboard"

writeToClipboard(fixSlackText(readFromClipboard()))

console.log("copied fixed slack text to clipboard")
