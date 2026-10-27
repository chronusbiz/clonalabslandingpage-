import Image from "next/image";
import { site } from "@/content/site";
import { ChannelIcon, Icons, Lucide } from "./icons";

const channelBg: Record<string, string> = {
  WhatsApp: "#25D366",
  Instagram: "linear-gradient(135deg,#833AB4,#E1306C,#F77737)",
  Messenger: "#0084FF",
  Widget: "#64748B",
};

const navItems = [
  Icons.dashboard,
  Icons.building,
  Icons.inbox,
  Icons.users,
  Icons.chart,
] as const;

/** Light-theme Unibox recreation inspired by the live Clonvo inbox. */
export function UniboxMock() {
  const { agency, threads, chat } = site.mocks;

  return (
    <figure className="w-full">
      <div
        className="overflow-hidden rounded-2xl border border-[#d7e0ef] bg-[#eef3fb] shadow-[0_28px_80px_rgba(15,23,42,0.28)]"
        aria-label="Clonvo Unibox — illustrative white-label inbox"
      >
        <div className="flex items-center gap-3 border-b border-[#d7e0ef] bg-white px-3 py-2.5">
          <p className="hidden text-[11px] text-slate-400 sm:block">
            Workspaces <span className="text-slate-300">›</span>{" "}
            <span className="font-medium text-slate-700">{agency.name}</span>{" "}
            <span className="text-slate-300">›</span> Inbox
          </p>
          <div className="ml-auto flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f9ee] px-2.5 py-1 text-[10px] font-semibold text-[#128a3e]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" aria-hidden />
              AI Live
            </span>
            <span className="hidden items-center gap-1 rounded-lg bg-[#2563eb] px-2.5 py-1 text-[10px] font-semibold text-white sm:inline-flex">
              <Lucide icon={Icons.plus} className="h-3 w-3" />
              New broadcast
            </span>
          </div>
        </div>

        <div className="flex min-h-[280px] bg-white sm:min-h-[320px]">
          <aside
            className="hidden w-11 shrink-0 flex-col items-center gap-2 bg-[#0f172a] py-3 sm:flex"
            aria-hidden
          >
            {navItems.map((Icon, i) => (
              <span
                key={i}
                className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                  i === 2 ? "bg-[#2563eb] text-white" : "text-slate-400"
                }`}
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={1.9} />
              </span>
            ))}
          </aside>

          <div className="hidden w-[11.5rem] shrink-0 flex-col border-r border-[#e6edf7] bg-[#f8fafc] md:flex">
            <div className="border-b border-[#e6edf7] px-3 py-2.5">
              <p className="text-[11px] font-semibold text-slate-800">Inbox</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {["Open", "All"].map((f, i) => (
                  <span
                    key={f}
                    className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${
                      i === 0 ? "bg-[#dbeafe] text-[#1d4ed8]" : "bg-white text-slate-500"
                    }`}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <ul className="flex-1 overflow-hidden">
              {threads.map((t) => (
                <li
                  key={t.name}
                  className={`border-b border-[#eef2f7] px-3 py-2.5 ${t.active ? "bg-white" : ""}`}
                >
                  <div className="flex items-start gap-2">
                    <span
                      className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ background: channelBg[t.channel] ?? "#64748B" }}
                    >
                      <ChannelIcon channel={t.channel} className="h-3 w-3" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <p className="truncate text-[11px] font-semibold text-slate-800">{t.name}</p>
                        <span className="shrink-0 text-[9px] text-slate-400">{t.time}</span>
                      </div>
                      <p className="mt-0.5 truncate text-[10px] text-slate-500">{t.preview}</p>
                    </div>
                    {t.unread ? (
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563eb]" />
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex items-center justify-between gap-2 border-b border-[#e6edf7] px-3 py-2.5">
              <div className="min-w-0">
                <p className="truncate text-[12px] font-semibold text-slate-900">{chat.contact}</p>
                <span className="mt-0.5 inline-flex items-center gap-1 rounded bg-[#eef2ff] px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-[#4338ca]">
                  <ChannelIcon channel={chat.channel} className="h-2.5 w-2.5" />
                  {chat.channelTag}
                </span>
              </div>
              <span className="shrink-0 rounded-full bg-[#e8f9ee] px-2.5 py-1 text-[10px] font-semibold text-[#128a3e]">
                AI on — take over
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-end gap-2.5 bg-[#f5f8fc] p-3">
              {chat.messages.map((m, i) =>
                m.from === "customer" ? (
                  <p
                    key={i}
                    className="max-w-[85%] rounded-2xl rounded-tl-md border border-[#e6edf7] bg-white px-3 py-2 text-[12px] leading-relaxed text-slate-700 shadow-sm"
                  >
                    {m.text}
                  </p>
                ) : (
                  <div key={i} className="ml-auto max-w-[85%]">
                    <p className="rounded-2xl rounded-tr-md bg-[#22c55e] px-3 py-2 text-[12px] leading-relaxed text-white shadow-sm">
                      {m.text}
                    </p>
                    {"source" in m && m.source ? (
                      <p className="mt-1 text-right text-[9px] text-slate-400">{m.source}</p>
                    ) : null}
                  </div>
                ),
              )}
            </div>

            <div className="flex items-center gap-2 border-t border-[#e6edf7] bg-white px-3 py-2">
              <span className="flex-1 rounded-xl border border-[#e6edf7] bg-[#f8fafc] px-3 py-2 text-[11px] text-slate-400">
                Type a message…
              </span>
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563eb] text-white"
                aria-hidden
              >
                <Lucide icon={Icons.send} className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>

          <aside className="hidden w-[9.5rem] shrink-0 flex-col border-l border-[#e6edf7] bg-[#f8fafc] p-3 lg:flex">
            <div className="flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dbeafe] text-sm font-bold text-[#1d4ed8]">
                DM
              </span>
              <p className="mt-2 text-[11px] font-semibold text-slate-800">{chat.contact}</p>
              <span className="mt-1 inline-flex items-center gap-1 rounded bg-[#eef2ff] px-1.5 py-0.5 text-[8px] font-bold uppercase text-[#4338ca]">
                <ChannelIcon channel={chat.channel} className="h-2.5 w-2.5" />
                {chat.channelTag}
              </span>
            </div>
            <dl className="mt-4 space-y-2 text-[10px]">
              <div>
                <dt className="text-slate-400">Status</dt>
                <dd className="font-medium text-slate-700">{chat.status}</dd>
              </div>
              <div>
                <dt className="text-slate-400">Last contact</dt>
                <dd className="font-medium text-slate-700">{chat.lastContact}</dd>
              </div>
              <div>
                <dt className="text-slate-400">Conversations</dt>
                <dd className="font-medium text-slate-700">{chat.conversations}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        Your branded Unibox · WhatsApp, Instagram & Messenger
      </figcaption>
    </figure>
  );
}

export function UniboxScreenshot() {
  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-2xl border border-[#d7e0ef] bg-white shadow-[0_28px_80px_rgba(15,23,42,0.28)]">
        <div className="flex items-center gap-1.5 border-b border-[#e6edf7] bg-[#f8fafc] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
          <span className="ml-3 text-[10px] text-slate-400">app.youragency.com / inbox</span>
        </div>
        <Image
          src="/unibox-inbox.png"
          alt="Clonvo Unibox inbox — unified WhatsApp, Instagram and Messenger conversations with AI replies"
          className="block h-auto w-full"
          width={1200}
          height={750}
          priority={false}
        />
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">Live Unibox product UI</figcaption>
    </figure>
  );
}
