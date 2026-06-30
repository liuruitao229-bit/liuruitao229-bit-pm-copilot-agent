const journeyStages = [
  ["产生出行需求", "确定目的地与旅行人群", "看攻略、刷内容、确认预算", "东京/大阪/首尔/济州岛住哪里方便", "区域认知弱，预算与交通不清", "目的地住宿指南入口", "目的地搜索热度、转化漏斗", "热门区域权益包", "目的地攻略、区域榜单"],
  ["搜索酒店", "快速进入日韩酒店供给", "输入目的地、关键词、人数", "搜索词是否能命中真实需求", "地名、商圈、景点中英文混搜", "搜索联想和热门区域推荐", "搜索无结果率、改搜率", "目的地词库维护", "SEO/SEM 热词内容"],
  ["选择日期", "确定入住离店时间", "选择日期、晚数、人数", "价格波动、节假日库存", "跨日、连住、节假日价格不透明", "日历价格、节假日提示", "日期选择转化率、价格敏感度", "节假日库存预警", "樱花季、演唱会、假期提醒"],
  ["选择区域", "知道住在哪个区域更合适", "按商圈、景点、交通筛选", "交通便利、安全、离景点距离", "首次出境用户不懂区域差异", "区域卡片和地图解释", "区域筛选点击率、停留时长", "区域标签运营", "区域攻略和场景榜单"],
  ["浏览酒店", "高效比较候选酒店", "看价格、评分、位置、早餐、政策", "价格、评分、距离、取消政策", "信息密度高，难以快速比较", "列表信息分层和对比标签", "列表 CTR、筛选使用率", "卖点标签治理", "真实卖点文案"],
  ["地图找酒店", "基于地理位置做选择", "查看酒店和景点/地铁距离", "交通和周边便利性", "地图点位多，价格和位置难兼顾", "地图聚合、地铁/景点图层", "地图打开率、点位点击率", "地标 POI 维护", "交通攻略内容"],
  ["查看详情", "确认酒店是否可信且合适", "看图片、评价、设施、政策", "房型、税费、早餐、入住规则", "信息复杂，下单前犹豫", "详情页关键信息摘要", "详情页到房型页转化率", "酒店政策结构化", "真实图片、评论摘要"],
  ["对比房型", "选到合适房型和价格", "比较床型、取消、早餐、税费", "总价、权益、取消政策", "房型命名复杂，权益难比较", "房型对比表和差异高亮", "房型选择率、退出率", "房型标签标准化", "权益解释内容"],
  ["填写入住人信息", "顺利完成订单信息", "填写入住人、证件、联系方式", "姓名拼音、证件、到店时间", "海外酒店信息要求不熟悉", "表单示例和错误提示", "表单错误率、提交成功率", "客服兜底规则", "填写指南"],
  ["支付", "安全完成付款", "选择支付方式并确认金额", "汇率、税费、退款规则", "金额变化和跨境支付不确定", "价格明细和退款提示", "支付成功率、失败原因", "支付异常处理", "支付安全说明"],
  ["入住前准备", "知道怎么到店和入住", "查看确认单、交通、周边", "机场到酒店、入住时间、语言", "支付后缺少承接信息", "行前卡片和到店指南", "确认单打开率、客服咨询率", "行前触达", "机场交通、周边攻略"],
  ["入住后评价", "反馈体验并帮助他人", "评分、写评论、上传图片", "真实体验、痛点表达", "评论量大但洞察难沉淀", "结构化评价和痛点提炼", "评价提交率、关键词分布", "差评跟进机制", "真实卖点沉淀"],
];

const demandRows = [
  ["KRJP-001", "首次去大阪用户不知道住哪个区域", "首次出境/学生/情侣", "产生出行需求-选择区域", "区域页跳出率、区域筛选使用率", "客服咨询区域问题", "大阪住宿攻略搜索热度", "搜索页/列表页", "新增区域推荐卡：心斋桥、梅田、难波按场景解释", "搜索到列表转化率、区域筛选使用率", "中", "P0", "待评审"],
  ["KRJP-002", "列表页信息过多，用户难以比较酒店", "家庭/商务/情侣", "浏览酒店", "列表停留时长、筛选点击、详情 CTR", "高频咨询早餐、取消政策", "低价/亲子/交通便利内容", "酒店列表页", "强化价格、评分、距离、早餐、取消政策的对比标签", "列表 CTR、详情页转化率", "中", "P0", "待拆解"],
  ["KRJP-003", "支付成功后缺少入住前准备承接", "首次出境/自由行", "支付-入住前准备", "支付后确认单打开率、客服咨询率", "机场到酒店咨询量", "交通攻略内容供给", "支付成功页", "支付成功页增加行前准备卡：交通、入住规则、周边攻略", "客服咨询率下降、行前内容点击率", "低", "P1", "待评审"],
];

