# Contributing

Thanks for your interest in improving this personal website. The site is built
with Astro and started from the AstroPaper template, but the content,
configuration, and project direction are specific to Pierre Hanna's website,
projects, and notes.

## Types of Contributions

Useful contributions include:

- Fixing typos, broken links, metadata, or formatting issues
- Suggesting topics, papers, tools, or questions that deserve attention
- Proposing guest posts or draft articles for the blog
- Reporting bugs in pages, RSS, search, navigation, or generated Open Graph
  images
- Improving accessibility, responsive layout, or performance
- Suggesting focused improvements to the site's structure or developer workflow
- Updating project documentation when it no longer reflects this repository

Because this is a personal site, larger content changes, redesigns, and new
features should start with an issue before a pull request.

## Topic Suggestions and Guest Posts

I welcome issues that point me toward topics worth investigating, especially in
AI, machine learning, NLP, data science, software engineering, web development,
and applied AI tooling. Even politics and theology are okay. A good topic
suggestion explains why the topic matters, identifies what specific angle
needs attention, and includes helpful links, references, or examples when available.

Guest post ideas are welcome too. Please open an issue before writing a full
post unless the change is very small. A proposal should include the working
title, intended audience, outline, and any relevant background or sources.

Guest posts should:

- Be original work or clearly cite any reused ideas, data, images, or code
- Be technically accurate and transparent about uncertainty
- Fit the tone and subject areas of this blog
- Avoid promotional, sponsored, affiliate, or SEO-driven content
- Disclose conflicts of interest when relevant
- Include author attribution if the post is accepted

Final publication, editing, and whether a post fits the blog are at the site
maintainer's discretion.

## Open an Issue

Before opening an issue, check whether a similar issue already exists. When
reporting a bug, include:

- The affected page or route
- Steps to reproduce the problem
- Expected and actual behavior
- Browser/device details when the issue is visual or interactive
- Screenshots or console output when helpful

## Feature Requests

Feature requests should explain the problem they solve for this site. Please
keep proposals scoped to the current project rather than the upstream
AstroPaper template. For substantial UI, content model, or workflow changes,
open an issue first so the direction can be discussed before implementation.

## Pull Requests

1. Keep changes focused on one concern.
2. Follow the existing TypeScript, Astro, Markdown, and Tailwind conventions.
3. Do not hand-edit generated output such as `dist/`, `.astro/`, or
   `public/pagefind/`.
4. Add or update documentation when behavior, commands, or content workflows
   change.
5. Include screenshots for visible UI changes.

Before opening a PR, run the relevant checks:

```sh
pnpm lint
pnpm format:check
pnpm build
```

For UI or content changes, also run `pnpm preview` and manually check affected
pages. Search, RSS, responsive layout, and generated Open Graph images should be
checked when the change touches those areas.

## Content Changes

Small typo, link, and metadata fixes are welcome. Please avoid rewriting posts,
project descriptions, biography text, or opinions without prior discussion,
because those are personal content owned by the site author.

For new posts or major edits, start with a topic or guest post proposal issue.
Accepted drafts should use the existing content structure and frontmatter style,
and any claims that depend on current facts, external data, or third-party
behavior should include sources.

Blog posts live in `src/content/posts/`. Standalone pages live in
`src/content/pages/`.

## Reviewing

Review feedback should focus on correctness, accessibility, maintainability,
and whether the change fits the purpose of this personal website.
