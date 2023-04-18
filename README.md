# node-sign-verify-message

This repos shows the way to sign/verify an ethereum message. It's used for backend of third party where interacts with Tokoin Payment System.

### Tokoin Payment System
- Documentation: https://developer.tokoin.io
- Support: https://forum.tokoin.io

### How to use
- Sign message
```typescript
const Sign = async (pk: string, types: Array<string>, values: Array<any>) => {
    const wallet = new ethers.Wallet(pk);
    var hash = abi.soliditySHA3(
        types,
        values,
    );
    return await wallet.signMessage(hash);
};
```

- Verify message
```typescript
const Verify = async (wallet: string, types: Array<string>, values: Array<any>, signature: any) => {
    var hash = abi.soliditySHA3(
        types,
        values,
    );
    return ethers.verifyMessage(hash, signature) == wallet;
};
```

### How to run sample
- yarn install
- yarn start

### Demo
- [x] golang (https://github.com/tokoinofficial/go-sign-verify-message)
- [x] python (https://github.com/tokoinofficial/python-sign-verify-message)

### Created & Maintained By

[Trong Dinh](https://github.com/trongdth)