#  PASSWORDS GENERATOR

This service allows users to generate random passwords based on specific parameters, such as whether to include uppercase letters, lowercase letters, numbers, and special characters. It can generate multiple passwords in a single request, with customizable length and quantity.


## How to run the application

- npm install
- npm run dev


## Postman, you can use 1 or 0 for true and false

 *** endpoint: http://localhost:3002/api/generate/password ***

```json
    {
        "uppercase": 0,
        "lowercase": 0,
        "numbers": 1,
        "special": 0,
        "quantity": 5,
        "passwordLength": 12
    }

