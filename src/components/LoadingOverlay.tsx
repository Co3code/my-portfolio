type LoadingOverlayProps = {
  isLoading: boolean;
  brand?: string;
  label?: string;
};

export default function LoadingOverlay({ isLoading, brand, label }: LoadingOverlayProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-black/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-[#0a0a0a] px-6 py-5 text-white shadow-2xl border border-white/10">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-lg font-semibold tracking-wider animate-pulse">
          {brand ?? "AC"}
        </div>
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-white" />
        <div className="text-sm text-white/90">{label ?? "Loading..."}</div>
      </div>
    </div>
  );
}

