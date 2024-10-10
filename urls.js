const fs = require('fs');
// Get the paramaters from the command line
const args = process.argv;
// get the filename from the array
const filename = args[2];

async function readFile(filename) {
    /* get the data from the passed in filename */
    try {
        const data = await fs.promises.readFile(filename, 'utf8'); 

        return data;

        } catch (err) {
            // Handle possible error
            console.error(" <<< There was an error retrieving the data >>>\n", err);
            process.exit(1); // Exit the process with an error code
        }
        }  // END readFIle()

function writeFile(urls) {
    // Extract the url & domain from each URL
    for (let url of urls) {
        const sourceURL = url;
        const fileName = new URL(url).hostname;
        // const  = fullURL.hostname;
        console.log("fileName:", fileName);
        console.log("source:", sourceURL);
    }
    return true;
    
}

async function main() {
        // request the contents of the passed in file
        const urlStr = await readFile(filename);

        // Regular expression to match URLs
        const urlRegex = /(https?:\/\/[^\s]+)/g;

        // Extract URLs from the string
        const urls = urlStr.match(urlRegex);

        console.log("URL's:", urls)

        if (urls) {
            writeFile(urls)
        } else {
            console.log("No domains were found.")
        };
        

} // END main()
  
main();