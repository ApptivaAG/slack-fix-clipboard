import {execSync} from "child_process"

export const writeToClipboard = (text: string)=>{
    execSync("cb cp",{input:text})
}

export const readFromClipboard = ():string=>{
    const result = execSync("cb p")
    return result.toString()
}
