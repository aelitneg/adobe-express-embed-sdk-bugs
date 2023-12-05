# adobe-express-embed-sdk-bugs

This repository is a minimal example illustrating a bug with the Adobe Express Embed SDK.

## Steps to Reproduce

1. Clone the repository and install dependencies.

    ```sh
    git clone https://github.com/aelitneg/adobe-express-embed-sdk-bugs.git
    cd ./adobe-express-embed-sdk-bugs
    npm ci
    ```

1. Start web server.

    ```sh
    npm run start
    ```

1. Navigate to `http://localhost` and open the JavaScript console.
1. Click the _INITIALIZE_ button to initialize the SDK.
1. Click the _TERMINATE_ button to un-initialize the SDK.
1. Click the _INITIALIZE_ button again and view the error in the Javascript console.
