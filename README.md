# Tangle <> Hyperlane Bridge Routes CLI

A command-line interface (CLI) tool for managing Tangle Network's Hyperlane Bridge Routes.

## Installation

```bash
# Clone the repository
git clone https://github.com/tangle-network/bridge-routes-cli.git

# Navigate to the project directory
cd bridge-routes-cli

# Install dependencies
pnpm install
```

## Usage

To start the CLI:

```bash
pnpm dev
```

The CLI provides an interactive interface with the following features:

1. **Show token routes** - Display tokens and their deployments across different chains
2. **Show token route contracts** - Display contract addresses for deployed tokens across chains
3. **Show token route owners** - Display ownership information for token route contracts
4. **Update token route owners** - Transfer ownership of token route contracts to a new address

### Environment Variables

For updating token route owners, you can provide your signer's private key through an environment variable:

```bash
SIGNER_KEY=0x... # Your private key with 0x prefix
```

If not provided through environment variables, the CLI will prompt for the private key when needed.

## Security

- Never commit your private keys
- Always verify contract addresses and ownership information before making changes
- Double-check the new owner address when transferring ownership
