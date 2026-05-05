"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";

const services = [
  {
    icon: "泡",
    title: "基础洗护",
    copy: "温水冲洗、专用香波、吹干梳理、耳道清洁、指甲修剪和脚底毛护理。",
    price: "¥88 起",
  },
  {
    icon: "梳",
    title: "皮毛养护",
    copy: "针对干燥、打结、换毛期和敏感皮肤，搭配护毛素、保湿喷雾与开结护理。",
    price: "¥158 起",
  },
  {
    icon: "剪",
    title: "造型修剪",
    copy: "圆脸、泰迪装、清爽短毛、卫生修剪，先沟通脸型和生活习惯再下剪。",
    price: "¥198 起",
  },
  {
    icon: "护",
    title: "猫咪专场",
    copy: "独立安静时段，低噪吹风与双人安抚，减少陌生环境带来的紧张感。",
    price: "¥168 起",
  },
];

const steps = [
  ["到店评估", "检查皮肤、耳朵、毛结和情绪状态，确认服务项目与注意事项。"],
  ["分区洗护", "按毛发和肤质选择香波，水温、风力和操作节奏都按宠物反应调整。"],
  ["吹干梳理", "彻底吹干底毛，梳开浮毛，减少潮湿引起的皮肤问题。"],
  ["护理反馈", "服务结束后同步护理记录、照片和居家梳毛建议。"],
];

const plans = [
  {
    title: "清爽洗护",
    intro: "适合日常清洁和短毛宠物。",
    amount: "¥88",
    items: ["基础清洁香波", "吹干梳理", "耳道与指甲护理"],
  },
  {
    title: "精致养护",
    intro: "适合换毛期、长毛和敏感皮肤。",
    amount: "¥158",
    items: ["低敏香波与护毛素", "深层梳毛与浮毛处理", "皮肤状态反馈"],
    featured: true,
  },
  {
    title: "造型焕新",
    intro: "适合需要修脸、修身和整体造型。",
    amount: "¥198",
    items: ["洗护加全身修剪", "脸型沟通与造型建议", "完成照留档"],
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1560743641-3914f2c45636?auto=format&fit=crop&w=900&q=82",
    alt: "干净的宠物护理空间",
    className: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=700&q=82",
    alt: "正在休息的小狗",
  },
  {
    src: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=700&q=82",
    alt: "猫咪护理前写真",
  },
  {
    src: "https://images.unsplash.com/photo-1597633425046-08f5110420b5?auto=format&fit=crop&w=900&q=82",
    alt: "工作人员正在为小狗洗护",
    className: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=700&q=82",
    alt: "洗护后开心的小狗",
  },
];

function getLocalDate() {
  const today = new Date();
  const timezoneOffset = today.getTimezoneOffset() * 60000;
  return new Date(today.getTime() - timezoneOffset).toISOString().slice(0, 10);
}

