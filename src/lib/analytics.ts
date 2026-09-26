export type ConversionEvent =
  | "whatsapp_intent"
  | "phone_click"
  | "directions_click"
  | "membership_form_opened";

export function trackConversion(
  event: ConversionEvent,
  details: Record<string, string> = {},
) {
  if (typeof window === "undefined") return;

  const analyticsWindow = window as typeof window & {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  };

  if (analyticsWindow.gtag) {
    analyticsWindow.gtag("event", event, details);
    return;
  }

  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.dataLayer.push({ event, ...details });
}
