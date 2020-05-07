'use strict'

module.exports = {
  env: {
    // 开发环境
    development: {
      ENV_NAME: '"开发环境"',
      VALUATION_API: "test-bi-valuation.danke.life",
      PUZU_API: "test-bi-price-api.danke.life"
    },
    // 测试环境
    testing: {
      ENV_NAME: '"测试环境"',
      VALUATION_API: '""',
    },
    // 预发环境
    staging: {
      ENV_NAME: '"预发环境"',
      VALUATION_API: '""',
    },
    // 生产环境
    production: {
      ENV_NAME: '"生产环境"',
      VALUATION_API: '""',
    }
  }
}