export default function Home() {
  const minDate = useMemo(() => getLocalDate(), []);
  const [toast, setToast] = useState("");
  const [appointmentDate, setAppointmentDate] = useState(minDate);
  const [visitDate, setVisitDate] = useState(minDate);

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  }

  function handleQuickSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const service = data.get("serviceType")?.toString() || "洗护服务";
    showToast(`已为你查询「${service}」档期，欢迎继续填写预约信息。`);
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleBookingSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name")?.toString() || "您";
    showToast(`${name}，预约信息已记录，门店会尽快与您确认。`);
    event.currentTarget.reset();
    setAppointmentDate(minDate);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-20 border-b border-white/30 bg-[#fffaf2]/85 backdrop-blur">
        <nav className="mx-auto flex min-h-[68px] w-[min(1160px,calc(100%-32px))] items-center justify-between gap-5 py-3" aria-label="主导航">
          <a className="inline-flex items-center gap-2.5 whitespace-nowrap font-extrabold" href="#top" aria-label="茸茸里宠物洗护首页">
            <span className="grid size-9 place-items-center rounded-full bg-[#496d62] text-white shadow-[0_8px_18px_rgba(73,109,98,0.28)]">爪</span>
            <span className="max-[620px]:max-w-[120px] max-[620px]:overflow-hidden max-[620px]:text-ellipsis">茸茸里宠物洗护</span>
          </a>
          <div className="hidden items-center justify-center gap-6 text-[15px] text-[#3d3a35] md:flex" aria-label="页面导航">
            <a href="#services">服务</a>
            <a href="#process">流程</a>
            <a href="#plans">价格</a>
            <a href="#contact">联系</a>
          </div>
          <a className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#e9785f] px-4 text-sm font-bold text-white shadow-[0_10px_24px_rgba(233,120,95,0.28)] sm:min-h-[42px] sm:px-[18px] sm:text-base" href="#booking">
            预约洗护
          </a>
        </nav>
      </header>

      <main id="top" className="overflow-hidden">
        <section className="grid min-h-[94vh] items-end bg-[linear-gradient(90deg,rgba(28,31,28,0.78),rgba(28,31,28,0.35)_48%,rgba(28,31,28,0.1)),url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1800&q=82')] bg-cover bg-center text-white max-md:min-h-0" aria-label="茸茸里宠物洗护">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))] pb-11 pt-[126px] max-md:pt-[110px]">
            <div className="max-w-[680px]">
              <p className="mb-3.5 font-extrabold text-[#f5d28d]">PET SPA · 温柔洗护 · 透明报价</p>
              <h1 className="mb-[18px] max-w-[680px] text-[42px] font-extrabold leading-[0.98] md:text-[clamp(42px,6vw,76px)]">把每一次洗澡，变成被认真照顾的一天。</h1>
              <p className="mb-[30px] max-w-[590px] text-base text-white/90 sm:text-[19px]">茸茸里为猫咪和狗狗提供低应激洗护、皮毛护理、造型修剪与到店接送。全程可视，护理用品公开，敏感肌也能安心。</p>
              <div className="mb-7 flex flex-wrap gap-3 sm:mb-12">
                <a className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#e9785f] px-[22px] font-extrabold text-white shadow-[0_14px_30px_rgba(233,120,95,0.32)] transition hover:-translate-y-0.5 sm:w-auto" href="#booking">立即预约</a>
                <a className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/50 bg-white/10 px-[22px] font-extrabold text-white backdrop-blur transition hover:-translate-y-0.5 sm:w-auto" href="#services">查看服务</a>
              </div>
            </div>

            <form onSubmit={handleQuickSubmit} className="grid max-w-[1020px] grid-cols-1 gap-3 rounded-lg border border-white/40 bg-[#fffaf2]/95 p-3.5 text-[#21201d] shadow-[0_18px_45px_rgba(60,50,38,0.16)] md:grid-cols-[1.2fr_1fr_1fr_auto]">
              <label className="min-w-0">
                <span className="mb-1 block text-xs font-extrabold text-[#6b665f]">宠物类型</span>
                <select name="petType" className="h-[46px] w-full rounded-md border border-black/15 bg-white px-3 outline-none focus:border-[#8aa399] focus:ring-4 focus:ring-[#8aa399]/20">
                  <option>小型犬</option>
                  <option>中大型犬</option>
                  <option>长毛猫</option>
                  <option>短毛猫</option>
                </select>
              </label>
              <label className="min-w-0">
                <span className="mb-1 block text-xs font-extrabold text-[#6b665f]">想做项目</span>
                <select name="serviceType" className="h-[46px] w-full rounded-md border border-black/15 bg-white px-3 outline-none focus:border-[#8aa399] focus:ring-4 focus:ring-[#8aa399]/20">
                  <option>基础洗护</option>
                  <option>深层养护</option>
                  <option>造型修剪</option>
                  <option>洁牙护理</option>
                </select>
              </label>
              <label className="min-w-0">
                <span className="mb-1 block text-xs font-extrabold text-[#6b665f]">到店日期</span>
                <input name="visitDate" type="date" min={minDate} value={visitDate} onChange={(event) => setVisitDate(event.target.value)} className="h-[46px] w-full rounded-md border border-black/15 bg-white px-3 outline-none focus:border-[#8aa399] focus:ring-4 focus:ring-[#8aa399]/20" />
              </label>
              <button className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#e9785f] px-[22px] font-extrabold text-white shadow-[0_14px_30px_rgba(233,120,95,0.32)] transition hover:-translate-y-0.5 md:w-auto" type="submit">查询档期</button>
            </form>
          </div>
        </section>

        <section id="services" className="bg-linear-to-b from-[#fffaf2] to-[#eef4ef] py-16 md:py-[86px]">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
            <SectionHead title="从洗净到养护，每一步都有标准。" copy="按宠物体型、毛量、皮肤状态和性格安排护理节奏，避免流水线式匆忙处理。" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article key={service.title} className="min-h-[258px] rounded-lg border border-black/15 bg-white/80 p-[22px] shadow-[0_12px_30px_rgba(65,78,70,0.08)]">
                  <div className="mb-[18px] grid size-11 place-items-center rounded-full bg-[#496d62] text-[22px] text-white">{service.icon}</div>
                  <h3 className="mb-2 text-[21px] font-extrabold">{service.title}</h3>
                  <p className="text-[15px] text-[#6b665f]">{service.copy}</p>
                  <span className="mt-2.5 inline-flex items-center gap-1.5 font-black text-[#e9785f]">{service.price}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-[86px]">
          <div className="mx-auto grid w-[min(1160px,calc(100%-32px))] grid-cols-1 items-center gap-[52px] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative h-[390px] md:h-[460px] lg:h-[570px]" aria-label="店内洗护环境照片">
              <div className="relative h-full overflow-hidden rounded-lg bg-[#f6ead7] shadow-[0_18px_45px_rgba(60,50,38,0.16)]">
                <Image src="https://images.unsplash.com/photo-1541599468348-e96984315921?auto=format&fit=crop&w=1000&q=82" alt="洗护师为小狗护理毛发" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="absolute bottom-[34px] right-[18px] h-[150px] w-[64%] overflow-hidden rounded-lg border-[6px] border-[#fffaf2] bg-[#f6ead7] shadow-[0_18px_45px_rgba(60,50,38,0.16)] md:h-[210px] md:w-[54%] lg:-right-7 lg:w-[48%] lg:border-8">
                <Image src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=700&q=82" alt="洗澡后干净放松的小狗" fill sizes="(max-width: 1024px) 54vw, 24vw" className="object-cover" />
              </div>
            </div>
            <div>
              <p className="mb-3.5 font-extrabold text-[#d4a247]">为什么选择我们</p>
              <h2 className="mb-[18px] text-[30px] font-extrabold leading-[1.08] md:text-[clamp(30px,4vw,50px)]">不追求快，追求宠物愿意下次再来。</h2>
              <p className="text-[#6b665f]">我们把每只宠物当作独立个体处理：怕水的慢一点，胆小的多安抚，毛结严重的先评估再处理。主人可以看到护理记录、用品选择和完成后的毛发状态。</p>
              <p className="text-[#6b665f]">店内分区清洁，猫狗错峰，工具一宠一消毒。预约制减少等待，洗护师会在服务前后给出护理建议。</p>
              <div className="mt-[30px] grid grid-cols-1 gap-3.5 sm:grid-cols-3">
                <Stat value="8+" label="年洗护经验" />
                <Stat value="30min" label="预约缓冲间隔" />
                <Stat value="1宠1档" label="护理记录留存" />
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="bg-[#263d37] py-16 text-white md:py-[86px]">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
            <SectionHead title="清楚的流程，让主人放心，也让宠物放松。" copy="从进店评估到回家护理建议，每个阶段都尽量减少不确定感。" dark />
            <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-white/15 bg-white/15 md:grid-cols-4 md:gap-px">
              {steps.map(([title, copy], index) => (
                <article key={title} className="min-h-[220px] bg-[#263d37] p-[26px]">
                  <b className="mb-[38px] grid size-[34px] place-items-center rounded-full bg-[#f4c976] text-[#263d37]">{index + 1}</b>
                  <h3 className="mb-2 text-xl font-extrabold">{title}</h3>
                  <p className="text-[15px] text-white/70">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f0e4] py-16 md:py-[86px]" aria-label="店内环境和宠物护理照片">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
            <SectionHead title="明亮干净的洗护空间。" copy="独立洗护台、低噪吹风区和等候区，让宠物和主人都更自在。" />
            <div className="grid auto-rows-[210px] grid-cols-1 gap-3.5 sm:grid-cols-2 md:auto-rows-[220px] md:grid-cols-[1.2fr_0.8fr_1fr]">
              {gallery.map((item) => (
                <div key={item.src} className={`relative overflow-hidden rounded-lg bg-[#f6ead7] ${item.className ?? ""}`}>
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className="bg-[#fffaf2] py-16 md:py-[86px]">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
            <SectionHead title="安心洗护套餐，价格清晰。" copy="实际价格会根据体型、毛量、毛结情况和宠物配合度确认，服务前会完整沟通。" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {plans.map((plan) => (
                <article key={plan.title} className={`flex min-h-[340px] flex-col rounded-lg border bg-white p-[26px] shadow-[0_12px_28px_rgba(65,55,43,0.08)] ${plan.featured ? "border-[#e9785f]/50 shadow-[0_18px_40px_rgba(233,120,95,0.16)]" : "border-black/15"}`}>
                  <h3 className="mb-1.5 text-2xl font-extrabold">{plan.title}</h3>
                  <p className="text-[#6b665f]">{plan.intro}</p>
                  <div className="my-[18px] text-[38px] font-black">{plan.amount}</div>
                  <ul className="mb-6 list-none p-0 text-[#6b665f]">
                    {plan.items.map((item) => (
                      <li key={item} className="border-b border-black/10 py-2">{item}</li>
                    ))}
                  </ul>
                  <a className={`mt-auto inline-flex min-h-12 items-center justify-center rounded-full border px-[22px] font-extrabold transition hover:-translate-y-0.5 ${plan.featured ? "border-[#e9785f] bg-[#e9785f] text-white" : "border-[#496d62]/30 bg-[#eef5f1] text-[#496d62]"}`} href="#booking">
                    预约这个
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#20302c] pt-16 text-white md:pt-[86px]">
          <div className="mx-auto grid w-[min(1160px,calc(100%-32px))] grid-cols-1 items-stretch gap-10 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="pb-0 lg:pb-[70px]">
              <p className="mb-3.5 font-extrabold text-[#f5d28d]">到店信息</p>
              <h2 className="mb-4 text-[32px] font-extrabold leading-[1.08] md:text-[clamp(32px,4vw,52px)]">今天就给毛孩子排一个舒服的洗护档期。</h2>
              <p className="text-white/70">营业时间 10:00-20:30，建议提前一天预约。特殊皮肤问题、严重毛结或初次到店的猫咪，请先电话沟通。</p>
              <div className="mt-7 grid gap-3.5">
                <InfoRow mark="址" text="上海市梧桐路 88 号 1F" />
                <InfoRow mark="电" text="021-8888 6620" />
                <InfoRow mark="时" text="周一至周日 10:00-20:30" />
              </div>
            </div>
            <div id="booking" className="self-end rounded-t-lg bg-[#fffaf2] p-[22px] text-[#21201d] shadow-[0_-18px_44px_rgba(0,0,0,0.18)] md:p-[30px]">
              <h3 className="mb-[18px] text-[28px] font-extrabold">预约洗护</h3>
              <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
                <TextField label="主人称呼" name="name" placeholder="例如：陈女士" required />
                <TextField label="联系电话" name="phone" type="tel" placeholder="手机号码" required />
                <TextField label="宠物昵称" name="petName" placeholder="例如：奶盖" />
                <label className="min-w-0">
                  <span className="mb-1 block text-xs font-extrabold text-[#6b665f]">预约日期</span>
                  <input name="appointment" type="date" min={minDate} value={appointmentDate} onChange={(event) => setAppointmentDate(event.target.value)} required className="h-[46px] w-full rounded-md border border-black/15 bg-white px-3 outline-none focus:border-[#8aa399] focus:ring-4 focus:ring-[#8aa399]/20" />
                </label>
                <label className="min-w-0 md:col-span-2">
                  <span className="mb-1 block text-xs font-extrabold text-[#6b665f]">备注</span>
                  <textarea name="message" placeholder="品种、体重、是否怕水、皮肤情况等" className="min-h-24 w-full resize-y rounded-md border border-black/15 bg-white p-3 outline-none focus:border-[#8aa399] focus:ring-4 focus:ring-[#8aa399]/20" />
                </label>
                <div className="md:col-span-2">
                  <button className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#496d62] px-[22px] font-extrabold text-white transition hover:-translate-y-0.5" type="submit">提交预约信息</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#20302c] py-6 text-sm text-white/60">
        <div className="mx-auto flex w-[min(1160px,calc(100%-32px))] flex-col justify-between gap-4 border-t border-white/15 pt-[22px] sm:flex-row">
          <span>© 2026 茸茸里宠物洗护</span>
          <span>低应激洗护 · 一宠一消毒 · 预约制服务</span>
        </div>
      </footer>

      <div className={`pointer-events-none fixed bottom-[22px] right-[22px] z-30 max-w-80 rounded-lg bg-[#496d62] px-4 py-3.5 text-white shadow-[0_18px_45px_rgba(60,50,38,0.16)] transition ${toast ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`} role="status" aria-live="polite">
        {toast}
      </div>
    </>
  );
}

function SectionHead({ title, copy, dark = false }: { title: string; copy: string; dark?: boolean }) {
  return (
    <div className="mb-[34px] items-end justify-between gap-7 md:flex">
      <h2 className="mb-0 max-w-[820px] text-[30px] font-extrabold leading-[1.08] md:whitespace-nowrap md:text-[clamp(30px,3.4vw,44px)]">{title}</h2>
      <p className={`mt-3 max-w-[390px] md:mt-0 ${dark ? "text-white/70" : "text-[#6b665f]"}`}>{copy}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-4 border-[#d4a247] bg-[#fff5e7] p-[18px]">
      <strong className="block text-[28px] leading-none">{value}</strong>
      <span className="text-[13px] text-[#6b665f]">{label}</span>
    </div>
  );
}

function InfoRow({ mark, text }: { mark: string; text: string }) {
  return (
    <div className="flex items-center gap-3 text-white/90">
      <span className="grid size-[38px] shrink-0 place-items-center rounded-full bg-white/10">{mark}</span>
      <strong>{text}</strong>
    </div>
  );
}

function TextField({ label, name, type = "text", placeholder, required = false }: { label: string; name: string; type?: string; placeholder: string; required?: boolean }) {
  return (
    <label className="min-w-0">
      <span className="mb-1 block text-xs font-extrabold text-[#6b665f]">{label}</span>
      <input name={name} type={type} placeholder={placeholder} required={required} className="h-[46px] w-full rounded-md border border-black/15 bg-white px-3 outline-none focus:border-[#8aa399] focus:ring-4 focus:ring-[#8aa399]/20" />
    </label>
  );
}
