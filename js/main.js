/* ═══════════════════════════════════════════════
   VERUNGLXCKT // main.js
   i18n · boot screen · ticker · contact · counter
   ═══════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ─────────── i18n ─────────── */

  const I18N = {
    de: {
      "sys.online": "[ SYSTEM ONLINE ]",
      "stats.age": "ALTER",
      "stats.loc": "STANDORT",
      "stats.locval": "NORDDEUTSCHLAND",
      "stats.os": "DAILY DRIVER",
      "stats.status": "STATUS",
      "stats.statusval": "AM GRINDEN",

      "bio.title": "whoami",
      "bio.text":
        "Norddeutscher IT-Student mit Passion für Linux und Natur. Viel am PC " +
        "(arbeits- und hobbybedingt), der Ausgleich läuft über MTB und " +
        "Motorradfahren. Ich habe zwar ein cooles 2-in-1-Notebook, schreibe aber " +
        "trotzdem lieber auf Papier. Mit meinem Rotring 600, versteht sich.",

      "lore.title": "cat name_lore.txt",
      "lore.text1":
        "Der Name Verunglxckt stammt noch aus der Minecraft-Zeit, als ein X in " +
        "normalen Wörtern das Coolste überhaupt war. So ist Verunglxckt " +
        "entstanden, und seitdem heiße ich in fast jedem Spiel so.",
      "lore.text2":
        "Gelegentlich findet man mich auch unter Bermshred, z. B. auf Twitch, " +
        "weil englischsprachige Streamer an dem deutschen Wort „verunglückt“ " +
        "regelmäßig verunglückt sind.",

      "ranks.title": "./peak_ranks --comp",
      "ranks.game": "SPIEL",
      "ranks.peak": "PEAK",
      "ranks.status": "STATUS",
      "ranks.ice": "AUF EIS",
      "ranks.ice2": "AUF EIS",
      "ranks.grind": "STILL GRINDING",
      "ranks.semi": "SEMI AUF EIS",
      "ranks.csrank": "ALLES & NICHTS",

      "hobbies.title": "ls /irl/hobbys",
      "hobbies.mtb": "MOUNTAINBIKE",
      "hobbies.moto": "MOTORRAD",
      "hobbies.ice": "SCHLITTSCHUH",
      "hobbies.print": "3D-DRUCK",
      "hobbies.fpv": "FPV / KAMERADROHNEN + FOTOGRAFIE",
      "hobbies.more": "NOCH VIEL MEHR RABBITHOLES…",

      "contact.title": "ping verunglxckt",
      "contact.decrypt": "[ KLICKEN ZUM ENTSCHLÜSSELN ]",
      "contact.copy": "COPY",
      "contact.copy2": "COPY",
      "contact.copied": "OK ✓",
      "contact.note": "// Friend-Code im Steam-Client unter „Freund hinzufügen“ eingeben",

      "footer.visitors": "BESUCHER",
      "footer.viewed": "optimiert für 1024×768 & CRT-Monitore",
      "footer.rights": "kein Tracking, keine Cookies, keine Identität",

      ticker:
        "+++ WILLKOMMEN IM TERMINAL +++ LINUX > ALLES +++ CHAMP 2 · IMMORTAL 1 · " +
        "PLATIN · CS2: ALLES & NICHTS +++ PAPIER > TOUCHSCREEN +++ ROTRING 600 " +
        "SUPREMACY +++ MTB SEASON LOADING... +++ KEINE IDENTITÄT GEFUNDEN [OK] +++ ",
      boot: [
        "VERUNGLXCKT-BIOS v2.0.26 :: SELBSTTEST LÄUFT",
        "RAM ............... OK",
        "GPU ............... ÜBERTAKTET",
        "IDENTITÄT ......... NICHT GEFUNDEN [OK]",
        "PERSÖNLICHE DATEN . VERSCHLÜSSELT",
        "LADE PROFIL: VERUNGLXCKT.EXE",
        " ",
        "> _",
      ],
    },

    en: {
      "sys.online": "[ SYSTEM ONLINE ]",
      "stats.age": "AGE",
      "stats.loc": "LOCATION",
      "stats.locval": "NORTHERN GERMANY",
      "stats.os": "DAILY DRIVER",
      "stats.status": "STATUS",
      "stats.statusval": "GRINDING",

      "bio.title": "whoami",
      "bio.text":
        "IT student from Northern Germany with a passion for Linux and the " +
        "outdoors. I spend a lot of time at the PC (work and hobbies alike), " +
        "balanced out by mountain biking and riding my motorcycle. I do own a " +
        "cool 2-in-1 notebook, but I still prefer writing on paper. With my " +
        "Rotring 600, obviously.",

      "lore.title": "cat name_lore.txt",
      "lore.text1":
        "The name Verunglxckt goes back to my Minecraft days, when putting an X " +
        "into normal words was the coolest thing ever. That's how Verunglxckt " +
        "was born, and I've gone by it in almost every game since.",
      "lore.text2":
        "Occasionally you'll find me as Bermshred, e.g. on Twitch, because " +
        "English-speaking streamers kept crashing and burning on the German " +
        "word “verunglückt” (which, fittingly, means exactly that).",

      "ranks.title": "./peak_ranks --comp",
      "ranks.game": "GAME",
      "ranks.peak": "PEAK",
      "ranks.status": "STATUS",
      "ranks.ice": "ON ICE",
      "ranks.ice2": "ON ICE",
      "ranks.grind": "STILL GRINDING",
      "ranks.semi": "SEMI ON ICE",
      "ranks.csrank": "EVERYTHING & NOTHING",

      "hobbies.title": "ls /irl/hobbies",
      "hobbies.mtb": "MOUNTAIN BIKING",
      "hobbies.moto": "MOTORCYCLE",
      "hobbies.ice": "ICE SKATING",
      "hobbies.print": "3D PRINTING",
      "hobbies.fpv": "FPV / CAMERA DRONES + PHOTOGRAPHY",
      "hobbies.more": "MANY MORE RABBIT HOLES…",

      "contact.title": "ping verunglxckt",
      "contact.decrypt": "[ CLICK TO DECRYPT ]",
      "contact.copy": "COPY",
      "contact.copy2": "COPY",
      "contact.copied": "OK ✓",
      "contact.note": "// enter the friend code in your Steam client under “Add a Friend”",

      "footer.visitors": "VISITORS",
      "footer.viewed": "best viewed at 1024×768 on a CRT monitor",
      "footer.rights": "no tracking, no cookies, no identity",

      ticker:
        "+++ WELCOME TO THE TERMINAL +++ LINUX > EVERYTHING +++ CHAMP 2 · " +
        "IMMORTAL 1 · PLATINUM · CS2: EVERYTHING & NOTHING +++ PAPER > " +
        "TOUCHSCREEN +++ ROTRING 600 SUPREMACY +++ MTB SEASON LOADING... +++ " +
        "NO IDENTITY FOUND [OK] +++ ",
      boot: [
        "VERUNGLXCKT-BIOS v2.0.26 :: RUNNING SELF-TEST",
        "RAM ............... OK",
        "GPU ............... OVERCLOCKED",
        "IDENTITY .......... NOT FOUND [OK]",
        "PERSONAL DATA ..... ENCRYPTED",
        "LOADING PROFILE: VERUNGLXCKT.EXE",
        " ",
        "> _",
      ],
    },
  };

  let lang =
    localStorage.getItem("lang") ||
    ((navigator.language || "en").toLowerCase().startsWith("de") ? "de" : "en");

  function applyLang(next) {
    lang = next;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    const dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // ticker needs its content doubled for a seamless loop
    const ticker = document.getElementById("ticker");
    ticker.textContent = dict.ticker + dict.ticker;

    document.getElementById("lang-de").classList.toggle("active", lang === "de");
    document.getElementById("lang-en").classList.toggle("active", lang === "en");

    // if the mail was already decrypted, keep it visible after switching
    const mail = document.getElementById("mail-slot");
    if (mail.classList.contains("decrypted")) mail.textContent = getMail();
  }

  document.getElementById("lang-de").addEventListener("click", () => applyLang("de"));
  document.getElementById("lang-en").addEventListener("click", () => applyLang("en"));

  /* ─────────── contact (assembled at runtime → no plaintext for scrapers) ─────────── */

  function getMail() {
    return ["Verunglxckt", "gmail.com"].join("@");
  }
  const STEAM_CODE = "379859846";

  const mailSlot = document.getElementById("mail-slot");
  mailSlot.addEventListener("click", () => {
    if (mailSlot.classList.contains("decrypted")) return;
    // little scramble animation before revealing
    const target = getMail();
    const glyphs = "!<>-_\\/[]{}=+*^?#";
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      mailSlot.textContent = target
        .split("")
        .map((ch, i) =>
          i < frame ? ch : glyphs[Math.floor(Math.random() * glyphs.length)]
        )
        .join("");
      if (frame >= target.length) {
        clearInterval(timer);
        mailSlot.classList.add("decrypted");
      }
    }, 35);
  });

  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.dataset.copy === "mail" ? getMail() : STEAM_CODE;
      navigator.clipboard.writeText(value).then(() => {
        const restoreKey = btn.getAttribute("data-i18n");
        btn.textContent = I18N[lang]["contact.copied"];
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = I18N[lang][restoreKey];
          btn.classList.remove("copied");
        }, 1200);
      });
    });
  });

  /* ─────────── fake retro hit counter ─────────── */

  let hits = parseInt(localStorage.getItem("hits") || "0", 10);
  if (!hits) hits = 13337 + Math.floor(Math.random() * 500);
  hits++;
  localStorage.setItem("hits", String(hits));
  document.getElementById("hit-counter").textContent = String(hits).padStart(7, "0");

  /* ─────────── boot screen ─────────── */

  const boot = document.getElementById("boot");
  const bootLog = document.getElementById("boot-log");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function endBoot() {
    boot.classList.add("done");
    setTimeout(() => boot.remove(), 500);
  }

  if (reducedMotion || sessionStorage.getItem("booted")) {
    boot.remove();
  } else {
    sessionStorage.setItem("booted", "1");
    boot.addEventListener("click", endBoot); // skippable
    const lines = I18N[lang].boot;
    let i = 0;
    const typeLine = () => {
      if (i >= lines.length) return setTimeout(endBoot, 450);
      bootLog.textContent += lines[i] + "\n";
      i++;
      setTimeout(typeLine, 130 + Math.random() * 170);
    };
    typeLine();
  }

  /* ─────────── init ─────────── */

  applyLang(lang);
})();
