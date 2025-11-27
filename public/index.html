<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Sky Cleaner: Save the Earth</title>
    <style>
        /* 1. 기본 스타일 설정 */
        body {
            margin: 0;
            padding: 0;
            overflow: hidden; /* 스크롤 방지 */
            background-color: #333;
            font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
            touch-action: none; /* 모바일 터치 시 스크롤 등 기본 동작 방지 */
        }

        /* 2. 게임 캔버스 스타일 */
        canvas {
            display: block;
            width: 100vw;
            height: 100vh;
        }

        /* 3. UI 오버레이 (시작 화면, 게임 오버/승리 화면) */
        #ui-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            z-index: 10;
            transition: opacity 0.3s;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 10px;
            text-shadow: 0 0 10px #00BFFF;
        }

        p {
            font-size: 1.2rem;
            margin-bottom: 30px;
            text-align: center;
            line-height: 1.6;
        }

        button {
            padding: 15px 40px;
            font-size: 1.5rem;
            background: #4CAF50;
            color: white;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            transition: transform 0.2s, background 0.2s;
        }

        button:hover {
            transform: scale(1.05);
            background: #45a049;
        }

        /* 4. 게임 중 숨김 처리 클래스 */
        .hidden {
            opacity: 0;
            pointer-events: none;
        }
    </style>
