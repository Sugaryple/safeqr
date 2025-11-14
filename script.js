// Translations
const translations = {
    ko: {
        'hero-title': 'QR 스캔하기 전, 위험을 먼저 확인하세요',
        'hero-subtitle': 'Google WebRisk 보안 검사로 악성 사이트를 실시간 차단. 안전한 QR 스캔의 새로운 기준.',
        'status-checking': '보안 검사 중...',
        'status-safe': '✅ 안전 확인됨',
        'status-warning': '⚠️ 주의 필요',
        'status-danger': '🚫 위험 감지됨',
        'cta-download': '지금 다운로드',
        'disclaimer': '* 검사 결과는 최신 위협 정보에 기반하며 100%를 보장하지 않습니다.',
        'trust-1': 'Google WebRisk 실시간 보안 검사',
        'trust-2': '0.3초 내 위협 탐지',
        'trust-3': '악성코드/피싱/스파이웨어 차단',
        'trust-4': 'iOS/Android 네이티브 지원',
        'problem-title': 'QR 코드의 숨겨진 위험',
        'problem-1': 'QR 피싱 공격 급증',
        'problem-1-desc': '2024년 기준 587% 증가',
        'problem-2': '숨겨진 악성 URL 판별 불가',
        'problem-2-desc': '육안으로 확인 불가능',
        'problem-3': '한 번의 실수로 개인정보 유출',
        'problem-3-desc': '복구 불가능한 피해 발생',
        'solution-title': 'Safe QR Scan의 해결책',
        'solution-1': '스캔 즉시 보안 검사',
        'solution-2': '실시간 위협 데이터베이스',
        'solution-3': '자동 차단 시스템',
        'features-title': '주요 기능',
        'feature-1': 'URL 보안 검사',
        'feature-1-desc': 'Google WebRisk로 실시간 위협 탐지',
        'feature-2': '멀티 바코드',
        'feature-2-desc': 'QR, 바코드, Data Matrix 등 모든 형식 지원',
        'feature-3': '히스토리',
        'feature-3-desc': '스캔 기록 무제한 저장 및 관리',
        'feature-4': '3개국어 지원',
        'feature-4-desc': '한국어, 일본어, 영어 지원',
        'premium': '프리미엄',
        'pricing-title': '요금제',
        'pricing-subtitle': '7일 무료 체험 후 언제든 취소 가능',
        'free-plan': '무료',
        'monthly': '월간',
        'annual': '연간',
        'per-month': '/월',
        'per-year': '/년',
        'annual-savings': '연간 $8.89 절약 (17% 할인)',
        'popular': '인기',
        'free-feature-1': 'QR/바코드 스캔',
        'free-feature-2': '히스토리 무제한',
        'free-feature-3': '데이터 타입 액션',
        'free-feature-4': 'URL 보안 검사 (일 5회)',
        'free-feature-5': '위협 자동 차단',
        'free-feature-6': '무제한 보안 스캔',
        'pro-feature-1': 'QR/바코드 스캔',
        'pro-feature-2': '히스토리 무제한',
        'pro-feature-3': '데이터 타입 액션',
        'pro-feature-4': '무제한 URL 보안 검사',
        'pro-feature-5': '위협 자동 차단',
        'pro-feature-6': '실시간 위협 데이터베이스',
        'start-trial': '7일 무료 체험 시작',
        'pricing-note': '* 결제/관리/환불은 각 앱스토어 정책을 따르며, 랜딩에서는 결제하지 않습니다.',
        'usecase-title': '이런 분들께 필요해요',
        'usecase-1': '비즈니스',
        'usecase-1-desc': '사내 포스터/택배 라벨의 QR 확인 → 의심 URL 차단으로 보안 사고 예방',
        'usecase-2': '가정/학부모',
        'usecase-2-desc': '자녀가 스캔 전 \'위험\' 안내로 유해 접속 방지',
        'usecase-3': '고령층',
        'usecase-3-desc': '복잡한 보안 지식 없이 색/문구로 즉시 판단',
        'faq-title': '자주 묻는 질문',
        'faq-1-q': '어떤 위협을 막나요?',
        'faq-1-a': 'MALWARE(악성코드), PHISHING(피싱), UNWANTED SOFTWARE(원치 않는 소프트웨어)를 탐지하고 경고 또는 차단합니다.',
        'faq-2-q': '오프라인에서도 되나요?',
        'faq-2-a': '카메라 스캔은 가능하나 URL 보안 검사에는 네트워크 연결이 필요합니다.',
        'faq-3-q': '개인정보는 수집하나요?',
        'faq-3-a': '검사에 필요한 최소 URL 정보만 처리하며, 개인 식별 정보는 저장하지 않습니다.',
        'faq-4-q': '무료와 유료 차이는?',
        'faq-4-a': 'Pro 버전에서는 실시간 URL 보안 검사, 자동 차단, 무제한 보안 스캔 기능을 제공합니다.',
        'faq-5-q': '환불/해지 방법은?',
        'faq-5-a': 'iOS는 App Store, Android는 Google Play Store의 구독 관리 메뉴에서 언제든 취소 가능합니다.',
        'privacy': '개인정보처리방침',
        'terms': '이용약관',
        'contact': '문의'
    },
    ja: {
        'hero-title': 'QRスキャンの前に、危険をまずチェック',
        'hero-subtitle': 'Google WebRiskによるリアルタイムセキュリティチェックで悪意あるサイトを完全ブロック。安全なQRスキャンの新基準。',
        'status-checking': 'セキュリティチェック中...',
        'status-safe': '✅ 安全確認済み',
        'status-warning': '⚠️ 注意が必要',
        'status-danger': '🚫 危険検出',
        'cta-download': '今すぐダウンロード',
        'disclaimer': '* 検査結果は最新の脅威情報に基づいており、100%を保証するものではありません。',
        'trust-1': 'Google WebRiskリアルタイムセキュリティ',
        'trust-2': '0.3秒以内に脅威検出',
        'trust-3': 'マルウェア/フィッシング/スパイウェアをブロック',
        'trust-4': 'iOS/Androidネイティブ対応',
        'problem-title': 'QRコードの隠れた危険',
        'problem-1': 'QRフィッシング攻撃急増',
        'problem-1-desc': '2024年基準587%増加',
        'problem-2': '隠された悪意あるURLの判別不可',
        'problem-2-desc': '肉眼では確認不可能',
        'problem-3': '一度の失敗で個人情報流出',
        'problem-3-desc': '回復不可能な被害発生',
        'solution-title': 'Safe QR Scanのソリューション',
        'solution-1': 'スキャン即時セキュリティチェック',
        'solution-2': 'リアルタイム脅威データベース',
        'solution-3': '自動ブロックシステム',
        'features-title': '主要機能',
        'feature-1': 'URLセキュリティチェック',
        'feature-1-desc': 'Google WebRiskでリアルタイム脅威検出',
        'feature-2': 'マルチバーコード',
        'feature-2-desc': 'QR、バーコード、Data Matrix等全形式対応',
        'feature-3': 'ヒストリー',
        'feature-3-desc': 'スキャン履歴無制限保存・管理',
        'feature-4': '3ヶ国語対応',
        'feature-4-desc': '日本語、韓国語、英語対応',
        'premium': 'プレミアム',
        'pricing-title': '料金プラン',
        'pricing-subtitle': '7日間無料体験後、いつでもキャンセル可能',
        'free-plan': '無料',
        'monthly': '月間',
        'annual': '年間',
        'per-month': '/月',
        'per-year': '/年',
        'annual-savings': '年間$8.89節約（17%割引）',
        'popular': '人気',
        'free-feature-1': 'QR/バーコードスキャン',
        'free-feature-2': 'ヒストリー無制限',
        'free-feature-3': 'データタイプアクション',
        'free-feature-4': '無制限URLセキュリティチェック',
        'free-feature-5': '脅威自動ブロック',
        'free-feature-6': 'リアルタイム脅威データベース',
        'pro-feature-1': 'QR/バーコードスキャン',
        'pro-feature-2': 'ヒストリー無制限',
        'pro-feature-3': 'データタイプアクション',
        'pro-feature-4': '無制限URLセキュリティチェック',
        'pro-feature-5': '脅威自動ブロック',
        'pro-feature-6': 'リアルタイム脅威データベース',
        'start-trial': '7日間無料体験を開始',
        'pricing-note': '* 決済/管理/払い戻しは各アプリストアのポリシーに従います。',
        'usecase-title': 'こんな方におすすめ',
        'usecase-1': 'ビジネス',
        'usecase-1-desc': '社内ポスター/配送ラベルのQR確認 → 疑わしいURLブロックでセキュリティ事故予防',
        'usecase-2': '家庭/保護者',
        'usecase-2-desc': 'お子様のスキャン前「危険」案内で有害アクセス防止',
        'usecase-3': '高齢者',
        'usecase-3-desc': '複雑なセキュリティ知識なしに色/文言で即座に判断',
        'faq-title': 'よくある質問',
        'faq-1-q': 'どんな脅威を防ぎますか？',
        'faq-1-a': 'MALWARE（マルウェア）、PHISHING（フィッシング）、UNWANTED SOFTWARE（望ましくないソフトウェア）を検出し、警告またはブロックします。',
        'faq-2-q': 'オフラインでも使えますか？',
        'faq-2-a': 'カメラスキャンは可能ですが、URLセキュリティチェックにはネットワーク接続が必要です。',
        'faq-3-q': '個人情報は収集しますか？',
        'faq-3-a': '検査に必要な最小限のURL情報のみ処理し、個人識別情報は保存しません。',
        'faq-4-q': '無料版と有料版の違いは？',
        'faq-4-a': 'Pro版では、リアルタイムURLセキュリティチェック、自動ブロック、無制限セキュリティスキャン機能を提供します。',
        'faq-5-q': '払い戻し/解約方法は？',
        'faq-5-a': 'iOSはApp Store、AndroidはGoogle Play Storeのサブスクリプション管理メニューからいつでもキャンセル可能です。',
        'privacy': 'プライバシーポリシー',
        'terms': '利用規約',
        'contact': 'お問い合わせ'
    },
    en: {
        'hero-title': 'Check for Threats Before You Scan',
        'hero-subtitle': 'Real-time security powered by Google WebRisk blocks malicious sites instantly. The new standard for safe QR scanning.',
        'status-checking': 'Security check in progress...',
        'status-safe': '✅ Safe',
        'status-warning': '⚠️ Caution',
        'status-danger': '🚫 Threat Detected',
        'cta-download': 'Get the app',
        'disclaimer': '* Results based on latest threat intelligence. 100% protection not guaranteed.',
        'trust-1': 'Google WebRisk Real-time Security',
        'trust-2': 'Threat Detection in 0.3s',
        'trust-3': 'Blocks Malware/Phishing/Spyware',
        'trust-4': 'Native iOS/Android Support',
        'problem-title': 'Hidden Dangers in QR Codes',
        'problem-1': 'QR Phishing Attacks Surging',
        'problem-1-desc': '587% increase in 2024',
        'problem-2': 'Hidden Malicious URLs Undetectable',
        'problem-2-desc': 'Impossible to verify visually',
        'problem-3': 'One Mistake Can Leak Your Data',
        'problem-3-desc': 'Irreversible damage possible',
        'solution-title': 'Safe QR Scan Solution',
        'solution-1': 'Instant Security Check',
        'solution-2': 'Real-time Threat Database',
        'solution-3': 'Auto-blocking System',
        'features-title': 'Key Features',
        'feature-1': 'URL Security Check',
        'feature-1-desc': 'Real-time threat detection with Google WebRisk',
        'feature-2': 'Multi-Barcode',
        'feature-2-desc': 'Supports all formats: QR, Barcode, Data Matrix',
        'feature-3': 'History',
        'feature-3-desc': 'Unlimited scan history storage',
        'feature-4': '3-Language Support',
        'feature-4-desc': 'Korean, Japanese, English',
        'premium': 'Premium',
        'pricing-title': 'Pricing',
        'pricing-subtitle': '7-day free trial, cancel anytime',
        'free-plan': 'Free',
        'monthly': 'Monthly',
        'annual': 'Annual',
        'per-month': '/mo',
        'per-year': '/yr',
        'annual-savings': 'Save $8.89 annually (17% off)',
        'popular': 'Popular',
        'free-feature-1': 'QR/Barcode Scan',
        'free-feature-2': 'Unlimited History',
        'free-feature-3': 'Data Type Actions',
        'free-feature-4': 'URL Security Check (5/day)',
        'free-feature-5': 'Auto Threat Blocking',
        'free-feature-6': 'Unlimited Security Scans',
        'pro-feature-1': 'QR/Barcode Scan',
        'pro-feature-2': 'Unlimited History',
        'pro-feature-3': 'Data Type Actions',
        'pro-feature-4': 'Unlimited URL Security Check',
        'pro-feature-5': 'Auto Threat Blocking',
        'pro-feature-6': 'Real-time Threat Database',
        'start-trial': 'Start 7-Day Free Trial',
        'pricing-note': '* Payments managed through app stores. Cancellation and refunds follow store policies.',
        'usecase-title': 'Perfect For',
        'usecase-1': 'Business',
        'usecase-1-desc': 'Verify QR codes on posters and packages → Block suspicious URLs to prevent security incidents',
        'usecase-2': 'Families',
        'usecase-2-desc': 'Protect children with threat warnings before they scan',
        'usecase-3': 'Seniors',
        'usecase-3-desc': 'Simple color-coded warnings without complex security knowledge',
        'faq-title': 'Frequently Asked Questions',
        'faq-1-q': 'What threats does it prevent?',
        'faq-1-a': 'Detects and blocks MALWARE, PHISHING, and UNWANTED SOFTWARE.',
        'faq-2-q': 'Does it work offline?',
        'faq-2-a': 'Camera scanning works offline, but URL security checks require network connection.',
        'faq-3-q': 'Do you collect personal data?',
        'faq-3-a': 'We only process minimal URL information for security checks. No personal identifiers are stored.',
        'faq-4-q': 'What\'s the difference between Free and Pro?',
        'faq-4-a': 'Pro includes real-time URL security checks, auto-blocking, and unlimited security scans.',
        'faq-5-q': 'How do I cancel or get a refund?',
        'faq-5-a': 'Cancel anytime through App Store (iOS) or Google Play Store (Android) subscription settings.',
        'privacy': 'Privacy Policy',
        'terms': 'Terms of Service',
        'contact': 'Contact'
    }
};

