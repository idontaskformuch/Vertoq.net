export interface ContactContent {
  reasons: { heading: string; body: string };
  bugReports: { heading: string; body: string };
}

export const contactContent: Record<string, ContactContent> = {
  sv: {
    reasons: {
      heading: `Vad du kan höra av dig om`,
      body: `Felaktiga beräkningar, förslag på en ny kalkylator, frågor om hur ett verktyg fungerar, eller allmän feedback på siten, allt är välkommet. Vi läser varje mejl som kommer in, även om vi inte alltid hinner svara på alla lika snabbt.`,
    },
    bugReports: {
      heading: `Om du hittat ett räknefel`,
      body: `Skriv gärna vilken kalkylator det gäller, vilka värden du matade in, och vad du förväntade dig för resultat. Det gör det mycket snabbare för oss att hitta och åtgärda problemet.`,
    },
  },

  en: {
    reasons: {
      heading: `What you can reach out about`,
      body: `Incorrect calculations, suggestions for a new calculator, questions about how a tool works, or general feedback on the site, all of it is welcome. We read every email that comes in, even if we don't always get to reply to all of them equally fast.`,
    },
    bugReports: {
      heading: `If you found a calculation error`,
      body: `Please mention which calculator it involves, what values you entered, and what result you expected. That makes it much faster for us to find and fix the issue.`,
    },
  },

  pt: {
    reasons: {
      heading: `Sobre o que você pode entrar em contato`,
      body: `Cálculos incorretos, sugestões de uma nova calculadora, dúvidas sobre como uma ferramenta funciona, ou feedback geral sobre o site, tudo é bem-vindo. Lemos todo e-mail que chega, mesmo que nem sempre consigamos responder a todos igualmente rápido.`,
    },
    bugReports: {
      heading: `Se você encontrou um erro de cálculo`,
      body: `Mencione qual calculadora está envolvida, quais valores você inseriu, e qual resultado você esperava. Isso torna muito mais rápido para nós encontrarmos e corrigirmos o problema.`,
    },
  },

  es: {
    reasons: {
      heading: `Sobre qué puedes contactarnos`,
      body: `Cálculos incorrectos, sugerencias de una nueva calculadora, dudas sobre cómo funciona una herramienta, o comentarios generales sobre el sitio, todo es bienvenido. Leemos cada correo que llega, aunque no siempre logremos responder a todos con la misma rapidez.`,
    },
    bugReports: {
      heading: `Si encontraste un error de cálculo`,
      body: `Menciona qué calculadora está involucrada, qué valores ingresaste, y qué resultado esperabas. Eso nos permite encontrar y corregir el problema mucho más rápido.`,
    },
  },

  de: {
    reasons: {
      heading: `Worüber du dich melden kannst`,
      body: `Falsche Berechnungen, Vorschläge für einen neuen Rechner, Fragen dazu, wie ein Tool funktioniert, oder allgemeines Feedback zur Seite, alles ist willkommen. Wir lesen jede eingehende E-Mail, auch wenn wir nicht immer allen gleich schnell antworten können.`,
    },
    bugReports: {
      heading: `Wenn du einen Rechenfehler gefunden hast`,
      body: `Gib bitte an, um welchen Rechner es geht, welche Werte du eingegeben hast, und welches Ergebnis du erwartet hast. Das macht es für uns viel schneller, das Problem zu finden und zu beheben.`,
    },
  },

  ja: {
    reasons: {
      heading: `ご連絡いただける内容`,
      body: `計算結果の誤り、新しい計算機のご提案、ツールの使い方に関するご質問、サイト全般へのご意見など、どんな内容でも歓迎します。届いたメールはすべて目を通していますが、すべてに同じ速さで返信できるとは限りません。`,
    },
    bugReports: {
      heading: `計算ミスを見つけた場合`,
      body: `どの計算機に関することか、どんな値を入力したか、どんな結果を期待していたかをお書き添えください。そうしていただけると、問題の発見と修正がはるかに早くなります。`,
    },
  },

  zh: {
    reasons: {
      heading: `你可以联系我们的事项`,
      body: `计算错误、新计算器的建议、关于某个工具如何使用的问题，或者对网站的一般反馈，都欢迎联系我们。每封邮件我们都会阅读，只是不一定能同样快速地回复每一封。`,
    },
    bugReports: {
      heading: `如果你发现了计算错误`,
      body: `请说明涉及哪个计算器、你输入了什么数值，以及你期望得到什么结果。这样能让我们更快找到并修复问题。`,
    },
  },

  ko: {
    reasons: {
      heading: `문의하실 수 있는 내용`,
      body: `잘못된 계산 결과, 새로운 계산기에 대한 제안, 도구 사용 방법에 대한 질문, 또는 사이트에 대한 전반적인 의견 등 무엇이든 환영합니다. 도착하는 모든 이메일을 읽고 있지만, 항상 똑같이 빠르게 답변드리지는 못할 수도 있습니다.`,
    },
    bugReports: {
      heading: `계산 오류를 발견하셨다면`,
      body: `어떤 계산기와 관련된 것인지, 어떤 값을 입력했는지, 어떤 결과를 기대했는지 알려주세요. 그러면 저희가 문제를 훨씬 더 빠르게 찾아서 고칠 수 있습니다.`,
    },
  },

  hi: {
    reasons: {
      heading: `आप किस बारे में संपर्क कर सकते हैं`,
      body: `गलत गणना, किसी नए कैलकुलेटर का सुझाव, किसी टूल के काम करने के तरीके के बारे में सवाल, या साइट पर सामान्य फ़ीडबैक, यह सब आपका स्वागत है। आने वाला हर ईमेल हम पढ़ते हैं, भले ही हम हमेशा सबको एक जैसी तेज़ी से जवाब न दे पाएं।`,
    },
    bugReports: {
      heading: `अगर आपको कोई गणना में गड़बड़ी मिली है`,
      body: `कृपया बताएं कि यह किस कैलकुलेटर से जुड़ी है, आपने कौन से मान डाले थे, और आप क्या नतीजा उम्मीद कर रहे थे। इससे हमें समस्या ढूंढने और ठीक करने में काफ़ी तेज़ी होगी।`,
    },
  },

  id: {
    reasons: {
      heading: `Hal yang bisa kamu sampaikan ke kami`,
      body: `Perhitungan yang salah, saran untuk kalkulator baru, pertanyaan tentang cara kerja sebuah alat, atau masukan umum tentang situs ini, semuanya kami sambut baik. Kami membaca setiap email yang masuk, meskipun kami tidak selalu bisa membalas semuanya dengan kecepatan yang sama.`,
    },
    bugReports: {
      heading: `Jika kamu menemukan kesalahan perhitungan`,
      body: `Mohon sebutkan kalkulator mana yang bermasalah, nilai apa yang kamu masukkan, dan hasil apa yang kamu harapkan. Itu membuat kami jauh lebih cepat menemukan dan memperbaiki masalahnya.`,
    },
  },
};