</head>
<body>

    <!-- UI 레이어 -->
    <div id="ui-layer">
        <h1 id="title-text">Sky Cleaner</h1>
        <p id="desc-text">
            제한 시간 <strong>60초</strong> 안에<br>
            <strong>1000점</strong>을 달성하여 지구를 구하세요!<br>
            <span style="font-size: 0.9rem; color: #aaa;">새(🐦)를 움직여 오염물질을 제거하세요.</span>
        </p>
        <button id="start-btn">게임 시작</button>
    </div>

    <!-- 메인 캔버스 -->
    <canvas id="gameCanvas"></canvas>

    <script>
        /**
         * [업데이트된 게임 로직]
         * 1. 목표: 1000점 달성 시 승리 (Mission Clear).
         * 2. 제한 시간: 60초 카운트다운. 0초 되면 실패.
         * 3. 피드백: 오염 물질 제거 시 '환경 캠페인 단어'가 플로팅 텍스트로 등장.
         */

        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        const uiLayer = document.getElementById('ui-layer');
        const titleText = document.getElementById('title-text');
        const descText = document.getElementById('desc-text');
        const startBtn = document.getElementById('start-btn');

        // --- 게임 전역 변수 ---
        let width, height;
        let animationId;
        
        // 상태 변수
        let score = 0;
        const TARGET_SCORE = 1000; // 목표 점수
        let earthHealth = 100;
        let maxHealth = 100;
        
        let timeLeft = 60; // 제한 시간 (초)
        const GAME_DURATION = 60; 
        
        let gameActive = false;
        let frame = 0;
        let difficultyMultiplier = 1;

        // 마우스/터치 위치 저장
        const mouse = { x: 0, y: 0 };

        // 게임 객체 배열
        let pollutants = [];
        let particles = [];
        let clouds = []; 
        let floatingTexts = []; // 캠페인 메시지용

        // 오염 물질 타입 정의
        const POLLUTANT_TYPES = [
            { icon: '💨', score: 10, speed: 1.2, size: 30 },
            { icon: '🗑️', score: 20, speed: 1.0, size: 25 },
            { icon: '🛢️', score: 30, speed: 0.8, size: 28 },
            { icon: '🥤', score: 15, speed: 1.1, size: 20 },
            { icon: '🦠', score: 50, speed: 1.5, size: 22 }
        ];

        // 환경 캠페인 메시지 목록 (10개)
        const CAMPAIGN_MESSAGES = [
            "분리배출 철저!", "텀블러 사용!", "장바구니 애용!", 
            "대중교통 이용!", "전기 절약!", "일회용품 줄이기!", 
            "물 아껴쓰기!", "나무 심기!", "친환경 소비!", "음식물 쓰레기 줄이기!"
        ];

        // --- 1. 유틸리티 함수 ---
        
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        function randomRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        // --- 2. 클래스 정의 ---

        // 플레이어 (새)
        class Bird {
            constructor() {
                this.x = width / 2;
                this.y = height / 2;
                this.size = 40;
                this.angle = 0;
            }

            update() {
                // 부드러운 이동 (Lerp)
                this.x += (mouse.x - this.x) * 0.2;
                this.y += (mouse.y - this.y) * 0.2;

                // 회전 효과
                const dx = mouse.x - this.x;
                this.angle = Math.max(Math.min(dx * 0.005, 0.5), -0.5);
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle);
                ctx.font = `${this.size}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.scale(-1, 1); 
                ctx.fillText('🐦', 0, 0);
                ctx.restore();
            }
        }

        // 오염 물질 (적)
        class Pollutant {
            constructor() {
                const type = POLLUTANT_TYPES[Math.floor(Math.random() * POLLUTANT_TYPES.length)];
                this.icon = type.icon;
                this.scoreValue = type.score;
                this.radius = type.size;
                this.speed = randomRange(3, 6) * type.speed * difficultyMultiplier;
                
                this.x = width + 50; 
                this.y = randomRange(50, height - 50);
                this.angle = 0;
                this.spinSpeed = randomRange(-0.05, 0.05);
            }

            update() {
                this.x -= this.speed;
                this.angle += this.spinSpeed;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle);
                ctx.font = `${this.radius * 1.5}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(this.icon, 0, 0);
                ctx.restore();
            }
        }

        // 파티클 (폭발 효과)
        class Particle {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                this.vx = randomRange(-3, 3);
                this.vy = randomRange(-3, 3);
                this.life = 1.0;
                this.color = color;
                this.size = randomRange(2, 5);
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.life -= 0.02;
            }
            draw() {
                ctx.globalAlpha = Math.max(0, this.life);
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1.0;
            }
        }

        // 플로팅 텍스트 (캠페인 메시지)
        class FloatingText {
            constructor(x, y, text) {
                this.x = x;
                this.y = y;
                this.text = text;
                this.life = 1.0;
                this.vy = -1.5; // 위로 떠오름
            }
            update() {
                this.y += this.vy;
                this.life -= 0.015; // 천천히 사라짐
            }
            draw() {
                ctx.save();
                ctx.globalAlpha = Math.max(0, this.life);
                ctx.fillStyle = '#FFFFFF';
                ctx.shadowColor = 'black';
                ctx.shadowBlur = 4;
                ctx.font = 'bold 20px "Apple SD Gothic Neo", sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(this.text, this.x, this.y);
                ctx.restore();
            }
        }

        // 배경 구름
        class Cloud {
            constructor() {
                this.x = randomRange(0, width);
                this.y = randomRange(0, height);
                this.speed = randomRange(0.2, 0.8);
                this.size = randomRange(30, 80);
                this.opacity = randomRange(0.2, 0.5);
            }
            update() {
                this.x -= this.speed;
                if (this.x < -100) this.x = width + 100;
            }
            draw() {
                ctx.globalAlpha = this.opacity;
                ctx.font = `${this.size}px Arial`;
                ctx.fillStyle = '#fff';
                ctx.fillText('☁️', this.x, this.y);
                ctx.globalAlpha = 1.0;
            }
        }

        const player = new Bird();

        // --- 3. 이벤트 리스너 ---

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        window.addEventListener('touchmove', (e) => {
            e.preventDefault();
            mouse.x = e.touches[0].clientX;
            mouse.y = e.touches[0].clientY;
        }, { passive: false });

        startBtn.addEventListener('click', startGame);

        // --- 4. 게임 핵심 로직 ---

        function startGame() {
            score = 0;
            earthHealth = 100;
            timeLeft = GAME_DURATION;
            difficultyMultiplier = 1;
            
            pollutants = [];
            particles = [];
            floatingTexts = [];
            
            gameActive = true;
            frame = 0;
            
            uiLayer.classList.add('hidden');
            
            clouds = [];
            for(let i=0; i<10; i++) clouds.push(new Cloud());

            mouse.x = width / 2;
            mouse.y = height / 2;
            player.x = width / 2;
            player.y = height / 2;

            loop();
        }

        function gameOver(reason) {
            gameActive = false;
            cancelAnimationFrame(animationId);
            
            if (reason === 'win') {
                titleText.innerHTML = "MISSION CLEAR!";
                titleText.style.color = "#4CAF50";
                descText.innerHTML = `축하합니다! <strong>${score}</strong>점을 달성했습니다.<br>당신 덕분에 지구가 깨끗해졌어요! 🌍💙`;
            } else if (reason === 'timeout') {
                titleText.innerHTML = "TIME OVER";
                titleText.style.color = "#FF9800";
                descText.innerHTML = `시간이 다 되었습니다.<br>최종 점수: <strong>${score}</strong>점<br>조금 더 분발해서 지구를 구해주세요!`;
            } else { // health 0
                titleText.innerHTML = "GAME OVER";
                titleText.style.color = "#ff4444";
                descText.innerHTML = `지구가 너무 많이 오염되었습니다...<br>최종 점수: <strong>${score}</strong>점<br>다시 도전해주세요.`;
            }

            startBtn.textContent = "다시 시작";
            uiLayer.classList.remove('hidden');
        }

        function createExplosion(x, y) {
            const colors = ['#FFD700', '#FFFFFF', '#00BFFF', '#FF69B4'];
            for (let i = 0; i < 8; i++) {
                particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)]));
            }
        }

        function createCampaignText(x, y) {
            const text = CAMPAIGN_MESSAGES[Math.floor(Math.random() * CAMPAIGN_MESSAGES.length)];
            // 시야를 가리지 않게 약간 위쪽에 생성
            floatingTexts.push(new FloatingText(x, y - 30, text));
        }

        function checkCollision(obj1, obj2) {
            const dx = obj1.x - obj2.x;
            const dy = obj1.y - obj2.y;
            const distance = Math.sqrt(dx*dx + dy*dy);
            return distance < (obj1.size/2 + obj2.radius/1.5);
        }

        function drawBackground() {
            // 점수에 따라 배경색 변화 (0 ~ 1000점)
            let progress = Math.min(score / TARGET_SCORE, 1);
            
            // HSL: Hue 0(Gray) -> 200(Sky Blue), Saturation 증가, Lightness 증가
            const h = progress * 200; 
            const s = progress * 80;
            const l = 30 + (progress * 40);
            
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, `hsl(${h}, ${s}%, ${l + 10}%)`);
            gradient.addColorStop(1, `hsl(${h}, ${s}%, ${l}%)`);
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        }

        function drawUI() {
            // 1. 점수 및 목표
            ctx.fillStyle = 'white';
            ctx.textAlign = 'left';
            
            // 점수 표시
            ctx.font = 'bold 24px sans-serif';
            ctx.fillText(`SCORE: ${score} / ${TARGET_SCORE}`, 20, 40);

            // 시간 표시 (중앙 상단)
            ctx.textAlign = 'center';
            ctx.font = 'bold 32px sans-serif';
            if (timeLeft <= 10) ctx.fillStyle = '#ff4444'; // 10초 이하 빨간색 경고
            else ctx.fillStyle = 'white';
            ctx.fillText(`${Math.ceil(timeLeft)}s`, width/2, 50);

            // 2. 지구 체력 게이지
            ctx.textAlign = 'left';
            ctx.fillStyle = 'rgba(0,0,0,0.5)';
            ctx.fillRect(20, 60, 200, 20); // 배경

            let healthColor = '#4CAF50';
            if (earthHealth < 30) healthColor = '#F44336';
            else if (earthHealth < 60) healthColor = '#FF9800';

            ctx.fillStyle = healthColor;
            ctx.fillRect(22, 62, (196 * (earthHealth / maxHealth)), 16);
            
            ctx.fillStyle = 'white';
            ctx.font = '14px sans-serif';
            ctx.fillText(`EARTH HEALTH`, 230, 75);
        }

        // --- 5. 메인 게임 루프 ---

        function loop() {
            if (!gameActive) return;

            // 시간 감소 (약 60FPS 기준)
            timeLeft -= 1/60;
            if (timeLeft <= 0) {
                gameOver('timeout');
                return;
            }

            // 승리 조건 체크
            if (score >= TARGET_SCORE) {
                gameOver('win');
                return;
            }

            ctx.clearRect(0, 0, width, height);
            drawBackground();

            // 배경 구름
            clouds.forEach(cloud => {
                cloud.update();
                cloud.draw();
            });

            // 플레이어
            player.update();
            player.draw();

            // 오염 물질 생성 (점수가 높을수록 더 자주 등장)
            let spawnRate = Math.max(15, 60 - Math.floor(score / 20)); 
            if (frame % spawnRate === 0) {
                pollutants.push(new Pollutant());
            }
            
            // 난이도 증가
            if (frame % 300 === 0) difficultyMultiplier += 0.05;

            // 오염 물질 처리
            for (let i = pollutants.length - 1; i >= 0; i--) {
                let p = pollutants[i];
                p.update();
                p.draw();

                // 충돌
                if (checkCollision(player, p)) {
                    score += p.scoreValue;
                    earthHealth = Math.min(earthHealth + 2, maxHealth);
                    
                    createExplosion(p.x, p.y);
                    createCampaignText(p.x, p.y); // 캠페인 메시지 표시
                    
                    pollutants.splice(i, 1);
                    continue;
                }

                // 화면 밖 (놓침)
                if (p.x < -50) {
                    earthHealth -= 10;
                    pollutants.splice(i, 1);
                }
            }

            // 파티클 처리
            for (let i = particles.length - 1; i >= 0; i--) {
                let pt = particles[i];
                pt.update();
                pt.draw();
                if (pt.life <= 0) particles.splice(i, 1);
            }

            // 플로팅 텍스트 처리 (캠페인 메시지)
            for (let i = floatingTexts.length - 1; i >= 0; i--) {
                let ft = floatingTexts[i];
                ft.update();
                ft.draw();
                if (ft.life <= 0) floatingTexts.splice(i, 1);
            }

            drawUI();

            if (earthHealth <= 0) {
                gameOver('health');
                return;
            }

            frame++;
            animationId = requestAnimationFrame(loop);
        }

    </script>
</body>
</html>
