/* ============================================
   Brian Phillips Portfolio — Site JS
   ============================================ */

(function () {
  'use strict';

  // --- Mobile Navigation ---
  var navToggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  var mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isOpen);
      mobileNav.classList.toggle('is-open');
      mobileNav.setAttribute('aria-hidden', isOpen);
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });

    document.addEventListener('click', function (e) {
      if (!mobileNav.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
        mobileNav.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // --- Theme Toggle ---
  var themeToggle = document.getElementById('themeToggle');

  function applyThemeButton(theme) {
    if (!themeToggle) return;
    themeToggle.textContent = theme === 'dark' ? '☀' : '☾'; // sun / moon
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  applyThemeButton(document.documentElement.getAttribute('data-theme') || 'light');

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      applyThemeButton(next);
    });
  }

  // --- Language Toggle (English / Simplified Chinese) ---
  var ZH = {
    'nav.fractional': '兼职 CTO',
    'nav.problems': '我能解决的问题',
    'nav.engagement': '合作方式',
    'nav.results': '业绩',
    'nav.faq': '常见问题',
    'nav.about': '关于我',
    'nav.cta': '联系我',

    'hero.label': '兼职 CTO 与工程领导',
    'hero.headline': '当交付陷入停滞，我就是你该请来的那位 CTO。',
    'hero.subline': '十五年的移动与全栈工程领导经验，我常常是那个走进停滞或混乱项目、让它重新顺利交付的人。创始人和管理者请我来稳定产品、处理表现不佳的供应商，并为团队定下清晰的技术方向。',
    'cta.intro': '预约初次沟通',
    'hero.cta2': '合作方式',

    'cred.label': '服务过的客户',

    'fractional.label': '兼职 CTO',
    'fractional.title': '你并不总是需要一位全职 CTO。',
    'fractional.lead': '很多公司早在能够负担一位全职高管之前，就已经需要真正的技术领导。我填补的正是这个空缺。',
    'fractional.body': '我来做那些艰难的决定，盯住团队和外部供应商，并为产品能否真正交付负责。我制定方向，决定自建还是采购，主持规划，并把真实情况如实告诉管理层。需要时，我也会亲自写代码。我的目标始终是：离开时，团队能够独立运转。',
    'fractional.p1.t': '方向',
    'fractional.p1.d': '战略、路线图、平台选型，以及自建还是采购的取舍。',
    'fractional.p2.t': '团队与供应商',
    'fractional.p2.d': '我让你的工程师和外部团队遵守真正的标准与真正的进度。',
    'fractional.p3.t': '责任担当',
    'fractional.p3.d': '我对结果负责。如果产品交付不了，那也是我的责任，而不只是交一份报告了事。',
    'fractional.p4.t': '沟通桥梁',
    'fractional.p4.d': '我让管理层和工程团队对“到底能做到什么”说同一种语言。',

    'problems.label': '我能解决的问题',
    'problems.title': '大多数人找到我时，事情往往已经烧起来了。',
    'problems.c1.t': '交付陷入停滞',
    'problems.c1.d': '截止日期一再延后，却没人说得清原因，团队内外的信心都已耗尽。我找出真正的瓶颈，让一切重新运转起来。',
    'problems.c2.t': '供应商交付不力',
    'problems.c2.d': '你花钱请了外包或离岸团队，却看不清他们到底在做什么。我会站在你这一方介入，把他们盯到位。',
    'problems.c3.t': '产品不稳定',
    'problems.c3.d': '版本频频出问题，每次改动都像在赌运气。我让产品稳定下来，让发布不再像掷硬币。',
    'problems.c4.t': '缺少资深的技术话语权',
    'problems.c4.d': '因为没人拍板技术决策，事情就卡住了。我为你的团队、也为你的董事会，提供一个值得信赖的判断。',
    'problems.c5.t': '规模扩张带来问题',
    'problems.c5.d': '当初规模小的时候管用的做法，如今反而拖了后腿。我重构架构，让增长不再让你睡不着觉。',
    'problems.c6.t': '工程与业务渐行渐远',
    'problems.c6.d': '路线图说的是一回事，代码库做的却是另一回事。我让两者重新对齐，让投入真正产生回报。',

    'recovery.label': '领导与挽救',
    'recovery.title': '我先稳住局面，再做改变。',
    'recovery.lead': '走进一团乱局时，人的本能是马上重写。我不这样做。我会先把情况看清楚，止住眼前的失血。更大的结构性调整留到后面，等到能安全交付之后再做。',
    'recovery.s1.t': '评估',
    'recovery.s1.d': '把代码、团队以及相关供应商看个明白：到底哪里坏了，哪里快要坏了，以及先处理什么。',
    'recovery.s2.t': '稳定',
    'recovery.s2.d': '把发布管控起来，重新排定优先级，让重要的东西先交付、按时交付。',
    'recovery.s3.t': '强化',
    'recovery.s3.d': '梳理架构，提高团队的工作标准，并确保我离开之后这一切不会垮掉。',

    'engagement.label': '合作方式',
    'engagement.title': '几种合作方式。',
    'engagement.c1.t': '技术顾问',
    'engagement.c1.m': '按月聘用',
    'engagement.c1.d': '在重大决策上随时可找的资深顾问：战略、招聘、架构，以及那些你不想出错的事。我们定期沟通，遇到问题我随时在。',
    'engagement.c2.t': '兼职 CTO',
    'engagement.c2.m': '长期 · 兼职',
    'engagement.c2.d': '我以兼职方式负责你的工程，并对结果负责：方向、团队、供应商、交付。适合需要真正技术负责人、但还无法负担全职的阶段。',
    'engagement.c3.t': '架构与交付审计',
    'engagement.c3.m': '固定范围 · 固定费用',
    'engagement.c3.d': '我深入了解你的产品、代码以及团队的交付方式，再交给你一份通俗易懂的报告和一份按优先级排好的整改清单。这是看清自身处境最快的方式。',
    'engagement.c4.t': '交付挽救',
    'engagement.c4.m': '按项目约定',
    'engagement.c4.d': '一次集中发力，让停滞或失败的项目重新交付，结果由我来负责。',
    'engagement.note': '这些合作多以按月聘用或固定范围的项目形式进行。我同时只接少数几位客户，以便贴近真正重要的工作。',

    'results.label': '过往业绩',
    'results.title': '经得起检验的成果。',
    'results.r1.t': '覆盖 250+ 门店、200 万+ 用户的产品',
    'results.r1.d': '在 Tommy Car Wash Systems，我带领团队打造消费者 App 以及运行在 250 多家门店的 POS 系统。这些系统每一笔交易都不能出错，发布容不得半点马虎。',
    'results.r2.t': '通过自动化打通瓶颈，每周释放 30 万美元',
    'results.r2.d': '在 Two Barrels，一道人工申报流程限制了业务的增长速度。我用自动化取而代之，释放出大约每周 30 万美元的新增营收空间。',
    'results.r3.t': '在无法挪动的截止日期前如期交付',
    'results.r3.d': '在 14Four，我交付了百事（PepsiCo）超级碗中场广告的互动体验，还为 Nike、Amazon 和 Toyota 做了 AR 与 VR 项目。当发布日就是超级碗，这个日子是挪不动的。',
    'results.r4.t': '既带团队，也管供应商',
    'results.r4.d': '我管理过本地和分布式的工程师，盯过外部供应商，也搭建了让发布变得波澜不惊的 CI/CD 流程。这些既发生在大公司，也发生在刚起步的初创团队。',
    'results.r5.t': '本职之外也有积累',
    'results.r5.d': '我维护开源项目 MAVSDK-Swift，并联合创办了一家服务两大洲客户的开发公司，其间帮助一位客户把月访问量从约 1 千做到 1 万。',

    'approach.label': '我的工作方式',
    'approach.title': '我用 AI 来提速，而不是偷工减料。',
    'approach.lead': '我相当依赖 AI 辅助工具，但方式是让管理层对工作有更多的可见性，而不是更少。',
    'approach.body1': '具体来说，规划、开发、评审和测试都走在一套有明确检查点的流程里，安全的地方就快，不安全的地方就慢下来。我把它用在真实的客户工作和正式产品上，而不是玩具项目。',
    'approach.body2': '我职业生涯的大部分时间都在带远程和分布式团队，所以跨时区协调人员与供应商，对我来说本就是常态。随之养成的“把事情写清楚”的习惯，无论团队身处何地，都能让交付保持在正轨上。',

    'work.label': '精选作品',
    'work.title': '我做过的一部分项目。',

    'about.label': '关于我',
    'about.lead': '当技术这一摊子失去掌控时，我就是你该请来的人。',
    'about.bio1': '十五年多来，我一直在移动与全栈工程领域工作，担任过开发经理、资深 iOS 工程师和 CTO，既在大公司，也在刚刚起步的初创团队。贯穿始终的一条主线，就是把局面稳下来。我会走进停滞、混乱或群龙无首的工程团队，帮创始人和高管回到一个产品能按可信赖的节奏交付的状态。',
    'about.bio2': '我的一些工作方式来自办公室之外。我在脱离电网的环境里运作过项目，也是一名 FAA 认证的无人机飞行员——在这些场景里，你要提前规划、随机应变，并接受“没有人可以再往上汇报”这个事实。面对陷入麻烦的产品，我带着同样的心态：总得有人来拍板，而我乐于做那个人。',

    'faq.label': '常见问题',
    'faq.title': '我常被问到的问题。',
    'faq.q1': '什么是兼职 CTO？',
    'faq.a1': '兼职 CTO 是一位经验丰富的技术领导，以兼职方式（而非全职雇佣）负责你的工程。你会有一个人来掌管技术战略、领导团队和供应商，并对交付负责——而成本和投入只是全职高管的一小部分。',
    'faq.q2': '公司什么时候该请兼职 CTO？',
    'faq.a2': '通常是在你需要资深技术领导、却还无法负担全职 CTO 的时候：早期初创公司、没有技术联合创始人的创始人，或者产品已经停滞、需要有人扛起来的公司。如果决策因为没人拍板技术而卡住，那就是时候了。',
    'faq.q3': '兼职 CTO 和全职 CTO 有什么区别？',
    'faq.a3': '工作内容是一样的，区别在投入程度。兼职 CTO 提供与全职 CTO 同样的战略、领导力和责任担当，只是以兼职和更灵活的方式进行。它适用到公司规模大到这个职位需要有人每天坐镇为止。',
    'faq.q4': '你如何挽救一个停滞或失败的软件项目？',
    'faq.a4': '我先把代码、团队和相关供应商看清楚，止住眼前的问题，让东西重新开始交付。更大的架构和流程调整留到后面，等交付稳定下来再做。我把它概括为：评估、稳定、强化。',
    'faq.q5': '你能接管表现不佳的外包或离岸团队吗？',
    'faq.a5': '可以。我的很多工作就是在外包或离岸团队交付不力时，作为客户一方的技术主导介入：审视他们做出来的东西，定下清晰的标准和真正的进度并盯到位；如果换掉他们才是更好的选择，我也会帮你完成。',
    'faq.q6': '兼职 CTO 的费用是多少，如何计费？',
    'faq.a6': '合作以按月聘用或固定范围的项目形式进行，而不是按小时计费。审计是固定费用，顾问和兼职 CTO 工作按月计，挽救类项目则按具体情况约定。我同时只接少数几位客户。',
    'faq.q7': '你服务哪类公司、哪个阶段？',
    'faq.a7': '初创公司创始人、中小企业，以及大型企业团队——往往是那些因产品停滞、代码不稳定或供应商不给力而承压的客户。我在大型企业项目和早期初创团队都做过。',
    'faq.q8': '你远程工作吗？',
    'faq.a8': '是的。我职业生涯的大部分时间都在带远程和分布式团队，跨时区协调工程师和供应商。远程是我工作的常态，而随之而来的习惯，往往能让交付保持在正轨上。',
    'faq.q9': '你擅长哪些技术？',
    'faq.a9': '我的背景是移动与全栈工程：移动端的 Swift、SwiftUI、UIKit 和 React Native，以及基于 AWS 的后端与云端工作。除了具体工具，重点在于架构、CI/CD、发布纪律，以及把工程与业务连接起来的技术战略。',

    'contact.title': '告诉我哪里出了问题。',
    'contact.subline': '如果你的产品陷入停滞、供应商不给力，或者你只是需要一位有经验的人在一段时间里来扛起那些艰难的技术决策，给我写几行字，说说现在的情况。我会坦诚告诉你，我是不是帮你的合适人选。',

    'footer.text': '© 2026 Brian Phillips · 兼职 CTO 与技术领导'
  };

  var i18nElements = document.querySelectorAll('[data-i18n]');
  // Snapshot the original English text so we can restore it.
  i18nElements.forEach(function (el) {
    el.setAttribute('data-en', el.textContent);
  });

  var currentLang = (function () {
    try { if (localStorage.getItem('lang') === 'zh') return 'zh'; } catch (e) {}
    return document.documentElement.getAttribute('lang') === 'zh-Hans' ? 'zh' : 'en';
  })();

  var langToggle = document.getElementById('langToggle');

  function applyLangButton(lang) {
    if (!langToggle) return;
    langToggle.textContent = lang === 'zh' ? 'EN' : '中文';
    langToggle.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文 / Switch to Chinese');
  }

  function setLanguage(lang, persist) {
    currentLang = lang === 'zh' ? 'zh' : 'en';
    i18nElements.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (currentLang === 'zh' && ZH[key] != null) {
        el.textContent = ZH[key];
      } else {
        el.textContent = el.getAttribute('data-en');
      }
    });
    document.documentElement.setAttribute('lang', currentLang === 'zh' ? 'zh-Hans' : 'en');
    applyLangButton(currentLang);
    if (persist) {
      try { localStorage.setItem('lang', currentLang); } catch (e) {}
    }
    renderAllCards();
  }

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      setLanguage(currentLang === 'zh' ? 'en' : 'zh', true);
    });
  }

  // --- Scroll Animations (Intersection Observer) ---
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reducedMotion) {
    var animElements = document.querySelectorAll('.animate-on-scroll');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    animElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // --- Split-Flap Card Cycling ---
  // name and tags stay the same in both languages; d_zh / r_zh hold the Chinese.
  var projects = [
    { name: "Tommy's Express POS", description: "I run the POS platform behind 250+ car wash locations: payments, license plate recognition, and a lot of transactions a day.", d_zh: "我负责支撑 250+ 洗车门店的 POS 平台：支付、车牌识别，以及每天大量的交易。", tags: ["Swift", "SwiftUI", "Stripe"], role: "Mobile Development Manager", r_zh: "移动开发经理" },
    { name: "Tommy Express App", description: "I lead the consumer app, used by more than 2 million people on iOS and Android.", d_zh: "我负责这款消费者 App，iOS 和 Android 上有 200 多万用户。", tags: ["React Native"], role: "Mobile Development Manager", r_zh: "移动开发经理" },
    { name: "TCW FLEX POS", description: "Built a new internal product for site rollouts and day-to-day belt management.", d_zh: "从零打造的内部产品，用于门店开通和日常的洗车带管理。", tags: ["Swift", "SwiftUI", "SPM"], role: "Senior iOS Engineer", r_zh: "资深 iOS 工程师" },
    { name: "Corporate Tools", description: "Built the automation that cleared a bottleneck and freed up more than $300K a week in revenue.", d_zh: "打造的自动化系统打通了瓶颈，每周释放出 30 万美元以上的营收。", tags: ["Node.js", "Rails", "AWS"], role: "Software Engineer", r_zh: "软件工程师" },
    { name: "Corporate Phone", description: "Took a production iOS app from greenfield through launch with TDD, CI/CD, and release automation.", d_zh: "把一款 iOS 应用从零做到上线，全程采用 TDD、CI/CD 和发布自动化。", tags: ["Swift", "SPM", "CircleCI"], role: "iOS Engineer", r_zh: "iOS 工程师" },
    { name: "MotoCare", description: "iOS app for riders to track maintenance history, service intervals, and vehicle records.", d_zh: "面向摩托车骑手的 iOS 应用，记录保养历史、保养周期和车辆信息。", tags: ["SwiftUI", "SwiftData"], role: "Creator", r_zh: "独立开发者" },
    { name: "StreetBookies", description: "iOS app that helps homeschool families find neighborhood libraries and learning resources.", d_zh: "帮助在家上学的家庭寻找周边图书馆和学习资源的 iOS 应用。", tags: ["SwiftUI", "Firebase"], role: "Creator", r_zh: "独立开发者" },
    { name: "Circle Check (iOS)", description: "Built a GPS-based vehicle safety-inspection app for fleet drivers, wired up to the Geotab API.", d_zh: "为车队司机打造的基于 GPS 的车辆安全检查 App，接入 Geotab API。", tags: ["Swift", "GPS", "Geotab"], role: "Lead Engineer", r_zh: "首席工程师" },
    { name: "Circle Check (Rebuild)", description: "Helped take over and modernize a fleet management product, moving it off PHP/MySQL onto Node and Angular.", d_zh: "参与接手并改造一款车队管理产品，从 PHP/MySQL 迁移到 Node 和 Angular。", tags: ["Node.js", "Angular", "Ionic"], role: "Engineer", r_zh: "工程师" },
    { name: "MAVSDK-Swift", description: "Maintained the open-source Swift client for flying autonomous PX4 drones over MAVLink.", d_zh: "维护这一开源 Swift 客户端，通过 MAVLink 控制 PX4 自主无人机。", tags: ["Swift", "RxSwift", "MAVLink"], role: "OSS Maintainer", r_zh: "开源维护者" },
    { name: "MAVSDK-Swift Example App", description: "Maintained the example app that shows developers how to control drones from Swift.", d_zh: "维护示例应用，向开发者演示如何用 Swift 控制无人机。", tags: ["Swift", "RxSwift", "MAVLink"], role: "OSS Maintainer", r_zh: "开源维护者" },
    { name: "People Game", description: "iOS app for finding people nearby to do activities with, with a real-time location finder.", d_zh: "一款 iOS 应用，帮你就近找到一起活动的人，带实时定位。", tags: ["Swift", "iOS"], role: "Creator", r_zh: "独立开发者" },
    { name: "Lucky English", description: "Designed and built a phonics app for kids learning English while I was teaching in Asia.", d_zh: "在亚洲教书期间，设计并开发的儿童英语自然拼读应用。", tags: ["Swift", "EdTech"], role: "Creator", r_zh: "独立开发者" },
    { name: "Hangman by Lucky English", description: "Built a hangman spelling game for English learners as part of the Lucky English apps.", d_zh: "Lucky English 系列中的一款猜词拼写游戏，面向英语学习者。", tags: ["Swift", "EdTech"], role: "Creator", r_zh: "独立开发者" },
    { name: "RipATrip", description: "Built the iOS app, backend API, and admin tooling for a travel product with GPS and REST integrations.", d_zh: "为一款旅行产品打造 iOS 应用、后端 API 和管理后台，集成 GPS 与 REST。", tags: ["Swift", "REST APIs"], role: "Full-Stack Developer", r_zh: "全栈开发者" },
    { name: "QuickLoad", description: "Hackathon-winning logistics product that automated shipment assignment in China's freight system.", d_zh: "黑客松夺冠的物流产品，为中国货运体系自动分配运单。", tags: ["Swift", "UX Design"], role: "Hackathon Winner", r_zh: "黑客松冠军" },
    { name: "Mandarin Blueprint", description: "Built a Mandarin learning app from scratch with a Node/MongoDB backend and an Angular/Ionic frontend.", d_zh: "从零打造的中文学习应用，后端用 Node/MongoDB，前端用 Angular/Ionic。", tags: ["Node.js", "Angular", "Ionic"], role: "Developer", r_zh: "开发者" },
    { name: "The Stack, Oxford Properties", description: "Built an AR app that brings a flagship building to life from an image target on a business card.", d_zh: "打造的 AR 应用，通过名片上的图像识别，让一栋旗舰大楼跃然眼前。", tags: ["AR", "iOS"], role: "AR Developer", r_zh: "AR 开发者" },
    { name: "NAV Canada", description: "Built an AR training app that lets air traffic control trainees walk a virtual tower and its terminals.", d_zh: "打造的 AR 培训应用，让空管学员在虚拟塔台和航站楼中实地演练。", tags: ["AR", "iOS"], role: "AR Developer", r_zh: "AR 开发者" },
    { name: "Somerville", description: "Helped build and manage an AR app that lets clients show their products in 3D as a sales tool.", d_zh: "参与开发并管理一款 AR 应用，让客户以 3D 方式展示产品、用于销售。", tags: ["AR", "3D"], role: "Developer", r_zh: "开发者" },
    { name: "Capreit Sphere", description: "Built a 360-degree location viewer in Unity and C# for an immersive walkthrough experience.", d_zh: "用 Unity 和 C# 打造的 360 度场景浏览器，带来沉浸式漫游体验。", tags: ["Unity", "C#"], role: "Developer", r_zh: "开发者" },
    { name: "Pepsi Halftime Show", description: "Built a custom site and animations for PepsiCo and the NFL halftime show, including the countdown.", d_zh: "为百事和 NFL 中场秀打造定制网站与动画，包括倒计时。", tags: ["Nuxt/Vue", "Docker"], role: "Frontend Developer", r_zh: "前端开发者" },
    { name: "Super Bowl", description: "Built pages and features for a Mountain Dew Super Bowl fan site as part of the dev team.", d_zh: "作为开发团队一员，为激浪超级碗粉丝网站开发页面与功能。", tags: ["Vue.js"], role: "Web Developer", r_zh: "网页开发者" },
    { name: "Speedway Mountain Dew", description: "Took over a much-passed-around Vue.js site for Mountain Dew and Speedway and added new slides and features.", d_zh: "接手一个几经转手的激浪与 Speedway 的 Vue.js 网站，新增了多个页面与功能。", tags: ["Vue.js"], role: "Web Developer", r_zh: "网页开发者" },
    { name: "Rigetti", description: "Built Rigetti Quantum Computing's site from scratch in two months as a full CMS on AWS, front and back.", d_zh: "在两个月内从零打造 Rigetti 量子计算的网站，前后端完整 CMS，部署在 AWS。", tags: ["Vue.js", "AWS", "CMS"], role: "Lead Developer", r_zh: "主开发者" },
    { name: "IBM Security Journey Assessment", description: "Reworked IBM's security assessment app: new login flow, language options, and a custom intro animation.", d_zh: "改造 IBM 的安全评估应用：新的登录流程、多语言选项和定制的开场动画。", tags: ["Vue.js"], role: "Web Developer", r_zh: "网页开发者" },
    { name: "14FOUR Hack", description: "Rebuilt the 14Four website with a small team in an 8-hour hackathon that set the template for the rest.", d_zh: "在 8 小时黑客松中与小团队重建 14Four 官网，并为后续活动定下了范式。", tags: ["Hackathon", "Frontend"], role: "Developer", r_zh: "开发者" },
    { name: "14FOUR Holiday 2020", description: "Built a client prize-lottery system end to end in two days, including the Docker setup and pipeline.", d_zh: "两天内从头到尾打造一套客户抽奖系统，包括 Docker 环境与流水线。", tags: ["Nuxt/Vue", "Docker"], role: "Web Developer", r_zh: "网页开发者" },
    { name: "Jamba Juice", description: "Built animated banner ads for Jamba Juice and The Croods on a custom, heavily animated banner system.", d_zh: "为 Jamba Juice 与《疯狂原始人》打造动画横幅广告，基于自研的高动画横幅系统。", tags: ["React", "CSS Animation"], role: "Frontend Developer", r_zh: "前端开发者" },
    { name: "Church's Chicken Ads", description: "Built a custom animated banner-ad system for Church's Chicken with React and heavy CSS animation.", d_zh: "用 React 和大量 CSS 动画，为 Church's Chicken 打造定制的动画横幅广告系统。", tags: ["React", "SCSS"], role: "Frontend Developer", r_zh: "前端开发者" },
    { name: "Doritos", description: "Built a promotion-ended landing page for Doritos and updated their main site.", d_zh: "为多力多滋打造活动结束的落地页，并更新了主站。", tags: ["Vue.js", "PUG"], role: "Web Developer", r_zh: "网页开发者" },
    { name: "Gatorade", description: "Built a quick coming-soon landing page for a Gatorade event in Vue.js.", d_zh: "用 Vue.js 为佳得乐的一场活动快速打造“即将上线”落地页。", tags: ["Vue.js"], role: "Web Developer", r_zh: "网页开发者" },
    { name: "Tito's Cocktail", description: "Came in near the finish line to fix bugs and get a Vue.js project ready to launch.", d_zh: "在收尾阶段加入，修复缺陷，让一个 Vue.js 项目顺利上线。", tags: ["Vue.js"], role: "Web Developer", r_zh: "网页开发者" },
    { name: "Pernod Ricard Holiday", description: "Designed and built the results page for a Pernod Ricard holiday site in Vue.js.", d_zh: "用 Vue.js 为保乐力加的节日网站设计并开发了结果页。", tags: ["Vue.js"], role: "Web Developer", r_zh: "网页开发者" },
    { name: "BBDO Atlanta", description: "Built several custom modules for a BBDO site on Vue.js with a Craft and Element API backend.", d_zh: "为 BBDO 的 Vue.js 网站开发多个定制模块，后端采用 Craft 与 Element API。", tags: ["Vue.js", "Craft"], role: "Web Developer", r_zh: "网页开发者" },
    { name: "Y & Co Wines", description: "Sole developer on the Y & Co Wines site, built in a month with Vue.js and ScrollMagic.", d_zh: "Y & Co Wines 网站的独立开发者，一个月内用 Vue.js 和 ScrollMagic 完成。", tags: ["Vue.js", "ScrollMagic"], role: "Solo Developer", r_zh: "独立开发者" },
    { name: "Sacred Heart Schools", description: "Built a virtual admissions portal on WordPress and Divi with custom PHP modules.", d_zh: "用 WordPress 和 Divi 打造虚拟招生门户，并开发了定制的 PHP 模块。", tags: ["WordPress", "PHP"], role: "Web Developer", r_zh: "网页开发者" },
    { name: "Lambda Research Co.", description: "Rebuilt the company site and marketing from the ground up, growing reach through SEO and ads.", d_zh: "从零重建公司网站与营销，通过 SEO 和广告扩大触达。", tags: ["Web", "SEO"], role: "Web Developer", r_zh: "网页开发者" },
    { name: "Xi-rang", description: "Designed and built a product and blog site for an organic fertilizer company in China.", d_zh: "为中国一家有机肥公司设计并开发产品与博客网站。", tags: ["WordPress", "PHP"], role: "Web Developer", r_zh: "网页开发者" },
    { name: "Dharma Beach", description: "Redesigned and extended a site connecting travelers with local host families abroad.", d_zh: "重新设计并扩展一个网站，帮旅行者与海外当地寄宿家庭对接。", tags: ["PHP", "MySQL"], role: "Web Developer", r_zh: "网页开发者" },
    { name: "MontaniTours", description: "Rebuilt a cultural-travel site and added features for booking local experiences.", d_zh: "重建一个文化旅行网站，新增了预订当地体验的功能。", tags: ["PHP", "MySQL"], role: "Web Developer", r_zh: "网页开发者" },
    { name: "Montanita", description: "Ran Google Ads and redesigned parts of the site to grow monthly traffic.", d_zh: "投放 Google Ads 并重新设计部分页面，提升月访问量。", tags: ["Google Ads", "HTML/CSS"], role: "Marketing & Web", r_zh: "营销与网页" },
    { name: "Marazul Spanish School", description: "Ran Google Ads and refreshed parts of the site to bring in more monthly visitors.", d_zh: "投放 Google Ads 并优化部分页面，带来更多月度访客。", tags: ["Google Ads", "HTML/CSS"], role: "Marketing & Web", r_zh: "营销与网页" },
    { name: "Montanita Spanish School", description: "Managed Google Ads and updated the site to grow monthly traffic.", d_zh: "管理 Google Ads 并更新网站，提升月访问量。", tags: ["Google Ads", "HTML/CSS"], role: "Marketing & Web", r_zh: "营销与网页" },
    { name: "Healing With Tanya", description: "Designed and built the site and ran the marketing behind it.", d_zh: "设计并开发网站，并负责背后的营销。", tags: ["HTML/CSS", "jQuery"], role: "Web Developer", r_zh: "网页开发者" },
    { name: "YouthGo", description: "Built the site and helped drive traffic to it with a marketing push.", d_zh: "开发网站，并通过营销推动流量增长。", tags: ["HTML/CSS", "jQuery"], role: "Web Developer", r_zh: "网页开发者" },
    { name: "Restoring Life Herbs", description: "Built an e-commerce store from the ground up on WordPress and WooCommerce.", d_zh: "用 WordPress 和 WooCommerce 从零搭建电商商店。", tags: ["WordPress", "WooCommerce"], role: "Software Engineer", r_zh: "软件工程师" },
    { name: "Jewelry By Beavers", description: "Built a WordPress and WooCommerce store from scratch for online sales.", d_zh: "用 WordPress 和 WooCommerce 从零搭建在线销售商店。", tags: ["WordPress", "WooCommerce"], role: "Software Engineer", r_zh: "软件工程师" }
  ];

  var activeIndices = [];
  var cards = document.querySelectorAll('.flip-card');

  function renderCardContent(project) {
    var desc = (currentLang === 'zh' && project.d_zh) ? project.d_zh : project.description;
    var role = (currentLang === 'zh' && project.r_zh) ? project.r_zh : project.role;
    var tagsHtml = project.tags.map(function (tag) {
      return '<span class="card-tag">' + tag + '</span>';
    }).join('');

    return '<div class="card-title">' + project.name + '</div>' +
      '<div class="card-description">' + desc + '</div>' +
      '<div class="card-tags">' + tagsHtml + '</div>' +
      '<div class="card-role">' + role + '</div>';
  }

  function getRandomProjectIndex(exclude) {
    var available = [];
    for (var i = 0; i < projects.length; i++) {
      if (exclude.indexOf(i) === -1) {
        available.push(i);
      }
    }
    return available[Math.floor(Math.random() * available.length)];
  }

  function initCards() {
    cards.forEach(function (card) {
      var idx = getRandomProjectIndex(activeIndices);
      activeIndices.push(idx);
      var content = card.querySelector('.flip-card-content');
      content.innerHTML = renderCardContent(projects[idx]);
    });
  }

  // Re-render the currently shown cards (used on language change).
  function renderAllCards() {
    cards.forEach(function (card, i) {
      if (activeIndices[i] == null) return;
      var content = card.querySelector('.flip-card-content');
      if (content) content.innerHTML = renderCardContent(projects[activeIndices[i]]);
    });
    populatePrintProjects();
  }

  function flipCard(cardIndex) {
    var card = cards[cardIndex];
    if (!card || card.classList.contains('is-flipping')) return;

    var newIdx = getRandomProjectIndex(activeIndices);
    var oldIdx = activeIndices[cardIndex];

    activeIndices[cardIndex] = newIdx;

    var inner = card.querySelector('.flip-card-inner');
    var currentContent = card.querySelector('.flip-card-content');
    var cardHeight = currentContent.offsetHeight;

    inner.style.height = cardHeight + 'px';

    var oldTop = document.createElement('div');
    oldTop.className = 'flip-top old';
    oldTop.innerHTML = '<div class="flip-card-content" style="min-height:' + cardHeight + 'px">' +
      renderCardContent(projects[oldIdx]) + '</div>';

    var newTop = document.createElement('div');
    newTop.className = 'flip-top new';
    newTop.innerHTML = '<div class="flip-card-content" style="min-height:' + cardHeight + 'px">' +
      renderCardContent(projects[newIdx]) + '</div>';

    var newBottom = document.createElement('div');
    newBottom.className = 'flip-bottom';
    newBottom.innerHTML = '<div class="flip-card-content" style="min-height:' + cardHeight + 'px">' +
      renderCardContent(projects[newIdx]) + '</div>';

    currentContent.style.visibility = 'hidden';
    inner.appendChild(oldTop);
    inner.appendChild(newBottom);
    inner.appendChild(newTop);

    card.classList.add('is-flipping');

    setTimeout(function () {
      card.classList.remove('is-flipping');
      currentContent.innerHTML = renderCardContent(projects[newIdx]);
      currentContent.style.visibility = '';
      inner.style.height = '';

      if (oldTop.parentNode) oldTop.parentNode.removeChild(oldTop);
      if (newTop.parentNode) newTop.parentNode.removeChild(newTop);
      if (newBottom.parentNode) newBottom.parentNode.removeChild(newBottom);
    }, 700);
  }

  function startCycling() {
    cards.forEach(function (card, i) {
      function scheduleFlip() {
        var delay = 10000 + Math.random() * 5000; // 10-15 seconds
        setTimeout(function () {
          flipCard(i);
          scheduleFlip();
        }, delay);
      }
      setTimeout(scheduleFlip, 2000 + i * 1500);
    });
  }

  function populatePrintProjects() {
    var container = document.querySelector('.print-all-projects');
    if (!container) return;
    container.innerHTML = projects.map(function (project) {
      return '<div class="flip-card-content" style="margin-bottom:12px">' +
        renderCardContent(project) + '</div>';
    }).join('');
  }

  // Apply the stored language to the static page content on load.
  if (currentLang === 'zh') {
    setLanguage('zh', false);
  } else {
    applyLangButton('en');
  }

  if (cards.length > 0) {
    initCards();
    populatePrintProjects();
    if (!reducedMotion) {
      startCycling();
    }
  }

})();
