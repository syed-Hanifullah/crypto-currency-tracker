# crypto-currency-tracker

<!-- Getting Started -->

1: Install the project dependencies by running `npm install`.
2: Generate the Prisma client based on the Prisma schema by running `npx prisma generate`.
3: Set up the database by running `npx prisma db push`.
4: Start the development server with `npm run dev`.

<!-- Project Setup -->

The project was initiated using the latest version of Remix using the command `npx create-remix@latest`.
Tailwind CSS and Daisy UI were installed for styling purposes. I referred the official documentation of Tailwind CSS for the setup process.

<!-- Database Schema -->

The application uses the Prisma ORM and a local SQLite database to store the cryptocurrency details.
The cryptocurrency schema can be found in `prisma/schema.prisma`.

<!-- User Interface -->

=> I have used daisy ui for creating user interface (Navbar, Table, Modal)
=> I have also used various classes of tailwind css.

<!-- Fetching Data From Coincap -->

=> Data is fetched from the CoinCap API using the Remix "back-to-back" API mode.
=> I have used remix useLoaderData hook that returns data retrieved from the API which is then mapped into a table
=> This approach ensures separation of concerns and improves the performance of the application
=> I have build a resuable Data Table components which requires rows and columns and it have the
ability to render each row seperatly (furthermore each column can have a specific width)

<!-- Search Functionality -->

=> I built a resuable Input component that is used for searching data.
=> I created a function (filterCoins) that required array as coins, search string and the fields to include in the search result.
=> This function first converts search term into lower case to avoid upper and lower case issue
=> In each filter cycle it checks if any of the properties specified in filterFor contain the searchLower string
=> The filterFor array is iterated using the some method, which returns true if at least one element satisfies the condition. For each key in filterFor, it checks if it includes the searchLower string, if so it return true which indicates that this item should be added in the filter array

<!-- Details Modal -->

=> I have used a resuable hight order component that takes in children and boolean for popping or hiding the modal,
=> I created a resubale Coin component which shows all the details of the selected coin, again i used this pattern just for speration of concerns
=> I wrapped the Modal childrens in a FORM because the Save button was responsible for saving the selected record with type as submit.

<!-- Save Data -->

=> I added an input field inside the form with type as `hidden` with strigified value of selected item, in order to get this selected item inside the action function as `request.formData`
=> The action function is responsible for adding new and unique record in the database using the `db.schemaName.create`.

<!-- Viewing Database Data -->

=> To view the data in the database, we can run `npx prisma studio` in the terminal. This will open Prisma Studio, a visual interface for managing the database records.

<!-- db.server.ts FILE -->

=> The .server enforces the remix to run this file on server side.
=> This is a typescript module that exports a Prisma client instance called `db`
=> First i defined a db variable with type `PrismaClient` and then i declares a global variable `__db__` of type PrismaClient | undefined.
=> Check if code is running is production than i assigned new instance of PrismaClient to the db var.
=> The reson for this file is because in development we don't want to restart the server with every change, but we want to make sure we don't
create a new connection to the DB with every change either.
