# Plan: Add Biome Code Formatting with NPM Commands

## Goal

Set up Biome for automatic code formatting and linting with:

- Unused import removal
- Indentation and code style fixes
- NPM commands to format `src/`, `docs/`, and `scripts/` folders
- VS Code format-on-save integration

## Implementation Steps

### 1. Install Biome

```bash
npm install --save-dev @biomejs/biome
```

### 2. Create `biome.json` Configuration

Create config file in project root with:

- **Formatter settings:** 2-space indentation, double quotes, semicolons
- **Linter settings:** Enable unused import removal
- **Include paths:** `src/`, `docs/`, `scripts/`
- **Ignore paths:** `node_modules/`, `dist/`, `.astro/`
- **File types:** `.ts`, `.tsx`, `.js`, `.jsx`, `.astro`, `.json`, `.md`, `.mdx`

Key config options:

```json
{
  "organizeImports": { "enabled": true },
  "linter": {
    "rules": {
      "correctness": {
        "noUnusedImports": "error"
      }
    }
  }
}
```

### 3. Add NPM Scripts to `package.json`

```json
{
  "scripts": {
    "format": "biome check --write src docs scripts",
    "format:check": "biome check src docs scripts",
    "lint": "biome lint src docs scripts"
  }
}
```

- `npm run format` - Fix all issues (formatting + remove unused imports)
- `npm run format:check` - Check without fixing (useful for CI)
- `npm run lint` - Run linting only

### 4. Create VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biomejs.biome",
  "[astro]": { "editor.defaultFormatter": "biomejs.biome" },
  "[typescript]": { "editor.defaultFormatter": "biomejs.biome" },
  "[javascript]": { "editor.defaultFormatter": "biomejs.biome" },
  "[json]": { "editor.defaultFormatter": "biomejs.biome" },
  "editor.codeActionsOnSave": {
    "quickfix.biome": "explicit",
    "source.organizeImports.biome": "explicit"
  }
}
```

### 5. Add VS Code Extension Recommendation

Create/update `.vscode/extensions.json`:

```json
{
  "recommendations": ["biomejs.biome"]
}
```

## Files to Create/Modify

| File | Action |
|------|--------|
| `biome.json` | Create (new) |
| `package.json` | Modify (add scripts + devDependency) |
| `.vscode/settings.json` | Create (new) |
| `.vscode/extensions.json` | Create (new) |

## Usage After Setup

```bash
# Format everything (like WebStorm's Reformat Code)
npm run format

# Check what would be fixed (no changes)
npm run format:check

# In VS Code: just save the file (Ctrl+S) - auto-formats
```

## Notes

- Biome is 10-100x faster than ESLint+Prettier combo
- Native Astro file support
- Single tool handles both formatting and linting
- The VS Code Biome extension must be installed for format-on-save
