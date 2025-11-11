# TeamMate - 대학생 팀 프로젝트 협업 및 매칭 통합 플랫폼

대학생 팀 프로젝트의 비효율성을 해결하는 통합 플랫폼입니다. 팀 구성부터 협업 진행, 성과 분석까지 한 공간에서 제공합니다.

## 기술 스택

- **Next.js 14** - React 프레임워크 (App Router)
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **Heroicons** - 아이콘 라이브러리

## 주요 기능

### 1. 회원 관리
- 로그인/회원가입 (`/login`)
- 전공·역할·성향 기반 프로필 관리 (`/profile`)

### 2. 팀 매칭
- 자동 매칭: 전공, 역할, 성향 기반 최적 팀 매칭 (`/matching`)
- 직접 팀 구성: 원하는 팀원을 직접 선택
- 추천 팀 참여: AI 기반 팀 추천

### 3. 협업 관리
- 대시보드: 팀별 진행 상황 통합 관리 (`/dashboard`)
- 팀 상세 페이지: 역할 분담, 일정, 파일 관리 (`/team/[id]`)
- 실시간 화상채팅 (준비 중)
- 작업 관리 및 템플릿

### 4. 성과 분석
- 활동 로그 수집
- 기여도 시각화
- 데이터 기반 평가

### 5. 교수용 관리자
- 팀 활동 데이터 모니터링 (`/admin`)
- 피드백 제공

## 프로젝트 구조

```
capstone-web/
├── app/
│   ├── globals.css          # 전역 스타일
│   ├── layout.tsx           # 루트 레이아웃
│   ├── page.tsx             # 홈페이지
│   ├── login/
│   │   └── page.tsx         # 로그인/회원가입
│   ├── profile/
│   │   └── page.tsx         # 프로필 등록
│   ├── matching/
│   │   └── page.tsx         # 팀 매칭
│   ├── dashboard/
│   │   └── page.tsx         # 대시보드
│   ├── team/
│   │   └── [id]/
│   │       └── page.tsx     # 팀 상세 페이지
│   ├── admin/
│   │   └── page.tsx         # 교수용 관리자
│   └── projects/
│       ├── page.tsx         # 프로젝트 목록
│       └── [id]/
│           └── page.tsx     # 프로젝트 상세
├── components/
│   ├── Navbar.tsx           # 네비게이션 바
│   └── Footer.tsx           # 푸터
├── tailwind.config.js       # Tailwind 설정
└── package.json
```

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

## 주요 페이지

- `/` - 홈페이지
- `/login` - 로그인/회원가입
- `/profile` - 프로필 등록
- `/matching` - 팀 매칭
- `/dashboard` - 대시보드
- `/team/[id]` - 팀 상세 페이지
- `/admin` - 교수용 관리자 페이지
- `/projects` - 프로젝트 목록

## 디자인 시스템

- **메인 색상**: 파랑 (#3B82F6)
- **배경**: 흰색
- **레이아웃**: 카드형 구조
- **반응형**: 모바일, 태블릿, 데스크톱 지원

## 개발 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run clean` - 빌드 캐시 삭제
- `npm run fresh` - 캐시 삭제 후 개발 서버 실행
- `npm run kill-ports` - 포트 3000-3003 프로세스 종료

## 문제 해결

### 페이지가 깨지거나 스타일이 적용되지 않는 경우

1. **캐시 삭제 후 재시작**
   ```bash
   npm run fresh
   ```

2. **브라우저 캐시 삭제**
   - Chrome/Edge: `Cmd + Shift + R` (Mac) 또는 `Ctrl + Shift + R` (Windows)
   - 또는 개발자 도구에서 "Disable cache" 체크

3. **포트 충돌 해결**
   ```bash
   npm run kill-ports
   npm run dev
   ```

4. **의존성 재설치**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run dev
   ```

## 라이선스

이 프로젝트는 캡스톤 프로젝트입니다.
