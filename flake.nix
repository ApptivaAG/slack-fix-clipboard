{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  inputs.flake-parts.url = "github:hercules-ci/flake-parts";

  outputs =
    inputs:
    inputs.flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" ];
      perSystem =
        { pkgs, ... }:
        {
          devShells.default = pkgs.mkShell {
            buildInputs = with pkgs; [
              bun
              clipboard-jh
              nixfmt-rfc-style
            ];
          };
          packages.default = pkgs.writeShellApplication {
            name = "fix-slack-text";
            runtimeInputs = with pkgs; [
              bun
              clipboard-jh
            ];
            text = ''
              #!${pkgs.bash}/bin/bash
              bun ${./src}/cli.ts
            '';
          };
        };
    };
}
