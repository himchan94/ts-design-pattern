# TypeScript 디자인 패턴 학습 프로젝트

TypeScript를 사용하여 다양한 디자인 패턴을 학습하고 구현하는 프로젝트입니다.
학습 참고: https://youtube.com/@gisdeveloper

## 📋 프로젝트 정보

- **프로젝트명**: ts-design-pattern
- **버전**: 1.0.0
- **작성자**: himchan94
- **설명**: TypeScript로 디자인 패턴 학습하기

## 🛠 기술 스택

- **언어**: TypeScript
- **빌드 도구**: Webpack
- **개발 도구**: Nodemon
- **런타임**: Node.js

## 📁 프로젝트 구조

```
ts-design-pattern/
├── design-pattern/          # 디자인 패턴 구현 폴더
├── output/                 # 빌드 결과물
│   └── bundle.js          # 웹팩 번들 파일
├── package.json           # 의존성 관리
├── tsconfig.json          # TypeScript 설정
├── webpack.config.js      # 웹팩 설정
└── nodemon.json          # Nodemon 설정
```

## 🎯 구현된 디자인 패턴

### 1. Iterator 패턴 (반복자 패턴)

컬렉션의 내부 구조를 노출하지 않고 요소들을 순차적으로 접근할 수 있는 방법을 제공하는 패턴입니다.

**구성 요소:**

- `Iterator<T>`: 반복자 인터페이스
- `Aggregator<T>`: 집합체 인터페이스
- `Item`: 데이터 아이템 클래스
- `Array`: 배열 집합체 구현
- `ArrayIterator`: 배열 반복자 구현

**사용 예시:**

```typescript
const items = [
  new Item("쿠쿠다스", 2500),
  new Item("몽쉘", 500),
  new Item("쿠키", 1500),
  new Item("통밀식빵", 10500),
];

const array = new Array(items);
const iter = array.iterator();

while (iter.next()) {
  const item = iter.current();
  console.log(item);
}
```

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 모드 실행

```bash
npm run watch
```

### 3. 빌드 및 실행

```bash
npm run exec
```

## 📝 스크립트 명령어

- `npm run test`: 테스트 실행 (현재 미구현)
- `npm run watch`: Nodemon을 사용한 개발 모드
- `npm run exec`: Webpack 빌드 후 실행

## 🔧 개발 환경 설정

### TypeScript 설정

- **타겟**: ES2016
- **모듈**: CommonJS
- **루트 디렉토리**: `./design-pattern`
- **출력 디렉토리**: `./output`
- **Strict 모드**: 활성화

### Webpack 설정

- **모드**: development
- **진입점**: `./design-pattern/iterator/index.ts`
- **출력**: `./output/bundle.js`
- **로더**: ts-loader (TypeScript 파일 처리)
