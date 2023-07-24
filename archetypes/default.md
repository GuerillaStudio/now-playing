---
title: "{{ replace .Name "_" " " | title }}"
artist:
date: {{ .Date }}
cover: /upload/{{ replace .Name "_" " " | title }}.jpg
styles:
links:
  spotify:
  youtube:
  applemusic:
  soundcloud:
  bandcamp:
  deezer:
---

