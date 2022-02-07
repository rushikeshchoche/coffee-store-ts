# Frontend Developer Assessment

## Description

This is Coffee Store webapp built using React.
The app keeps track of coffee ordered; what the balance is for each user; what users have paid for already; and what is still owed.


## Project Structure

```bash
├── src
│   ├── components
│   │   ├── Home/Home.tsx           # Displays Home Page with all Orders history
│   │   ├── Layout/                 # Contains Header, Full layout and Footer UI components
│   │   ├── Payments/Payments.tsx   # Displays balance due for all the users
│   │   ├── Prices/Prices.tsx       # Displays all avaliable coffee prices
│   ├── function/                   # contains reducer functions
│   ├── helper                      # Contains reducer functions
│   │   ├── config.ts               # api url config for all envs
│   ├── provider                    # Contains reducer functions
│   │   ├── StoreProvider.tsx       # React context provider which stores and calculates payment due
│   ├── service/                    # contains service to fetch store data
│   ├── type/                       # data types
│   ├── app.js                      # This is the root component of the application
│   ├── index.js                    # ReactDOM.render is called
```

## Please follow below commands to run this project : 
### Prerequisite
Please clone [coffee-store-be](https://github.com/rushikeshchoche/coffee-store-be) and run `npm start`
This will spin up coffee-store-be(backend project) on local node server on port 4000.

In the current coffe-store-ts project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