// Current language
let currentLang = 'ko';

// Detect browser language
function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;

    if (browserLang.startsWith('ko')) return 'ko';
    if (browserLang.startsWith('ja')) return 'ja';
    if (browserLang.startsWith('en')) return 'en';

    return 'ko'; // Default to Korean
}

// Update page content with translations
function updateContent(lang) {
    currentLang = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update store badge images
    updateStoreBadges(lang);

    // Save language preference
    localStorage.setItem('preferredLang', lang);
}

// Update store badge images based on language
function updateStoreBadges(lang) {
    const iosBadge = document.querySelector('.ios-badge img');
    const androidBadge = document.querySelector('.android-badge img');

    if (iosBadge) {
        const iosBadges = {
            ko: 'public/images/Download_on_the_App_Store_Badge_KR_RGB_wht_100317.svg',
            ja: 'public/images/Download_on_the_App_Store_Badge_JP_RGB_wht_100317.svg',
            en: 'public/images/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg'
        };
        iosBadge.src = iosBadges[lang];
    }

    if (androidBadge) {
        const androidBadges = {
            ko: 'public/images/GetItOnGooglePlay_Badge_Web_color_Korean.png',
            ja: 'public/images/GetItOnGooglePlay_Badge_Web_color_Japanese.png',
            en: 'public/images/GetItOnGooglePlay_Badge_Web_color_English.png'
        };
        androidBadge.src = androidBadges[lang];
    }
}

