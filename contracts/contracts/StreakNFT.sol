// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StreakNFT is ERC721, Ownable {
    uint256 public streakRequirement;
    uint256 public nextTokenId = 1;

    mapping(address => uint256) public userStreaks;

    constructor(uint256 _streakRequirement) ERC721("StreakRewardNFT", "SRNFT") Ownable(msg.sender) {
        streakRequirement = _streakRequirement;
    }

    // Function to update user's streak
    function updateStreak(address _user, uint256 _streak) external onlyOwner {
        userStreaks[_user] = _streak;
        if (_streak >= streakRequirement) {
            mintStreakReward(_user);
        }
    }

    // Mint a streak reward NFT when the user reaches the required number of streaks
    function mintStreakReward(address _user) internal {
        _safeMint(_user, nextTokenId);
        nextTokenId++;
    }

    // Set the number of streaks required to receive the reward
    function setStreakRequirement(uint256 _newRequirement) external onlyOwner {
        streakRequirement = _newRequirement;
    }
}
