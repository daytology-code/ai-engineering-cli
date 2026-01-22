# Implementation Spec (AI Contract)

## 0. Meta Information
- **Project:** <프로젝트명>
- **Feature:** <이번에 구현할 단일 기능>
- **Owner:** AI Agent
- **Status:** Draft
- **Role Context:** 
{{SKILL_PROMPT}}

> ⚠️ **Rule:** Feature는 반드시 하나여야 합니다. 여러 기능일 경우 Implementation.md를 나눕니다.

---

## 1. Objective
이 기능의 목적은 **<사용자 관점에서 한 문장으로 명확히 설명>** 하는 것이다.
*(예: 사용자가 이메일과 비밀번호로 로그인할 수 있게 한다)*

---

## 2. Feature Scope (범위 고정)
### ⭕ In Scope
- 포함되는 것 1
- 포함되는 것 2

### ❌ Out of Scope
- 이번 구현에서 절대 하지 않는 것 1
- 향후 기능 2

> ⚠️ 이 섹션은 AI의 과잉 구현을 막는 핵심 안전장치입니다.

---

## 3. Feature List (Priority Order)
### P0 (필수 구현):
- [ ] 기능 A
- [ ] 기능 B

### P1 (나중에):
- [ ] 기능 C (이번 스프린트 제외 가능)

> **Rule:** P0만 구현 대상입니다. P1 이상은 테스트도 작성하지 않습니다.

---

## 4. Data Schema (가장 중요)
### Entity / Data Model:
| Field | Type | Required | Notes |
|------|------|----------|------|
| | | | |

### API / Contract:
- **Endpoint:** `POST /api/example`
- **Request Body:** `{}`
- **Response 200:** `{}`
- **Response Error:** `{}`

> ⚠️ **절대 규칙:** 스키마에 없는 필드 추가 금지, 타입 추측 금지, nullable 여부 명시 필수.

---

## 5. Business Rules
1. **If** <조건>, **Then** <결과>
2. 
3. 

---

## 6. Edge Cases
- 예외 상황 1
- 예외 상황 2

> ⚠️ 여기에 없는 예외는 고려하지 않아도 됩니다. (AI 추론 폭 제한)

---

## 7. Verification Criteria
이 기능은 아래 조건을 모두 만족해야 완료로 간주한다.
- [ ] 모든 P0 기능에 대해 테스트가 존재한다
- [ ] 모든 테스트가 통과한다
- [ ] Spec에 정의되지 않은 코드가 없다
- [ ] 기존 테스트를 깨뜨리지 않는다

---

## 8. Test Strategy (TDD 강제)
- 테스트 우선 작성 (Test-First)
- 실패하는 테스트부터 시작하여 최소 코드로 통과
- 테스트 위치: `/tests/<feature-name>/`

---

## 9. Stop Conditions
다음 발생 시 즉시 중단하고 보고한다:
- API 스펙 불명확
- Data Schema 누락
- Feature Scope 충돌

---

## 10. AI Execution Instruction
1. 먼저 실패하는 테스트를 작성한다.
2. 테스트를 통과하는 최소 코드만 작성한다.
3. **설명하지 않는다.** (설명이 필요하면 1줄 요약만)
4. `diff` 또는 **전체 코드**만 출력한다.
