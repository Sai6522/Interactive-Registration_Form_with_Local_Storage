# Interactive Registration Form with Local Storage

This is a simple registration form with additional validations and local browser storage functionality. Users can fill out the form with their name, email, password, date of birth, and accept the terms. The submitted data is stored in the local browser storage and displayed in a table on the webpage.

## Usage

1. Access the Registration Form webpage by [clicking here]([https://laced-steep-juravenator.glitch.me]).

2. Fill out the registration form with the required information:
   - **Name**: Enter your full name.
   - **Email**: Provide a valid email address.
   - **Password**: Choose a password.
   - **Date of Birth**: Select your date of birth. Only ages between 18 and 55 are allowed.
   - **Accept Terms**: Check the checkbox to accept the terms.

3. Click the **Submit** button to submit the form.

4. If the date of birth entered is not within the allowed age range (18-55), an alert message will be displayed, and the form will not be submitted. Please enter a valid date of birth.

5. The submitted data will be stored in the local browser storage and displayed in the **Registered Users** table below the form.

## Local Browser Storage

The submitted data is stored in the browser's local storage using the `localStorage` object. The data is saved as an array of user objects, where each object represents a registered user. The data persists even if you refresh the page or close the browser.

## Table Structure

The **Registered Users** table displays the following columns:

- **Name**: The full name of the registered user.
- **Email**: The email address provided by the user.
- **Password**: The chosen password.
- **Date of Birth**: The date of birth entered by the user.
- **Accepted terms?**: Displays "Yes" if the terms checkbox was checked, and "No" otherwise.

## Contributing

Contributions to the code or improvements to the functionality are welcome. Feel free to fork the repository, make changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

