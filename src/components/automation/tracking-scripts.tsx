"use client";

export function TrackingScripts() {
  const enabled = process.env.NEXT_PUBLIC_ENABLE_TRACKING === 'true';
  if (!enabled) return null;
  return (
    <>
      {/* Example: Google Analytics placeholder */}
      {process.env.NEXT_PUBLIC_GTAG_ID ? (
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_ID}`}
        />
      ) : null}
      {process.env.NEXT_PUBLIC_GTAG_ID ? (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GTAG_ID}');
            `,
          }}
        />
      ) : null}
    </>
  );
}


