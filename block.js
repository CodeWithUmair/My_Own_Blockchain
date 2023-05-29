class Block {
    constructor({timeStamp, prevHash, hash, data}) {
        this.timeStamp = timeStamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;
    }
}

const block1 = new Block({timeStamp:"2/05/2023", prevHash: "0x000", hash: "0x123", data: "Umair"});

console.log(block1);
