"use client";

import { useEffect, useState } from "react";

type Language = "en" | "zh";

const publications = [
  {
    year: "2026",
    venue: "Advanced Engineering Informatics",
    tier: "CAS Q1",
    title:
      "STAR: Spatial-Temporal Attention Reasoning Model for Dynamic Graph Network Routing in Cyber-Physical Internet",
    authors: "Zefeng Lu, Zhiheng Zhao, and George Q. Huang",
  },
  {
    year: "2025",
    venue: "IEEE TIFS",
    tier: "CCF-A",
    title:
      "Prompt-guided Transformer and MLLM Interactive Learning for Text-Based Pedestrian Search",
    authors: "Zefeng Lu, Ronghao Lin, Yap-Peng Tan, and Haifeng Hu",
  },
  {
    year: "2025",
    venue: "IEEE TNNLS",
    tier: "CAS Q1",
    title:
      "Disentangling Modality and Posture Factors: Memory-Attention and Orthogonal Decomposition for Visible-Infrared Person Re-Identification",
    authors: "Zefeng Lu, Ronghao Lin, and Haifeng Hu",
  },
  {
    year: "2024",
    venue: "IEEE TIFS",
    tier: "CCF-A",
    title:
      "Mind the Inconsistent Semantics in Positive Pairs: Semantic Aligning and Multimodal Contrastive Learning for Text-Based Pedestrian Search",
    authors: "Zefeng Lu, Ronghao Lin, and Haifeng Hu",
  },
  {
    year: "2024",
    venue: "IEEE TMM",
    tier: "CCF-A",
    title:
      "Tri-level Modality-information Disentanglement for Visible-Infrared Person Re-Identification",
    authors: "Zefeng Lu, Ronghao Lin, and Haifeng Hu",
  },
  {
    year: "2023",
    venue: "IEEE TIFS",
    tier: "CCF-A",
    title:
      "Modality and Camera Factors Bi-Disentanglement for NIR-VIS Object Re-Identification",
    authors: "Zefeng Lu, Ronghao Lin, and Haifeng Hu",
  },
  {
    year: "2023",
    venue: "IEEE TITS",
    tier: "CAS Q1",
    title: "MART: Mask-Aware Reasoning Transformer for Vehicle Re-identification",
    authors: "Zefeng Lu, Ronghao Lin, and Haifeng Hu",
  },
  {
    year: "2023",
    venue: "IEEE TITS",
    tier: "CAS Q1",
    title:
      "Mask-Aware Pseudo Label Denoising for Unsupervised Vehicle Re-Identification",
    authors: "Zefeng Lu, Ronghao Lin, Qiaolin He, and Haifeng Hu",
  },
  {
    year: "2022",
    venue: "IEEE TITS",
    tier: "CAS Q1",
    title: "Identity-unrelated Information Decoupling Model for Vehicle Re-identification",
    authors: "Zefeng Lu, Ronghao Lin, and Haifeng Hu",
  },
];

