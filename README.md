# HospitalPaymentModule

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

Features

	•	Submit Payment: Allows users to submit payment details including patient ID, amount, card number, expiration date, and CVV.
	•	View Payment History: Displays the history of all payments made.
	•	Secure Database Connection: Utilizes SSL for secure communication with the MySQL database.

Technologies Used

	•	Frontend: Angular
	•	Backend: Node.js with Express
	•	Database: MySQL
	•	SSL: Secure communication with the MySQL database using SSL certificates
Project Structure
hospital-payment-module/
├── payment-backend/                # Backend server files
│   ├── certs/                      # SSL certificates for MySQL
│   ├── server.js                   # Node.js server file
│   └── package.json                # Backend dependencies
├── src/                            # Angular frontend files
│   ├── app/                        # Main Angular app folder
│   ├── assets/                     # Assets for the project
│   ├── environments/               # Environment configuration files
│   └── index.html                  # Main HTML file for Angular
├── angular.json                    # Angular CLI configuration
├── package.json                    # Angular frontend dependencies
└── README.md                       # Project README file


Setup Instructions

Prerequisites

	•	Node.js and npm installed on your machine
	•	MySQL database (hosted on DigitalOcean or any other provider)
	•	MySQL client or access to a MySQL management tool (e.g., MySQL Workbench)

Frontend Setup (Angular)

	1.	Install Dependencies:
Navigate to the root directory of the project (where the package.json file is located) and run the following command to install the dependencies:
npm install

	2.	Run the Angular App:
Start the Angular development server:
ng serve
http://localhost:4200.

Backend Setup (Node.js + MySQL)

	1.	Install Backend Dependencies:
Navigate to the payment-backend folder:
  cd payment-backend
Install the backend dependencies:
  npm install

SSL Certificate:
Ensure the SSL certificate (ca-certificate.crt) is placed inside the certs folder. The certificate is required to securely connect to the MySQL database hosted on DigitalOcean.
	3.	Database Configuration:
Ensure the correct database credentials (host, user, password, etc.) are set in server.js. The current settings are:
const db = mysql.createConnection({
  host: 'database-do-user-15282129-0.c.db.ondigitalocean.com',
  user: '',
  password: '',
  database: 'payments_db',
  port: 25060,
  ssl: {
    ca: fs.readFileSync(__dirname + '/certs/ca-certificate.crt'),
  }
});

4.	Start the Backend Server:
Run the Node.js backend server:
node server.json
obs : The backend server will be running at http://localhost:3000

How to Use

	1.	Submit Payment:
	•	Navigate to the payment form page (e.g., http://localhost:4200/payment-form).
	•	Fill in the patient ID, amount, card number, expiration date, and CVV.
	•	Click Submit to save the payment.
	2.	View Payment History:
	•	Navigate to the payment history page (e.g., http://localhost:4200/payment-history).
	•	The payment history will be displayed in a table, showing all previously submitted payments.

API Endpoints

POST /api/payment

	•	Description: Saves payment details in the MySQL database.
	•	Request Body:
 {
  "patientId": "123",
  "amount": "100.00",
  "cardNumber": "4111111111111111",
  "expirationDate": "12/25",
  "cvv": "123"
}

GET /api/payments

	•	Description: Fetches the history of all payments from the MySQL database.

 Contact

For any questions or issues, please reach out to the project owner (Luis and Andre).
