{
  description = "cs3043-project";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      system = "aarch64-darwin";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = [
          # Core dependencies
          pkgs.nodejs_20      # Node.js runtime (version 20 LTS)
          pkgs.nodePackages.npm  # Node package manager
          
          # Version control
          pkgs.git         # For GitHub Pages deployment and version control
        ];
        
        shellHook = ''
          echo "Node.js version: $(node --version)"
          echo "npm version: $(npm --version)"
          echo "Development environment ready! 🚀"
        '';
      };
    };
}

