# Firefox-AddOn

구조
├── background
│   └── background.js
├── icons
│   ├── icon_48x48.png
│   └── icon_96x96.png
├── LICENSE
├── main.py
├── manifest.json
├── popup
│   ├── popup.css
│   ├── popup.html
│   └── popup.js
└── README.md

# 사용한 라이브러리
from urllib.parse import urlparse  # URL 파싱
import browser  # Firefox 브라우저 API

# 계속 수정중
개발에서 신경쓸꺼
    Firefox 애드온 개발 환경 설정
    manifest.json 작성
    백그라운드 스크립트 개발
    UI 구현
    테스트 및 디버깅
    Firefox 애드온 스토어 배포(되려나)

주의사항:
     Firefox의 보안 정책 준수
     필요한 권한 설정
     사용자 데이터 보호
     성능 최적화
