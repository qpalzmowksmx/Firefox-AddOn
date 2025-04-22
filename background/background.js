// background.js
async function organizeTabs() {
    // 현재 윈도우의 모든 탭 가져오기
    const tabs = await browser.tabs.query({});
    
    // 도메인별로 탭 그룹화
    const domainGroups = {};
    tabs.forEach(tab => {
      const domain = new URL(tab.url).hostname;
      if (!domainGroups[domain]) {
        domainGroups[domain] = [];
      }
      domainGroups[domain].push(tab);
    });
    
    // 그룹화된 탭들 정리
    for (const [domain, tabGroup] of Object.entries(domainGroups)) {
      if (tabGroup.length > 1) {
        const groupId = await browser.tabs.group({
          tabIds: tabGroup.map(tab => tab.id)
        });
        await browser.tabGroups.update(groupId, {
          title: domain
        });
      }
    }
  }
  
  // 브라우저 액션 클릭 이벤트 리스너
  browser.browserAction.onClicked.addListener(organizeTabs);