const keyPages = [
  ["Trip.com app 酒店搜索页", "承接目的地搜索和日期人数选择", "目的地联想、热门区域、日期价格提示", "日韩目的地住宿指南入口", "搜索转化率、无结果率、改搜率"],
  ["酒店列表页", "帮助用户快速筛选和比较", "价格、评分、位置、早餐、取消政策", "场景化标签和对比信息分层", "列表 CTR、筛选使用率、详情转化率"],
  ["地图页", "用地理位置辅助决策", "酒店点位、地铁/景点图层、价格气泡", "区域解释和交通便利度", "地图打开率、点位点击率"],
  ["酒店详情页", "建立信任并推动进入房型", "图片、评论、设施、政策、位置", "关键信息摘要和风险提示", "详情到房型转化率"],
  ["房型选择页", "帮助用户选对房型权益", "床型、早餐、取消政策、税费、总价", "房型对比和差异高亮", "房型选择率、退出率"],
  ["订单填写页", "降低跨境信息填写错误", "入住人、证件、联系方式、到店时间", "字段示例和实时校验", "表单错误率、提交成功率"],
  ["支付成功页", "承接入住前准备", "确认单、交通、入住规则、客服入口", "行前准备卡片", "确认单打开率、客服咨询率"],
  ["日韩酒店活动会场", "承接营销流量并完成转化", "优惠券、目的地专区、酒店榜单", "权益解释和场景化会场", "会场转化率、券核销率"],
  ["数据看板与复盘页面", "让团队持续发现机会", "漏斗、筛选、地图、评价、客服问题", "旅程分环节复盘", "各环节转化、流失、问题量"],
];

const workflows = {
  journey: {
    title: "日韩酒店用户旅程图 V1.0",
    greeting: "我会按携程日韩酒店预订链路，生成从出行需求到入住后评价的用户旅程图。你可以补充目标城市、用户类型或具体痛点。",
    makeArtifact: (input) => `
      <h3>项目定位</h3>
      <p><strong>岗位场景：</strong>携程产品经理｜Trip.com App 日韩酒店预订体验优化</p>
      <p><strong>补充输入：</strong>${escapeHtml(input)}</p>
      <h3>用户旅程图 V1.0</h3>
      <table>
        <tr><th>环节</th><th>用户目标</th><th>用户行为</th><th>用户关注点</th><th>可能卡点</th><th>页面机会点</th><th>数据支持</th><th>运营支持</th><th>市场内容支持</th></tr>
        ${journeyStages.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
      </table>
    `,
  },
  demand: {
    title: "日韩酒店需求池模板",
    greeting: "我会把项目痛点沉淀成需求池字段，方便你在作品集里展示需求管理能力。",
    makeArtifact: (input) => `
      <h3>需求池模板</h3>
      <p><strong>补充输入：</strong>${escapeHtml(input)}</p>
      <table>
        <tr><th>需求编号</th><th>问题描述</th><th>用户类型</th><th>用户场景</th><th>数据依据</th><th>运营依据</th><th>市场依据</th><th>页面位置</th><th>初步方案</th><th>预期影响指标</th><th>复杂度</th><th>优先级</th><th>状态</th></tr>
        ${demandRows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
      </table>
      <h3>优先级判断方式</h3>
      <ul>
        <li>P0：影响搜索、列表、详情、房型、支付等核心转化链路。</li>
        <li>P1：影响行前承接、运营活动、评价沉淀等体验和复购。</li>
        <li>P2：锦上添花型体验优化，适合数据验证后排期。</li>
      </ul>
    `,
  },
  pages: {
    title: "重点页面定义",
    greeting: "我会按 JD 要求定义重点页面，输出页面目标、核心模块、机会点和指标。",
    makeArtifact: (input) => `
      <h3>重点页面清单</h3>
      <p><strong>补充输入：</strong>${escapeHtml(input)}</p>
      <table>
        <tr><th>页面</th><th>页面目标</th><th>核心模块</th><th>页面机会点</th><th>核心指标</th></tr>
        ${keyPages.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
      </table>
      <h3>推荐作品集表达</h3>
      <ul>
        <li>先讲完整链路，再讲重点页面，不要只讲单点功能。</li>
        <li>每个页面都绑定一个用户问题和一个业务指标。</li>
        <li>强调 Trip.com 国际化场景：语言、区域认知、跨境支付、入住规则。</li>
      </ul>
    `,
  },
  support: {
    title: "数据/运营/市场支持",
    greeting: "我会把产品方案拆成跨团队协作清单，体现产品经理推动落地的能力。",
    makeArtifact: (input) => `
      <h3>跨团队支持清单</h3>
      <p><strong>补充输入：</strong>${escapeHtml(input)}</p>
      <table>
        <tr><th>团队</th><th>需要支持</th><th>用于解决的问题</th><th>交付物</th></tr>
        <tr><td>数据</td><td>搜索-列表-详情-房型-支付漏斗、筛选使用、地图行为、评论关键词</td><td>判断哪个环节流失最大，验证机会优先级</td><td>日韩酒店链路看板、周复盘报表</td></tr>
        <tr><td>运营</td><td>酒店标签、区域标签、优惠券、库存、政策结构化</td><td>让页面推荐和权益解释更可信</td><td>标签库、活动配置、客服问题归因</td></tr>
        <tr><td>市场内容</td><td>东京/大阪/首尔/济州岛住宿攻略、交通攻略、目的地榜单</td><td>解决首次出境用户区域认知弱的问题</td><td>目的地攻略、活动会场文案、榜单内容</td></tr>
        <tr><td>客服</td><td>入住规则、支付失败、取消政策、交通咨询高频问题</td><td>发现真实卡点并降低咨询量</td><td>FAQ、问题分布、差评跟进机制</td></tr>
      </table>
      <h3>核心复盘指标</h3>
      <ul>
        <li>搜索到列表转化率、列表到详情 CTR、详情到房型转化率。</li>
        <li>房型选择率、订单填写成功率、支付成功率。</li>
        <li>支付后确认单打开率、行前内容点击率、客服咨询率。</li>
        <li>评价提交率、评论关键词变化、差评问题闭环率。</li>
      </ul>
    `,
  },
  interview: {
    title: "携程产品经理面试表达",
    greeting: "我会帮你把这个项目讲成适合面试的产品经理项目经历。",
    makeArtifact: (input) => `
      <h3>60 秒项目介绍</h3>
      <p>我做的是 Trip.com App 日韩酒店预订链路优化，目标是帮助用户从产生出行需求、搜索酒店、选择区域、浏览列表、查看详情、对比房型、填写订单、完成支付，到入住前准备和入住后评价，形成一套完整的用户旅程图和需求池。我重点关注首次去东京、大阪、首尔、济州岛等目的地的用户，因为他们常见问题是区域认知弱、酒店信息难比较、房型和政策复杂、支付后行前准备承接不足。</p>
      <h3>面试官可能追问</h3>
      <table>
        <tr><th>问题</th><th>回答方向</th></tr>
        <tr><td>为什么选择日韩酒店？</td><td>日韩是高频出境目的地，用户对区域、交通、酒店政策和语言环境有明显信息不对称。</td></tr>
        <tr><td>你怎么判断优先级？</td><td>先看核心链路转化影响，再看用户痛点强度、数据依据、运营可落地性和实现复杂度。</td></tr>
        <tr><td>你最想先做哪个功能？</td><td>优先做列表页信息分层和区域推荐，因为它影响搜索后的核心决策效率。</td></tr>
        <tr><td>如何证明方案有效？</td><td>看列表 CTR、详情转化、房型选择率、支付成功率，以及客服咨询率是否下降。</td></tr>
      </table>
      <h3>你的补充输入</h3>
      <p>${escapeHtml(input)}</p>
    `,
  },
};

