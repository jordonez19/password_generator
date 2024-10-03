

const passwordService = (uppercase, lowercase, numbers, special, passwordLength) => {

    if (!uppercase && !lowercase && !numbers && !special) {
        throw new Error("you have to pass at least one of the following characters to generate a passphrase")
    }

    const upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerLetter = "abcdefghijklmnopqrstuvwxyz";
    const specialChars = "!£$%&*()_+[]{}<>?";
    const numbersChars = "0123456789";

    let password = '';
    let passwordFinal = '';

    // Adding characters as requested
    if (uppercase) password += upperLetter;
    if (lowercase) password += lowerLetter;
    if (numbers) password += numbersChars;
    if (special) password += specialChars;

    // Generating password by adding characters
    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * password.length);
        passwordFinal += password[randomNumber];
    }

    return passwordFinal;
};

export default { passwordService };