module.exports = {
    solc: {
      version: "0.4.24",
      optimizer: {
        enabled: true,
        runs: 10000
      }
    },
  
    paths: {
      sources: "./contracts/v4",
      artifacts: "./artifacts"
    },
  };