const checkOneEdit = (
    string: string,
    editedString: string
): boolean => {

    if (Math.abs(string.length - editedString.length) > 1) {
        return false
    }

    if (
        string.length > editedString.length && string.includes(editedString) ||
        editedString.length > string.length && editedString.includes(string)
    ) {
        return true
    }

    let differentChars = 0
    for (let i = 0; i < string.length; i++) {
        if(string[i] !== editedString[i]) {
            differentChars += 1
        }
    }

    return differentChars === 1
}