module.exports = {
    errorHandlers: (err, req, res, next) => {
        if (err) {
            switch (err.name) {
                case "SignInError":
                    res.status(401).json({ message: 'Invalid username or password' });
                    break;
                case "Unauthorized":
                    res.status(401).json({ message: 'You dont have access' });
                    break;
                default:
                    res.status(500).json({ message: 'Internal server error' });
                    break;
            }
            next(err); // Memanggil next untuk menangani kesalahan berikutnya (jika ada)
        }
    }
};
