async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const StreakNFT = await ethers.getContractFactory('StreakNFT');
    
    // Define the streak requirement
    const streakRequirement = 7; // or any other number you prefer

    const streakNFT = await StreakNFT.deploy(streakRequirement);

    await streakNFT.waitForDeployment();
    console.log("StreakNFT deployed to:", await streakNFT.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });