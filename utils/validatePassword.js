export default function validatePassword(password) {
    const criteriaPassed =
        /\p{Uppercase_Letter}/u.test(password)
        + /\p{Lowercase_Letter}/u.test(password)
        + /\p{Number}/u.test(password)
        + /[^\p{L}\p{N}]/u.test(password)

    return criteriaPassed >= 3;
}