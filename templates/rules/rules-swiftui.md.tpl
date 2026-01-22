# SwiftUI Rules

## 1. Architecture

- SwiftUI + MVVM
- View는 로직 금지
- 모든 비즈니스 로직은 ViewModel로 이동

---

## 2. Folder Structure

/Core
/Features
/ViewModels
/Services
/Models
/Resources
/Tests

---

## 3. State Management

- @State: View 내부
- @StateObject: ViewModel
- @Published: 데이터 변경 트리거
- 싱글톤 남용 금지

---

## 4. Networking

- URLSession 기반
- API Client 분리
- Mockable Protocol 필수

---

## 5. Concurrency

- async/await 필수
- DispatchQueue 직접 사용 금지
- MainActor 명확히 선언

---

## 6. Testing

- XCTest 필수
- ViewModel 단위 테스트 우선
- UI 테스트는 핵심 플로우만

---

## 7. 금지 사항

- View 안에서 API 호출
- 강제 unwrap
- 하드코딩 문자열
