# Smart Door Lock

## Overview

Smart Door Lock is a full-stack project designed to enhance security by integrating fingerprint recognition with server-based verification. The system allows users to scan their fingerprints, sends the fingerprint data to a server, and allows an admin to review and approve access via a mobile app. This ensures that only authorized individuals can unlock the door, providing a robust security solution for homes and offices.

## Features

- **Fingerprint Scanning**: Users can scan their fingerprints using a microcontroller with an integrated fingerprint sensor.
- **Real-Time Verification**: Fingerprint data is sent to the server for verification, ensuring accurate and fast processing.
- **Admin Review**: A designated admin receives access requests on a mobile app, reviews them, and decides whether to grant access.
- **Remote Door Control**: Based on the admin’s response, the door can be unlocked remotely, enhancing convenience and security.

## Project Repositories

- **Arduino Code**: The Arduino code for handling fingerprint scanning and communication with the server can be found [here](https://github.com/iammalikkhalil/SmartDoorLock.git).
- **Backend Code**: The backend server code that handles fingerprint data, communicates with the mobile app, and manages access control is available [here](https://github.com/iammalikkhalil/SmartDoorLock-Backend.git).

## How It Works

1. **Fingerprint Scan**: Users scan their fingerprints using a fingerprint sensor connected to a microcontroller.
2. **Data Transmission**: The microcontroller sends the scanned fingerprint data to the backend server for processing.
3. **Server Verification**: The server fetches the stored fingerprint information to match it with the scanned data.
4. **Admin Notification**: The mobile app notifies the admin of an access request. The admin reviews the request details and approves or denies access.
5. **Access Decision**: Based on the admin’s decision, a signal is sent to the microcontroller to either unlock the door or keep it locked.

## Installation

### Arduino Setup

1. Clone the Arduino code repository:
   ```bash
   git clone https://github.com/iammalikkhalil/SmartDoorLock.git
   ```
2. Upload the code to your microcontroller using the Arduino IDE.
3. Connect the fingerprint sensor to the microcontroller according to the pin configuration specified in the code.

### Backend Setup

1. Clone the backend repository:
   ```bash
   git clone https://github.com/iammalikkhalil/SmartDoorLock-Backend.git
   ```
2. Navigate to the backend project directory:
   ```bash
   cd SmartDoorLock-Backend
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables for the server, such as database connection details.
5. Run the server:
   ```bash
   npm start
   ```

## Technologies Used

- **Microcontroller**: Arduino with a fingerprint sensor for capturing and transmitting fingerprint data.
- **Backend**: Node.js and Express.js for server-side processing and verification.
- **Database**: MongoDB for storing user and fingerprint data securely.
- **Mobile App**: Admin mobile app to receive access requests and control door locking.

## Future Improvements

- **Face Recognition**: Adding support for face recognition to complement fingerprint scanning.
- **Voice Command Integration**: Allowing admin to control door access using voice commands.
- **Multi-User Support**: Enhancing the system to manage multiple admins and users efficiently.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or feedback, please reach out to iammalikkhalil@outlook.com.

Connect with me on [GitHub](https://github.com/iammalikkhalil), [LinkedIn](https://www.linkedin.com/in/iammalikkhalil), and other social media platforms using the username **iammalikkhalil**.

---

Thank you for using Smart Door Lock!
