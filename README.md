# Example Web
Scratch space for:
- reviewing or learning css, or other web frontend stack (such as astro)
- maintaining useful examples for reference or prototypes

Using astro for education in that framework and because it is so damn convenient. 

## Misc Notes
Used default astro generator

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`    | Get help using the Astro CLI                     |
| `pnpm lint`               | Lint code (runs biome check --write)             |
| `pnpm format`             | Format code (runs biome check --write)           |
| `pnpm clean`              | Check and fix with biome                         |
| `pnpm clean:unsafe`       | Check and fix with biome (unsafe fixes)          |
| `pnpm test`               | Run tests with vitest                            |

## Code Quality
- biome

## Project Structure

```
example-web/
├── content/          # Content collections (blog posts, docs)
├── public/           # Static assets (favicon, CSS)
├── src/
│   ├── components/   # Astro, Vue, and MDX components
│   ├── layouts/      # Page layouts
│   ├── model/        # Data models and site configuration
│   ├── pages/        # Route pages (astro, css, examples)
│   └── utils/        # Utility functions
└── dist/             # Build output
```