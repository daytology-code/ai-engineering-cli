# AI Engineering CLI 한글 사용 설명서 (User Guide)

`ai-engineering-cli`는 AI 에이전트와 함께 협업할 때, **결과물의 일관성(Determinism)**을 유지하고 **표준화된 개발 공정**을 강제할 수 있도록 도와주는 스캐폴딩 도구입니다.

---

## 🎯 주요 특징

- **AI Contract (결정론적 설계)**: `Implementation.md`를 통해 AI의 추론 범위를 제한하고 명확한 데이터 스키마를 정의합니다.
- **TDD 워크플로우**: `todo.md`를 통해 테스트 우선 개발 방식을 강제합니다.
- **복합 Skill 지원**: 하나의 기능에 여러 관점(예: 모바일 + 보안)의 전문 프롬프트를 병합할 수 있습니다.
- **프레임워크 최적화**: Next.js, SwiftUI, Flutter 등 각 프레임워크의 모범 사례(Best Practices)가 적용된 규칙을 제공합니다.

---

## 📦 설치 방법

### 전역 설치 (Global)
```bash
npm install -g ai-engineering-cli
```

### 로컬 개발 및 테스트
```bash
git clone https://github.com/daytology-code/ai-engineering-cli.git
cd ai-engineering-cli
npm link
```

---

## 🚀 사용법

기본 명령어 구조는 다음과 같습니다.

```bash
ai-feature <기능명> <스킬[,스킬...]> [옵션]
```

### 인자 (Arguments)

| 인자 | 설명 | 예시 |
|------|------|------|
| `기능명` | 생성할 기능의 이름 (kebab-case 권장) | `login-flow`, `user-profile` |
| `스킬` | 역할 기반의 AI 컨텍스트 (쉼표로 구분하여 여러 개 지정 가능) | `backend`, `frontend`, `mobile,security` |

### 옵션 (Options)

| 옵션 | 설명 | 유효한 값 |
|------|------|------|
| `--framework <이름>` | 특정 프레임워크 전용 규칙 추가 | `nextjs`, `swiftui`, `flutter` |
| `--dry-run` | 실제 파일을 생성하지 않고 생성될 목록만 미리보기 | - |
| `--list` | 사용 가능한 모든 스킬과 프레임워크 목록 표시 | - |
| `--help, -h` | 상세 도움말 표시 | - |
| `--version, -v` | 버전 정보 표시 | - |

---

## 📚 사용 예시

### 1. 기본 사용 (단일 스킬)
백엔드 로직 작성을 위한 스캐폴딩을 생성합니다.
```bash
ai-feature login-api backend
```

### 2. 복합 스킬 지원 (Multiple Skills)
보안 기능이 강조된 모바일 앱 기능을 설계할 때 사용합니다.
```bash
ai-feature payment-module mobile,security --framework swiftui
```

### 3. 프 프레임워크 지정
Next.js 환경의 프론트엔드 작업 규칙을 포함합니다.
```bash
ai-feature user-dashboard frontend --framework nextjs
```

### 4. 생성 전 미리보기 (Dry-run)
```bash
ai-feature checkout-flow backend,security --dry-run
```

---

## 📁 생성되는 파일 구조

명령어를 실행하면 지정한 이름의 폴더가 생성되며, 그 안에 AI 에이전트를 위한 가이드라인이 포함된 4개의 주요 파일이 생성됩니다.

```
<기능명>/
├── Implementation.md      # AI Contract (기획서 및 스펙 테두리)
├── todo.md               # Execution Queue (TDD 실행 순서)
├── rules-global.md       # AI Constitution (AI가 지켜야 할 절대 원칙)
└── rules-<framework>.md   # 프레임워크 전용 아키텍처 규칙
```

### 파일별 역할

- **Implementation.md**: 이번 기능에서 "무엇을 할 것인가"와 "무엇을 하지 않을 것인가(Out of Scope)"를 정의합니다. 특히 **데이터 스키마**를 명시하여 AI가 임의로 타입을 추측하지 못하게 합니다.
- **todo.md**: `TEST → IMPL → REFACTOR` 순서를 따르는 체크리스트입니다. AI는 한 번에 단 하나의 TODO만 처리해야 합니다.
- **rules-global.md**: AI에게 "설명하지 말 것", "코드만 출력할 것", "상위 규칙을 절대 준수할 것" 등의 행동 지침을 제공합니다.
- **rules-<framework>.md**: 폴더 구조, 상태 관리 방식 등 선택한 프레임워크의 코딩 컨벤션을 전달합니다.

---

## 🎨 사용 가능한 스킬 목록

- `backend`: 서버 측 로직 및 API 설계 전문성
- `frontend`: 클라이언트 측 UI 및 상태 관리 전문성
- `mobile`: 모바일 UX 및 네이티브 패턴 전문성
- `security`: 보안 취약점 방지 및 입력 검증 전문성
- `ai-engineer`: 효율적인 프롬프트 및 워크플로우 설계 전문성

---

## 🛠 지원 프레임워크

- `nextjs`: Next.js 14+ (App Router) 표준
- `swiftui`: SwiftUI + MVVM 아키텍처 패턴
- `flutter`: Flutter + Clean Architecture 패턴

---

## 📝 팁: AI에게 어떻게 전달하나요?

생성된 폴더 안의 파일들을 AI 에이전트(예: Cursor, Claude, Gemini)에게 **Reference(참조)**로 추가하신 후, 다음과 같이 요청하세요.

> "`todo.md`의 다음 순서에 따라 작업을 시작해줘. `rules-global.md`와 `Implementation.md`의 규칙을 절대적으로 준수해."

---

## 라이선스
MIT License
