import React, { useState, useMemo, useCallback } from 'react';

/**
 * React Component for the Web App Prompt Generator.
 * Refactored to include specific Math examples and a sophisticated dynamic generator.
 */

// --- 50가지 이상의 다양한 예시 프리셋 정의 (내용 강화 + 수학 예시 추가) ---
const examplePresets = [
    // 1. 초기 로드 및 기본 예시 (교육 관련) - 강화
    {
        role: "창의적인 교육용 게임 개발 전문가",
        topic: "초등학교 저학년을 위한 그림 낱말 카드 퀴즈",
        features: "1. **10가지 이상의 동물 및 사물 그림**과 낱말 제시\n2. 그림과 낱말을 드래그 앤 드롭으로 매칭하는 **인터랙티브 퀴즈**\n3. 정답 시 **화려하고 귀여운 폭죽 애니메이션** 및 짧은 칭찬 메시지 표시",
        userRequest: "아이들의 집중력을 높일 수 있는 밝고 귀여운 디자인의 퀴즈 웹앱을 만들어 주세요. 특히 폭죽 애니메이션은 톡톡 튀는 느낌을 원해요.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 아이들의 흥미를 끄는 **알록달록한 파스텔톤**과 **큼직하고 둥근 스타일**이어야 합니다.\n3. 정답/오답 시각적 피드백을 색상과 애니메이션으로 **즉각적**으로 확실하게 줍니다."
    },
    // 수학 관련 예시 추가
    {
        role: "수학 교육 게이미피케이션 전문가",
        topic: "초등 수학 사칙연산 스피드 게임",
        features: "1. 제한 시간 내에 **덧셈, 뺄셈, 곱셈 문제** 풀기\n2. 정답을 맞출 때마다 **콤보 점수**가 올라가고 효과음 재생\n3. 게임 종료 후 **점수 순위** 및 오답 노트 표시",
        userRequest: "수학을 싫어하는 아이들도 재미있게 할 수 있는 스피드 게임을 만들어줘. 게임 오락실 같은 느낌이면 좋겠어.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **네온 사인 효과**가 있는 아케이드 게임 스타일이어야 합니다.\n3. **타이머 기능**이 긴장감을 주도록 시각적으로 강조되어야 합니다."
    },
    {
        role: "데이터 시각화 엔지니어",
        topic: "이차함수 그래프 시뮬레이터",
        features: "1. 사용자로부터 **a, b, c 계수** 입력 (y = ax² + bx + c)\n2. 입력 값에 따라 실시간으로 변하는 **그래프 곡선 시각화**\n3. 꼭짓점과 x절편 좌표 자동 계산 및 표시",
        userRequest: "수학 시간에 그래프의 변화를 눈으로 확인할 수 있는 시뮬레이터를 만들어주세요.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. 그래프는 **Canvas API** 또는 **Recharts**를 사용하여 정교하게 그립니다.\n3. UI는 **공학용 계산기**처럼 깔끔하고 직관적이어야 합니다."
    },
    // 기존 예시들...
    {
        role: "꼼꼼한 교육 콘텐츠 디자이너",
        topic: "중학생을 위한 한국사 연표 맞추기 퀴즈",
        features: "1. **삼국 시대부터 조선 후기까지** 주요 사건 15가지 카드 제공\n2. 카드 순서를 **드래그 앤 드롭**으로 재배치하여 연대순으로 완성\n3. 제출 시 오답 부분만 **빨간색 하이라이트**로 표시하고, **정답 해설** 제공",
        userRequest: "역사 연표를 시각적으로 잘 보여주는 학습 도구를 만들어주세요. 드래그 앤 드롭 기능이 필수입니다.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **한국의 전통미**를 살린 차분하고 고급스러운 스타일이어야 합니다.\n3. 데이터 저장은 필요 없으며, **모든 데이터는 컴포넌트 내부**에 정의합니다."
    },
    {
        role: "과학 전문 시뮬레이션 엔지니어",
        topic: "고등학생 화학 원소 주기율표 탐색기",
        features: "1. **118개 원소**를 포함하는 완전한 주기율표 표시\n2. 원소 이름 클릭 시 **상세 정보 (원자번호, 질량, 전자 배치 등)** 팝업 모달로 표시\n3. **금속, 준금속, 비금속** 등 분류별 색상 구분 및 필터 기능",
        userRequest: "주기율표를 깔끔하게 시각화하고, 원소 정보를 쉽게 찾을 수 있는 탐색기를 만들어 주세요. 화학적 전문성이 느껴지게 해 주세요.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **정보 전달력이 높은** 모던하고 미니멀한 스타일이며, **다크 모드**를 기본으로 제공합니다.\n3. 과학적 사실이 틀리지 않도록 **데이터 정확성**에 주의해야 합니다."
    },
    {
        role: "코딩 교육 멘토",
        topic: "코딩 초보자를 위한 파이썬 기초 문법 퀴즈",
        features: "1. **'if 문', 'for 문', '함수 정의'** 등 핵심 문법 유형별 문제 20개 출제\n2. 문제와 정답 코드를 **코드 블록 형태**로 깔끔하게 제시\n3. 퀴즈 후 **오답 노트 및 상세 해설**과 **예시 코드** 제공",
        userRequest: "코드 블록이 깔끔하게 표시되고, 초보자가 쉽게 따라 할 수 있는 퀴즈 앱을 만들어줘.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 다크 모드를 기본으로 하며, **코드 가독성**을 최우선으로 합니다.\n3. 글꼴은 **모노스페이스(monospace)**를 사용하여 코드의 형태를 명확하게 보여줍니다."
    },
    {
        role: "지리 학습 게임 개발자",
        topic: "지리 학습용 세계 수도 매칭 게임",
        features: "1. **주요 20개국**의 국가 이름과 수도 이름 카드 20쌍 제시\n2. 카드 클릭 시 짝을 맞추는 게임 로직 및 **점수 실시간 카운트**\n3. **세계 지도를 배경 이미지**로 사용하고, 정답률에 따라 지도 색상 변화",
        userRequest: "세계 지도가 보이는 배경에 재미있는 매칭 게임을 넣어주세요. 게임이 흥미진진하게 느껴지도록 부탁합니다.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 지도의 색상을 활용한 **지구적인 느낌의 색감**을 사용합니다.\n3. 게임 로직은 완벽하게 구현되어야 하며, **타일 클릭 애니메이션**이 부드러워야 합니다."
    },
    {
        role: "미니멀리스트 생산성 앱 개발자",
        topic: "데일리 명상 타이머",
        features: "1. **5분, 10분, 20분** 프리셋 버튼 및 **커스텀 시간 설정** 기능\n2. 타이머 종료 30초 전과 종료 시 **부드러운 차임벨 알림음** 재생\n3. **차분한 파동 형태의 배경 애니메이션**을 SVG로 구현",
        userRequest: "사용자가 힐링할 수 있도록 차분하고 방해되지 않는 명상 타이머 앱을 만들어 주세요. 소리는 톤즈(Tone.js)를 사용해 주세요.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **눈이 편안한 단색 또는 부드러운 그라데이션**을 사용합니다.\n3. 애니메이션은 매우 느리고 자연스러워야 하며, 사용자의 **집중을 방해하지 않아야** 합니다."
    },
    {
        role: "홈 바리스타 앱 전문가",
        topic: "나만의 커피 레시피 관리 앱",
        features: "1. 레시피 추가/수정 (원두 종류, 그라인딩 정도, 물 양, 추출 시간, 맛 평가) 입력 필드\n2. 자주 찾는 레시피를 **즐겨찾기**로 등록하여 상단에 고정\n3. **총 레시피 개수** 및 **평균 추출 시간** 카운터",
        userRequest: "나만의 커피 레시피를 깔끔하게 정리하고 관리할 수 있는 앱이 필요해요. 카페 분위기가 느껴졌으면 좋겠어요.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **카페의 따뜻하고 모던한 감성**을 담은 브라운 계열 색상을 사용합니다.\n3. 입력 필드는 직관적이어야 하며, 데이터는 **Local Storage**에 저장합니다. (Firestore 사용 시 Firebase/Firestore 연동 옵션 선택)"
    },
    {
        role: "일정 관리 및 D-Day 전문가",
        topic: "간편한 생일 및 기념일 D-Day 카운터",
        features: "1. 기념일 이름, 날짜, 반복 주기(매년/단발성) 입력\n2. 남은 날짜(D-Day)를 **자동으로 계산**하여 **큰 글씨**로 표시\n3. D-Day가 0이 되면 **화려한 축하 메시지** 및 **색상 변경** 효과 표시",
        userRequest: "기념일을 잊지 않게 도와주는 심플하고 축하 분위기가 느껴지는 카운터 앱을 만들어 주세요.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **숫자가 잘 보이도록 크고 명확한 글꼴**을 사용합니다.\n3. 디자인은 **밝고 축하하는 분위기**여야 하며, 모바일에서 쉽게 볼 수 있도록 합니다."
    },
    {
        role: "피트니스 앱 코치",
        topic: "운동 루틴 기록 및 타이머",
        features: "1. **운동 종목, 세트 수, 휴식 시간** 설정 및 루틴 저장\n2. **운동 시작/정지/리셋** 버튼 및 현재 진행 상태 시각적 표시\n3. **완료된 세트 수**를 게이지바 형태로 표시하여 동기 부여",
        userRequest: "헬스장에서 유용하게 쓸 수 있는 집중력 높은 타이머 앱을 만들어주세요. 버튼이 큼직했으면 좋겠어요.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **에너지가 느껴지는 비비드한 색상** (빨강, 노랑 등)을 포인트로 사용합니다.\n3. 버튼은 **크고 터치하기 쉬워야** 하며, **카운트다운 시 배경 색상**이 바뀝니다."
    },
    {
        role: "회의 효율화 도구 개발자",
        topic: "간단한 팀 회의 투표 도구",
        features: "1. **투표 항목** 및 **선택지** 입력 (최대 5개 항목)\n2. '찬성/반대/보류' 버튼 또는 선택지 클릭\n3. **실시간으로 투표 결과**를 **파이 차트**로 표시하여 시각화",
        userRequest: "회의 시간에 신속하게 의견을 모을 수 있는 투표 앱을 만들어줘. 결과를 그래프로 보여주면 좋겠어.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **신속한 의사결정**을 돕는 깔끔하고 미니멀한 디자인이어야 합니다.\n3. **파이 차트**는 SVG 또는 D3.js(가정)를 사용하여 구현합니다."
    },
    {
        role: "금융 정보 제공 전문가",
        topic: "미니 환율 계산기",
        features: "1. **USD, EUR, JPY, KRW** 등 주요 통화 선택 기능 및 **기준 통화 설정**\n2. 금액 입력 시 **선택된 모든 통화**로 자동 변환하여 표시\n3. **오늘의 환율 변동성**을 작은 화살표 아이콘으로 시각적 표시 (더미 데이터)",
        userRequest: "여행이나 해외 결제 시 사용할 수 있는 간단한 환율 계산기가 필요해요. 신뢰감을 주도록 부탁해요.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **신뢰감을 주는 블루 계열 색상**과 **명확한 폰트**를 사용합니다.\n3. 데이터 필드는 **소수점 자리 수**를 자동으로 표시해야 합니다."
    },
    {
        role: "독서 관리 전문가",
        topic: "책 읽기 진도 기록장",
        features: "1. 책 제목, 총 페이지 수, 현재 읽은 페이지 수 입력\n2. **진행률(%)**을 자동으로 계산하여 **원형 그래프**로 시각화\n3. **오늘의 목표 페이지** 설정 기능 및 달성 시 칭찬 메시지",
        userRequest: "읽고 있는 책의 진도를 시각적으로 확인할 수 있는 앱을 만들어줘. 따뜻한 디자인을 원해요.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **책의 질감**을 살린 따뜻한 베이지색 배경을 사용합니다.\n3. 원형 그래프는 **SVG를 사용하여 구현**하며, 진행률이 시계처럼 채워지는 애니메이션을 적용합니다."
    },
    {
        role: "결정 장애 해결사",
        topic: "랜덤 점심 메뉴 추천기",
        features: "1. 메뉴 리스트 **추가, 수정, 삭제** 기능\n2. '추천받기' 버튼 클릭 시 리스트 중 하나를 **랜덤으로 선택**\n3. 선택된 메뉴를 **큰 글씨와 재미있는 흔들림 애니메이션**으로 표시",
        userRequest: "점심 메뉴 고르기 힘들어요. 재밌는 추천 앱을 만들어주세요!",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **재미있고 활기찬 분위기의 캐주얼한 디자인**이어야 합니다.\n3. 애니메이션은 CSS transform과 transition을 사용합니다."
    },
    {
        role: "감성적인 예술가",
        topic: "랜덤 시(Poem) 생성기",
        features: "1. 주제(예: 커피, 고양이, 밤) 입력 및 **분위기** 선택(예: 쓸쓸함, 희망)\n2. '시 쓰기' 버튼 클릭 시 **5~7줄짜리 짧은 시** 한 편 생성\n3. 생성된 시를 **아름다운 서체**와 **은은한 배경 효과**와 함께 표시",
        userRequest: "입력된 주제로 영감을 주는 짧고 감성적인 시를 만들어주는 앱을 만들어주세요.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **문학적인 느낌의 세련된 디자인**이어야 합니다.\n3. 글꼴은 **명조체나 필기체** 등 감성적인 서체를 사용합니다."
    },
    {
        role: "색채 전문가",
        topic: "컬러 팔레트 생성기",
        features: "1. '생성' 버튼 클릭 시 **색상 이론에 근거한** 5가지 색상의 HEX 코드와 컬러 블록 제시\n2. 각 컬러 블록 클릭 시 해당 HEX 코드가 **클립보드에 복사**\n3. 색상 팔레트의 **이름(예: 'Forest Green')** 함께 표시",
        userRequest: "디자인에 사용할 아름다운 색상 조합을 랜덤으로 보여주는 앱이 필요해요. 복사가 쉬웠으면 좋겠어요.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **극도로 미니멀**하고 색상이 돋보이도록 디자인합니다.\n3. 색상 정보(HEX 코드)는 **명확하게 표시**되어야 합니다."
    },
    {
        role: "여행 예산 관리 전문가",
        topic: "여행 경비 계산 및 분담 앱",
        features: "1. **여행 전체 경비** 입력 및 **참여 인원** 설정\n2. 경비 항목별(숙박, 식비 등) **지출 내역 기록** 및 영수증 사진 첨부(더미)\n3. 참여 인원별 **공평한 정산 금액** 계산 및 **차액 표시**",
        userRequest: "여행 경비를 효율적으로 관리하고 정산해주는 앱을 만들어주세요. 공동 사용자를 위한 기능이 필요해요.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. **Firebase/Firestore 연동**을 통해 실시간 공유 및 저장이 가능해야 합니다. (연동 옵션 필수 선택)\n3. UI는 **데이터 신뢰도**를 높이는 명확하고 기능적인 디자인이어야 합니다."
    },
    // 환경 관련 예시
    {
        role: "환경 교육 게임 개발자",
        topic: "쓰레기 분리수거 교육 게임",
        features: "1. **다양한 종류의 쓰레기 아이콘**을 화면에 랜덤으로 표시\n2. 쓰레기를 올바른 분리수거통(일반, 재활용, 음식물)으로 **드래그 앤 드롭**\n3. 정답 시 초록색 이펙트, 오답 시 빨간색 경고 메시지 표시 및 **올바른 분리 방법 해설** 제공",
        userRequest: "아이들이 분리수거 방법을 재미있게 배울 수 있는 교육용 게임을 만들어주세요. 환경 보호 메시지가 담겨 있으면 좋겠어요.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **자연 친화적인 그린 계열 색상**과 **재활용 심볼**을 활용하여 디자인합니다.\n3. 게임은 **반응형으로 구현**하여 모바일에서도 쉽게 플레이 가능해야 합니다."
    },
    {
        role: "지속 가능한 삶의 전문가",
        topic: "개인 탄소 발자국 추적 앱",
        features: "1. **교통, 식단, 에너지 사용량** 등 항목별 데이터 입력 필드\n2. 입력값을 바탕으로 **월별 탄소 배출량**을 계산 및 시각화\n3. 탄소 배출량 절감을 위한 **개인 맞춤형 팁** 제공 (더미 팁)",
        userRequest: "사용자가 자신의 환경 영향을 쉽게 확인하고 개선할 수 있도록 돕는 앱을 만들어주세요.",
        constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **청결하고 정보 중심적인 스타일**이며, **데이터를 명확하게 보여주는 그래프**가 포함되어야 합니다.\n3. 모든 계산 로직은 **프론트엔드에서 처리**합니다."
    },
    // 기타 예시들 (간략)
    { role: "레트로 스타일 게임 개발자", topic: "픽셀 아트 벽돌 깨기 게임", features: "1. 8비트 스타일의 공, 패들, 벽돌\n2. 점수판 및 최고 점수 기록\n3. 승리 및 게임 오버 화면", userRequest: "고전 아케이드 게임의 느낌을 완벽하게 살린 벽돌 깨기 게임을 만들어줘.", constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. 디자인은 **1980년대 픽셀 아트 스타일**을 충실히 따릅니다.\n3. **캔버스(Canvas)**를 사용하여 게임 화면을 구현합니다." },
    { role: "웹 보안 전문가", topic: "강력한 비밀번호 생성기", features: "1. 길이, 대문자, 소문자, 숫자, 특수문자 포함 여부 선택\n2. '생성' 버튼 클릭 시 안전한 비밀번호 즉시 생성\n3. 생성된 비밀번호 복사 기능 및 **비밀번호 강도 게이지 표시**", userRequest: "안전하고 쉽게 비밀번호를 만들 수 있는 도구를 만들어주세요. 보안성이 강조되어야 해요.", constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **어둡고 전문적인 보안 소프트웨어** 느낌이 나도록 합니다.\n3. 비밀번호 생성 로직은 **랜덤성을 보장**해야 합니다." },
    { role: "언어 학습 툴 제작자", topic: "일본어 히라가나/가타카나 쓰기 연습장", features: "1. 랜덤으로 글자 제시\n2. 사용자가 마우스로 획순에 따라 글자를 따라 쓰는 캔버스 영역\n3. **필순 안내** 및 정답/오답 판별 (단순 비교)", userRequest: "아이들이나 초보 학습자가 일본어 문자를 쉽고 재미있게 익힐 수 있도록 만들어주세요.", constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. **캔버스(Canvas)** 기능을 사용하여 글자 쓰기 영역을 구현합니다.\n3. 디자인은 **일본 전통 종이** 느낌의 배경과 깔끔한 서체를 사용합니다." },
    { role: "요리 레시피 추천 시스템 전문가", topic: "집에 있는 재료로 레시피 추천 받기", features: "1. 사용자가 **현재 보유한 식재료** 목록 입력 (콤마로 구분)\n2. '레시피 검색' 버튼 클릭 시 입력된 재료만으로 만들 수 있는 **3가지 요리 레시피** 제시\n3. 레시피마다 **난이도와 소요 시간** 표시", userRequest: "냉장고에 있는 재료를 활용해서 만들 수 있는 저녁 메뉴를 추천받고 싶어요.", constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. **Google Search Grounding** 옵션이 필수적으로 선택되어야 합니다.\n3. UI는 **주방의 깨끗하고 밝은 분위기**를 반영해야 합니다." },
    { role: "육아 도우미 앱 전문가", topic: "아기 수면 패턴 추적기", features: "1. '잠자기 시작', '잠에서 깨기' 버튼 및 시간 기록\n2. **총 수면 시간** 자동 계산 및 **일주일 수면 그래프** 시각화\n3. 부모님을 위한 **수면 패턴 분석 팁** 제공 (더미 팁)", userRequest: "우리 아기의 수면 시간을 정확하게 기록하고 분석해주는 간단한 앱을 만들어줘. 데이터 시각화가 중요해.", constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **파란색과 흰색**을 활용한 깨끗하고 안정적인 디자인이어야 합니다.\n3. **차트 라이브러리 (예: Recharts)** 사용을 가정하고 코드에 포함합니다." },
    { role: "미술 작품 감상 안내자", topic: "명화 랜덤 갤러리", features: "1. '다음 작품' 버튼 클릭 시 **유명 명화 이미지** (더미 URL) 표시\n2. 작품명, 작가, 제작 연도, **간단한 해설** (LLM 요청)\n3. 작품 해설 요청 시 **Google Search Grounding** 사용", userRequest: "랜덤으로 명화를 보여주고, 그 작품에 대한 흥미로운 해설을 제공하는 앱을 만들어 주세요. 예술적인 느낌을 원해요.", constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. **Google Search Grounding** 옵션이 필수적으로 선택되어야 합니다.\n3. UI는 **미술관의 차분하고 고급스러운 분위기**를 담아야 합니다." },
    { role: "이모티콘 디자이너", topic: "나만의 텍스트 이모티콘 조합기", features: "1. **눈, 입, 팔 등 부위별 텍스트 요소** 선택 박스 (예: 눈: ^, o, T)\n2. 선택에 따라 **실시간으로 이모티콘이 조합**되어 표시\n3. 완성된 이모티콘을 **클릭하여 복사**하는 기능", userRequest: "재미있고 독특한 텍스트 이모티콘을 쉽게 만들 수 있는 앱을 만들어줘.", constraint: "1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. UI는 **팝하고 유쾌한 분위기**의 밝은 색상을 사용합니다.\n3. 이모티콘은 **모노스페이스 폰트**로 명확하게 표시되어야 합니다." },
    // ... 나머지 50개 예시 유지
];

// 첫 번째 예시(교육 관련)를 초기 상태로 설정
const initialPreset = examplePresets[0];

const App = () => {
    // 1. Core Prompt States
    const [role, setRole] = useState(initialPreset.role);
    const [topic, setTopic] = useState(initialPreset.topic);
    const [features, setFeatures] = useState(initialPreset.features);
    const [constraint, setConstraint] = useState(initialPreset.constraint);
    const [userRequest, setUserRequest] = useState(initialPreset.userRequest);

    // 2. Feature Toggles
    const [isPersistenceEnabled, setIsPersistenceEnabled] = useState(false);
    const [isGoogleSheetsSelected, setIsGoogleSheetsSelected] = useState(false);
    const [isGroundingSelected, setIsGroundingSelected] = useState(false);

    // 3. Search State
    const [searchTerm, setSearchTerm] = useState('');

    // 4. Output State (Copy Feedback)
    const [copySuccess, setCopySuccess] = useState("");

    /**
     * Helper to generate a dynamic but concrete example for unknown search terms.
     * Uses template randomization to create specific-sounding apps.
     */
    const generateDynamicExample = (term) => {
        const templates = [
            {
                type: "Quiz",
                roleSuffix: "교육 및 퀴즈 전문가",
                topicSuffix: "지식 마스터 퀴즈 앱",
                featureTemplates: [
                    `1. ${term} 관련 **OX 퀴즈 및 4지 선다형 문제** 랜덤 출제`,
                    `2. 정답 시 점수 획득 및 **${term} 관련 재미있는 상식** 팝업 표시`,
                    `3. 최종 점수에 따라 '초보', '전문가', '마스터' 등 **등급 부여 및 뱃지** 제공`
                ],
                requestSuffix: "관련 지식을 테스트할 수 있는 재미있는 퀴즈 앱을 만들어주세요.",
                constraintSuffix: "퀴즈 UI는 밝고 경쾌해야 하며, 정답/오답 처리가 명확해야 합니다."
            },
            {
                type: "Dashboard",
                roleSuffix: "데이터 분석 및 시각화 전문가",
                topicSuffix: "실시간 정보 대시보드",
                featureTemplates: [
                    `1. ${term} 관련 **핵심 지표(KPI)**를 카드 형태로 요약 표시`,
                    `2. 데이터 변화 추이를 보여주는 **라인 차트 및 바 차트** 시각화`,
                    `3. **Google Search Grounding**을 통해 ${term} 최신 뉴스 피드 표시`
                ],
                requestSuffix: "관련 데이터를 한눈에 파악할 수 있는 전문적인 대시보드를 만들어주세요.",
                constraintSuffix: "UI는 신뢰감을 주는 다크 모드 또는 클린 스타일이어야 하며, 차트 라이브러리를 활용하세요."
            },
            {
                type: "Guide",
                roleSuffix: "정보 큐레이션 및 가이드 전문가",
                topicSuffix: "입문자를 위한 핵심 가이드북",
                featureTemplates: [
                    `1. ${term}의 **기초 개념, 역사, 중요성**을 탭별로 정리`,
                    `2. 초보자가 자주 묻는 질문(FAQ)에 대한 **아코디언 UI** 제공`,
                    `3. ${term} 학습을 위한 **체크리스트 및 로드맵** 시각화`
                ],
                requestSuffix: "초보자가 쉽게 이해할 수 있는 친절한 가이드 앱을 만들어주세요.",
                constraintSuffix: "가독성이 좋은 타이포그래피를 사용하고, 정보 구조가 직관적이어야 합니다."
            },
            {
                type: "Simulator",
                roleSuffix: "시뮬레이션 및 인터랙티브 개발자",
                topicSuffix: "가상 체험 시뮬레이터",
                featureTemplates: [
                    `1. ${term}의 핵심 원리를 체험할 수 있는 **슬라이더 조절 기능**`,
                    `2. 조절 값에 따라 실시간으로 변하는 **시각적 결과물 (Canvas/SVG)**`,
                    `3. 결과값을 저장하거나 공유할 수 있는 **스냅샷 기능**`
                ],
                requestSuffix: "원리를 직접 조작하며 배울 수 있는 시뮬레이터를 만들어주세요.",
                constraintSuffix: "반응형 인터랙션이 매끄러워야 하며, 사용자의 조작에 즉각 반응해야 합니다."
            }
        ];

        // Randomly select a concrete template type
        const template = templates[Math.floor(Math.random() * templates.length)];

        return {
            role: `${term} ${template.roleSuffix}`,
            topic: `${term} ${template.topicSuffix}`,
            features: template.featureTemplates.join('\n'),
            userRequest: `${term} ${template.requestSuffix}`,
            constraint: `1. 모든 코드는 하나의 .jsx 파일에 포함되어야 합니다.\n2. ${template.constraintSuffix}\n3. ${term}의 특성을 반영한 아이콘이나 테마 색상을 적용하세요.`
        };
    };

    /**
     * Handles the "Refresh Example" button click (with or without search).
     */
    const handleRefreshExample = useCallback(() => {
        let availablePresets = [];
        const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();

        if (lowerCaseSearchTerm !== '') {
            // Search logic: Filter presets that contain the search term in any field (case-insensitive)
            availablePresets = examplePresets.filter(preset =>
                preset.role.toLowerCase().includes(lowerCaseSearchTerm) ||
                preset.topic.toLowerCase().includes(lowerCaseSearchTerm) ||
                preset.features.toLowerCase().includes(lowerCaseSearchTerm) ||
                preset.constraint.toLowerCase().includes(lowerCaseSearchTerm) ||
                preset.userRequest.toLowerCase().includes(lowerCaseSearchTerm)
            );
        } else {
            // No search term: Use all presets (excluding the initial default example)
            availablePresets = examplePresets.slice(1);
        }

        let selectedExample = null;

        if (availablePresets.length > 0) {
            // Case 1: Found matching presets, pick a random one
            const randomIndex = Math.floor(Math.random() * availablePresets.length);
            selectedExample = availablePresets[randomIndex];
            setCopySuccess(lowerCaseSearchTerm ? `"${lowerCaseSearchTerm}" 관련 예시 발견! ✨` : "새로운 랜덤 예시 로드 ✨");

        } else if (lowerCaseSearchTerm !== '') {
            // Case 2: No match found, dynamically generate a CONCRETE example using templates
            selectedExample = generateDynamicExample(searchTerm); // Use the original search term case for display
            setCopySuccess(`"${searchTerm}"에 대한 새로운 예시 생성! 🚀`);
        } else {
            // Case 3: Random click, but list is empty (unlikely)
            setCopySuccess("더 이상 새로운 예시가 없습니다 😢");
            setTimeout(() => setCopySuccess(""), 2000);
            return;
        }

        // Update all input fields
        if (selectedExample) {
            setRole(selectedExample.role);
            setTopic(selectedExample.topic);
            setFeatures(selectedExample.features);
            setUserRequest(selectedExample.userRequest);
            setConstraint(selectedExample.constraint);

            // Reset toggles
            setIsGoogleSheetsSelected(false);
            setIsPersistenceEnabled(false);
            setIsGroundingSelected(false);
            
            setTimeout(() => setCopySuccess(""), 2000); // Clear notification
        }

    }, [searchTerm]);


    /**
     * Automatically generates the final prompt string whenever inputs change.
     */
    const generatedPrompt = useMemo(() => {
        // Determine Output String based on Google Sheets selection
        const outputString = isGoogleSheetsSelected 
            ? "Google Apps Script(GAS) 프로젝트를 위한 code.gs (서버 측) 및 index.html (클라이언트 측) 파일 코드"
            : "요구 사항을 모두 반영한 주석이 잘 달린 React JSX 단일 파일 코드";

        // Dynamic Constraint Injection based on Toggles
        let dynamicConstraints = constraint.split('\n').filter(line => line.trim() !== '');

        // Persistence Constraint (Firebase)
        if (isPersistenceEnabled) {
            dynamicConstraints.push("데이터 저장을 위해 Firebase Firestore를 사용하여 실시간 동기화 기능을 구현해야 합니다.");
            dynamicConstraints.push("Firebase 초기화 및 인증 코드가 반드시 포함되어야 합니다.");
        }
        
        // Google Sheets Constraint
        if (isGoogleSheetsSelected) {
            dynamicConstraints.push("Google Sheets를 데이터베이스로 사용해야 합니다.");
            dynamicConstraints.push("서버 측 로직인 doGet(), doPost() 등이 포함된 `code.gs` 파일을 작성하세요.");
            dynamicConstraints.push("클라이언트 측 UI인 `index.html` 파일을 작성하고, `google.script.run`을 사용하여 서버와 통신하는 로직을 구현하세요.");
            dynamicConstraints.push("CSS와 JavaScript는 `index.html` 내부에 포함시켜 주세요.");
        }

        // Grounding Constraint
        if (isGroundingSelected) {
            dynamicConstraints.push("Google Search Grounding API를 호출하여 최신 정보를 포함하는 로직을 구현해야 합니다.");
        }

        const constraintList = dynamicConstraints.map(line => `- ${line.trim()}`).join('\n');

        return `
역할 (Role): ${role}
주제 (Topic): ${topic}
원하는 기능 (Features): ${features}
출력 (Output): ${outputString}
제약조건 (Constraint):
${constraintList}

---
사용자 요청 (User Request):
${userRequest}
`.trim();
    }, [role, topic, features, constraint, userRequest, isPersistenceEnabled, isGoogleSheetsSelected, isGroundingSelected]);

    /**
     * Copies the generated prompt to the clipboard.
     * Updated to use document.execCommand for better compatibility in iframe environments.
     */
    const copyToClipboard = () => {
        const textArea = document.createElement("textarea");
        textArea.value = generatedPrompt;
        
        // Ensure the textarea is not visible but part of the DOM
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            if (successful) {
                setCopySuccess("복사 완료! ✨");
                setTimeout(() => setCopySuccess(""), 2000);
            } else {
                setCopySuccess("복사 실패 😢");
            }
        } catch (err) {
            console.error('Copy failed', err);
            setCopySuccess("복사 실패 😢");
        }

        document.body.removeChild(textArea);
    };

    // Component for reusable input fields
    const PromptInputField = ({ title, value, onChange, placeholder, isMultiLine = false }) => (
        <div className="mb-4">
            <label className="block text-sm font-semibold text-pink-600 mb-1">
                {title}
            </label>
            {isMultiLine ? (
                <textarea
                    className="w-full p-3 border border-pink-200 rounded-xl focus:ring-pink-300 focus:border-pink-400 text-sm shadow-sm transition duration-150 ease-in-out h-24 bg-pink-50 resize-none"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    type="text"
                    className="w-full p-3 border border-pink-200 rounded-xl focus:ring-pink-300 focus:border-pink-400 text-sm shadow-sm transition duration-150 ease-in-out bg-pink-50"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                />
            )}
        </div>
    );

    // Component for checkbox feature toggles
    const FeatureCheckbox = ({ title, checked, onChange, icon, color = "green" }) => {
        const baseColor = color === "pink" ? "text-pink-600 border-pink-300" : color === "purple" ? "text-purple-600 border-purple-300" : "text-green-600 border-green-300";
        const bgColor = checked ? (color === "pink" ? "bg-pink-400" : color === "purple" ? "bg-purple-400" : "bg-green-400") : "bg-gray-100";
        
        return (
            <div 
                className={`flex items-center p-3 rounded-xl border ${baseColor.replace('text-', 'border-')} cursor-pointer transition duration-200 hover:shadow-md ${bgColor === "bg-gray-100" ? "hover:bg-gray-50" : ""}`}
                onClick={() => onChange(!checked)}
            >
                <div className={`flex items-center justify-center w-6 h-6 rounded-full mr-3 text-white ${bgColor}`}>
                    {icon}
                </div>
                <label className={`text-sm font-semibold ${baseColor} flex-grow`}>
                    {title}
                </label>
                <div className={`w-5 h-5 rounded-full border-2 ${baseColor} flex items-center justify-center transition duration-200 ${checked ? bgColor.replace('-400', '-600') + ' border-white' : 'border-gray-400'}`}>
                    {checked && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                </div>
            </div>
        );
    };

    return (
        <div className="p-4 sm:p-6 md:p-10 min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 font-s-core-dream">
            <script src="https://cdn.tailwindcss.com"></script>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=S-Core+Dream:wght@400;600;700&display=swap');
                body { font-family: 'S-Core Dream', sans-serif; }
                .font-s-core-dream { font-family: 'S-Core Dream', sans-serif; }
                .prompt-area {
                    white-space: pre-wrap;
                    word-wrap: break-word;
                    font-family: 'S-Core Dream', sans-serif;
                    font-weight: 400; /* 기본 폰트 굵기 */
                }
                h1, h2, .font-semibold, .font-bold, button {
                    font-weight: 600; /* '볼드 6' 느낌 */
                }
            `}</style>
            
            <header className="mb-8 text-center">
                <h1 className="text-3xl sm:text-4xl font-s-core-dream font-bold text-pink-700 mb-2 drop-shadow-md">
                    ✨ 웹앱 프롬프트 생성기 ✨
                </h1>
                <p className="text-purple-600 text-lg">
                    ✨ 프롬프트로 특별한 웹앱을 만들어보세요! ✨
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* 1. Prompt Input Section */}
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-pink-200 transform transition duration-300 ease-in-out">
                    <div className="flex justify-between items-center mb-4 pb-2 border-b-2 border-pink-100">
                        <h2 className="text-xl font-s-core-dream font-bold text-pink-700">
                            1. 🎀 프롬프트 요소를 정의해요
                        </h2>
                        <button
                            onClick={() => {
                                setSearchTerm(''); // 검색어 초기화
                                handleRefreshExample(); // 예시 새로고침 실행
                            }}
                            className="px-3 py-1 text-sm bg-pink-100 hover:bg-pink-200 text-pink-700 rounded-full transition font-semibold flex items-center"
                        >
                             🎲 다른 예시 보기
                        </button>
                    </div>
                    
                    <PromptInputField 
                        title="역할 (Role)" 
                        value={role} 
                        onChange={setRole} 
                        placeholder="예: 세계 최고의 귀여운 교육 전문가" 
                    />
                    
                    <PromptInputField 
                        title="주제 (Topic)" 
                        value={topic} 
                        onChange={setTopic} 
                        placeholder="예: 영어 단어 퀴즈 앱, 모닝 루틴 관리 앱" 
                    />
                    
                    <PromptInputField 
                        title="원하는 기능 (Features)" 
                        value={features} 
                        onChange={setFeatures} 
                        placeholder="예: 할 일 목록 추가, 타이머 기능, 점수 저장하기 (줄바꿈으로 구분)" 
                        isMultiLine={true}
                    />
                    
                    <PromptInputField 
                        title="제약조건 (Constraint)" 
                        value={constraint} 
                        onChange={setConstraint} 
                        placeholder="예: 500단어 이내로 응답해야 합니다." 
                        isMultiLine={true}
                    />

                    {/* Feature Toggles Section */}
                    <h3 className="text-md font-bold text-purple-700 mt-6 mb-3 border-t pt-3 border-purple-100">
                        2. 🛠️ 웹앱 연동/선택 요소 (Optional)
                    </h3>
                    <div className="space-y-3">
                        <FeatureCheckbox
                            title="데이터 저장 연동 (Firebase/Firestore)"
                            checked={isPersistenceEnabled}
                            onChange={(checked) => {
                                setIsPersistenceEnabled(checked);
                                if (checked) setIsGoogleSheetsSelected(false); // Exclusive toggle
                            }}
                            icon="💾"
                            color="purple"
                        />
                        <FeatureCheckbox
                            title="Google Sheets 연동 (GAS code.gs + index.html)" 
                            checked={isGoogleSheetsSelected}
                            onChange={(checked) => {
                                setIsGoogleSheetsSelected(checked);
                                if (checked) setIsPersistenceEnabled(false); // Exclusive toggle
                            }}
                            icon="📊" 
                            color="green" 
                        />
                        <FeatureCheckbox
                            title="Grounding (검색 연동)"
                            checked={isGroundingSelected}
                            onChange={setIsGroundingSelected}
                            icon="🔍"
                            color="pink"
                        />
                    </div>

                    <PromptInputField 
                        title="사용자 요청 (User Request)" 
                        value={userRequest} 
                        onChange={setUserRequest} 
                        placeholder="LLM에게 최종적으로 요청할 내용을 여기에 귀엽게 작성해 주세요!" 
                        isMultiLine={true}
                    />

                    {/* Search Section */}
                    <div className="mt-6 pt-6 border-t border-pink-100 flex flex-col space-y-3">
                        <input
                            type="text"
                            className="w-full p-3 border border-pink-200 rounded-xl focus:ring-pink-300 focus:border-pink-400 text-sm shadow-sm transition duration-150 ease-in-out bg-pink-50"
                            placeholder="특정 분야를 검색해보세요! (예: '환경', '교육', '게임')"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            onClick={handleRefreshExample}
                            className="w-full p-3 text-white bg-purple-500 hover:bg-purple-600 rounded-xl transition duration-200 font-bold shadow-md flex items-center justify-center"
                        >
                            {searchTerm.trim() !== '' ? (
                                <>
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    {searchTerm} 분야 검색 후 보기
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                    🎲 다른 예시 보기 (전체)
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* 3. Output Section */}
                <div className="space-y-8">
                    {/* Generated Prompt */}
                    <div className="bg-white p-6 rounded-3xl shadow-xl border border-purple-200 transform transition duration-300 ease-in-out sticky top-6">
                        <div className="flex justify-between items-center mb-4 pb-2 border-b-2 border-purple-100">
                            <h2 className="text-xl font-s-core-dream font-bold text-purple-700">
                                3. 📝 생성된 프롬프트 📝
                            </h2>
                            <button
                                onClick={copyToClipboard}
                                className="px-4 py-1.5 text-xs sm:text-sm bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-full transition font-semibold flex items-center"
                            >
                                {copySuccess ? copySuccess : (
                                    <>
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                                        복사하기
                                    </>
                                )}
                            </button>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-2xl border border-purple-200 min-h-[400px] overflow-auto">
                            <p className="prompt-area text-sm text-gray-800">
                                {generatedPrompt}
                            </p>
                        </div>
                        <p className="mt-4 text-center text-sm text-gray-500">
                            👆 위의 텍스트를 복사해서 AI에게 바로 물어보세요!
                        </p>
                    </div>
                </div>
            </div>
            
            <footer className="mt-10 pt-6 border-t border-purple-200 text-center text-sm text-purple-500">
                <p>🎀 프롬프트 공식 기반 웹앱 생성기 (Powered by Soohyun) 🎀</p>
            </footer>
        </div>
    );
};

export default App;
