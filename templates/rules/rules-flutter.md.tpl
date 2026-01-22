# Flutter Rules

## 1. Architecture

- Clean Architecture 필수
- Presentation / Domain / Data 분리
- UI는 로직 금지

---

## 2. State Management

- Riverpod 필수
- setState 최소화
- Provider 간 직접 참조 금지

---

## 3. Folder Structure

/lib
  /core
  /features
    /feature_name
      /presentation
      /domain
      /data

---

## 4. Widget Rules

- StatelessWidget 우선
- Widget 하나당 책임 하나
- 200줄 초과 금지

---

## 5. Networking

- Repository 패턴 필수
- DTO ↔ Entity 분리
- API 스키마 계약 변경 금지

---

## 6. Testing

- Domain Layer 테스트 최우선
- Widget Test는 핵심 UI만
- Golden Test는 선택

---

## 7. Prohibited

- Build 메서드 내 로직
- context 남용
- 직접 API 호출
