// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Castlingo {
    address public croakToken = 0xaCb54d07cA167934F57F829BeE2cC665e1A5ebEF;
    address public eFrogsNFT = 0x194395587d7b169E63eaf251E86B1892fA8f1960;

    mapping(address => uint256) public rewards;
    mapping(address => bool) public accessGranted;

    // Event to notify when rewards are granted
    event RewardGranted(address indexed user, uint256 amount);

    // Modifier to check if the user holds the EFrogs NFT
    modifier onlyNFTHolder() {
        require(
            IERC721(eFrogsNFT).balanceOf(msg.sender) > 0,
            "You need to hold an EFrogs NFT to access this feature."
        );
        _;
    }

    // Function to check if the user has access (NFT holder) and grant access
    function grantAccess() external onlyNFTHolder {
        accessGranted[msg.sender] = true;
    }

    // Function to reward users with CROAK tokens based on their activity
    function rewardUser(address _user, uint256 _amount) external onlyNFTHolder {
        require(accessGranted[_user], "User doesn't have access.");
        rewards[_user] += _amount;

        // Transfer CROAK tokens to the user
        require(
            IERC20(croakToken).transfer(_user, _amount),
            "Transfer failed."
        );

        emit RewardGranted(_user, _amount);
    }
}
