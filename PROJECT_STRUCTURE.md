# TeamMate 프로젝트 구조

## 전체 디렉토리 구조

```
capstone-web/
├── app/                          # Next.js App Router
│   ├── globals.css              # 전역 스타일 (Tailwind CSS)
│   ├── layout.tsx               # 루트 레이아웃 (Navbar, Footer 포함)
│   ├── page.tsx                 # 홈페이지 (/)
│   │
│   ├── login/                   # 로그인/회원가입
│   │   └── page.tsx            # 로그인 및 회원가입 폼
│   │
│   ├── profile/                 # 프로필 등록
│   │   └── page.tsx            # 전공, 역할, 성향 선택
│   │
│   ├── matching/                # 팀 매칭
│   │   └── page.tsx            # 자동 매칭, 직접 구성, 추천 팀
│   │
│   ├── dashboard/               # 대시보드
│   │   └── page.tsx            # 내 팀 목록, 통계, 최근 활동
│   │
│   ├── team/                    # 팀 상세
│   │   └── [id]/
│   │       └── page.tsx        # 팀 상세 페이지 (작업, 파일, 일정)
│   │
│   ├── admin/                   # 교수용 관리자
│   │   └── page.tsx            # 팀 모니터링, 피드백
│   │
│   └── projects/                # 프로젝트 (기존)
│       ├── page.tsx            # 프로젝트 목록
│       └── [id]/
│           └── page.tsx        # 프로젝트 상세
│
├── components/                   # 재사용 가능한 컴포넌트
│   ├── Navbar.tsx              # 네비게이션 바 (반응형)
│   └── Footer.tsx              # 푸터
│
├── public/                       # 정적 파일 (이미지, 아이콘 등)
│
├── tailwind.config.js           # Tailwind CSS 설정
├── postcss.config.js            # PostCSS 설정
├── tsconfig.json                # TypeScript 설정
├── next.config.js               # Next.js 설정
├── package.json                 # 의존성 및 스크립트
└── README.md                    # 프로젝트 문서
```

## 주요 페이지 상세

### 1. 홈페이지 (`/`)
- **파일**: `app/page.tsx`
- **기능**: 플랫폼 소개, 주요 기능 소개, 인기 프로젝트 카드
- **컴포넌트**: Hero 섹션, Features 섹션, Projects 섹션, CTA 섹션

### 2. 로그인/회원가입 (`/login`)
- **파일**: `app/login/page.tsx`
- **기능**: 
  - 로그인 폼 (이메일, 비밀번호)
  - 회원가입 폼 (이름, 학번, 이메일, 비밀번호, 비밀번호 확인)
  - 로그인/회원가입 전환
- **상태 관리**: `useState`로 폼 데이터 관리

### 3. 프로필 등록 (`/profile`)
- **파일**: `app/profile/page.tsx`
- **기능**:
  - 전공 선택 (드롭다운)
  - 역할 선택 (복수 선택 가능)
  - 협업 성향 선택 (단일 선택)
  - 자기소개 (선택사항)
- **필수 항목**: 전공, 역할(최소 1개), 성향

### 4. 팀 매칭 (`/matching`)
- **파일**: `app/matching/page.tsx`
- **기능**:
  - **자동 매칭**: 과목, 팀 크기 선택 후 자동 매칭
  - **직접 팀 구성**: 새 팀 만들기, 팀 목록 보기
  - **추천 팀**: AI 추천 팀 목록 및 매칭 점수 표시
- **상태 관리**: 선택된 매칭 방식, 자동 매칭 진행 상태

### 5. 대시보드 (`/dashboard`)
- **파일**: `app/dashboard/page.tsx`
- **기능**:
  - 통계 카드 (참여 중인 팀, 완료된 작업, 진행 중인 작업, 평균 진행률)
  - 내 팀 목록 (진행률, 멤버 수, 다음 미팅)
  - 최근 활동 피드
  - 다가오는 작업 목록
  - 빠른 액션 버튼
- **레이아웃**: 2열 그리드 (메인 컨텐츠 + 사이드바)

### 6. 팀 상세 페이지 (`/team/[id]`)
- **파일**: `app/team/[id]/page.tsx`
- **기능**:
  - **개요 탭**: 프로젝트 설명, 시작일/마감일
  - **작업 탭**: 작업 목록, 상태 관리 (완료/진행중/대기)
  - **파일 탭**: 파일 업로드/다운로드
  - **일정 탭**: 회의 및 마감일 관리
- **사이드바**: 팀 멤버 목록, 통계
- **탭 네비게이션**: `useState`로 활성 탭 관리

### 7. 교수용 관리자 (`/admin`)
- **파일**: `app/admin/page.tsx`
- **기능**:
  - 전체 팀 통계 (전체 팀, 활성 팀, 주의 필요, 평균 진행률)
  - 팀 목록 (진행률, 상태, 마지막 활동)
  - 최근 활동 피드
  - 피드백 작성 (선택된 팀에 대해)
  - 필터 (과목, 상태)
- **상태 관리**: 선택된 팀, 필터 옵션

## 스타일링

### 색상 시스템
- **Primary**: #3B82F6 (파랑)
- **Primary Shades**: 50-900 (Tailwind 기본)
- **배경**: 흰색 (#FFFFFF)
- **텍스트**: 회색 계열 (gray-900, gray-600, gray-500)

### 컴포넌트 스타일
- **카드**: `bg-white rounded-lg shadow`
- **버튼**: `bg-primary-600 text-white rounded-md hover:bg-primary-700`
- **입력 필드**: `border-gray-300 rounded-md focus:border-primary-500`

## 상태 관리

현재는 클라이언트 컴포넌트에서 `useState`를 사용하여 로컬 상태를 관리합니다.
향후 필요시 Context API나 상태 관리 라이브러리(Redux, Zustand 등)를 추가할 수 있습니다.

## 라우팅

Next.js App Router를 사용하여 파일 기반 라우팅을 구현했습니다.
- 정적 라우트: `/login`, `/profile`, `/matching`, `/dashboard`, `/admin`
- 동적 라우트: `/team/[id]`, `/projects/[id]`

## 향후 추가 예정 기능

1. **인증 시스템**: 실제 로그인/회원가입 API 연동
2. **데이터베이스**: 팀, 사용자, 작업 데이터 저장
3. **실시간 기능**: WebSocket을 활용한 실시간 채팅
4. **화상 회의**: WebRTC 통합
5. **파일 업로드**: 실제 파일 업로드/다운로드 기능
6. **알림 시스템**: 작업 완료, 마감일 알림
7. **성과 분석**: 차트 및 그래프를 활용한 시각화

