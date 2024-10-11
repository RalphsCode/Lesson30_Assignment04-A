const fs = require('fs');
const https = require('https');
const http = require('http');

/* How this works:
====================
1.  init() runs to start the app
2.  Get the arguments from the cmd line
3.  Pull URL's from the passed in file identified in the arguments
4.  newFile() will obtain the domain used to name the new file, and the url to locate the content for the new file.
5.  createNewFile() will get the content from the url and write it to a new file.
====================
*/
async function init() {
    /* Start the app */

    // Get the paramaters from the command line
        const args = process.argv;
        // get the filename from the array
        const filename = args[2];
        // request the content of the passed in file
        const urlStr = await readFile(filename);

        // Regular expression to match/determine URLs
        const urlRegex = /(https?:\/\/[^\s]+)/g;

        // Extract URLs from the file content string
        const urls = urlStr.match(urlRegex);

        if (urls) {
            // Send the urls to write them to a file
            newFile(urls)
        } else {
            // No URL's found
            console.log("No domains were found.")
        };
} // END init()


async function readFile(filename) {
    /* return the data from the passed in filename */
    try {
        const data = await fs.promises.readFile(filename, 'utf8'); 
        return data;

    } catch (err) {
        // Handle possible error
        console.error(" <<< There was an error retrieving data from the passed in filename >>>\n", err);
        process.exit(1); // Exit the process with an error code
    }
}  // END readFIle()


async function newFile(urls) {
    // Extract the url & domain from each URL
    for (let url of urls) {
        const sourceURL = url;
        const fileName = new URL(url).hostname;
        // looping through the domains; create and populate a text file for each
        createNewFile(sourceURL, fileName)
    }  // END for... loop
    return true;
}  // END newFile()


async function createNewFile(url, fileName) {
    /* get the data from the passed in url */
    try {
        // Choose the correct module based on the URL's protocol
        const client = url.startsWith('https') ? https : http;
        client.get(url, (res) => {
            let data = '';

            // Collect data chunks
            res.on('data', (chunk) => {
                data += chunk;
            });
        
            // Once all data has been received, write it to the file
            res.on('end', () => {
            fs.writeFile(`./${fileName}`, data, "utf8", function(err) {
                if (err) {
                  console.error(err);
                  process.exit(1);
                }
                console.log(` \u2713 Wrote to file ${fileName}`);
              });
        } );   // END res.on('end')

    }).on('error', (err) => {
        console.error('Error fetching the website:', err.message);
        // Handle specific errors
        if (err.code === 'ENOTFOUND') {
            console.error('Domain not found. Please check the URL.');
        }
    });  // END .on('error')

    } catch (err) {
            // Handle possible error
            console.error(" <<< There was an error retrieving from the data source, or, saving it to a new file. >>>\n", err);
            process.exit(1); // Exit the process with an error code
        }
    return true;  // Cuz I don't like leaving the function hanging!

}  // END createNewFile()


// Start the app
init();

//   RalphsCode Out!