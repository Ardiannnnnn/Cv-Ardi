import type { Locale, LocalizedText } from "@/types/locale";

type TranslationParams = Record<string, string | number>;

export function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;

  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }

  return typeof current === "string" ? current : path;
}

export function interpolate(template: string, params?: TranslationParams): string {
  if (!params) return template;

  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    params[key] !== undefined ? String(params[key]) : `{${key}}`
  );
}

export function translate(
  messages: Record<string, unknown>,
  key: string,
  params?: TranslationParams
): string {
  return interpolate(getNestedValue(messages, key), params);
}

export function getLocalizedText(field: LocalizedText | string, locale: Locale): string {
  if (typeof field === "string") return field;
  return field[locale];
}
