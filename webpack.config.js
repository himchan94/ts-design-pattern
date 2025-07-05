const path = require("path");

module.exports = {
  mode: "development",
  target: "web", // 브라우저 환경 타겟 설정
  entry: "./design-pattern/template/index.ts", // 진입 파일
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "output"), // 출력 폴더
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  watch: false, // 👈 Watch 모드 활성화
  devtool: false, // 👈 eval 제거
};
