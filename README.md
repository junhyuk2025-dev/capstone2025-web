# 대학 프로젝트 협업 플랫폼 (UniCollab)

대학생들을 위한 프로젝트 협업 플랫폼입니다.

## 기술 스택

- **Next.js 14** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 스타일링
- **Heroicons** - 아이콘

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 빌드

```bash
npm run build
npm start
```

## 주요 기능

- 🏠 **홈페이지** - 플랫폼 소개 및 인기 프로젝트
- 📋 **프로젝트 목록** - 모든 프로젝트 탐색
- 📄 **프로젝트 상세** - 프로젝트 정보 및 팀 멤버 확인
- 🎨 **반응형 디자인** - 모바일, 태블릿, 데스크톱 지원
- 🎯 **현대적인 UI/UX** - Tailwind CSS 기반의 깔끔한 디자인

## 프로젝트 구조

```
capstone-web/
├── app/
│   ├── globals.css          # 전역 스타일
│   ├── layout.tsx           # 루트 레이아웃
│   ├── page.tsx             # 홈페이지
│   └── projects/
│       ├── page.tsx         # 프로젝트 목록
│       └── [id]/
│           └── page.tsx     # 프로젝트 상세
├── components/
│   ├── Navbar.tsx           # 네비게이션 바
│   └── Footer.tsx           # 푸터
└── package.json
```

## 개발

페이지를 수정하면 자동으로 반영됩니다. `app/` 디렉토리의 파일을 수정하여 페이지를 편집할 수 있습니다.

## 문제 해결

### 페이지가 깨지거나 스타일이 적용되지 않는 경우

1. **캐시 삭제 후 재시작**
   ```bash
   rm -rf .next
   npm run dev
   ```

2. **브라우저 캐시 삭제**
   - Chrome/Edge: `Cmd + Shift + R` (Mac) 또는 `Ctrl + Shift + R` (Windows)
   - 또는 개발자 도구에서 "Disable cache" 체크

3. **포트 충돌 해결**
   ```bash
   # 3000-3003 포트를 사용하는 프로세스 종료
   npm run kill-ports
   npm run dev
   ```

4. **의존성 재설치**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run dev
   ```

