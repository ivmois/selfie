import "@/styles/globals.sass";
import styles from "./layout.module.sass";
import WidthDeviceContextProvider from "@/context/widthDeviceContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ymId = 99232569;

  return (
    <html lang="ru">
      <head>
        {/* Title и мета-теги */}
        <title>Фотостудия автопортрета Selfie в Воронеже</title>
        <meta
          name="description"
          content="Новый формат фотосъемки, где ты сам себе фотограф и модель. Перед вами только зеркало, а в руках пульт. Фото получаются точь-в-точь как в отражении."
        />
        <meta
          name="keywords"
          content="фотостудия, фотосессия, фотограф, фотостудия без фотографа, подарок друзьям, подарок коллегам, сертификат"
        />
        <meta property="og:url" content="https://selfiemuse.ru" />
        <meta property="og:title" content="SELFIE студия автопортрета" />
        <meta
          property="og:description"
          content="Новый формат фотосъемки, где ты сам себе фотограф и модель. Перед вами только зеркало, а в руках пульт. Фото получаются точь-в-точь как в отражении."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta
          name="google-site-verification"
          content="zXgfSK_jX_bPyK572RzcrJvIwEW_OL0DVBceDYl6OtA"
        />
        <meta name="yandex-verification" content="a290518ac703bdc5" />
        <link rel="canonical" href="https://selfiemuse.ru" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Яндекс.Метрика */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                        ym(${ymId}, "init", {
                                clickmap:true,
                                trackLinks:true,
                                accurateTrackBounce:true
                        });
                        `,
          }}
        />
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${ymId}`}
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body>
        <WidthDeviceContextProvider>
          <div className={styles.layout}>{children}</div>
        </WidthDeviceContextProvider>
      </body>
    </html>
  );
}
