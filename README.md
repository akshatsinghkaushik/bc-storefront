# Storefront Single-Page App

## Assignment

Assignment Instruction details are available here: [`Assignment.md`](/Assignment.md)

## Project Setup

The project requires [Node 14+](https://nodejs.org/en/) and was created
using [create-react-app](https://github.com/facebook/create-react-app).

Once installed, you should install the dependencies by running

```
npm install
```

To serve the application, run

```
npm start
```

To run the test suite, run

```
npm test
```

## Tests

- Unit Tests:

Unit Tests for each React component were created using Jest snapshots and run to test whether each individual component renders properly each time.

- Integration Test:

In the limited time, only one integration test has been implemented in the `App.test.js` file which tests if the user can hover over a product in the Category Page, use the Overlay Add to Cart button to add the product to Cart, then click on the My Cart button in the Header to open the Cart Pop Up and remove the added product from the cart using the 'X' button.

## Limitations

- Formatting

The design of the storefront does not exactly match the sample design and formatting of certain elements as well as typography (font type, size, shape and color) can be improved.

- Responsive Design

Due to time contraints the web design is only responsive to screen sizes lg and above as we shrink down to md and smaller screen sizes, elements start getting cropped out of the viewport and element shapes and formatting start dissolving.

- Testing

While Unit Tests for each component check if the component renders properly or not, further tests could be added to each component to fully test their functionality independant of each other.
Additional Integration Tests can be added to fully test other user interactions on the storefront application.
