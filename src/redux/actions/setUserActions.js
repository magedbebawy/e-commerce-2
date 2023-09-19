const USER = 'USER';
const ADMIN = 'ADMIN';

const setUser = () => ({
    type: USER
});

const setAdmin = () => ({
    type: ADMIN
});

module.exports = {
    USER,
    ADMIN,
    setUser,
    setAdmin
}