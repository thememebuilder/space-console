type AnalyticsConfig = {
    provider?: 'plausible' | 'vercel';
    domain?: string;
    vercelScriptSrc?: string;
};
export declare function initAnalytics(config?: AnalyticsConfig): void;
export {};
