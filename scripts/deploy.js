

async function main() {
  const MyToken = await ethers.getContractFactory("MyToken");

  // Start deployment, returning a promise that resolves to a contract object
  const hello_world = await MyToken.deploy();
  console.log("Contract deployed to address:", hello_world.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });