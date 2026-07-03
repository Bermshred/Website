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
        "Motorradfahren. Ich appreciate hochwertige Dinge, die lange halten, " +
        "zum Beispiel einen guten Rotring 600.",
      "bio.text2":
        "Für die Zukunft strebe ich eine Karriere in der IT an, ein gesundes " +
        "Leben und vor allem, dass ich nie den Spaß am Mountainbiken verliere. " +
        "Seit 2,5 Jahren habe ich außerdem eine Freundin und bin sehr glücklich.",

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
      "ranks.period": "ZEITRAUM",
      "ranks.hours": "STUNDEN",
      "ranks.owperiod": "2025-HEUTE",
      "ranks.csperiod": "2018-HEUTE",
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
      "hobbies.audio": "AUDIO",
      "hobbies.rig": "PC SPECS",
      "hobbies.more": "NOCH VIEL MEHR RABBITHOLES…",

      cards: {
        mtb: {
          title: "MOUNTAINBIKE",
          file: "cat /irl/hobbys/mtb.log",
          text: [
            "Ich fahre seit ca. 7 Jahren Mountainbike in meiner Freizeit. Vor 3 Jahren habe ich mich an Rennen gewagt, habe es aber nie weiter verfolgt. Für mich waren es immer mehr die Naturverbundenheit, die Geschwindigkeit und die Freiheit, die mir das Ganze gibt.",
            "Früher hatte ich ein Canyon Torque aus Aluminium, seit Neustem fahre ich ein Radon Jab MX 10.0 HD. Absolute volle Hütte und ein Brett von Enduro.",
          ],
        },
        moto: {
          title: "MOTORRAD",
          file: "cat /irl/hobbys/moto.log",
          text: [
            "Eher ein Nebenhobby. Ich bin Genießerfahrer. So habe ich in 2 Jahren gerade mal 3000 km auf meine wunderschöne CB650R gepackt.",
            "Montiert ist ein MIVV GP Pro, der alles aus dem Ding rausholt, was möglich ist.",
          ],
        },
        ice: {
          title: "SCHLITTSCHUH",
          file: "cat /irl/hobbys/ice.log",
          text: [
            "Im Winter, wenn MTB und Motorrad nicht gehen, fahre ich sehr viel Schlittschuh. Ich habe Bauer T-Blades und würde mich zum guten Durchschnitt zählen, was Skill angeht. Spaß machen tut es aber allemal.",
          ],
        },
        print: {
          title: "3D-DRUCK",
          file: "cat /irl/hobbys/3dprint.log",
          text: [
            "Ich habe einen Anycubic Kobra S1. Seitdem ich das Gerät habe, haben sich mir so viele neue Möglichkeiten eröffnet. Die Freiheit, in wenigen Stunden haben zu können, was man will, ist unbeschreiblich.",
            "Noch viel geiler wird es, wenn man für Probleme, die einen selbst betreffen, selbst Lösungen modelliert und druckt.",
          ],
        },
        fpv: {
          title: "FPV / DROHNEN + FOTOGRAFIE",
          file: "cat /irl/hobbys/fpv.log",
          text: [
            "Seit nicht allzu langer Zeit habe ich eine DJI Flip als Kameradrohne und eine BETAFPV Cetus X als FPV. Viel kann ich dazu nicht sagen, außer dass JEDER mal FPV im Simulator probieren sollte. Es ist saugeil.",
            "Als Kamera nutze ich hauptsächlich eine Canon EOS 250D, aktuell aber netterweise von einem Kollegen eine R6 ausgeliehen (danke nochmal).",
          ],
        },
        audio: {
          title: "AUDIO",
          file: "cat /irl/hobbys/audio.log",
          text: [
            "Eins meiner tiefsten Rabbitholes ist Audio. So besitze ich die legendären Sennheiser HD 6XX, Truthear Novas und Hifiman Edition XS. Wem das alles nichts sagt: auch egal. Ihr könnt eure AirPods, nachdem ihr die aufhattet, in die Tonne werfen (no hate <3).",
            "Zudem habe ich einen DEDIZIERTEN Kopfhörerverstärker, einen Schiit (ja, wirklich) Magni Unity. Dazu einen DEDIZIERTEN DAC, einen Topping E30 II.",
            "Falls ich mal nichts auf oder in den Ohren haben will, habe ich noch die relativ zurückhaltenden, aber total empfehlenswerten Edifier MR4 an einem Focusrite Scarlett Solo (4th Gen). An dem hängt auch ein Rode NT1-A, was sonst.",
          ],
        },
        rig: {
          title: "PC SPECS",
          file: "neofetch --rig",
          text: [
            "Monitor: OLED, 1440p, 240 Hz.",
            "Tastatur: Endgame Gear KB65HE.",
            "Mäuse: WLMOUSE Beast X und Pulsar Crazylight X.",
            "Mauspad: Wallhack SP-004.",
            "CPU / GPU / RAM: [ DATEN VERSCHLÜSSELT ]",
          ],
        },
        more: {
          title: "WEITERE RABBITHOLES",
          file: "ls /irl/rabbitholes/",
          text: [
            "Stationery-Zeug: Kuru Toga, Rotring, Uni-ball.",
            "Zauberwürfel, Rekord: 29,8 Sekunden.",
            "Etwas Airsoft. Und kochen tu ich auch sehr, sehr gerne.",
          ],
        },
      },

      "contact.title": "ping verunglxckt",
      "contact.decrypt": "[ KLICKEN ZUM ENTSCHLÜSSELN ]",
      "contact.copy": "COPY",
      "contact.copy2": "COPY",
      "contact.copy3": "COPY",
      "contact.copied": "OK ✓",
      "contact.note": "// Friend-Code im Steam-Client unter „Freund hinzufügen“ eingeben",

      "footer.visitors": "BESUCHER",
      "footer.viewed": "optimiert für Neural-Link · zertifiziert für 16:9 & 21:9",
      "footer.rights": "kein Tracking, keine Cookies, keine Identität",

      ticker:
        "+++ WILLKOMMEN IM TERMINAL +++ LINUX > ALLES +++ CHAMP 2 · IMMORTAL 1 · " +
        "PLATIN · CS2: ALLES & NICHTS +++ PAPIER > TOUCHSCREEN +++ ROTRING 600 " +
        "SUPREMACY +++ HD 6XX > AIRPODS +++ MTB SEASON LOADING... +++ KEINE IDENTITÄT GEFUNDEN [OK] +++ ",
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
        "balanced out by mountain biking and riding my motorcycle. I appreciate " +
        "high-quality things that last, like a good Rotring 600.",
      "bio.text2":
        "For the future I'm aiming for a career in IT, a healthy life and above " +
        "all never losing the joy of mountain biking. I've also been with my " +
        "girlfriend for 2.5 years and I'm very happy.",

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
      "ranks.period": "PERIOD",
      "ranks.hours": "HOURS",
      "ranks.owperiod": "2025-NOW",
      "ranks.csperiod": "2018-NOW",
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
      "hobbies.audio": "AUDIO",
      "hobbies.rig": "PC SPECS",
      "hobbies.more": "MANY MORE RABBIT HOLES…",

      cards: {
        mtb: {
          title: "MOUNTAIN BIKING",
          file: "cat /irl/hobbies/mtb.log",
          text: [
            "I've been riding MTB in my free time for about 7 years. 3 years ago I gave racing a shot, but never really pursued it. For me it was always more about the connection to nature, the speed and the freedom it gives me.",
            "I used to ride an aluminium Canyon Torque; just recently I switched to a Radon Jab MX 10.0 HD. Fully loaded and an absolute weapon of an enduro.",
          ],
        },
        moto: {
          title: "MOTORCYCLE",
          file: "cat /irl/hobbies/moto.log",
          text: [
            "More of a side hobby. I'm a scenic rider. In 2 years I've put barely 3,000 km on my beautiful CB650R.",
            "Fitted with a MIVV GP Pro that squeezes everything out of it that's physically possible.",
          ],
        },
        ice: {
          title: "ICE SKATING",
          file: "cat /irl/hobbies/ice.log",
          text: [
            "In winter, when MTB and motorcycle are off the table, I skate a lot. I'm on Bauer T-Blades and would call myself a good average skill-wise. Great fun either way.",
          ],
        },
        print: {
          title: "3D PRINTING",
          file: "cat /irl/hobbies/3dprint.log",
          text: [
            "I own an Anycubic Kobra S1. Since I got that machine, so many new possibilities have opened up. The freedom of being able to have whatever you want within a few hours is indescribable.",
            "It gets even better when you model and print your own solutions to problems that actually affect you.",
          ],
        },
        fpv: {
          title: "FPV / DRONES + PHOTOGRAPHY",
          file: "cat /irl/hobbies/fpv.log",
          text: [
            "Not too long ago I picked up a DJI Flip as a camera drone and a BETAFPV Cetus X for FPV. There's not much to say, except that EVERYONE should try FPV in a simulator at least once. It's insanely good.",
            "Camera-wise I mainly shoot a Canon EOS 250D, though right now a colleague has kindly lent me his R6 (thanks again).",
          ],
        },
        audio: {
          title: "AUDIO",
          file: "cat /irl/hobbies/audio.log",
          text: [
            "One of my deepest rabbit holes is audio. I own the legendary Sennheiser HD 6XX, Truthear Novas and a Hifiman Edition XS. If none of that means anything to you: that's fine, but after wearing these you can toss your AirPods straight into the bin (no hate <3).",
            "On top of that I run a DEDICATED headphone amp, a Schiit (yes, really) Magni Unity. Plus a DEDICATED DAC, a Topping E30 II.",
            "And when I don't want anything on or in my ears, there are the fairly modest but highly recommendable Edifier MR4s, hooked up to a Focusrite Scarlett Solo (4th gen). Also plugged into it: a Rode NT1-A, what else.",
          ],
        },
        rig: {
          title: "PC SPECS",
          file: "neofetch --rig",
          text: [
            "Monitor: OLED, 1440p, 240 Hz.",
            "Keyboard: Endgame Gear KB65HE.",
            "Mice: WLMOUSE Beast X and Pulsar Crazylight X.",
            "Mousepad: Wallhack SP-004.",
            "CPU / GPU / RAM: [ DATA ENCRYPTED ]",
          ],
        },
        more: {
          title: "MORE RABBIT HOLES",
          file: "ls /irl/rabbitholes/",
          text: [
            "Stationery stuff: Kuru Toga, Rotring, Uni-ball.",
            "Speedcubing, personal best: 29.8 seconds.",
            "A bit of airsoft. And I also really, really love cooking.",
          ],
        },
      },

      "contact.title": "ping verunglxckt",
      "contact.decrypt": "[ CLICK TO DECRYPT ]",
      "contact.copy": "COPY",
      "contact.copy2": "COPY",
      "contact.copy3": "COPY",
      "contact.copied": "OK ✓",
      "contact.note": "// enter the friend code in your Steam client under “Add a Friend”",

      "footer.visitors": "VISITORS",
      "footer.viewed": "optimized for neural link · certified for 16:9 & 21:9",
      "footer.rights": "no tracking, no cookies, no identity",

      ticker:
        "+++ WELCOME TO THE TERMINAL +++ LINUX > EVERYTHING +++ CHAMP 2 · " +
        "IMMORTAL 1 · PLATINUM · CS2: EVERYTHING & NOTHING +++ PAPER > " +
        "TOUCHSCREEN +++ ROTRING 600 SUPREMACY +++ HD 6XX > AIRPODS +++ " +
        "MTB SEASON LOADING... +++ NO IDENTITY FOUND [OK] +++ ",
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

    // re-render an open dossier card in the new language
    if (currentHobby && !dossier.hidden) renderDossier();
  }

  document.getElementById("lang-de").addEventListener("click", () => applyLang("de"));
  document.getElementById("lang-en").addEventListener("click", () => applyLang("en"));

  /* ─────────── hobby dossier modal ─────────── */

  const dossier = document.getElementById("dossier");
  const dossierTitle = document.getElementById("dossier-title");
  const dossierFile = document.getElementById("dossier-file");
  const dossierBody = document.getElementById("dossier-body");
  let currentHobby = null;

  const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const SCRAMBLE_GLYPHS = "!<>-_\\/[]{}=+*^?#░▒▓█";
  let scrambleTimers = [];

  function clearScrambles() {
    scrambleTimers.forEach(clearInterval);
    scrambleTimers = [];
  }

  function scrambleIn(el, target, speed) {
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      el.textContent = target
        .split("")
        .map((ch, i) =>
          i < frame ? ch : SCRAMBLE_GLYPHS[Math.floor(Math.random() * SCRAMBLE_GLYPHS.length)]
        )
        .join("");
      if (frame >= target.length) {
        clearInterval(timer);
        el.textContent = target;
      }
    }, speed);
    scrambleTimers.push(timer);
  }

  function renderDossier(withFx) {
    const card = I18N[lang].cards[currentHobby];
    if (!card) return;
    clearScrambles();
    if (withFx && !noMotion) {
      scrambleIn(dossierTitle, card.title, 26);
      scrambleIn(dossierFile, card.file, 14);
    } else {
      dossierTitle.textContent = card.title;
      dossierFile.textContent = card.file;
    }
    dossierBody.textContent = "";
    card.text.forEach((t, i) => {
      const p = document.createElement("p");
      p.className = "dossier-text";
      p.style.setProperty("--i", i);
      p.textContent = t;
      dossierBody.appendChild(p);
    });
  }

  function openDossier(key) {
    currentHobby = key;
    renderDossier(true);
    dossier.hidden = false;
    document.body.classList.add("modal-open");
    dossier.querySelector(".dossier-close").focus();
  }

  function closeDossier() {
    if (dossier.hidden || dossier.classList.contains("closing")) return;
    clearScrambles();
    let done = false;
    const finalize = () => {
      if (done) return;
      done = true;
      dossier.classList.remove("closing");
      dossier.hidden = true;
      currentHobby = null;
      document.body.classList.remove("modal-open");
    };
    if (noMotion) return finalize();
    dossier.classList.add("closing");
    dossier
      .querySelector(".dossier-card")
      .addEventListener("animationend", finalize, { once: true });
    setTimeout(finalize, 450); // safety net
  }

  document.querySelectorAll(".hobby[data-hobby]").forEach((btn) => {
    btn.addEventListener("click", () => openDossier(btn.dataset.hobby));
  });
  dossier.querySelector(".dossier-close").addEventListener("click", closeDossier);
  dossier.addEventListener("click", (e) => {
    if (e.target === dossier) closeDossier();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !dossier.hidden) closeDossier();
  });

  /* ─────────── contact (assembled at runtime → no plaintext for scrapers) ─────────── */

  function getMail() {
    return ["Verunglxckt", "gmail.com"].join("@");
  }
  const COPY_VALUES = {
    steam: "379859846",
    discord: "verunglxckt",
  };

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
      const value = btn.dataset.copy === "mail" ? getMail() : COPY_VALUES[btn.dataset.copy];
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

  /* ─────────── digital rain (hintergrund) ─────────── */

  const rainCanvas = document.getElementById("fx-rain");
  if (rainCanvas && !reducedMotion) {
    const ctx = rainCanvas.getContext("2d");
    const GLYPHS =
      "アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF<>/\\{}[]$#@*+=";
    const FONT = 16;
    const STEP = FONT * 1.6;
    let w, h, drops;

    function sizeRain() {
      w = rainCanvas.width = window.innerWidth;
      h = rainCanvas.height = window.innerHeight;
      const cols = Math.ceil(w / STEP);
      drops = Array.from({ length: cols }, () => Math.random() * (-h / FONT));
    }
    sizeRain();
    window.addEventListener("resize", sizeRain);

    let rainOn = false;
    let last = 0;
    function rainLoop(t) {
      if (document.hidden) {
        rainOn = false;
        return;
      }
      requestAnimationFrame(rainLoop);
      if (t - last < 66) return; // ~15 fps reicht für den vibe
      last = t;
      ctx.fillStyle = "rgba(4, 7, 13, 0.22)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = FONT + "px 'Share Tech Mono', monospace";
      for (let i = 0; i < drops.length; i++) {
        const y = drops[i] * FONT;
        if (y > 0) {
          const r = Math.random();
          ctx.fillStyle = r > 0.97 ? "#00e5ff" : r > 0.94 ? "#fcee0a" : "#ff2ec8";
          ctx.fillText(GLYPHS[(Math.random() * GLYPHS.length) | 0], i * STEP, y);
        }
        if (y > h && Math.random() > 0.976) drops[i] = Math.random() * -20;
        else drops[i]++;
      }
    }
    function startRain() {
      if (rainOn) return;
      rainOn = true;
      requestAnimationFrame(rainLoop);
    }
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) startRain();
    });
    startRain();
  }

  /* ─────────── panel materialize on scroll ─────────── */

  if (!reducedMotion && "IntersectionObserver" in window) {
    const panels = document.querySelectorAll(".layout .panel");
    const io = new IntersectionObserver(
      (entries) => {
        let i = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.style.animationDelay = i++ * 90 + "ms";
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );
    panels.forEach((p) => {
      p.classList.add("reveal");
      io.observe(p);
    });
  }

  /* ─────────── init ─────────── */

  applyLang(lang);
})();