// Detect operating system
function detectOS() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'ios';
    }

    // Android detection
    if (/android/i.test(userAgent)) {
        return 'android';
    }

    // Default to desktop
    return 'desktop';
}

// Setup download buttons based on OS
function setupDownloadButtons() {
    const os = detectOS();
    const mainCTA = document.getElementById('mainCTA');
    const iosBadge = document.querySelector('.ios-badge');
    const androidBadge = document.querySelector('.android-badge');

    if (os === 'ios') {
        iosBadge.style.display = 'block';
        androidBadge.style.display = 'none';
        mainCTA.href = 'https://apps.apple.com/app/id6747948666';
    } else if (os === 'android') {
        androidBadge.style.display = 'block';
        iosBadge.style.display = 'none';
        mainCTA.href = 'https://play.google.com/store/apps/details?id=com.sugaryple.safeqr';
    } else {
        // Desktop - show both badges
        iosBadge.style.display = 'block';
        androidBadge.style.display = 'block';
        mainCTA.style.display = 'none';
    }
}


// FAQ accordion functionality
function setupFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            const answer = question.nextElementSibling;

            // Close all other FAQs
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.classList.remove('active');
                }
            });

            // Toggle current FAQ
            question.setAttribute('aria-expanded', !isExpanded);
            answer.classList.toggle('active');
        });
    });
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Pricing toggle functionality
function setupPricingToggle() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const amountElement = document.getElementById('premium-amount');
    const periodElement = document.getElementById('premium-period');
    const savingsElement = document.getElementById('premium-savings');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            toggleButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Get the selected period
            const period = button.getAttribute('data-period');
            const currentLang = getCurrentLanguage();

            // Update pricing display based on period
            if (period === 'monthly') {
                if (amountElement) amountElement.textContent = '3.99';
                if (periodElement) periodElement.textContent = translations[currentLang]['per-month'] || '/월';
                if (savingsElement) savingsElement.style.display = 'none';
            } else if (period === 'annual') {
                if (amountElement) amountElement.textContent = '39.99';
                if (periodElement) periodElement.textContent = translations[currentLang]['per-year'] || '/년';
                if (savingsElement) savingsElement.style.display = 'block';
            }
        });
    });
}

// Get current language
function getCurrentLanguage() {
    return localStorage.getItem('preferredLang') || detectLanguage();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    const savedLang = localStorage.getItem('preferredLang');
    const detectedLang = savedLang || detectLanguage();
    updateContent(detectedLang);

    // Set language selector value
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = detectedLang;

        // Add change listener
        languageSelect.addEventListener('change', (e) => {
            updateContent(e.target.value);
        });
    }

    // Setup OS-specific download buttons
    setupDownloadButtons();


    // Setup FAQ accordion
    setupFAQ();

    // Setup smooth scrolling
    setupSmoothScroll();

    // Setup pricing toggle
    setupPricingToggle();

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.feature-card, .problem-item, .flow-step, .use-case, .pricing-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});