// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://clido.ai',
	integrations: [
		starlight({
			title: 'cli;do',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: false,
			},
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
						{ label: 'Introduction', slug: 'guide/introduction' },
						{ label: 'Installation', slug: 'guide/installation' },
						{ label: 'First Run', slug: 'guide/first-run' },
						{ label: 'Quick Start', slug: 'guide/quick-start' },
					],
				},
				{
					label: 'Guide',
					items: [
						{ label: 'TUI', slug: 'guide/tui' },
						{ label: 'Configuration', slug: 'guide/configuration' },
						{ label: 'Providers', slug: 'guide/providers' },
						{ label: 'Sessions', slug: 'guide/sessions' },
						{ label: 'Workflows', slug: 'guide/workflows' },
						{ label: 'Planner', slug: 'guide/planner' },
						{ label: 'Memory', slug: 'guide/memory' },
						{ label: 'Semantic Search', slug: 'guide/index-search' },
						{ label: 'MCP Servers', slug: 'guide/mcp' },
						{ label: 'Project Rules', slug: 'guide/project-rules' },
						{ label: 'Running Prompts', slug: 'guide/running-prompts' },
						{ label: 'Audit Log', slug: 'guide/audit' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Developer',
					autogenerate: { directory: 'developer' },
				},
			],
		}),
	],
});
