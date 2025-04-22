# background.py
async def organize_tabs():
    # 현재 윈도우의 모든 탭 가져오기
    tabs = await browser.tabs.query({})
    
    # 도메인별로 탭 그룹화
    domain_groups = {}
    for tab in tabs:
        domain = urlparse(tab.url).netloc
        if domain not in domain_groups:
            domain_groups[domain] = []
        domain_groups[domain].append(tab)
    
    # 그룹화된 탭들 정리
    for domain, tab_group in domain_groups.items():
        if len(tab_group) > 1:  # 같은 도메인의 탭이 2개 이상인 경우
            # 탭 그룹 생성
            group_id = await browser.tabs.group({
                'tabIds': [tab.id for tab in tab_group]
            })
            # 그룹 이름 설정
            await browser.tabGroups.update(group_id, {
                'title': domain
            })