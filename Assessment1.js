/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

// Code example
for(var i=1; i<=5; i++) {
    console.log(i);
   }
   
   // create a variable to hold your NFTs
   let nftCollection = [];
   
   // this function will take in some values as parameters, create an
   // NFT object using the parameters passed to it for its metadata, 
   // and store it in the variable above.
   function mintNFT(name, artist, year, description) {
       const nft = {
           name: name,
           artist: artist,
           year: year,
           description: description
       };
       nftCollection.push(nft);
   }
   
   // create a "loop" that will go through an "array" of NFTs
   // and print their metadata with console.log()
   function listNFTs() {
       nftCollection.forEach((nft, index) => {
           console.log(`NFT ${index + 1}:`);
           console.log(`Name: ${nft.name}`);
           console.log(`Artist: ${nft.artist}`);
           console.log(`Year: ${nft.year}`);
           console.log(`Description: ${nft.description}`);
           console.log('------------------------');
       });
   }
   
   // print the total number of NFTs we have minted to the console
   function getTotalSupply() {
       return nftCollection.length;
   }
   
   // call your functions below this line
   mintNFT('Sunset Bliss', 'Jane Doe', 2022, 'A beautiful sunset over the ocean');
   mintNFT('Mountain Majesty', 'John Smith', 2021, 'A majestic mountain landscape');
   mintNFT('City Lights', 'Alice Brown', 2023, 'A bustling city at night');
   
   listNFTs();
   console.log('Total Supply:', getTotalSupply());
   
   