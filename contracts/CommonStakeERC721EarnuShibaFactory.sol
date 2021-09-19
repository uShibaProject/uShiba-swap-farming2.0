// SPDX-License-Identifier: MIT

pragma solidity =0.6.6;

import '@openzeppelin/contracts/access/Ownable.sol';
import './CommonStakeERC721EarnuShiba.sol';

contract CommonStakeERC721EarnuShibaFactory is Ownable {
    event CommonStakeERC721EarnuShibaCreated(address indexed commonMaster);

    constructor() public {}

    function createCommonStakeERC721EarnuShiba(
        string calldata _name,
        string calldata _symbol,
        address _uShibaMaster,
        address _erc721,
        address _getStakingPower,
        bool _isMintPowerTokenEveryTimes
    ) external onlyOwner returns (address) {
        CommonStakeERC721EarnuShiba commonMaster = new CommonStakeERC721EarnuShiba(
            _name,
            _symbol,
            _uShibaMaster,
            _erc721,
            _getStakingPower,
            _isMintPowerTokenEveryTimes
        );
        Ownable(address(commonMaster)).transferOwnership(_msgSender());
        emit CommonStakeERC721EarnuShibaCreated(address(commonMaster));
        return address(commonMaster);
    }
}
