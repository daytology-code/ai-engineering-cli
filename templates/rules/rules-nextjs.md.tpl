# Next.js Rules (App Router Standard)

## 1. Framework Constraints

- Next.js 14+
- App Router 필수
- Pages Router 사용 금지
- Server Component 우선

---

## 2. Architecture Rules

### 기본 폴더 구조

/app
  /api
  /features
  /lib
  /ui
  /hooks
  /types
  /tests

---

## 3. Rendering Rules

1. 기본은 Server Component
2. Client Component는 아래 조건에서만 허용
   - useState / useEffect 사용
   - 브라우저 API 필요
3. `"use client"`는 최소 범위

---

## 4. Data Fetching

- 서버에서 fetch
- API Route는 비즈니스 로직 금지
- Validation → Service → Response 구조 유지

---

## 5. Styling Rules

- Tailwind CSS 필수
- className 직접 작성
- UI 라이브러리 도입 시 사전 승인 필요

---

## 6. Testing Rules

- 테스트 프레임워크: Vitest or Jest
- 테스트 우선 작성 (TDD)
- API / UI 분리 테스트

---

## 7. Prohibited Patterns

- props drilling 심화
- 전역 상태 남용
- 컴포넌트 내 비즈니스 로직
