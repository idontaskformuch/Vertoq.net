export interface PrivacyContent {
  lastUpdated: string;
  intro: string;
  dataCollection: { heading: string; body: string };
  cookies: {
    heading: string;
    intro: string;
    necessaryHeading: string;
    necessaryBody: string;
    advertisingHeading: string;
    advertisingBody: string;
  };
  thirdParty: { heading: string; cloudflareBody: string; adsenseBody: string };
  yourChoices: { heading: string; body: string };
  gdpr: { heading: string; body: string };
  changes: { heading: string; body: string };
  contact: { heading: string; body: string };
}

export const privacyContent: Record<string, PrivacyContent> = {
  sv: {
    lastUpdated: `Senast uppdaterad: 16 juli 2026`,
    intro: `Vertoq (vertoq.net) är en samling gratis, kontolösa räknare och omvandlare på 10 språk. Den här sidan förklarar vilken information vi samlar in, vilka cookies som används och varför, och vilka tredjepartstjänster som är inblandade.`,
    dataCollection: {
      heading: `Information vi samlar in`,
      body: `Vi kräver inget konto och samlar inte in namn, adress eller annan personligt identifierande information för att du ska kunna använda kalkylatorerna, alla beräkningar sker lokalt i din webbläsare. Vår hosting-leverantör (se Cloudflare nedan) behandler grundläggande teknisk loggdata, som IP-adress och webbläsartyp, för att sidorna ska kunna levereras och för säkerhetsändamål.`,
    },
    cookies: {
      heading: `Cookies och lokal lagring`,
      intro: `Vi använder två kategorier av cookies/lokal lagring, beskrivna nedan. Ditt val i samtyckesbannern styr vilka som aktiveras.`,
      necessaryHeading: `Nödvändiga`,
      necessaryBody: `Ditt val i samtyckesbannern (godkänn alla / endast nödvändiga) sparas i webbläsarens lokala lagring (localStorage), inte som en spårningscookie, och används enbart för att komma ihåg ditt val. Cloudflare kan även sätta tekniska säkerhetscookies (till exempel för att skilja på legitim trafik och botattacker) som krävs för att sidan ska fungera och som inte kräver samtycke.`,
      advertisingHeading: `Annonsrelaterade (kräver samtycke)`,
      advertisingBody: `Om du godkänner "alla" i samtyckesbannern kan Google AdSense sätta cookies för intressebaserad annonsering. Dessa laddas inte alls om du bara godkänner nödvändiga cookies.`,
    },
    thirdParty: {
      heading: `Tredjepartstjänster`,
      cloudflareBody: `Cloudflare: vår hosting- och CDN-leverantör. Cloudflare behandlar teknisk trafikdata (IP-adress, request-loggar) för att leverera sidorna snabbt och skydda mot missbruk. Detta krävs för att sidan ska fungera och sker oavsett samtyckesval.`,
      adsenseBody: `Google AdSense: används för annonsering. Google kan, som tredjepartsleverantör, sätta cookies för intressebaserad annonsering, men bara efter att du aktivt godkänt det i samtyckesbannern.`,
    },
    yourChoices: {
      heading: `Dina val`,
      body: `Du kan när som helst ändra ditt samtyckesval genom att rensa webbläsarens lokala lagring för vertoq.net, då visas samtyckesbannern igen vid nästa sidladdning. Vi använder ingen analystjänst utöver detta.`,
    },
    gdpr: {
      heading: `GDPR och CCPA`,
      body: `För besökare i EES behandlas data i enlighet med GDPR, med samtycke som rättslig grund för annonsrelaterade cookies. Du har rätt att begära information om, eller radering av, uppgifter vi behandlar. För besökare i Kalifornien gäller motsvarande rättigheter enligt CCPA. Kontakta oss (se nedan) för att utöva dessa rättigheter.`,
    },
    changes: {
      heading: `Ändringar av denna policy`,
      body: `Vi kan uppdatera den här policyn när siten eller våra tredjepartstjänster förändras. Datumet högst upp visar när den senast ändrades.`,
    },
    contact: {
      heading: `Kontakta oss`,
      body: `Har du frågor om den här policyn eller hur dina uppgifter behandlas, mejla oss på`,
    },
  },

  en: {
    lastUpdated: `Last updated: July 16, 2026`,
    intro: `Vertoq (vertoq.net) is a collection of free, account-free calculators and converters in 10 languages. This page explains what information we collect, which cookies are used and why, and which third-party services are involved.`,
    dataCollection: {
      heading: `Information we collect`,
      body: `We don't require an account and don't collect names, addresses, or other personally identifying information for you to use the calculators, all calculations happen locally in your browser. Our hosting provider (see Cloudflare below) processes basic technical log data, such as IP address and browser type, to deliver the pages and for security purposes.`,
    },
    cookies: {
      heading: `Cookies and local storage`,
      intro: `We use two categories of cookies/local storage, described below. Your choice in the consent banner controls which ones are active.`,
      necessaryHeading: `Necessary`,
      necessaryBody: `Your choice in the consent banner (accept all / necessary only) is saved in the browser's local storage (localStorage), not as a tracking cookie, and is used only to remember your choice. Cloudflare may also set technical security cookies (for example, to distinguish legitimate traffic from bot attacks) required for the site to function, which don't require consent.`,
      advertisingHeading: `Advertising-related (requires consent)`,
      advertisingBody: `If you choose "accept all" in the consent banner, Google AdSense may set cookies for interest-based advertising. These don't load at all if you only accept necessary cookies.`,
    },
    thirdParty: {
      heading: `Third-party services`,
      cloudflareBody: `Cloudflare: our hosting and CDN provider. Cloudflare processes technical traffic data (IP address, request logs) to deliver the pages quickly and protect against abuse. This is required for the site to function and happens regardless of your consent choice.`,
      adsenseBody: `Google AdSense: used for advertising. As a third-party vendor, Google may set cookies for interest-based advertising, but only after you've actively accepted that in the consent banner.`,
    },
    yourChoices: {
      heading: `Your choices`,
      body: `You can change your consent choice at any time by clearing your browser's local storage for vertoq.net, the consent banner will then appear again on your next page load. We don't use any analytics service beyond this.`,
    },
    gdpr: {
      heading: `GDPR and CCPA`,
      body: `For visitors in the EEA, data is processed in accordance with the GDPR, with consent as the legal basis for advertising-related cookies. You have the right to request information about, or deletion of, data we process. For visitors in California, equivalent rights apply under the CCPA. Contact us (see below) to exercise these rights.`,
    },
    changes: {
      heading: `Changes to this policy`,
      body: `We may update this policy as the site or our third-party services change. The date at the top shows when it was last changed.`,
    },
    contact: {
      heading: `Contact us`,
      body: `If you have questions about this policy or how your data is handled, email us at`,
    },
  },

  pt: {
    lastUpdated: `Última atualização: 16 de julho de 2026`,
    intro: `Vertoq (vertoq.net) é um conjunto de calculadoras e conversores gratuitos, sem necessidade de conta, em 10 idiomas. Esta página explica quais informações coletamos, quais cookies são usados e por quê, e quais serviços de terceiros estão envolvidos.`,
    dataCollection: {
      heading: `Informações que coletamos`,
      body: `Não exigimos conta e não coletamos nome, endereço ou outras informações pessoalmente identificáveis para você usar as calculadoras, todos os cálculos acontecem localmente no seu navegador. Nosso provedor de hospedagem (veja Cloudflare abaixo) processa dados técnicos básicos de log, como endereço IP e tipo de navegador, para entregar as páginas e por motivos de segurança.`,
    },
    cookies: {
      heading: `Cookies e armazenamento local`,
      intro: `Usamos duas categorias de cookies/armazenamento local, descritas abaixo. Sua escolha no banner de consentimento controla quais ficam ativos.`,
      necessaryHeading: `Necessários`,
      necessaryBody: `Sua escolha no banner de consentimento (aceitar todos / apenas necessários) é salva no armazenamento local do navegador (localStorage), não como um cookie de rastreamento, e serve apenas para lembrar sua escolha. A Cloudflare também pode definir cookies técnicos de segurança (por exemplo, para diferenciar tráfego legítimo de ataques de bots) necessários para o funcionamento do site, que não exigem consentimento.`,
      advertisingHeading: `Relacionados a publicidade (exigem consentimento)`,
      advertisingBody: `Se você escolher "aceitar todos" no banner de consentimento, o Google AdSense pode definir cookies para publicidade baseada em interesses. Eles não são carregados de forma alguma se você aceitar apenas os cookies necessários.`,
    },
    thirdParty: {
      heading: `Serviços de terceiros`,
      cloudflareBody: `Cloudflare: nosso provedor de hospedagem e CDN. A Cloudflare processa dados técnicos de tráfego (endereço IP, logs de requisição) para entregar as páginas rapidamente e proteger contra abusos. Isso é necessário para o funcionamento do site e acontece independentemente da sua escolha de consentimento.`,
      adsenseBody: `Google AdSense: usado para publicidade. Como fornecedor terceiro, o Google pode definir cookies para publicidade baseada em interesses, mas apenas depois que você aceitar ativamente isso no banner de consentimento.`,
    },
    yourChoices: {
      heading: `Suas escolhas`,
      body: `Você pode mudar sua escolha de consentimento a qualquer momento limpando o armazenamento local do navegador para vertoq.net, o banner de consentimento aparecerá novamente na próxima vez que a página carregar. Não usamos nenhum serviço de análise além disso.`,
    },
    gdpr: {
      heading: `GDPR e CCPA`,
      body: `Para visitantes no EEE, os dados são processados de acordo com o GDPR, com o consentimento como base legal para cookies relacionados a publicidade. Você tem o direito de solicitar informações sobre, ou a exclusão de, dados que processamos. Para visitantes da Califórnia, direitos equivalentes se aplicam sob o CCPA. Entre em contato conosco (veja abaixo) para exercer esses direitos.`,
    },
    changes: {
      heading: `Alterações nesta política`,
      body: `Podemos atualizar esta política conforme o site ou nossos serviços de terceiros mudam. A data no topo mostra quando foi alterada pela última vez.`,
    },
    contact: {
      heading: `Fale conosco`,
      body: `Se tiver dúvidas sobre esta política ou como seus dados são tratados, envie um e-mail para`,
    },
  },

  es: {
    lastUpdated: `Última actualización: 16 de julio de 2026`,
    intro: `Vertoq (vertoq.net) es un conjunto de calculadoras y conversores gratuitos, sin necesidad de cuenta, en 10 idiomas. Esta página explica qué información recopilamos, qué cookies se usan y por qué, y qué servicios de terceros están involucrados.`,
    dataCollection: {
      heading: `Información que recopilamos`,
      body: `No exigimos una cuenta ni recopilamos nombre, dirección u otra información de identificación personal para que uses las calculadoras, todos los cálculos ocurren localmente en tu navegador. Nuestro proveedor de hosting (consulta Cloudflare más abajo) procesa datos técnicos básicos de registro, como la dirección IP y el tipo de navegador, para entregar las páginas y por motivos de seguridad.`,
    },
    cookies: {
      heading: `Cookies y almacenamiento local`,
      intro: `Usamos dos categorías de cookies/almacenamiento local, descritas abajo. Tu elección en el aviso de consentimiento controla cuáles están activas.`,
      necessaryHeading: `Necesarias`,
      necessaryBody: `Tu elección en el aviso de consentimiento (aceptar todas / solo necesarias) se guarda en el almacenamiento local del navegador (localStorage), no como una cookie de seguimiento, y se usa solo para recordar tu elección. Cloudflare también puede establecer cookies técnicas de seguridad (por ejemplo, para distinguir tráfico legítimo de ataques de bots) necesarias para que el sitio funcione, que no requieren consentimiento.`,
      advertisingHeading: `Relacionadas con publicidad (requieren consentimiento)`,
      advertisingBody: `Si eliges "aceptar todas" en el aviso de consentimiento, Google AdSense puede establecer cookies para publicidad basada en intereses. Estas no se cargan en absoluto si solo aceptas las cookies necesarias.`,
    },
    thirdParty: {
      heading: `Servicios de terceros`,
      cloudflareBody: `Cloudflare: nuestro proveedor de hosting y CDN. Cloudflare procesa datos técnicos de tráfico (dirección IP, registros de solicitudes) para entregar las páginas rápidamente y proteger contra abusos. Esto es necesario para que el sitio funcione y ocurre independientemente de tu elección de consentimiento.`,
      adsenseBody: `Google AdSense: se usa para publicidad. Como proveedor externo, Google puede establecer cookies para publicidad basada en intereses, pero solo después de que hayas aceptado activamente eso en el aviso de consentimiento.`,
    },
    yourChoices: {
      heading: `Tus opciones`,
      body: `Puedes cambiar tu elección de consentimiento en cualquier momento borrando el almacenamiento local del navegador para vertoq.net, el aviso de consentimiento volverá a aparecer la próxima vez que cargues la página. No usamos ningún servicio de análisis más allá de esto.`,
    },
    gdpr: {
      heading: `GDPR y CCPA`,
      body: `Para visitantes del EEE, los datos se procesan de acuerdo con el GDPR, con el consentimiento como base legal para las cookies relacionadas con publicidad. Tienes derecho a solicitar información sobre, o la eliminación de, los datos que procesamos. Para visitantes de California, se aplican derechos equivalentes según la CCPA. Contáctanos (ver abajo) para ejercer estos derechos.`,
    },
    changes: {
      heading: `Cambios a esta política`,
      body: `Podemos actualizar esta política a medida que el sitio o nuestros servicios de terceros cambien. La fecha en la parte superior muestra cuándo se modificó por última vez.`,
    },
    contact: {
      heading: `Contáctanos`,
      body: `Si tienes preguntas sobre esta política o cómo se manejan tus datos, escríbenos a`,
    },
  },

  de: {
    lastUpdated: `Zuletzt aktualisiert: 16. Juli 2026`,
    intro: `Vertoq (vertoq.net) ist eine Sammlung kostenloser, kontofreier Rechner und Umrechner in 10 Sprachen. Diese Seite erklärt, welche Informationen wir sammeln, welche Cookies verwendet werden und warum, und welche Drittanbieterdienste beteiligt sind.`,
    dataCollection: {
      heading: `Informationen, die wir sammeln`,
      body: `Wir benötigen kein Konto und erfassen keinen Namen, keine Adresse oder andere persönlich identifizierbare Informationen, damit du die Rechner nutzen kannst, alle Berechnungen erfolgen lokal in deinem Browser. Unser Hosting-Anbieter (siehe Cloudflare unten) verarbeitet grundlegende technische Protokolldaten wie IP-Adresse und Browsertyp, um die Seiten auszuliefern und zu Sicherheitszwecken.`,
    },
    cookies: {
      heading: `Cookies und lokaler Speicher`,
      intro: `Wir verwenden zwei Kategorien von Cookies/lokalem Speicher, unten beschrieben. Deine Wahl im Consent-Banner steuert, welche aktiv sind.`,
      necessaryHeading: `Notwendig`,
      necessaryBody: `Deine Wahl im Consent-Banner (alle akzeptieren / nur notwendige) wird im lokalen Speicher des Browsers (localStorage) gespeichert, nicht als Tracking-Cookie, und dient nur dazu, deine Wahl zu merken. Cloudflare kann außerdem technische Sicherheits-Cookies setzen (zum Beispiel um legitimen Traffic von Bot-Angriffen zu unterscheiden), die für die Funktion der Seite erforderlich sind und keine Zustimmung erfordern.`,
      advertisingHeading: `Werbebezogen (erfordert Zustimmung)`,
      advertisingBody: `Wenn du im Consent-Banner "alle akzeptieren" wählst, kann Google AdSense Cookies für interessenbasierte Werbung setzen. Diese werden gar nicht geladen, wenn du nur notwendige Cookies akzeptierst.`,
    },
    thirdParty: {
      heading: `Drittanbieterdienste`,
      cloudflareBody: `Cloudflare: unser Hosting- und CDN-Anbieter. Cloudflare verarbeitet technische Traffic-Daten (IP-Adresse, Request-Logs), um die Seiten schnell auszuliefern und vor Missbrauch zu schützen. Das ist für die Funktion der Seite erforderlich und geschieht unabhängig von deiner Zustimmungswahl.`,
      adsenseBody: `Google AdSense: wird für Werbung verwendet. Als Drittanbieter kann Google Cookies für interessenbasierte Werbung setzen, aber erst, nachdem du das im Consent-Banner aktiv akzeptiert hast.`,
    },
    yourChoices: {
      heading: `Deine Wahlmöglichkeiten`,
      body: `Du kannst deine Zustimmungswahl jederzeit ändern, indem du den lokalen Speicher deines Browsers für vertoq.net löschst, das Consent-Banner erscheint dann beim nächsten Laden der Seite erneut. Wir verwenden darüber hinaus keinen Analysedienst.`,
    },
    gdpr: {
      heading: `DSGVO und CCPA`,
      body: `Für Besucher im EWR werden Daten gemäß der DSGVO verarbeitet, mit Zustimmung als Rechtsgrundlage für werbebezogene Cookies. Du hast das Recht, Auskunft über von uns verarbeitete Daten zu verlangen oder deren Löschung zu beantragen. Für Besucher aus Kalifornien gelten gemäß CCPA vergleichbare Rechte. Kontaktiere uns (siehe unten), um diese Rechte auszuüben.`,
    },
    changes: {
      heading: `Änderungen dieser Richtlinie`,
      body: `Wir können diese Richtlinie aktualisieren, wenn sich die Seite oder unsere Drittanbieterdienste ändern. Das Datum oben zeigt, wann sie zuletzt geändert wurde.`,
    },
    contact: {
      heading: `Kontaktiere uns`,
      body: `Wenn du Fragen zu dieser Richtlinie oder zum Umgang mit deinen Daten hast, schreib uns an`,
    },
  },

  ja: {
    lastUpdated: `最終更新日：2026年7月16日`,
    intro: `Vertoq（vertoq.net）は、アカウント登録不要で使える無料の計算機・変換ツール集で、10の言語に対応しています。このページでは、当サイトが収集する情報、使用しているクッキーの種類とその目的、関わっている第三者サービスについて説明します。`,
    dataCollection: {
      heading: `収集する情報`,
      body: `計算機を使うのにアカウントは不要で、氏名・住所などの個人を特定できる情報も収集しません。すべての計算はお使いのブラウザ内でローカルに行われます。ホスティングプロバイダー（下記のCloudflareを参照）は、サイトの配信とセキュリティ目的のため、IPアドレスやブラウザの種類といった基本的な技術的ログデータを処理します。`,
    },
    cookies: {
      heading: `クッキーとローカルストレージ`,
      intro: `当サイトでは以下の2種類のクッキー/ローカルストレージを使用しています。同意バナーでの選択によって、どちらが有効になるかが決まります。`,
      necessaryHeading: `必須のもの`,
      necessaryBody: `同意バナーでの選択（すべて同意する／必須のみ）は、追跡用クッキーとしてではなく、ブラウザのローカルストレージ（localStorage）に保存され、選択内容を記憶するためだけに使われます。Cloudflareは、正当なトラフィックとボット攻撃を区別するためなど、サイトの動作に必要な技術的セキュリティクッキーを設定することがあり、これらには同意は不要です。`,
      advertisingHeading: `広告関連（同意が必要）`,
      advertisingBody: `同意バナーで「すべて同意する」を選択した場合、Google AdSenseが興味関心に基づく広告のためのクッキーを設定することがあります。「必須のみ」を選んだ場合、これらは一切読み込まれません。`,
    },
    thirdParty: {
      heading: `第三者サービス`,
      cloudflareBody: `Cloudflare：当サイトのホスティングおよびCDNプロバイダーです。Cloudflareは、ページを高速に配信し不正利用から保護するため、技術的なトラフィックデータ（IPアドレス、リクエストログ）を処理します。これはサイトの動作に必須であり、同意の選択に関わらず行われます。`,
      adsenseBody: `Google AdSense：広告のために使用します。第三者ベンダーとして、Googleは興味関心に基づく広告用のクッキーを設定することがありますが、それは同意バナーであなたが積極的に同意した場合のみです。`,
    },
    yourChoices: {
      heading: `あなたの選択`,
      body: `いつでも、お使いのブラウザのvertoq.netに関するローカルストレージを削除することで同意の選択を変更できます。次回ページを読み込んだ際に、同意バナーが再び表示されます。これ以外に、当サイトはアクセス解析サービスを利用していません。`,
    },
    gdpr: {
      heading: `GDPRおよびCCPA`,
      body: `EEA（欧州経済領域）の訪問者については、GDPRに準拠してデータを処理し、広告関連クッキーの法的根拠は同意です。当サイトが処理するデータについて、開示請求または削除請求を行う権利があります。カリフォルニア州の訪問者には、CCPAに基づく同様の権利が適用されます。これらの権利を行使する場合は、下記の連絡先までご連絡ください。`,
    },
    changes: {
      heading: `本ポリシーの変更`,
      body: `サイトや第三者サービスの変更に伴い、本ポリシーを更新することがあります。最終更新日はページ上部に記載しています。`,
    },
    contact: {
      heading: `お問い合わせ`,
      body: `本ポリシーやデータの取り扱いについてご質問がある場合は、以下のメールアドレスまでご連絡ください：`,
    },
  },

  zh: {
    lastUpdated: `最后更新：2026年7月16日`,
    intro: `Vertoq（vertoq.net）是一套免费、无需账户的计算器和转换工具，支持10种语言。本页说明我们收集哪些信息、使用哪些Cookie及其用途，以及涉及哪些第三方服务。`,
    dataCollection: {
      heading: `我们收集的信息`,
      body: `使用这些计算器无需注册账户，我们也不会收集姓名、地址或其他个人身份信息，所有计算都在你的浏览器本地完成。我们的托管服务商（见下方Cloudflare部分）会处理基本的技术日志数据，例如IP地址和浏览器类型，用于提供页面服务和安全防护。`,
    },
    cookies: {
      heading: `Cookie与本地存储`,
      intro: `我们使用以下两类Cookie/本地存储，具体说明如下。你在同意横幅中的选择决定了哪些会被启用。`,
      necessaryHeading: `必要项`,
      necessaryBody: `你在同意横幅中的选择（全部接受/仅必要项）会保存在浏览器的本地存储（localStorage）中，而不是作为追踪Cookie，仅用于记住你的选择。Cloudflare也可能设置技术性安全Cookie（例如用于区分正常流量和机器人攻击），这是网站正常运行所必需的，不需要征得同意。`,
      advertisingHeading: `广告相关（需要同意）`,
      advertisingBody: `如果你在同意横幅中选择"全部接受"，Google AdSense可能会设置用于兴趣定向广告的Cookie。如果你只接受必要项，这些Cookie完全不会加载。`,
    },
    thirdParty: {
      heading: `第三方服务`,
      cloudflareBody: `Cloudflare：我们的托管和CDN服务商。Cloudflare会处理技术性流量数据（IP地址、请求日志），以便快速提供页面并防止滥用。这是网站正常运行所必需的，无论你的同意选择如何都会发生。`,
      adsenseBody: `Google AdSense：用于广告展示。作为第三方供应商，Google可能会设置用于兴趣定向广告的Cookie，但仅在你在同意横幅中主动接受之后才会进行。`,
    },
    yourChoices: {
      heading: `你的选择`,
      body: `你可以随时清除浏览器中针对vertoq.net的本地存储来更改你的同意选择，下次加载页面时同意横幅将会再次出现。除此之外，我们不使用任何分析服务。`,
    },
    gdpr: {
      heading: `GDPR和CCPA`,
      body: `对于欧洲经济区（EEA）的访客，我们按照GDPR处理数据，广告相关Cookie的法律依据是同意。你有权要求查询我们处理的数据信息，或要求删除这些数据。对于加利福尼亚州的访客，CCPA下适用同等权利。如需行使这些权利，请通过下方联系方式与我们联系。`,
    },
    changes: {
      heading: `本政策的变更`,
      body: `随着网站或第三方服务的变化，我们可能会更新本政策。页面顶部的日期显示了最后一次修改的时间。`,
    },
    contact: {
      heading: `联系我们`,
      body: `如果你对本政策或数据处理方式有任何疑问，请发邮件至`,
    },
  },

  ko: {
    lastUpdated: `최종 업데이트: 2026년 7월 16일`,
    intro: `Vertoq(vertoq.net)는 계정 없이 무료로 이용할 수 있는 계산기 및 변환 도구 모음으로, 10개 언어를 지원합니다. 이 페이지에서는 저희가 수집하는 정보, 사용하는 쿠키의 종류와 목적, 관련된 제3자 서비스에 대해 설명합니다.`,
    dataCollection: {
      heading: `수집하는 정보`,
      body: `계산기를 이용하는 데 계정이 필요하지 않으며, 이름, 주소 등 개인을 식별할 수 있는 정보를 수집하지 않습니다. 모든 계산은 사용자의 브라우저 내에서 로컬로 이루어집니다. 저희의 호스팅 제공업체(아래 Cloudflare 참고)는 페이지 제공과 보안 목적을 위해 IP 주소, 브라우저 종류 같은 기본적인 기술 로그 데이터를 처리합니다.`,
    },
    cookies: {
      heading: `쿠키와 로컬 스토리지`,
      intro: `저희는 아래 설명된 두 가지 범주의 쿠키/로컬 스토리지를 사용합니다. 동의 배너에서의 선택에 따라 어떤 것이 활성화되는지가 결정됩니다.`,
      necessaryHeading: `필수 항목`,
      necessaryBody: `동의 배너에서의 선택(모두 동의/필수 항목만)은 추적 쿠키가 아닌 브라우저의 로컬 스토리지(localStorage)에 저장되며, 오직 선택 내용을 기억하기 위해서만 사용됩니다. Cloudflare는 정상 트래픽과 봇 공격을 구분하는 등 사이트 운영에 필요한 기술적 보안 쿠키를 설정할 수 있으며, 이는 동의가 필요하지 않습니다.`,
      advertisingHeading: `광고 관련 (동의 필요)`,
      advertisingBody: `동의 배너에서 "모두 동의"를 선택하면 Google AdSense가 관심 기반 광고를 위한 쿠키를 설정할 수 있습니다. 필수 항목만 동의한 경우 이러한 쿠키는 전혀 로드되지 않습니다.`,
    },
    thirdParty: {
      heading: `제3자 서비스`,
      cloudflareBody: `Cloudflare: 저희의 호스팅 및 CDN 제공업체입니다. Cloudflare는 페이지를 빠르게 제공하고 악용을 방지하기 위해 기술적 트래픽 데이터(IP 주소, 요청 로그)를 처리합니다. 이는 사이트 운영에 필수적이며 동의 선택과 무관하게 이루어집니다.`,
      adsenseBody: `Google AdSense: 광고를 위해 사용됩니다. 제3자 공급업체로서 Google은 관심 기반 광고를 위한 쿠키를 설정할 수 있지만, 이는 사용자가 동의 배너에서 적극적으로 동의한 이후에만 이루어집니다.`,
    },
    yourChoices: {
      heading: `사용자의 선택`,
      body: `언제든지 브라우저에서 vertoq.net에 대한 로컬 스토리지를 삭제하여 동의 선택을 변경할 수 있으며, 다음 페이지 로드 시 동의 배너가 다시 표시됩니다. 이 외에 저희는 어떠한 분석 서비스도 사용하지 않습니다.`,
    },
    gdpr: {
      heading: `GDPR 및 CCPA`,
      body: `EEA(유럽경제지역) 방문자의 경우, 데이터는 GDPR에 따라 처리되며 광고 관련 쿠키의 법적 근거는 동의입니다. 저희가 처리하는 데이터에 대한 정보 요청이나 삭제를 요청할 권리가 있습니다. 캘리포니아 방문자의 경우 CCPA에 따라 동등한 권리가 적용됩니다. 이러한 권리를 행사하려면 아래 연락처로 문의해 주세요.`,
    },
    changes: {
      heading: `이 정책의 변경`,
      body: `사이트나 제3자 서비스가 변경됨에 따라 이 정책을 업데이트할 수 있습니다. 상단의 날짜는 마지막으로 변경된 시점을 나타냅니다.`,
    },
    contact: {
      heading: `문의하기`,
      body: `이 정책이나 데이터 처리 방식에 대해 궁금한 점이 있으시면 아래 이메일로 문의해 주세요:`,
    },
  },

  hi: {
    lastUpdated: `आखिरी बार अपडेट किया गया: 16 जुलाई 2026`,
    intro: `Vertoq (vertoq.net) मुफ़्त, बिना अकाउंट वाले कैलकुलेटर और कन्वर्टर का एक संग्रह है, जो 10 भाषाओं में उपलब्ध है। यह पेज बताता है कि हम कौन सी जानकारी इकट्ठा करते हैं, कौन सी कुकीज़ का इस्तेमाल होता है और क्यों, और कौन सी थर्ड-पार्टी सेवाएं शामिल हैं।`,
    dataCollection: {
      heading: `हम जो जानकारी इकट्ठा करते हैं`,
      body: `कैलकुलेटर इस्तेमाल करने के लिए किसी अकाउंट की ज़रूरत नहीं है, और हम आपका नाम, पता, या कोई और व्यक्तिगत पहचान वाली जानकारी इकट्ठा नहीं करते, सारी गणना आपके ब्राउज़र में ही स्थानीय रूप से होती है। हमारा होस्टिंग प्रदाता (नीचे Cloudflare देखें) पेज पहुंचाने और सुरक्षा के मकसद से बुनियादी तकनीकी लॉग डेटा, जैसे IP एड्रेस और ब्राउज़र टाइप, प्रोसेस करता है।`,
    },
    cookies: {
      heading: `कुकीज़ और लोकल स्टोरेज`,
      intro: `हम नीचे बताई गई कुकीज़/लोकल स्टोरेज की दो श्रेणियों का इस्तेमाल करते हैं। कंसेंट बैनर में आपकी पसंद तय करती है कि कौन सी सक्रिय होंगी।`,
      necessaryHeading: `ज़रूरी`,
      necessaryBody: `कंसेंट बैनर में आपकी पसंद (सभी स्वीकारें / सिर्फ़ ज़रूरी) ब्राउज़र के लोकल स्टोरेज (localStorage) में सेव होती है, ट्रैकिंग कुकी के तौर पर नहीं, और सिर्फ़ आपकी पसंद याद रखने के लिए इस्तेमाल होती है। Cloudflare तकनीकी सुरक्षा कुकीज़ भी सेट कर सकता है (जैसे असली ट्रैफ़िक और बॉट हमलों में फ़र्क करने के लिए), जो साइट के काम करने के लिए ज़रूरी हैं और जिनके लिए सहमति की ज़रूरत नहीं है।`,
      advertisingHeading: `विज्ञापन से जुड़ी (सहमति ज़रूरी)`,
      advertisingBody: `अगर आप कंसेंट बैनर में "सभी स्वीकारें" चुनते हैं, तो Google AdSense रुचि-आधारित विज्ञापन के लिए कुकीज़ सेट कर सकता है। अगर आप सिर्फ़ ज़रूरी कुकीज़ स्वीकार करते हैं, तो ये बिल्कुल लोड नहीं होतीं।`,
    },
    thirdParty: {
      heading: `थर्ड-पार्टी सेवाएं`,
      cloudflareBody: `Cloudflare: हमारा होस्टिंग और CDN प्रदाता। Cloudflare पेजों को तेज़ी से पहुंचाने और दुरुपयोग से बचाने के लिए तकनीकी ट्रैफ़िक डेटा (IP एड्रेस, रिक्वेस्ट लॉग) प्रोसेस करता है। यह साइट के काम करने के लिए ज़रूरी है और आपकी सहमति की पसंद चाहे जो भी हो, होता है।`,
      adsenseBody: `Google AdSense: विज्ञापन के लिए इस्तेमाल होता है। एक थर्ड-पार्टी वेंडर के तौर पर, Google रुचि-आधारित विज्ञापन के लिए कुकीज़ सेट कर सकता है, लेकिन सिर्फ़ तब जब आपने कंसेंट बैनर में इसे सक्रिय रूप से स्वीकार किया हो।`,
    },
    yourChoices: {
      heading: `आपकी पसंद`,
      body: `आप जब चाहें vertoq.net के लिए अपने ब्राउज़र का लोकल स्टोरेज साफ़ करके अपनी सहमति की पसंद बदल सकते हैं, इसके बाद अगली बार पेज लोड होने पर कंसेंट बैनर फिर से दिखेगा। इसके अलावा हम कोई एनालिटिक्स सेवा इस्तेमाल नहीं करते।`,
    },
    gdpr: {
      heading: `GDPR और CCPA`,
      body: `EEA (यूरोपियन इकनॉमिक एरिया) के विज़िटर्स के लिए, डेटा GDPR के मुताबिक प्रोसेस किया जाता है, जिसमें विज्ञापन से जुड़ी कुकीज़ के लिए सहमति ही कानूनी आधार है। हमारे द्वारा प्रोसेस किए गए डेटा के बारे में जानकारी मांगने, या उसे हटवाने का आपको अधिकार है। कैलिफ़ोर्निया के विज़िटर्स के लिए CCPA के तहत इसी तरह के अधिकार लागू होते हैं। इन अधिकारों का इस्तेमाल करने के लिए हमसे संपर्क करें (नीचे देखें)।`,
    },
    changes: {
      heading: `इस नीति में बदलाव`,
      body: `साइट या हमारी थर्ड-पार्टी सेवाओं में बदलाव होने पर हम इस नीति को अपडेट कर सकते हैं। सबसे ऊपर दी गई तारीख बताती है कि इसे आख़िरी बार कब बदला गया था।`,
    },
    contact: {
      heading: `हमसे संपर्क करें`,
      body: `अगर इस नीति या आपका डेटा कैसे संभाला जाता है, इस बारे में आपके कोई सवाल हैं, तो हमें यहां मेल करें:`,
    },
  },

  id: {
    lastUpdated: `Terakhir diperbarui: 16 Juli 2026`,
    intro: `Vertoq (vertoq.net) adalah kumpulan kalkulator dan konverter gratis tanpa akun dalam 10 bahasa. Halaman ini menjelaskan informasi apa yang kami kumpulkan, cookie apa yang digunakan dan mengapa, serta layanan pihak ketiga apa yang terlibat.`,
    dataCollection: {
      heading: `Informasi yang kami kumpulkan`,
      body: `Kami tidak mewajibkan akun dan tidak mengumpulkan nama, alamat, atau informasi identitas pribadi lainnya agar kamu bisa menggunakan kalkulator, semua perhitungan terjadi secara lokal di browser kamu. Penyedia hosting kami (lihat Cloudflare di bawah) memproses data log teknis dasar, seperti alamat IP dan jenis browser, untuk menyajikan halaman dan untuk tujuan keamanan.`,
    },
    cookies: {
      heading: `Cookie dan penyimpanan lokal`,
      intro: `Kami menggunakan dua kategori cookie/penyimpanan lokal, dijelaskan di bawah ini. Pilihanmu di banner persetujuan menentukan mana yang aktif.`,
      necessaryHeading: `Yang diperlukan`,
      necessaryBody: `Pilihanmu di banner persetujuan (terima semua / hanya yang diperlukan) disimpan di penyimpanan lokal browser (localStorage), bukan sebagai cookie pelacak, dan hanya digunakan untuk mengingat pilihanmu. Cloudflare juga dapat mengatur cookie keamanan teknis (misalnya, untuk membedakan trafik yang sah dari serangan bot) yang diperlukan agar situs berfungsi, dan ini tidak memerlukan persetujuan.`,
      advertisingHeading: `Terkait iklan (memerlukan persetujuan)`,
      advertisingBody: `Jika kamu memilih "terima semua" di banner persetujuan, Google AdSense dapat mengatur cookie untuk iklan berbasis minat. Cookie ini sama sekali tidak akan dimuat jika kamu hanya menerima cookie yang diperlukan.`,
    },
    thirdParty: {
      heading: `Layanan pihak ketiga`,
      cloudflareBody: `Cloudflare: penyedia hosting dan CDN kami. Cloudflare memproses data trafik teknis (alamat IP, log permintaan) untuk menyajikan halaman dengan cepat dan melindungi dari penyalahgunaan. Ini diperlukan agar situs berfungsi dan terjadi terlepas dari pilihan persetujuanmu.`,
      adsenseBody: `Google AdSense: digunakan untuk iklan. Sebagai vendor pihak ketiga, Google dapat mengatur cookie untuk iklan berbasis minat, tetapi hanya setelah kamu secara aktif menerimanya di banner persetujuan.`,
    },
    yourChoices: {
      heading: `Pilihanmu`,
      body: `Kamu bisa mengubah pilihan persetujuanmu kapan saja dengan menghapus penyimpanan lokal browser untuk vertoq.net, banner persetujuan akan muncul kembali saat halaman berikutnya dimuat. Selain ini, kami tidak menggunakan layanan analitik apa pun.`,
    },
    gdpr: {
      heading: `GDPR dan CCPA`,
      body: `Untuk pengunjung di EEA, data diproses sesuai dengan GDPR, dengan persetujuan sebagai dasar hukum untuk cookie terkait iklan. Kamu berhak meminta informasi tentang, atau penghapusan, data yang kami proses. Untuk pengunjung di California, hak setara berlaku di bawah CCPA. Hubungi kami (lihat di bawah) untuk menggunakan hak-hak ini.`,
    },
    changes: {
      heading: `Perubahan pada kebijakan ini`,
      body: `Kami dapat memperbarui kebijakan ini seiring perubahan situs atau layanan pihak ketiga kami. Tanggal di bagian atas menunjukkan kapan terakhir diubah.`,
    },
    contact: {
      heading: `Hubungi kami`,
      body: `Jika kamu punya pertanyaan tentang kebijakan ini atau bagaimana datamu ditangani, kirim email ke`,
    },
  },
};
