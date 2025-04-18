export default function ThankYouLayout({ children }) {
    return (
      <>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              <script async src="https://www.googletagmanager.com/gtag/js?id=AW-1698269213"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-1698269213');
              </script>
            `
          }}
        />
        {children}
      </>
    );
  }