const workflowList = document.querySelector("#workflowList");
const workflowTitle = document.querySelector("#workflowTitle");
const messages = document.querySelector("#messages");
const composer = document.querySelector("#composer");
const promptInput = document.querySelector("#promptInput");
const artifact = document.querySelector("#artifact");
const copyButton = document.querySelector("#copyButton");

let activeWorkflow = "journey";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function addMessage(role, text) {
  const node = document.createElement("div");
  node.className = `message ${role}`;
  node.textContent = text;
  messages.appendChild(node);
  messages.scrollTop = messages.scrollHeight;
}

function setWorkflow(key) {
  activeWorkflow = key;
  const workflow = workflows[key];
  workflowTitle.textContent = workflow.title;
  document.querySelectorAll(".workflow").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.workflow === key);
  });
  messages.innerHTML = "";
  addMessage("agent", workflow.greeting);
  artifact.innerHTML = workflow.makeArtifact("携程产品经理岗位，聚焦 Trip.com App 日韩酒店预订链路");
}

function generateReply() {
  const title = workflows[activeWorkflow].title;
  return `已按“${title}”生成右侧作品集内容。你可以继续输入更具体的用户类型、城市或页面痛点，我会把它补进当前模块。`;
}

workflowList.addEventListener("click", (event) => {
  const button = event.target.closest(".workflow");
  if (!button) return;
  setWorkflow(button.dataset.workflow);
});

composer.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = promptInput.value.trim();
  if (!input) return;
  addMessage("user", input);
  artifact.innerHTML = workflows[activeWorkflow].makeArtifact(input);
  addMessage("agent", generateReply());
  promptInput.value = "";
});

copyButton.addEventListener("click", async () => {
  const text = artifact.innerText.trim();
  if (!text) return;
  await navigator.clipboard.writeText(text);
  copyButton.textContent = "已复制";
  window.setTimeout(() => {
    copyButton.textContent = "复制";
  }, 1400);
});

setWorkflow(activeWorkflow);
