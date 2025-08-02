// import jwt from 'jsonwebtoken';

// export const adminLogin = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Email or password is invalid"
//             });
//         }

//         const accessToken = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '15m' });
//         const refreshToken = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '7d' });

//         res.cookie('refreshToken', refreshToken, {
//             httpOnly: true,
//             secure: false, // true in production (https)
//             sameSite: 'strict',
//             path: '/'
//         });

//         res.json({
//             success: true,
//             accessToken,
//             message: "Login successful"
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// };
