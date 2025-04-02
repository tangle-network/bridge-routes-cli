import {
  cancel,
  isCancel,
  text,
  select,
  confirm,
  intro,
  outro,
  multiselect,
  password,
  spinner,
} from '@clack/prompts';
import pc from 'picocolors';
import { tokens } from './tokens';
import { ChainTypeEnum, ContractTypeEnum } from './types';
import Table from 'cli-table3';
import {
  createPublicClient,
  http,
  getContract,
  createWalletClient,
} from 'viem';
import { chains } from './chains';
import { abis } from './abi';
import { privateKeyToAccount } from 'viem/accounts';

export default async function execute() {
  intro(pc.bold(pc.underline(pc.green('Tangle Hyperlane Warp Routes'))));

  let continueRunning = true;

  while (continueRunning) {
    // Get all unique chains from tokens
    const chainsSet = new Set<string>();
    Object.values(tokens).forEach((tokenInfo) => {
      if (tokenInfo) {
        Object.keys(tokenInfo).forEach((chain) => chainsSet.add(chain));
      }
    });
    const chainsList = Array.from(chainsSet).sort();

    // Get deployed tokens (tokens that have at least one chain deployment)
    const deployedTokensList = Object.entries(tokens)
      .filter(
        ([_, tokenInfo]) => tokenInfo && Object.keys(tokenInfo).length > 0,
      )
      .map(([token]) => token);

    const task = await select({
      message: pc.bold('Select an option'),
      options: [
        {
          label: 'Show token routes',
          value: 'show-token-routes',
        },
        {
          label: 'Show token route contracts',
          value: 'show-token-route-contracts',
        },
        {
          label: 'Show token route owners',
          value: 'show-token-route-owners',
        },
        {
          label: 'Update token route owners',
          value: 'update-token-route-owners',
        },
      ],
    });

    if (isCancel(task)) {
      cancel('Operation cancelled');
      return;
    }

    switch (task) {
      case 'show-token-routes':
        // First ask about token filter
        const tokenFilterOption = await select({
          message: pc.bold('Select token display mode'),
          options: [
            {
              label: 'All tokens routes',
              value: 'all-tokens',
            },
            {
              label: 'Only deployed token routes',
              value: 'deployed-tokens',
            },
          ],
        });

        if (isCancel(tokenFilterOption)) {
          cancel('Operation cancelled');
          return;
        }

        // Then ask about chain filter
        const chainViewOption = await select({
          message: pc.bold('Select chain filter'),
          options: [
            {
              label: 'All chains',
              value: 'all-chains',
            },
            {
              label: 'Only specific chains',
              value: 'select-chains',
            },
          ],
        });

        if (isCancel(chainViewOption)) {
          cancel('Operation cancelled');
          return;
        }

        // The chains to display - either all or selected ones
        let chainsToDisplay = chainsList;

        if (chainViewOption === 'select-chains') {
          // Create options for chain multiselect
          const chainOptions = chainsList.map((chain) => ({
            value: chain,
            label: chain,
          }));

          // Let user select specific chains
          const selectedChains = await multiselect({
            message: pc.bold('Select chains to display'),
            options: chainOptions,
            required: true,
          });

          if (isCancel(selectedChains)) {
            cancel('Operation cancelled');
            return;
          }

          chainsToDisplay = selectedChains;
        }

        // Filter tokens based on user selection
        let tokensToDisplay = Object.entries(tokens);

        if (tokenFilterOption === 'deployed-tokens') {
          tokensToDisplay = tokensToDisplay.filter(([token]) =>
            deployedTokensList.includes(token),
          );
        }

        // Create a new table with cli-table3
        const table = new Table({
          head: ['Token', ...chainsToDisplay],
          style: {
            head: ['blue'],
            border: ['dim'],
          },
        });

        // Add rows to the table
        tokensToDisplay.forEach(([token, tokenInfo]) => {
          const row = [pc.cyan(token)];

          chainsToDisplay.forEach((chain) => {
            const hasDeployment =
              tokenInfo && tokenInfo[chain as keyof typeof tokenInfo];
            row.push(hasDeployment ? pc.green('✅') : pc.gray('-'));
          });

          table.push(row);
        });

        // Print the table
        console.log(table.toString());

        // Ask if user wants to go back to main menu or exit
        const returnToMainMenu1 = await confirm({
          message: pc.bold('Return to main menu?'),
          initialValue: true,
        });

        if (isCancel(returnToMainMenu1)) {
          cancel('Operation cancelled');
          return;
        }

        continueRunning = returnToMainMenu1 === true;
        break;

      case 'show-token-route-contracts':
        // Get deployed tokens (tokens that have at least one chain deployment)
        const deployedTokens = Object.entries(tokens).filter(
          ([_, tokenInfo]) => tokenInfo && Object.keys(tokenInfo).length > 0,
        );

        if (deployedTokens.length === 0) {
          console.log(
            pc.yellow(
              pc.bold('No token deployments found in the configuration.'),
            ),
          );

          // Ask if user wants to go back to main menu or exit
          const returnToMainMenu2 = await confirm({
            message: pc.bold('Return to main menu?'),
            initialValue: true,
          });

          if (isCancel(returnToMainMenu2)) {
            cancel('Operation cancelled');
            return;
          }

          continueRunning = returnToMainMenu2 === true;
          break;
        }

        // Ask user whether they want to see all tokens or select specific ones
        const viewOption = await select({
          message: pc.bold('Select tokens to display'),
          options: [
            {
              label: 'All token routes',
              value: 'all-tokens',
            },
            {
              label: 'Specific token routes',
              value: 'select-tokens',
            },
          ],
        });

        if (isCancel(viewOption)) {
          cancel('Operation cancelled');
          return;
        }

        // The tokens to display - either all or selected ones
        let tokensToDisplay2 = deployedTokens;

        if (viewOption === 'select-tokens') {
          // Create options for token multiselect
          const tokenOptions = deployedTokens.map(([token]) => ({
            value: token,
            label: token,
          }));

          // Let user select specific tokens
          const selectedTokens = await multiselect({
            message: pc.bold('Select tokens to view'),
            options: tokenOptions,
            required: true,
          });

          if (isCancel(selectedTokens)) {
            cancel('Operation cancelled');
            return;
          }

          // Filter to only include selected tokens
          tokensToDisplay2 = deployedTokens.filter(([token]) =>
            selectedTokens.includes(token),
          );
        }

        // For each token to display, show contract details by chain
        tokensToDisplay2.forEach(([token, tokenInfo]) => {
          console.log(
            '\n' + pc.blue(`Contract addresses of ${pc.bold(token)} on:`),
          );

          // For each chain where token is deployed
          Object.entries(tokenInfo || {}).forEach(([chain, contracts]) => {
            console.log(pc.cyan(`\n Chain: ${pc.bold(chain)}`));

            // Create a table for contract details
            const contractTable = new Table();

            // Display each contract
            Object.entries(contracts).forEach(([contractType, address]) => {
              // Format the contract type for better readability
              const formattedContractType = contractType
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, (str) => str.toUpperCase());

              contractTable.push([
                `${pc.gray(formattedContractType)}`,
                pc.green(address),
              ]);
            });

            console.log(contractTable.toString());
          });
        });

        // Ask if user wants to go back to main menu or exit
        const returnToMainMenu3 = await confirm({
          message: pc.bold('Return to main menu?'),
          initialValue: true,
        });

        if (isCancel(returnToMainMenu3)) {
          cancel('Operation cancelled');
          return;
        }

        continueRunning = returnToMainMenu3 === true;
        break;

      case 'show-token-route-owners':
        // First ask about token filter
        const tokenOwnerFilterOption = await select({
          message: pc.bold('Select token routes to display'),
          options: [
            {
              label: 'All token routes',
              value: 'all-tokens',
            },
            {
              label: 'Specific token routes',
              value: 'select-tokens',
            },
          ],
        });

        if (isCancel(tokenOwnerFilterOption)) {
          cancel('Operation cancelled');
          return;
        }

        // Get deployed tokens that have at least one chain deployment
        const tokensWithDeployments = Object.entries(tokens).filter(
          ([_, tokenInfo]) => tokenInfo && Object.keys(tokenInfo).length > 0,
        );

        if (tokensWithDeployments.length === 0) {
          console.log(
            pc.yellow(
              pc.bold('No token deployments found in the configuration.'),
            ),
          );

          const returnToMainMenu4 = await confirm({
            message: pc.bold('Return to main menu?'),
            initialValue: true,
          });

          if (isCancel(returnToMainMenu4)) {
            cancel('Operation cancelled');
            return;
          }

          continueRunning = returnToMainMenu4 === true;
          break;
        }

        // Filter tokens based on user selection
        let tokensToFetchOwners = tokensWithDeployments;

        if (tokenOwnerFilterOption === 'select-tokens') {
          // Create options for token multiselect
          const tokenOptions = tokensWithDeployments.map(([token]) => ({
            value: token,
            label: token,
          }));

          // Let user select specific tokens
          const selectedTokens = await multiselect({
            message: pc.bold('Select tokens to view'),
            options: tokenOptions,
            required: true,
          });

          if (isCancel(selectedTokens)) {
            cancel('Operation cancelled');
            return;
          }

          // Filter to only include selected tokens
          tokensToFetchOwners = tokensWithDeployments.filter(([token]) =>
            selectedTokens.includes(token),
          );
        }

        const loadContractOwners = spinner();
        loadContractOwners.start('Fetching token route owners');

        try {
          // Process all tokens in parallel and wait for all to settle
          const tokenResults = await Promise.allSettled(
            tokensToFetchOwners.map(async ([token, tokenInfo]) => {
              // For each chain where token is deployed
              const chainResults = await Promise.allSettled(
                Object.entries(tokenInfo || {}).map(
                  async ([chainName, contracts]) => {
                    const chainConfig = chains[chainName as ChainTypeEnum];
                    if (!chainConfig) return null;

                    // Create public client for this chain
                    const publicClient = createPublicClient({
                      chain: chainConfig,
                      transport: http(),
                    });

                    // Query all contracts for their owners in parallel
                    const contractResults = await Promise.allSettled(
                      Object.entries(contracts).map(
                        async ([contractType, address]) => {
                          try {
                            const formattedContractType = contractType
                              .replace(/([A-Z])/g, ' $1')
                              .replace(/^./, (str) => str.toUpperCase());

                            const contract = getContract({
                              address: address as `0x${string}`,
                              abi: abis[contractType as ContractTypeEnum],
                              client: publicClient,
                            });

                            let ownerAddress = 'Unknown';
                            try {
                              const owner = await contract.read.owner();
                              ownerAddress = owner as string;
                            } catch (err) {
                              ownerAddress = 'Not available';
                            }

                            return {
                              contractType,
                              formattedContractType,
                              address,
                              ownerAddress,
                              status: 'success' as const,
                            };
                          } catch (error) {
                            return {
                              contractType,
                              address,
                              status: 'error' as const,
                            };
                          }
                        },
                      ),
                    );

                    return {
                      chainName,
                      contracts: contractResults,
                    };
                  },
                ),
              );

              return {
                token,
                chains: chainResults,
              };
            }),
          );

          // Display results
          for (const tokenResult of tokenResults) {
            if (tokenResult.status === 'fulfilled' && tokenResult.value) {
              const { token, chains } = tokenResult.value;
              console.log('\n');
              console.log(pc.blue(`Contract owners of ${pc.bold(token)} on:`));

              for (const chainResult of chains) {
                if (chainResult.status === 'fulfilled' && chainResult.value) {
                  const { chainName, contracts } = chainResult.value;
                  if (!chainName || !contracts) continue;

                  console.log(pc.cyan(`\n Chain: ${pc.bold(chainName)}`));

                  // Create a table for contract owner details
                  const ownerTable = new Table();

                  // Add rows to the table based on contract results
                  for (const contractResult of contracts) {
                    if (contractResult.status === 'fulfilled') {
                      const contract = contractResult.value;
                      if (contract.status === 'success') {
                        ownerTable.push([
                          `${pc.gray(contract.formattedContractType)}`,
                          pc.green(contract.address),
                          pc.magenta(contract.ownerAddress),
                        ]);
                      } else {
                        ownerTable.push([
                          `${pc.gray(contract.contractType)}`,
                          pc.green(contract.address),
                          pc.red('Error fetching owner'),
                        ]);
                      }
                    } else {
                      // Handle rejected promise
                      ownerTable.push([
                        `${pc.gray('Unknown')}`,
                        pc.red('Error processing contract'),
                        pc.red(
                          contractResult.reason?.toString() || 'Unknown error',
                        ),
                      ]);
                    }
                  }

                  console.log(ownerTable.toString());
                }
              }
            }
          }

          // Stop the loading spinner
          loadContractOwners.stop('Completed fetching token route owners');
        } catch (error) {
          loadContractOwners.stop(pc.red('Error fetching token route owners'));
          console.error(pc.red(`Error: ${error}`));
        }

        // Ask if user wants to go back to main menu or exit
        const returnToMainMenu5 = await confirm({
          message: pc.bold('Return to main menu?'),
          initialValue: true,
        });

        if (isCancel(returnToMainMenu5)) {
          cancel('Operation cancelled');
          return;
        }

        continueRunning = returnToMainMenu5 === true;
        break;

      case 'update-token-route-owners':
        // Get deployed tokens that have at least one chain deployment
        const tokensForOwnerUpdate = Object.entries(tokens).filter(
          ([_, tokenInfo]) => tokenInfo && Object.keys(tokenInfo).length > 0,
        );

        if (tokensForOwnerUpdate.length === 0) {
          console.log(
            pc.yellow(
              pc.bold('No token deployments found in the configuration.'),
            ),
          );

          const returnToMainMenu6 = await confirm({
            message: pc.bold('Return to main menu?'),
            initialValue: true,
          });

          if (isCancel(returnToMainMenu6)) {
            cancel('Operation cancelled');
            return;
          }

          continueRunning = returnToMainMenu6 === true;
          break;
        }

        // Let user select multiple tokens to update
        const tokenOptions = tokensForOwnerUpdate.map(([token]) => ({
          value: token,
          label: token,
        }));

        const selectedTokens = await multiselect({
          message: pc.bold('Select tokens to update ownership for'),
          options: tokenOptions,
          required: true,
        });

        if (isCancel(selectedTokens)) {
          cancel('Operation cancelled');
          return;
        }

        if (selectedTokens.length === 0) {
          console.log(pc.yellow('No tokens selected.'));

          const returnToMainMenu7 = await confirm({
            message: pc.bold('Return to main menu?'),
            initialValue: true,
          });

          if (isCancel(returnToMainMenu7)) {
            cancel('Operation cancelled');
            return;
          }

          continueRunning = returnToMainMenu7 === true;
          break;
        }

        // Ask for the new owner address
        const newOwnerAddress = await text({
          message: pc.bold('Enter the new owner address (0x format):'),
          validate(value) {
            if (!value) return 'Please enter an address';
            if (!value.startsWith('0x')) return 'Address must start with 0x';
            if (value.length !== 42)
              return 'Address must be 42 characters long (including 0x prefix)';
            return;
          },
        });

        if (isCancel(newOwnerAddress)) {
          cancel('Operation cancelled');
          return;
        }

        // Get signer private key - first check environment variables
        let privateKey = process.env.SIGNER_KEY;

        if (!privateKey) {
          // Ask for private key if not in environment
          const privateKeyInput = await password({
            message: pc.bold(
              'Enter private key for signing transactions (will be masked):',
            ),
            validate(value) {
              if (!value) return 'Please enter a private key';
              if (!value.startsWith('0x'))
                return 'Private key must start with 0x prefix';
              if (!/^0x[0-9a-fA-F]+$/.test(value))
                return 'Private key must be a valid hex string';
              return;
            },
          });

          if (isCancel(privateKeyInput)) {
            cancel('Operation cancelled');
            return;
          }

          privateKey = privateKeyInput as string;
        }

        // Create account from private key
        const account = privateKeyToAccount(privateKey as `0x${string}`);
        console.log(pc.dim(`Using account: ${account.address}`));

        // Track contracts to update for all selected tokens
        const contractsToUpdate: Array<{
          token: string;
          chainName: string;
          chainConfig: any;
          contractType: string;
          formattedContractType: string;
          address: string;
          currentOwner: string;
          publicClient: any;
        }> = [];

        console.log(pc.dim('\nChecking contract owners...'));

        // Process each selected token
        for (const selectedToken of selectedTokens) {
          const tokenInfo = tokens[selectedToken as keyof typeof tokens];
          if (!tokenInfo) {
            console.log(
              pc.red(`\nToken ${selectedToken} not found in configuration.`),
            );
            continue;
          }

          console.log(
            '\n' + pc.bold(pc.blue(`${selectedToken} Contract Owners:`)),
          );

          // Process each chain for the selected token
          for (const [chainName, contracts] of Object.entries(tokenInfo)) {
            const chainConfig = chains[chainName as ChainTypeEnum];
            if (!chainConfig) continue;

            console.log(pc.cyan(`\n  Chain: ${pc.bold(chainName)}`));

            // Create public client for this chain
            const publicClient = createPublicClient({
              chain: chainConfig,
              transport: http(),
            });

            // Check each contract for its owner
            for (const [contractType, address] of Object.entries(contracts)) {
              // Format the contract type for better readability
              const formattedContractType = contractType
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, (str) => str.toUpperCase());

              try {
                const contract = getContract({
                  address: address as `0x${string}`,
                  abi: abis[contractType as ContractTypeEnum],
                  client: publicClient,
                });

                // Query the current owner
                try {
                  const currentOwner = (await contract.read.owner()) as string;

                  // Check if the owner is different from the desired new owner
                  if (
                    currentOwner.toLowerCase() !== newOwnerAddress.toLowerCase()
                  ) {
                    // Add to the list of contracts to update
                    contractsToUpdate.push({
                      token: selectedToken,
                      chainName,
                      chainConfig,
                      contractType,
                      formattedContractType,
                      address,
                      currentOwner,
                      publicClient,
                    });

                    // Display contract info
                    console.log(`    ${pc.yellow(formattedContractType)}:`);
                    console.log(
                      `      ${pc.dim('Address:')} ${pc.green(address)}`,
                    );
                    console.log(
                      `      ${pc.dim('Current Owner:')} ${pc.magenta(currentOwner)}`,
                    );
                    console.log(
                      `      ${pc.dim('Will update:')} ${pc.green('Yes')}\n`,
                    );
                  } else {
                    // Display contract info - will be skipped
                    console.log(`    ${pc.yellow(formattedContractType)}:`);
                    console.log(
                      `      ${pc.dim('Address:')} ${pc.green(address)}`,
                    );
                    console.log(
                      `      ${pc.dim('Current Owner:')} ${pc.yellow(currentOwner)}`,
                    );
                    console.log(
                      `      ${pc.dim('Will update:')} ${pc.yellow('No - already owned')}\n`,
                    );
                  }
                } catch (err) {
                  // Display contract info - cannot determine owner
                  console.log(`    ${pc.yellow(formattedContractType)}:`);
                  console.log(
                    `      ${pc.dim('Address:')} ${pc.green(address)}`,
                  );
                  console.log(
                    `      ${pc.dim('Current Owner:')} ${pc.gray('Not available')}`,
                  );
                  console.log(
                    `      ${pc.dim('Will update:')} ${pc.red('No - cannot determine owner')}\n`,
                  );
                }
              } catch (error) {
                // Display contract info - error
                console.log(`    ${pc.yellow(formattedContractType)}:`);
                console.log(`      ${pc.dim('Address:')} ${pc.green(address)}`);
                console.log(
                  `      ${pc.dim('Current Owner:')} ${pc.red('Error')}`,
                );
                console.log(
                  `      ${pc.dim('Will update:')} ${pc.red('No - error accessing contract')}\n`,
                );
              }
            }
          }
        }

        // Check if there are any contracts to update
        if (contractsToUpdate.length === 0) {
          console.log(pc.yellow('\nNo contracts need ownership updates.'));

          const returnToMainMenu8 = await confirm({
            message: pc.bold('Return to main menu?'),
            initialValue: true,
          });

          if (isCancel(returnToMainMenu8)) {
            cancel('Operation cancelled');
            return;
          }

          continueRunning = returnToMainMenu8 === true;
          break;
        }

        // Ask for confirmation before updating
        const confirmOwnershipUpdate = await confirm({
          message: pc.bold(
            `Update ownership for ${contractsToUpdate.length} contracts across ${selectedTokens.length} tokens?`,
          ),
          initialValue: true,
        });

        if (isCancel(confirmOwnershipUpdate) || !confirmOwnershipUpdate) {
          console.log(pc.yellow('Ownership update cancelled.'));

          const returnToMainMenu8 = await confirm({
            message: pc.bold('Return to main menu?'),
            initialValue: true,
          });

          if (isCancel(returnToMainMenu8)) {
            cancel('Operation cancelled');
            return;
          }

          continueRunning = returnToMainMenu8 === true;
          break;
        }

        // Track success and failures
        const results = {
          success: 0,
          failed: 0,
        };

        // Perform the updates
        console.log(pc.bold('\nUpdating contract ownerships...\n'));

        // Process each contract
        for (const contractData of contractsToUpdate) {
          const {
            token,
            chainName,
            chainConfig,
            contractType,
            formattedContractType,
            address,
          } = contractData;

          console.log(
            pc.cyan(
              `Updating ${formattedContractType} for ${token} on ${chainName}...`,
            ),
          );

          try {
            // Create wallet client for this chain
            const walletClient = createWalletClient({
              account,
              chain: chainConfig,
              transport: http(),
            });

            // Execute the transaction
            const hash = await walletClient.writeContract({
              address: address as `0x${string}`,
              abi: abis[contractType as ContractTypeEnum],
              functionName: 'transferOwnership',
              args: [newOwnerAddress as `0x${string}`],
              chain: chainConfig,
            });

            console.log(pc.green(`  ✓ Ownership transferred successfully`));
            console.log(pc.dim(`    Transaction hash: ${hash}`));
            results.success++;
          } catch (err) {
            console.log(pc.red(`  ✗ Failed to transfer ownership`));
            console.log(pc.dim(`    Error: ${err}`));
            results.failed++;
          }
        }

        // Display results
        console.log(pc.bold('\nOwnership Update Results:'));
        console.log(pc.green(`✓ Success: ${results.success} contracts`));
        console.log(pc.red(`✗ Failed: ${results.failed} contracts`));

        // Ask if user wants to go back to main menu or exit
        const returnToMainMenu9 = await confirm({
          message: pc.bold('Return to main menu?'),
          initialValue: true,
        });

        if (isCancel(returnToMainMenu9)) {
          cancel('Operation cancelled');
          return;
        }

        continueRunning = returnToMainMenu9 === true;
        break;
    }
  }

  outro(pc.bold('Done!'));
}
