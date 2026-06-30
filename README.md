# PM Copilot Agent

面向产品经理实习生的产品 Agent 原型。它把常见 PM 工作流做成一个可交互工作台，帮助用户从模糊想法生成需求澄清、PRD 初稿、竞品分析、指标设计和评审准备材料。

## 功能

- 需求澄清：拆解用户、目标、范围、风险和待确认问题
- PRD 初稿：生成背景、目标、角色、功能清单和验收标准
- 竞品分析：输出竞品分析维度和机会点
- 指标设计：拆解北极星指标、过程指标、质量指标和埋点
- 评审模拟：模拟研发、设计、运营和业务方可能提出的问题

## 使用方式

直接打开 `index.html` 即可使用。

也可以部署到 GitHub Pages：

1. 进入仓库 Settings
2. 打开 Pages
3. Source 选择默认分支 `main`
4. 保存后等待 GitHub 生成访问链接

## 项目结构

```text
pm-copilot-agent/
  index.html
  styles.css
  script.js
  README.md
```

## 后续可扩展

- 接入真实大模型 API，让 Agent 根据输入动态推理
- 增加 PRD 导出为 Markdown、PDF 或 Word
- 增加项目模板库，例如会员、打卡、搜索、推荐、支付
- 增加团队协作和评审记录
