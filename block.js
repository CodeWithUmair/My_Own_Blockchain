const {GENESIS_DATA} = require('./config')
const createHash = require("./crypto_hash")

//My Blockchain use Hashgragh 😊
class Block {
    constructor({timeStamp, prevHash, hash, data}) {
        this.timeStamp = timeStamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }
}

const gb = Block.genesis();
console.log(gb);

const block1 = new Block({timeStamp:"2/05/2023", prevHash: "0x000", hash: "0x123", data: "Umair"});

// console.log(block1);