const copy = {
  en: {
    nav: ["About", "Research", "Publications", "Experience", "Join Us"],
    navIds: ["about", "research", "publications", "experience", "join"],
    eyebrow: "AI SECURITY · MULTIMODAL LEARNING",
    name: "Zefeng Lu",
    cnName: "卢泽丰",
    role: "Associate Professor",
    school: "Institute of Cyber Security, Guangzhou University",
    intro:
      "I work at the intersection of trustworthy multimodal intelligence, computer vision, and intelligent transportation—building AI systems that are not only capable, but also robust, aligned, and dependable.",
    email: "Get in touch",
    scholar: "Google Scholar",
    scroll: "Explore my research",
    stats: [
      ["20+", "Publications"],
      ["3", "Granted patents"],
      ["2024", "Ph.D., SYSU"],
    ],
    aboutTitle: "About",
    aboutLead:
      "My research asks a simple but consequential question: how can multimodal AI understand the world without being easily misled?",
    aboutBody:
      "I am an Associate Professor and a member of Dean Hui Lu’s research team at Guangzhou University. I received my Ph.D. from Sun Yat-sen University in 2024 under the supervision of Prof. Haifeng Hu. Before joining GZHU, I was a Research Assistant with the CARTIN Lab at Nanyang Technological University and a Postdoctoral Fellow with the RIAM Lab at The Hong Kong Polytechnic University.",
    memberships:
      "Member of IEEE and China Society of Image and Graphics. Reviewer for TIFS, TITS, TMM, TNNLS, TIP, TCSVT, and CVIU.",
    researchKicker: "FOCUS AREAS",
    researchTitle: "Research",
    researchIntro:
      "Three connected threads shape my current work—from foundations of trustworthy multimodal models to real-world perception systems.",
    areas: [
      {
        n: "01",
        title: "Multimodal AI Security",
        text: "Adversarial attack and defense for cross-modal foundation models, with a focus on trustworthy analysis of CLIP-like systems.",
        tags: ["Adversarial Robustness", "CLIP", "Trustworthy AI"],
      },
      {
        n: "02",
        title: "Safe Multimodal LLMs",
        text: "Understanding and mitigating hallucination, improving safety alignment, and building dependable multimodal language models.",
        tags: ["MLLM", "Hallucination", "Safety Alignment"],
      },
      {
        n: "03",
        title: "Intelligent Transportation",
        text: "Computer vision for person and vehicle re-identification, text-based retrieval, and 3D perception in complex environments.",
        tags: ["Re-identification", "Vision–Language", "3D Vision"],
      },
    ],
    pubsKicker: "SELECTED WORK",
    pubsTitle: "Publications",
    pubsIntro:
      "Selected journal papers in information forensics, multimedia, neural networks, and intelligent transportation.",
    allWorks: "View full list on Google Scholar",
    expKicker: "ACADEMIC PATH",
    expTitle: "Experience",
    exp: [
      ["Present", "Guangzhou University", "Associate Professor · Institute of Cyber Security"],
      ["Postdoctoral", "The Hong Kong Polytechnic University", "RIAM Lab · with Prof. George Q. Huang"],
      ["Research Assistant", "Nanyang Technological University", "CARTIN Lab · with Prof. Yap-Peng Tan"],
      ["2024 · Ph.D.", "Sun Yat-sen University", "Advised by Prof. Haifeng Hu"],
    ],
    joinKicker: "WORK WITH ME",
    joinTitle: "Curious minds are welcome.",
    joinBody:
      "I am looking for motivated students interested in AI security, computer vision, and deep learning. If you enjoy asking hard questions and learning by building, I would be glad to hear from you.",
    joinButton: "Start a conversation",
    footer: "Associate Professor · Guangzhou University",
    source: "Institutional profile",
  },
  zh: {
    nav: ["关于我", "研究方向", "代表论文", "学术经历", "加入团队"],
    navIds: ["about", "research", "publications", "experience", "join"],
    eyebrow: "人工智能安全 · 多模态学习",
    name: "卢泽丰",
    cnName: "Zefeng Lu",
    role: "副教授",
    school: "广州大学网络空间安全学院",
    intro:
      "我的研究聚焦可信多模态智能、计算机视觉与智能交通，致力于构建不仅能力强大，而且鲁棒、对齐、可靠的人工智能系统。",
    email: "联系我",
    scholar: "Google 学术",
    scroll: "了解我的研究",
    stats: [
      ["20+", "学术论文"],
      ["3", "授权发明专利"],
      ["2024", "中山大学博士"],
    ],
    aboutTitle: "关于我",
    aboutLead:
      "我的研究围绕一个简单但重要的问题展开：多模态人工智能如何理解世界，同时避免被轻易误导？",
    aboutBody:
      "现任广州大学副教授、鲁辉院长团队核心成员。2024 年博士毕业于中山大学，导师为胡海峰教授。加入广州大学前，先后在新加坡南洋理工大学 CARTIN 实验室担任研究助理，并在香港理工大学 RIAM 实验室从事博士后研究。",
    memberships:
      "IEEE 会员、中国图象图形学学会会员；担任 TIFS、TITS、TMM、TNNLS、TIP、TCSVT、CVIU 等期刊审稿人。",
    researchKicker: "研究聚焦",
    researchTitle: "研究方向",
    researchIntro:
      "从可信多模态模型的基础问题，到真实环境中的智能感知系统，当前研究由三个彼此关联的方向构成。",
    areas: [
      {
        n: "01",
        title: "多模态人工智能安全",
        text: "面向跨模态基础模型的对抗攻击与防御，重点研究 CLIP 类模型的可信分析与鲁棒学习。",
        tags: ["对抗鲁棒性", "CLIP", "可信人工智能"],
      },
      {
        n: "02",
        title: "多模态大语言模型安全",
        text: "理解并缓解模型幻觉，提升安全对齐能力，构建更加可靠的多模态大语言模型。",
        tags: ["多模态大模型", "幻觉缓解", "安全对齐"],
      },
      {
        n: "03",
        title: "智能交通",
        text: "研究人员与车辆重识别、文本图像检索，以及复杂交通环境中的三维视觉与智能感知。",
        tags: ["目标重识别", "视觉语言", "三维视觉"],
      },
    ],
    pubsKicker: "代表性成果",
    pubsTitle: "论文发表",
    pubsIntro: "精选发表于信息安全、多媒体、神经网络和智能交通领域重要期刊的代表性论文。",
    allWorks: "在 Google 学术查看全部成果",
    expKicker: "学术历程",
    expTitle: "学术经历",
    exp: [
      ["至今", "广州大学", "副教授 · 网络空间安全学院"],
      ["博士后", "香港理工大学", "RIAM 实验室 · 合作导师：黄国全教授"],
      ["研究助理", "新加坡南洋理工大学", "CARTIN 实验室 · 合作导师：Ya-Peng Tan 教授"],
      ["2024 · 博士", "中山大学", "导师：胡海峰教授"],
    ],
    joinKicker: "加入团队",
    joinTitle: "期待与好奇的你相遇。",
    joinBody:
      "欢迎对人工智能安全、计算机视觉和深度学习感兴趣的同学联系。如果你喜欢提出有挑战的问题，并愿意在实践中持续学习，期待与你一起探索。",
    joinButton: "给我发邮件",
    footer: "副教授 · 广州大学",
    source: "学校个人主页",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
  }, [lang]);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Zefeng Lu, home">
          ZL<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          {t.nav.map((item, index) => (
            <a href={`#${t.navIds[index]}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <button
          className="language"
          type="button"
          onClick={() => setLang(lang === "en" ? "zh" : "en")}
          aria-label={lang === "en" ? "切换到中文" : "Switch to English"}
        >
          <span className={lang === "en" ? "active" : ""}>EN</span>
          <i />
          <span className={lang === "zh" ? "active" : ""}>中</span>
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span />{t.eyebrow}</p>
          <h1>{t.name}<small>{t.cnName}</small></h1>
          <p className="role">{t.role}<br />{t.school}</p>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:luzefeng@gzhu.edu.cn">
              {t.email} <span>↗</span>
            </a>
            <a
              className="button secondary"
              href="https://scholar.google.com/citations?user=ar23Gp8AAAAJ"
              target="_blank"
              rel="noreferrer"
            >
              {t.scholar} <span>↗</span>
            </a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img src="/zefeng-lu.png" alt="Portrait of Zefeng Lu" />
          </div>
          <p className="portrait-note">GUANGZHOU · CHINA <b>23°07′N</b></p>
        </div>
        <div className="hero-stats">
          {t.stats.map(([number, label]) => (
            <div key={label}><strong>{number}</strong><span>{label}</span></div>
          ))}
        </div>
        <a className="scroll-cue" href="#about"><span>↓</span>{t.scroll}</a>
      </section>

      <section className="about section" id="about">
        <aside><span>01</span><p>{t.aboutTitle}</p></aside>
        <div className="about-content">
          <h2>{t.aboutLead}</h2>
          <div className="about-columns">
            <p>{t.aboutBody}</p>
            <p>{t.memberships}</p>
          </div>
        </div>
      </section>

      <section className="research section-dark" id="research">
        <div className="section-heading">
          <p className="section-kicker">{t.researchKicker}</p>
          <h2>{t.researchTitle}</h2>
          <p>{t.researchIntro}</p>
        </div>
        <div className="research-grid">
          {t.areas.map((area) => (
            <article className="research-card" key={area.n}>
              <div className="card-top"><span>{area.n}</span><i>↗</i></div>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <div className="tags">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="publications section" id="publications">
        <div className="section-heading split">
          <div>
            <p className="section-kicker">{t.pubsKicker}</p>
            <h2>{t.pubsTitle}</h2>
          </div>
          <p>{t.pubsIntro}</p>
        </div>
        <div className="publication-list">
          {publications.map((paper, index) => (
            <article className="publication" key={paper.title}>
              <div className="pub-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="pub-main">
                <div className="pub-meta">
                  <span>{paper.year}</span><span>{paper.venue}</span><b>{paper.tier}</b>
                </div>
                <h3>{paper.title}</h3>
                <p>{paper.authors}</p>
              </div>
              <span className="pub-arrow">↗</span>
            </article>
          ))}
        </div>
        <a
          className="text-link"
          href="https://scholar.google.com/citations?user=ar23Gp8AAAAJ&view_op=list_works&sortby=pubdate"
          target="_blank"
          rel="noreferrer"
        >
          {t.allWorks} <span>↗</span>
        </a>
      </section>

      <section className="experience section" id="experience">
        <div className="section-heading">
          <p className="section-kicker">{t.expKicker}</p>
          <h2>{t.expTitle}</h2>
        </div>
        <div className="timeline">
          {t.exp.map(([time, place, detail], index) => (
            <article key={place + time}>
              <div className="timeline-marker"><i /><span>{String(index + 1).padStart(2, "0")}</span></div>
              <p className="time">{time}</p>
              <h3>{place}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="join" id="join">
        <div className="join-orbit" aria-hidden="true"><span /><span /><span /></div>
        <p className="section-kicker">{t.joinKicker}</p>
        <h2>{t.joinTitle}</h2>
        <p>{t.joinBody}</p>
        <a className="button light" href="mailto:luzefeng@gzhu.edu.cn">
          {t.joinButton} <span>↗</span>
        </a>
      </section>

      <footer>
        <div>
          <a className="wordmark" href="#top">ZL<span>.</span></a>
          <p>{t.footer}</p>
        </div>
        <div className="footer-links">
          <a href="mailto:luzefeng@gzhu.edu.cn">Email</a>
          <a href="https://scholar.google.com/citations?user=ar23Gp8AAAAJ" target="_blank" rel="noreferrer">Scholar</a>
          <a href="https://wyy.gzhu.edu.cn/info/1160/4383.htm" target="_blank" rel="noreferrer">{t.source}</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Zefeng Lu</p>
      </footer>
    </main>
  );
}
