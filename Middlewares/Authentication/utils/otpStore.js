// In-memory OTP store (for learning purpose)
const otpStore = {};

export const setOTP = (userId, otp) => {
    otpStore[userId] = {
        otp,
        expiresAt: Date.now() + 5 * 60 * 1000 // 5 min expiry
    };
};

export const verifyOTP = (userId, otp) => {
    const record = otpStore[userId];

    if (!record) return false;
    if (Date.now() > record.expiresAt) return false;

    return record.otp === otp;
};