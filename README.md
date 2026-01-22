# AI Engineering CLI

Create deterministic AI-engineered feature scaffolds with built-in constraints and workflows.

## 🎯 Purpose

This CLI generates a standardized project structure for AI-assisted development, ensuring:
- **Deterministic outputs** through strict contracts
- **TDD workflow** enforcement
- **Scope control** to prevent AI over-engineering
- **Framework-specific** best practices

---

## 📦 Installation

### Global Installation
```bash
npm install -g ai-engineering-cli
```

### Local Development
```bash
git clone <repository-url>
cd ai-engineering-cli
npm link
```

---

## 🚀 Usage

```bash
ai-feature <feature-name> <skill> [options]
```

### Arguments

| Argument | Description | Valid Values |
|----------|-------------|--------------|
| `feature-name` | Feature name in kebab-case | `login-flow`, `user-profile`, etc. |
| `skill` | Role-based skill context | `backend`, `frontend`, `mobile`, `security`, `ai-engineer` |

### Options

| Option | Description |
|--------|-------------|
| `--framework <name>` | Add framework-specific rules (`nextjs`, `swiftui`, `flutter`) |
| `--dry-run` | Preview files without creating them |
| `--list` | Show available skills and frameworks |
| `--help`, `-h` | Show help message |
| `--version`, `-v` | Show version information |

---

## 📚 Examples

### Basic Usage
```bash
# Create a backend feature
ai-feature login-flow backend

# Create a frontend feature
ai-feature user-profile frontend
```

### Multi-Skill Support
```bash
# Mobile app with security considerations
ai-feature user-auth mobile,security --framework swiftui

# Frontend with security best practices
ai-feature admin-panel frontend,security --framework nextjs

# Backend API with security focus
ai-feature api-gateway backend,security
```

### With Framework
```bash
# Next.js frontend feature
ai-feature dashboard frontend --framework nextjs

# SwiftUI mobile feature
ai-feature settings mobile --framework swiftui

# Flutter mobile feature
ai-feature payment mobile --framework flutter
```

### Preview Mode
```bash
# See what files would be created
ai-feature checkout backend --dry-run
```

### List Available Options
```bash
ai-feature --list
```

---

## 📁 Generated Structure

When you run `ai-feature login-flow backend`, it creates:

```
login-flow/
├── Implementation.md      # AI Contract (feature spec)
├── todo.md               # Execution Queue (TDD workflow)
├── rules-global.md       # Global AI rules
└── rules-backend.md      # Backend-specific rules (if applicable)
```

### File Descriptions

| File | Purpose |
|------|---------|
| `Implementation.md` | Complete feature specification with scope, data schema, business rules |
| `todo.md` | TDD workflow checklist (TEST → IMPL → REFACTOR) |
| `rules-global.md` | Core AI constraints (TDD enforcement, output format, stop conditions) |
| `rules-<framework>.md` | Framework-specific architectural rules |

---

## 🎨 Available Skills

| Skill | Description | Compatible Frameworks |
|-------|-------------|----------------------|
| `backend` | Server-side development | - |
| `frontend` | Client-side development | `nextjs` |
| `mobile` | Mobile app development | `swiftui`, `flutter` |
| `security` | Security-focused engineering | - |
| `ai-engineer` | AI workflow design | - |

---

## 🛠️ Available Frameworks

| Framework | Type | Description |
|-----------|------|-------------|
| `nextjs` | Frontend | Next.js 14+ App Router |
| `swiftui` | Mobile | SwiftUI + MVVM |
| `flutter` | Mobile | Flutter + Clean Architecture |

---

## 🔧 Development

### Project Structure

```
ai-engineering-cli/
├── bin/
│   └── feature.js           # CLI entry point
├── lib/
│   ├── config.js            # Valid skills/frameworks
│   ├── parseArgs.js         # Argument parser
│   ├── cli-utils.js         # Help/version/list commands
│   ├── createFeature.js     # Feature scaffold generator
│   ├── loadSkillPrompt.js   # Skill prompt loader
│   ├── validateName.js      # Feature name validator
│   ├── validateSkill.js     # Skill validator
│   └── validateFramework.js # Framework validator
└── templates/
    ├── Implementation.md.tpl
    ├── todo.md.tpl
    ├── rules/
    │   ├── rules-global.md.tpl
    │   ├── rules-backend.md.tpl
    │   ├── rules-frontend.md.tpl
    │   ├── rules-nextjs.md.tpl
    │   ├── rules-swiftui.md.tpl
    │   └── rules-flutter.md.tpl
    └── skills/
        ├── backend.md.tpl
        ├── frontend.md.tpl
        ├── mobile.md.tpl
        ├── security.md.tpl
        └── ai-engineer.md.tpl
```

---

## 📝 License

MIT

