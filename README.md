# jeon.전번 - 대학 전화번호 통합 허브

한국기술교육대학교(KOREATECH)의 흩어진 연락처를 통합하여 제공하는 모바일 웹 애플리케이션

## 🌟 주요 기능

- **🔍 스마트 검색**: 키워드, 부서명, 설명을 모두 검색하는 퍼지 검색
- **📂 카테고리 필터**: 학사, 생활관, 행정, 학과, 편의시설 분류
- **🟢 실시간 상태**: 업무 시간 기반 통화 가능 여부 표시
- **⭐ 즐겨찾기**: LocalStorage 기반 영구 저장
- **📞 원클릭 통화**: 모바일에서 바로 전화 연결
- **📱 모바일 최적화**: 반응형 디자인

## 🛠 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Font**: Pretendard

## 🎨 디자인 시스템

- **컬러 팔레트**: Neutral (100-1300), Brand Blue (100-1000), Orange (100-1000)
- **타이포그래피**: Pretendard 폰트, base 14px
- **스페이싱**: 4px 배수 기반
- **반응형**: 480px / 768px / 1024px / 1280px / 1536px

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 프로덕션 빌드

```bash
npm run build
npm start
```

## 🌐 배포하기 (Vercel 추천)

### Vercel로 배포 (가장 쉬운 방법!)

**1단계: Vercel 회원가입**
1. [Vercel 웹사이트](https://vercel.com) 접속
2. "Sign Up" 클릭
3. "Continue with GitHub" 선택
4. GitHub 계정으로 로그인
5. Vercel이 GitHub 접근 권한 요청하면 "Authorize Vercel" 클릭

**2단계: 프로젝트 Import**
1. Vercel 대시보드에서 "Add New..." 버튼 클릭
2. "Project" 선택
3. GitHub 저장소 목록에서 "school" 찾기
4. "Import" 버튼 클릭

**3단계: 배포 설정**
- Framework Preset: **Next.js** (자동 감지됨)
- Root Directory: `./` (기본값)
- Build Command: `npm run build` (자동 설정됨)
- Output Directory: `.next` (자동 설정됨)
- 설정 그대로 두고 **"Deploy"** 클릭!

**4단계: 배포 완료! 🎉**
- 2-3분 후 배포 완료
- `https://school-xxxx.vercel.app` 같은 주소 생성
- 이 주소를 누구에게나 공유 가능!

**자동 재배포:**
- GitHub에 코드를 푸시하면 자동으로 재배포됩니다
- `git push` → Vercel이 자동으로 새 버전 배포

### 배포 후 확인사항
- ✅ 검색 기능 작동 확인
- ✅ 카테고리 필터 작동 확인
- ✅ 즐겨찾기 기능 확인 (LocalStorage)
- ✅ 모바일에서 전화 걸기 기능 확인

## 📁 프로젝트 구조

```
jeon-phone/
├── app/                    # Next.js App Router
│   ├── globals.css        # 디자인 시스템
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── components/            # React 컴포넌트
│   ├── ui/               # Shadcn/UI 컴포넌트
│   ├── Header.tsx        # 헤더
│   ├── SearchBar.tsx     # 검색 바
│   ├── CategoryTabs.tsx  # 카테고리 탭
│   └── ContactCard.tsx   # 연락처 카드
├── data/                 # 데이터
│   └── contacts.ts       # 20개 모의 연락처
├── types/                # TypeScript 타입
│   └── contact.ts
├── utils/                # 유틸리티 함수
│   ├── time.ts          # 업무 상태 로직
│   └── search.ts        # 검색/필터
└── hooks/                # Custom Hooks
    └── useFavorites.ts  # 즐겨찾기 관리
```

## 📊 데이터

20개의 KOREATECH 연락처 포함:
- 학사 (4개): 학사팀, 장학팀, 교무팀
- 생활관 (2개): 생활관 관리소, 다산학사
- 행정 (5개): 총무팀, 시설관리팀, 학생지원팀, 취업지원센터, IT지원센터
- 학과 (4개): 컴퓨터공학부, 기계공학부, 전기전자통신공학부, 산업경영학부
- 편의시설 (5개): 학생식당, 대학서점, 보건진료소, 중앙도서관, 학생상담센터, 체육관

## 🎯 사용 예시

1. **검색**: "택배" 입력 → 생활관 관리소 표시
2. **필터**: "학사" 클릭 → 학사 관련 연락처만 표시
3. **즐겨찾기**: 별 아이콘 클릭 → 상단에 고정
4. **전화 걸기**: "전화 걸기" 버튼 클릭 → 바로 통화

## 📱 반응형 디자인

- **모바일** (< 480px): 단일 컬럼, 터치 최적화
- **태블릿** (768px - 1024px): 여유로운 간격
- **데스크탑** (> 1280px): 중앙 정렬, 최대 너비 제한

## 🔧 주요 기능 상세

### 업무 상태 표시
- 🟢 **통화 가능**: 업무 시간 중 (점심 시간 제외)
- 🟠 **점심 시간**: 12:00-13:00
- 🔴 **부재중**: 업무 종료 또는 주말

### 검색 기능
- 키워드 기반 검색
- 부서명 검색
- 설명 검색
- 실시간 필터링

### 즐겨찾기
- LocalStorage 영구 저장
- 상단 고정 표시
- 페이지 새로고침 후에도 유지

## 📄 라이선스

MIT License

## 👨‍💻 개발자

KOREATECH 학생을 위한 프로젝트
