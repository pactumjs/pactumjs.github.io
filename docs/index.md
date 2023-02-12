---
layout: home

hero:
  name: PactumJS
  tagline: Free & OpenSource REST API Testing Tool for all levels in a Test Pyramid
  image:
    src: /logo.svg
    alt: PactumJS
  actions:
    - theme: brand
      text: Get Started
      link: /introduction/welcome
    - theme: alt
      text: View on GitHub
      link: https://github.com/pactumjs/pactum
features:
  - title: 🚀 Simple & Swift
    details: Super fast, easy and reliable testing for all types of REST API's.
  - title: ⚡ Powerful & Lightweight
    details: Rich set of features to test complex scenarios yet wrapped inside a lightweight npm package.
  - title: 🧪 Clear & Comprehensive
    details: Clear and simple API to write readable and maintainable component, contract and end-to-end integration tests.
footer: MIT Licensed | Copyright © 2023
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/ASaiAnudeep.png',
    name: 'Anudeep',
    title: 'Core Team',
    sponsor: 'https://github.com/sponsors/ASaiAnudeep',
    links: [
      { icon: 'github', link: 'https://github.com/ASaiAnudeep' },
      { icon: 'linkedin', link: 'https://in.linkedin.com/in/sai-anudeep-adimulapu' }
    ]
  },
  {
    avatar: 'https://github.com/leelaprasadv.png',
    name: 'Leela Prasad',
    title: 'Core Team',
    links: [
      { icon: 'github', link: 'https://github.com/leelaprasadv' },
      { icon: 'linkedin', link: 'https://in.linkedin.com/in/leelaprasadvadla' }
    ]
  },
]
</script>
<br>
<hr>
<br>
<VPTeamMembers size="small" :members="members" />