async function main() {
    const streakNFT = await ethers.deployContract('StreakNFT');
    await streakNFT.waitForDeployment();
    console.log("StreakNFT deployed to:", streakNFT.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });