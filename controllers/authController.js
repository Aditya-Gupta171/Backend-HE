const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../firebase/firestore");

// User Registration
exports.register = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userRef = db.collection("users").doc(email);
        const userDoc = await userRef.get();

        if (userDoc.exists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await userRef.set({ email, password: hashedPassword });

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// User Login
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userRef = db.collection("users").doc(email);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const user = userDoc.data();
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.logout = (req, res) => {
    // Extract token from the request headers
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(403).json({ message: "No token provided" });
    }

    // For simplicity, just send a success response
    // Assume the client will handle clearing the token locally
    res.status(200).json({ message: "User logged out successfully" });
};

// Protected Route
exports.getProtectedData = async (req, res) => {
    res.status(200).json({ message: `Welcome ${req.user.email}` });
};
