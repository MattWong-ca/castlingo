async function main() {
    const castlingo = await ethers.deployContract('Castlingo');
    await castlingo.waitForDeployment();
    console.log("Castlingo deployed to:", castlingo.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });