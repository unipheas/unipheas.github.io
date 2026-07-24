(function () {
  "use strict";

  var translations = {
    zh: {
      "brand.role": "自主化技术负责人",
      "nav.proof": "真实案例",
      "nav.system": "运行系统",
      "nav.engagement": "合作方式",
      "nav.guardrails": "安全边界",
      "nav.cta": "从审计开始",
      "hero.eyebrow": "自主化 CTO · 交付救援",
      "hero.title": "替换外包公司，留下可持续运行的系统。",
      "hero.lede": "我把停滞、依赖外包的软件产品，转变成客户自己拥有的工程运营系统：稳定交付、自我监控，并且在我离开后继续运行。",
      "hero.primary": "从 12,500 美元审计开始",
      "hero.secondary": "查看真实测试案例",
      "hero.note": "适合每月投入 1.5–3 万美元、却仍无法可靠交付的创始人与经营者。",
      "console.title": "运行状态",
      "console.live": "人类治理",
      "console.stat1": "低风险工作",
      "console.stat1v": "自动执行",
      "console.stat2": "生产环境",
      "console.stat2v": "人工批准",
      "console.stat3": "系统所有权",
      "console.stat3v": "100% 属于客户",
      "console.human": "人工闸门",
      "console.system": "运营系统",
      "trust.label": "在真实业务中打造，经验覆盖：",
      "problem.eyebrow": "昂贵的失败模式",
      "problem.title": "你不该再雇一家外包公司，才能弄清上一家在做什么。",
      "problem.lede": "交付越不透明，每个月买到的依赖就越多：没有文档的系统、脆弱的发布流程，以及公司内部无人能自信做出的技术决策。",
      "problem.p1t": "钱在流出，软件却没有交付。",
      "problem.p1d": "五位数账单持续出现，发布日期不断后移，待办事项越来越多。",
      "problem.p2t": "供应商垄断了真相。",
      "problem.p2d": "管理层看不见真实进度、风险，也不知道更换团队需要付出什么。",
      "problem.p3t": "每次发布都像一次特殊行动。",
      "problem.p3d": "测试靠人工，回滚没有把握，一个小改动也可能变成事故。",
      "proof.eyebrow": "真实测试案例 · Let’s Ride",
      "proof.title": "从被外包绑架，到业主自主运营。",
      "proof.stampTop": "真实项目",
      "proof.stampMain": "16 周",
      "proof.stampBottom": "兼职投入",
      "proof.stampTop": "真实项目",
      "proof.stampMain": "16 周",
      "proof.stampBottom": "兼职投入",
      "proof.m1": "外包月费 → 核心基础设施成本",
      "proof.m2": "花费仍未上线 → 运营成本降幅",
      "proof.m3b": "供应商黑箱",
      "proof.m3a": "客户自有系统",
      "proof.m3": "代码、云、部署、技术记忆与运行手册",
      "proof.s1t": "建立真实全貌",
      "proof.s1d": "在改动系统前，先审计代码、基础设施、供应商关系、交付流程与运营风险。",
      "proof.s2t": "重建基础",
      "proof.s2d": "整合架构，把账户交回公司控制，并让测试、生产和回滚成为可重复的日常流程。",
      "proof.s3t": "让交付可观测",
      "proof.s3d": "建立 CI/CD、错误可见性、成本控制、发布闸门与真正能解释运行状态的文档。",
      "proof.s4t": "安装受治理的自主系统",
      "proof.s4d": "部署维护、审查、安全、报告和监督等专用智能代理，同时把高风险决定留给人类。",
      "proof.disclosure": "以上数据来自为 Let’s Ride 建立的运营模式，描述该项目的实际情况，并不保证每家公司都获得相同结果。",
      "system.eyebrow": "自主化工程运营系统",
      "system.title": "自动化处理重复劳动，人类保留关键判断。",
      "system.lede": "这不是把聊天机器人装到一个失灵的团队上，而是一套完整运营系统：共享技术记忆、可重复基础设施、可观测交付、专业化智能代理和明确批准边界。",
      "system.l0t": "手工作坊",
      "system.l0d": "知识存在人脑里，发布依赖个人英雄主义。",
      "system.l1t": "可重复",
      "system.l1d": "通往生产环境的路径有文档、可复现。",
      "system.l2t": "可观测",
      "system.l2d": "错误、成本、交付和风险都能看见。",
      "system.l3t": "自动化",
      "system.l3d": "低风险任务可以从问题推进到经过审查的改动。",
      "system.l4t": "自反馈",
      "system.l4d": "系统能发现、提出、验证，并在无任务时安全待机。",
      "system.l5t": "有方向",
      "system.l5d": "人类意图引导一支透明可查的智能代理队伍。",
      "system.d1t": "技术大脑",
      "system.d1d": "长期保存决策、公司背景、架构、规范和当前优先级。",
      "system.d2t": "交付流水线",
      "system.d2d": "经过测试、预发布和审查的改动，配有明确上线与回滚路径。",
      "system.d3t": "智能代理队伍",
      "system.d3d": "专门处理修复、问题、审查、安全、报告、监督与清理的运行程序。",
      "system.d4t": "可观测性",
      "system.d4d": "在线状态、错误、花费、部署健康和代理表现都会成为运营信号。",
      "system.d5t": "业主界面",
      "system.d5d": "每周用普通语言汇报已交付内容、健康状态和需要决策的事项。",
      "system.d6t": "退出交接包",
      "system.d6d": "业主手册、运营手册、入职指南、连续性清单和客户控制的访问权限。",
      "engagement.eyebrow": "一条路径，三个阶段",
      "engagement.title": "先诊断，再以证据为基础重建，最后运营已经验证的系统。",
      "engagement.o1tag": "第一步",
      "engagement.o1t": "工程救援审计",
      "engagement.fixed": "固定费用",
      "engagement.o1d": "用两到三周建立真实全貌：代码、云、交付、供应商风险、安全与所有权。",
      "engagement.o1b1": "管理层风险简报",
      "engagement.o1b2": "技术与交付调查结果",
      "engagement.o1b3": "按优先级排列的 90 天路线图",
      "engagement.o1b4": "下一阶段的固定价格方案",
      "engagement.o1cta": "申请审计 ↗",
      "engagement.o2tag": "8–12 周",
      "engagement.o2t": "基础重建",
      "engagement.o2d": "重建可靠交付所需的关键部分：所有权、架构、CI/CD、可观测性、安全和运营记忆。",
      "engagement.o2b1": "客户控制的基础设施",
      "engagement.o2b2": "可重复的测试与生产流程",
      "engagement.o2b3": "监控、回滚和成本控制",
      "engagement.o2b4": "有完整文档的运营基础",
      "engagement.o3tag": "持续合作",
      "engagement.o3t": "自主化运营",
      "engagement.month": "/月",
      "engagement.o3d": "在已验证的基础上安装并运营智能代理队伍。系统归你所有；合作期间，我的判断力继续参与并创造价值。",
      "engagement.o3b1": "专业化维护与审查代理",
      "engagement.o3b2": "每周业主报告与方向会议",
      "engagement.o3b3": "高风险工作由人类批准",
      "engagement.o3b4": "持续更新的退出交接文档",
      "guardrails.eyebrow": "人类决策边界",
      "guardrails.title": "目标是消除重复劳动，不是消除人类判断。",
      "guardrails.lede": "智能代理可以调查、实现、测试和提出方案，但不能单方面决定可能伤害公司的事项。",
      "guardrails.g1t": "资金与身份",
      "guardrails.g1d": "支付、账单、身份验证和授权始终需要人工审查。",
      "guardrails.g2t": "生产环境",
      "guardrails.g2d": "生产部署和应用商店发布始终是有意识的人工操作。",
      "guardrails.g3t": "数据",
      "guardrails.g3d": "破坏性迁移和生产数据删除永远不会自动执行。",
      "guardrails.g4t": "花费与法律",
      "guardrails.g4d": "运行成本增加和法律相关改动必须等待业主批准。",
      "credibility.eyebrow": "运营者，而不是理论家",
      "credibility.title": "这套系统是新的，背后的判断力不是。",
      "credibility.lede": "十五年以上 CTO 领导、移动端、全栈、基础设施、外包交付经验，以及在失败会立刻暴露的真实产品中工作。",
      "credibility.c1": "消费级移动平台用户",
      "credibility.c2": "运行交易关键 POS 系统的地点",
      "credibility.c3": "通过自动化释放的每周业务容量",
      "credibility.c4n": "超级碗",
      "credibility.c4": "在绝不能延期的日期完成交付",
      "credibility.about": "我是 Brian Phillips。我带领过团队、接管过失败的供应商项目、从零打造过产品、维护过开源无人机软件，也为从初创公司到 Nike、Amazon、Toyota、PepsiCo 和 NAV Canada 的企业交付过项目。我建立这套运营模式，是因为软件公司需要比雇佣另一个黑箱更好的出路。",
      "faq.title": "第一次沟通前，大家通常想知道这些。",
      "faq.q1": "这是开发外包公司吗？",
      "faq.a1": "不是。我站在客户一边。目标是建立技术所有权、可靠交付和公司自己控制的运营系统，而不是让客户永久依赖我的劳动。",
      "faq.q2": "必须购买全部三个阶段吗？",
      "faq.a2": "不需要。审计本身就能提供可执行的风险评估与路线图。只有证据支持时，才会进入基础重建或自主化运营。",
      "faq.q3": "智能代理会未经批准部署代码吗？",
      "faq.a3": "不会。系统可以自动处理低风险工作，但生产部署、应用商店发布、支付、身份验证、数据迁移、破坏性改动、法律相关工作和增加花费都必须通过人工闸门。",
      "faq.q4": "合作结束后，我们拥有什么？",
      "faq.a4": "为贵公司安装的整套运营系统：基础设施、工作流、运行程序、技术记忆和交接文档。账户和付款方式从始至终都由客户控制。",
      "faq.q5": "什么样的公司最适合？",
      "faq.a5": "拥有真实软件业务、可观收入或融资，并面临昂贵交付问题的创始人或经营者。最匹配的是支付外包级成本，却缺乏透明度、可靠性或内部技术所有权的公司。",
      "contact.eyebrow": "工程救援审计 · 12,500 美元",
      "contact.title": "在为又一个不确定的月份买单前，先弄清真相。",
      "contact.lede": "告诉我你的产品、当前团队或供应商结构、每月交付成本，以及那个你始终得不到明确答案的问题。我会直接告诉你，审计是否是正确的下一步。",
      "contact.cta": "申请审计",
      "footer.tagline": "自主化 CTO · 人类判断，运营杠杆。"
    }
  };

  var english = {};
  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    english[element.getAttribute("data-i18n")] = element.textContent;
  });

  var themeToggle = document.getElementById("themeToggle");
  var langToggle = document.getElementById("langToggle");
  var menuToggle = document.getElementById("menuToggle");
  var mobileNav = document.getElementById("mobileNav");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    try { localStorage.setItem("theme", theme); } catch (error) {}
  }

  function applyLanguage(language) {
    var dictionary = language === "zh" ? translations.zh : english;
    document.documentElement.setAttribute("lang", language === "zh" ? "zh-Hans" : "en");
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var key = element.getAttribute("data-i18n");
      if (dictionary[key]) element.textContent = dictionary[key];
    });
    langToggle.textContent = language === "zh" ? "EN" : "中文";
    langToggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
    try { localStorage.setItem("lang", language); } catch (error) {}
  }

  themeToggle.addEventListener("click", function () {
    applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  langToggle.addEventListener("click", function () {
    applyLanguage(document.documentElement.getAttribute("lang") === "zh-Hans" ? "en" : "zh");
  });

  menuToggle.addEventListener("click", function () {
    var isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.setAttribute("aria-hidden", String(isOpen));
    mobileNav.classList.toggle("open", !isOpen);
  });

  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menuToggle.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
      mobileNav.classList.remove("open");
    });
  });

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reducedMotion && "IntersectionObserver" in window) {
    var revealTargets = document.querySelectorAll(".signal-list article, .case-metrics article, .case-narrative li, .maturity-ladder article, .offer, .guardrail-list article, .credibility-grid article, .faq-list details");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

    revealTargets.forEach(function (element) {
      element.classList.add("reveal");
      observer.observe(element);
    });
  }

  applyTheme(document.documentElement.getAttribute("data-theme") || "dark");
  applyLanguage(document.documentElement.getAttribute("lang") === "zh-Hans" ? "zh" : "en");
})();
