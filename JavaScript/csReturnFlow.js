/* csReturnFlow.js - 退換貨流程 */

console.log("JS退換貨流程載入成功");

const returnFlowBtn = document.getElementById('returnFlowBtn');
const mainContent = document.getElementById('mainContent');

returnFlowBtn.addEventListener('click', async () => {
    try {
        // 載入 HTML
        const response = await fetch('csReturnFlow.html');
        if (!response.ok) throw new Error('載入失敗');
        mainContent.innerHTML = await response.text();

        // 動態載入 CSS（避免重複）
        if (!document.getElementById('csReturnFlowCss')) {
            const link = document.createElement('link');
            link.id = 'csReturnFlowCss';
            link.rel = 'stylesheet';
            link.href = './CSS/csReturnFlow.css';
            document.head.appendChild(link);
        }

        // 初始化流程互動
        initReturnFlow();

    } catch (error) {
        console.error('載入 csReturnFlow.html 失敗:', error);
        mainContent.innerHTML = '<p>頁面載入失敗，請稍後再試。</p>';
    }
});

// ===== 初始化退換貨流程 =====
function initReturnFlow() {
    const stepCards = document.querySelectorAll('[data-cs-step]');
    const actionCards = document.querySelectorAll('[data-cs-action]');
    const logisticsCards = document.querySelectorAll('[data-cs-logistics]');
    const arrowAB = document.getElementById('csArrowAB');
    const arrowBC = document.getElementById('csArrowBC');
    const actionBranch = document.getElementById('csActionBranch');
    const logisticsBranch = document.getElementById('csLogisticsBranch');

    // 主流程 A → B → C
    stepCards.forEach(card => {
        card.addEventListener('click', () => {
            const step = card.dataset.csStep;
            if (step === 'A') {
                arrowAB.classList.add('csShow');
                stepCards[1].style.display = 'block';
                stepCards[1].classList.add('csSelected');
                card.classList.remove('csSelected');
                card.classList.add('csDone');
            }
            if (step === 'B') {
                arrowBC.classList.add('csShow');
                stepCards[2].style.display = 'block';
                stepCards[2].classList.add('csSelected');
                card.classList.remove('csSelected');
                card.classList.add('csDone');
            }
            if (step === 'C') {
                card.classList.remove('csSelected');
                card.classList.add('csDone');
                actionBranch.style.display = 'flex';
                actionBranch.querySelectorAll('.csArrow').forEach(a => a.classList.add('csShow'));
            }
        });
    });

    // 換貨 / 退貨
    actionCards.forEach(card => {
        card.addEventListener('click', () => {
            actionCards.forEach(c => c.classList.remove('csSelected'));
            card.classList.add('csSelected');
            logisticsBranch.style.display = 'flex';
            logisticsBranch.querySelectorAll('.csLogisticsItem > .csArrow').forEach(a => a.classList.add('csShow'));
        });
    });

    // 物流 → 完成
    logisticsCards.forEach(card => {
        card.addEventListener('click', () => {
            logisticsCards.forEach(c => {
                c.classList.remove('csSelected');
                c.parentElement.querySelector('.csComplete').style.display = 'none';
            });
            card.classList.add('csSelected');
            card.parentElement.querySelector('.csComplete').style.display = 'flex';
        });
    });
}