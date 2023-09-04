const SIGNIN = 'SIGNIN';
const SIGNOUT = 'SIGNOUT';

const signIn = () => ({
    type: SIGNIN
});

const signOut = () => ({
    type: SIGNOUT
});

module.exports = {
    SIGNIN,
    SIGNOUT,
    signIn,
    signOut
}