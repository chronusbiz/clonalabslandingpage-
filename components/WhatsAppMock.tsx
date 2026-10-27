import { site } from "@/content/site";
import { ChannelIcon, Icons, Lucide } from "./icons";

/** Compact chat pane matching Unibox (green AI bubbles). */
export function MessengerMock() {
  const chat = site.mocks.chat;
  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-2xl border border-[#d7e0ef] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.2)]">
        <div className="flex items-center justify-between gap-2 border-b border-[#e6edf7] px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">{chat.contact}</p>
            <span className="mt-1 inline-flex items-center gap-1 rounded bg-[#eef2ff] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#4338ca]">
              <ChannelIcon channel={chat.channel} className="h-3 w-3" />
              {chat.channelTag}
            </span>
          </div>
          <span className="rounded-full bg-[#e8f9ee] px-2.5 py-1 text-[10px] font-semibold text-[#128a3e]">
            AI on — take over
          </span>
        </div>
        <ul className="space-y-3 bg-[#f5f8fc] p-4">
          {chat.messages.map((m, i) => (
            <li key={i}>
              {m.from === "customer" ? (
                <p className="max-w-[88%] rounded-2xl rounded-tl-md border border-[#e6edf7] bg-white px-3.5 py-2.5 text-sm leading-relaxed text-slate-700 shadow-sm">
                  {m.text}
                </p>
              ) : (
                <div className="ml-auto max-w-[88%]">
                  <p className="rounded-2xl rounded-tr-md bg-[#22c55e] px-3.5 py-2.5 text-sm leading-relaxed text-white shadow-sm">
                    {m.text}
                  </p>
                  {"source" in m && m.source ? (
                    <p className="mt-1.5 inline-flex w-full items-center justify-end gap-1 text-right text-[10px] text-slate-400">
                      <Lucide icon={Icons.fileCheck} className="h-3 w-3" />
                      {m.source}
                    </p>
                  ) : null}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 border-t border-[#e6edf7] px-3 py-2.5">
          <span className="flex-1 rounded-xl border border-[#e6edf7] bg-[#f8fafc] px-3 py-2 text-xs text-slate-400">
            Type a message…
          </span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563eb] text-white">
            <Lucide icon={Icons.send} className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">
        Unibox thread · AI with cited sources
      </figcaption>
    </figure>
  );
}

export function WhatsAppMock() {
  return <MessengerMock />;
}
