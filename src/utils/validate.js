// 验证手机号码
export const validatePhone = (code, phone) => {
  if (code == "86") {
    return /^1[3456789]\d{9}$/.test(phone)
  }
  return /^\d{1,20}$/.test(phone)
}

// 验证邮箱
export const validateEmail = (email) => {
  return /^[a-zA-Z0-9_.-_\+]+@[a-zA-Z0-9-\+_]+(\.[a-zA-Z0-9-\+_]+)*\.[a-zA-Z0-9\+_]{2,6}$/.test(
    email
  )
}

// 验证微信账号
export const validateWechat = (account) => {
  return /^[a-zA-Z][a-zA-Z\d_-]{5,19}$/.test(account)
}

// 验证支付宝账号
export const validateAlipay = (account) => {
  return /^(?:1[3-9]\d{9}|[a-zA-Z\d._-]*\@[a-zA-Z\d.-]{1,10}\.[a-zA-Z\d]{1,20})$/.test(
    account
  )
}

// 验证证件号码
export const validateIdNum = (str, type, nation) => {
  if (type === 0 && nation.toLowerCase() === "china") {
    return /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/.test(
      str
    )
  }
  // 其他
  return /^[a-zA-z0-9-_]{1,40}$/.test(str)
}
