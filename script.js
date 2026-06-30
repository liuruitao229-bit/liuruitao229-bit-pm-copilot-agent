const workflows = {
  clarify: {
    title: "需求澄清",
    greeting: "把一个产品想法发给我，我会帮你拆成背景、用户、目标、范围和待确认问题。",
    makeArtifact: (input) => `
      <h3>需求澄清结果</h3>
      <p><strong>原始想法：</strong>${escapeHtml(input)}</p>
      <h3>建议先确认的问题</h3>
      <ul>
        <li>目标用户是谁？是新用户、老用户、付费用户，还是内部运营同学？</li>
        <li>当前最痛的问题是什么？有没有数据或用户反馈支撑？</li>
        <li>这次需求的业务目标是什么？增长、留存、转化、效率还是收入？</li>
        <li>必须上线的核心功能是什么？哪些可以放到下一版？</li>
        <li>怎么判断做成了？需要提前定义成功指标和观察周期。</li>
      </ul>
      <h3>初步需求定义</h3>
      <table>
        <tr><th>模块</th><th>内容</th></tr>
        <tr><td>用户场景</td><td>用户在完成核心任务时遇到阻碍，需要一个更清晰、更低成本的路径。</td></tr>
        <tr><td>产品目标</td><td>降低用户决策成本，提升关键路径完成率。</td></tr>
        <tr><td>版本范围</td><td>优先完成主流程、关键状态和基础数据记录。</td></tr>
        <tr><td>主要风险</td><td>需求价值不清、边界状态遗漏、后续运营承接不足。</td></tr>
      </table>
    `,
  },
  prd: {
    title: "PRD 初稿",
    greeting: "告诉我产品功能，我会生成一版可以继续修改的 PRD 骨架。",
    makeArtifact: (input) => `
      <h3>PRD 初稿</h3>
      <p><strong>项目名称：</strong>${escapeHtml(input)}</p>
      <h3>1. 背景与目标</h3>
      <ul>
        <li>背景：当前用户在核心路径中存在明显摩擦，需要通过产品能力提升体验与转化。</li>
        <li>目标：让用户更快完成目标动作，并让业务方能够追踪效果。</li>
      </ul>
      <h3>2. 用户角色</h3>
      <table>
        <tr><th>角色</th><th>诉求</th><th>成功体验</th></tr>
        <tr><td>普通用户</td><td>快速理解并完成任务</td><td>路径清楚、反馈及时</td></tr>
        <tr><td>运营同学</td><td>查看效果并调整策略</td><td>数据可追踪、配置可管理</td></tr>
      </table>
      <h3>3. 功能清单</h3>
      <ul>
        <li>P0：主流程入口、核心操作、成功状态、失败提示。</li>
        <li>P1：记录历史、消息提醒、运营配置。</li>
        <li>P2：个性化展示、分享、成就反馈。</li>
      </ul>
      <h3>4. 验收标准</h3>
      <ul>
        <li>用户能从入口进入并完成核心动作。</li>
        <li>所有空、错、加载、无权限状态都有明确反馈。</li>
        <li>关键埋点能够记录曝光、点击、完成、失败。</li>
      </ul>
    `,
  },
  competitor: {
    title: "竞品分析",
    greeting: "输入产品方向或竞品名称，我会整理竞品分析表和可借鉴机会点。",
    makeArtifact: (input) => `
      <h3>竞品分析框架</h3>
      <p><strong>分析对象：</strong>${escapeHtml(input)}</p>
      <table>
        <tr><th>维度</th><th>观察重点</th><th>输出结论</th></tr>
        <tr><td>定位</td><td>服务谁，解决什么核心问题</td><td>判断它抢占的是效率、内容、交易还是社区心智</td></tr>
        <tr><td>主路径</td><td>从进入到完成目标的步骤</td><td>找出转化强弱点</td></tr>
        <tr><td>功能结构</td><td>核心功能、辅助功能、增长功能</td><td>区分必须做和可延后</td></tr>
        <tr><td>商业模式</td><td>付费、广告、交易抽佣、增值服务</td><td>判断功能背后的业务目标</td></tr>
        <tr><td>体验细节</td><td>提示、反馈、默认值、异常状态</td><td>沉淀可复用设计点</td></tr>
      </table>
      <h3>可借鉴机会</h3>
      <ul>
        <li>借鉴竞品的低成本引导方式，减少新用户理解门槛。</li>
        <li>在核心路径上减少非必要步骤，优先保证完成率。</li>
        <li>用差异化场景或服务承接，避免只做功能复制。</li>
      </ul>
    `,
  },
  metrics: {
    title: "指标设计",
    greeting: "输入功能目标，我会帮你拆北极星指标、过程指标和埋点。",
    makeArtifact: (input) => `
      <h3>指标设计</h3>
      <p><strong>功能目标：</strong>${escapeHtml(input)}</p>
      <table>
        <tr><th>指标类型</th><th>建议指标</th><th>说明</th></tr>
        <tr><td>北极星指标</td><td>核心动作完成率</td><td>衡量用户是否真的完成目标行为</td></tr>
        <tr><td>过程指标</td><td>入口点击率、流程开始率、步骤流失率</td><td>定位用户在哪一步离开</td></tr>
        <tr><td>质量指标</td><td>失败率、投诉率、撤回率</td><td>避免只看增长不看体验</td></tr>
        <tr><td>长期指标</td><td>次日/7日留存、复用率</td><td>判断功能是否有持续价值</td></tr>
      </table>
      <h3>埋点建议</h3>
      <ul>
        <li>页面曝光：用户是否看到入口。</li>
        <li>按钮点击：用户是否有意愿开始。</li>
        <li>提交成功：核心动作是否完成。</li>
        <li>异常失败：记录失败原因，方便后续优化。</li>
      </ul>
    `,
  },
  review: {
    title: "评审模拟",
    greeting: "输入你的方案，我会模拟研发、设计、运营和老板可能会问的问题。",
    makeArtifact: (input) => `
      <h3>评审模拟问题</h3>
      <p><strong>方案：</strong>${escapeHtml(input)}</p>
      <div class="tag-row">
        <span class="tag">研发视角</span>
        <span class="tag">设计视角</span>
        <span class="tag">运营视角</span>
        <span class="tag">业务视角</span>
      </div>
      <table>
        <tr><th>角色</th><th>可能问题</th><th>建议回答方向</th></tr>
        <tr><td>研发</td><td>边界状态有哪些？异常怎么处理？</td><td>列出空、错、加载、无权限、重复提交等状态。</td></tr>
        <tr><td>设计</td><td>为什么用户会点这个入口？</td><td>说明入口出现时机、文案动机和用户任务相关性。</td></tr>
        <tr><td>运营</td><td>上线后怎么推广和承接？</td><td>准备触达渠道、活动节奏和运营配置需求。</td></tr>
        <tr><td>老板</td><td>为什么现在必须做？</td><td>用用户痛点、业务损失、机会窗口和预期指标回答。</td></tr>
      </table>
      <h3>会前检查</h3>
      <ul>
        <li>需求背景是否有数据或用户反馈。</li>
        <li>P0 范围是否足够收敛。</li>
        <li>指标是否能证明功能有效。</li>
        <li>上线后是否有人负责运营和复盘。</li>
      </ul>
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

let activeWorkflow = "clarify";

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
  artifact.innerHTML = workflow.makeArtifact("示例：在线课程 App 的学习打卡功能");
}

function generateReply() {
  const title = workflows[activeWorkflow].title;
  return `我已按“${title}”模式处理。右侧是可以直接复制修改的结构化产出。建议你下一步补充真实用户、业务目标和约束条件，我可以继续帮你细化到评审版本。`;
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
