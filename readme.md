# slack-fix-clipboard

When copying text in slack that contains mentions like "@patrik", for some reason the copied text contains a newline before and after the mention.
This little CLI utility reads the copied text from the clipboard, removes those newlines, and writes it to the clipboard again.

## usage

`nix run github:ApptivaAG/slack-fix-clipboard`
