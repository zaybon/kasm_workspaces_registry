/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Methotec KASM Registry',
    description: 'The un-official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://zaybon.github.io/kasm_workspaces_registry/',
    contactUrl: 'https://tst.wtf',
  },
  reactStrictMode: true,
  basePath: '/kasm_workspaces_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
