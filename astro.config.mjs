// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://clido.ai',
	output: 'static',
	integrations: [
		starlight({
			title: 'cli;do',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/clido-ai/clido-cli' }],
			favicon: '/favicon.ico',
			head: [
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' } },
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: '/og.png' } },
				{ tag: 'meta', attrs: { property: 'og:title', content: 'cli;do - AI coding agent for the terminal' } },
				{ tag: 'meta', attrs: { property: 'og:description', content: 'Open-source AI coding agent. 16 providers, 23 tools, YAML workflows, single Rust binary.' } },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'docs/guide/introduction' },
						{ label: 'Installation', slug: 'docs/guide/installation' },
						{ label: 'First Run', slug: 'docs/guide/first-run' },
						{ label: 'Quick Start', slug: 'docs/guide/quick-start' },
					],
				},
				{
					label: 'Guide',
					items: [
						{ label: 'TUI', slug: 'docs/guide/tui' },
						{ label: 'Configuration', slug: 'docs/guide/configuration' },
						{ label: 'Providers', slug: 'docs/guide/providers' },
						{ label: 'Sessions', slug: 'docs/guide/sessions' },
						{ label: 'Workflows', slug: 'docs/guide/workflows' },
						{ label: 'Planner', slug: 'docs/guide/planner' },
						{ label: 'Memory', slug: 'docs/guide/memory' },
						{ label: 'Semantic Search', slug: 'docs/guide/index-search' },
						{ label: 'MCP Servers', slug: 'docs/guide/mcp' },
						{ label: 'Project Rules', slug: 'docs/guide/project-rules' },
						{ label: 'Running Prompts', slug: 'docs/guide/running-prompts' },
						{ label: 'Audit Log', slug: 'docs/guide/audit' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'docs/reference' },
				},
				{
					label: 'Developer',
					autogenerate: { directory: 'docs/developer' },
				},
			],
		}),
	],
});
