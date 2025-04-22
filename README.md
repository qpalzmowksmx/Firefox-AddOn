# Firefox-AddOn

구조
firefox-tab-organizer/
├── manifest.json           # 확장 프로그램 메타데이터
├── background/
│   └── background.py      # 백그라운드 스크립트
├── popup/
│   ├── popup.html         # 팝업 UI
│   └── popup.js           # 팝업 로직
└── icons/                 # 아이콘 파일들

# 사용한 라이브러리
from urllib.parse import urlparse  # URL 파싱
import browser  # Firefox 브라우저 API