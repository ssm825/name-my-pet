# 🐾 Name-My-Pet
- OpenAI를 사용하여 반려동물의 이름을 랜덤으로 생성해 주는 웹 사이트
- Next.js + OpenAI를 사용해 보고 싶어서 만들어 본 프로젝트입니다.
- 배포 :  [name-my-pet](https://name-my-pet.vercel.app/)

![name_my_pet](https://github.com/ssm825/readmetest/assets/105163878/8178c931-dc2f-4afd-a4b5-df4090ec6c6f)

<br/>

## 실행 방법
```bash
$ git clone https://github.com/ssm825/name-my-pet.git
$ npm install
$ npm run dev
```
  
<br/>

## 기술 스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"> <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledComponents&logoColor=white"> <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">


<br/>

## 구현 기능
- OpenAI를 사용하여 반려동물 랜덤 이름 생성
  -   useForm 커스텀 훅으로 유효성 검사
  -   한글 / 영어 이름 option 선택 기능
  -   재사용할 수 있는 모달 컴포넌트
- react-responsive 라이브러리로 반응형 웹 구현
- JavaScript -> TypeScript 변환

<br/>

## 프로젝트 구조
```
📦src
 ┣ 📂component
 ┃ ┣ 📂Button
 ┃ ┃ ┗ 📜Button.tsx
 ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📜Modal.styles.tsx
 ┃ ┃ ┗ 📜Modal.tsx
 ┃ ┣ 📜Loading.tsx
 ┃ ┗ 📜ResponsiveContainer.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useForm.ts
 ┃ ┗ 📜useResponsive.ts
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜generate.page.ts
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📜Main.page.tsx
 ┃ ┃ ┗ 📜Main.styles.tsx
 ┃ ┣ 📜index.page.tsx
 ┃ ┣ 📜_app.page.tsx
 ┃ ┗ 📜_document.page.tsx
 ┗ 📂styles
 ┃ ┣ 📜fonts.ts
 ┃ ┣ 📜globalStyle.ts
 ┃ ┗ 📜theme.ts
```
<br/>
