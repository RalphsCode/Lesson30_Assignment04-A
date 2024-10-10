const fs = require('fs');

const args = process.argv;
const filename = args[2];

async function readFile(filename) {
    try {
        const data = await fs.promises.readFile(filename, 'utf8'); 

        const lines = data.split('\n');
        
        let urlList = [];
        for (let line of lines) {
            urlList.push(line.trim());
            }
        return urlList;

        } catch (err) {
            // Handle possible error
            console.error(err);
            process.exit(1); // Exit the process with an error code
        }
        }  // END readFIle()

async function main() {

        const urlList = await readFile(filename);
        let count = 1;
        for (url of urlList)  {
            console.log(count, url);
            count++;
        }
} // END main()
  
main();