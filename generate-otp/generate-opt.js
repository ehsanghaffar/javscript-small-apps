/**
 * Generate OTP
 * @generator
 * @requires Math.random Math.floor
 * @returns {number} OTP
 * @example
 * generateOTP(); // => "435897"
 */

const generateOTP = () => {
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
};

console.log(generateOTP());
