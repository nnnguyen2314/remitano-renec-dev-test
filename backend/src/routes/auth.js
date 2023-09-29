const { validateLoginData } = require('../utils/validators');
const { checkAuth, checkUserExistByEmail, doLogin, doSignUp, doFetchProfile } = require('../services/auth');

const doAuth = async (request, response) => {
    const user = {
        email: request.body.email,
        password: request.body.password
    };

    const {valid, errors} = validateLoginData(user);
    if (!valid) {
        return response.status(400).json(errors);
    }

    const existing = await checkUserExistByEmail(user.email);
    let authResult = await (existing && existing.doesExist ? doLogin(user.email, user.password) : doSignUp(user.email, user.password));
    console.log(authResult.isError);
    if (!authResult.isError) {
        return response.status(200).json({ isError: authResult.isError, token: authResult.token });
    }
    // console.log(authResult);

    switch(authResult.error) {
        case 'auth/invalid-credential':
        case 'auth/id-token-expired':
        case 'auth/id-token-revoked':
        case 'auth/invalid-email':
        case 'auth/invalid-email-verified':
        case 'auth/invalid-id-token':
        case 'auth/invalid-password':
        case 'auth/invalid-password-hash':
        case 'auth/invalid-password-salt':
        case 'auth/invalid-uid':
        case 'auth/user-not-found':
            return response.status(403).json({ isError: authResult.isError, error: 'wrong credentials, please try again'});
        case 'auth/internal-error':
        default:
            return response.status(500).json({ isError: authResult.isError, error: 'Something went wrong!' });
    }
};
const doAuthCheck = async (request, response, next) => {
    const headerToken = request.headers.authorization;
    if (!headerToken) {
        return response.json({ isError: true, message: "No token provided" }).status(401);
    }
    if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
        response.json({ isError: true, message: "Invalid token" }).status(401);
    }
    const token = headerToken.split(' ')[1];
    const authCheckingResult = await checkAuth(token);

    if (authCheckingResult.isError) {
        return response.status(403).json({isError: authCheckingResult.isError, error: authCheckingResult.error});
    }
    request['user'] = {
        email: authCheckingResult.user.email,
        uid: authCheckingResult.user.uid
    };

    return next();
};
const fetchProfile = (request, response) => {
    doFetchProfile(request.user.uid)
        .then((userRecord) => {
            if(userRecord) {
                return response.status(200).json({isError: false, user: userRecord?.user });
            }
            return response.status(204).json({});
        })
        .catch((error) => {
            console.error(error);
            return response.status(500).json({ isError: true, error: error });
        });
};

module.exports = {doAuth, doAuthCheck, fetchProfile};
