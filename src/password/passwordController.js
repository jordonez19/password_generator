import passwordService from "./passwordService.js"

const generatePassword = (req, res) => {
    try {
        const { uppercase, lowercase, numbers, special, quantity, passwordLength } = req.body;
        let passwordGenerated = [];

        for (let i = 0; i < quantity; i++) {
            const password = passwordService.passwordService(uppercase, lowercase, numbers, special, passwordLength); 
            passwordGenerated.push(password);
        }

        res.status(200).json({
            message: "Passwords generated successfully",
            passwords: passwordGenerated
        });

    } catch (error) {
        console.error('Error generating password:', error);
        res.status(400).json({
            message: "Error generating password => generatePassword",
            error: error.message
        });
    }
};

export default {generatePassword};
