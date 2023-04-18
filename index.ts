import abi, { stringify } from "ethereumjs-abi";
import { ethers } from "ethers";
import * as dotenv from "dotenv";

dotenv.config();

const Sign = async (pk: string, types: Array<string>, values: Array<any>) => {
    const wallet = new ethers.Wallet(pk);
    var hash = abi.soliditySHA3(
        types,
        values,
    );
    return await wallet.signMessage(hash);
};

const Verify = async (wallet: string, types: Array<string>, values: Array<any>, signature: any) => {
    var hash = abi.soliditySHA3(
        types,
        values,
    );
    return ethers.verifyMessage(hash, signature) == wallet;
};

//  sign
const signature = await Sign(
    process.env.PRIVATE_KEY as string,
    ["address", "uint256"],
    ["0x45f7967926e95FD161E56ED66B663c9114C5226f", 4685]
);
console.log("signature = " + signature);

//  verify
const result = await Verify(
    "0xfE91b1E07b93fdfae1E02A985266fA3414aB844A",
    ["address", "uint256"],
    ["0x45f7967926e95FD161E56ED66B663c9114C5226f", 4685],
    signature
);
console.log("result = " + result);