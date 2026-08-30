/* BLACK TRANSSIMO — Destination data (day trips + explore + northern Morocco) */
/* eslint-disable */
window.DEST_DATA = (function () {

  /* Shared image URLs (all verified HTTP 200) */
  var IMG = {
    essaouira: "https://images.pexels.com/photos/11588750/pexels-photo-11588750.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ourika: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80",
    imlil: "https://upload.wikimedia.org/wikipedia/commons/9/98/Imlil%2C_Atlas_Mountains.jpg",
    agafay: "https://images.unsplash.com/photo-1771138751580-9a143f4a2e90?auto=format&fit=crop&w=1200&q=80",
    ouzoud: "https://images.unsplash.com/photo-1585213303822-f19214012600?auto=format&fit=crop&w=1200&q=80",
    ouarzazate: "https://images.unsplash.com/photo-1569531955316-bb271f9c4531?auto=format&fit=crop&w=1200&q=80",
    marrakech: "https://images.unsplash.com/photo-1759330797462-43ccd6a2d7a1?auto=format&fit=crop&w=1200&q=80",
    zagora: "https://images.unsplash.com/photo-1779032369221-5a0861a3534e?auto=format&fit=crop&w=1200&q=80",
    dakhla: "https://images.unsplash.com/photo-1680863917935-266f725d7979?auto=format&fit=crop&w=1200&q=80",
    north: "https://images.unsplash.com/photo-1746797492800-a5e722a49442?auto=format&fit=crop&w=1200&q=80"
  };

  /* Localized destination names */
  var names = {
    essaouira: { en: "Essaouira", fr: "Essaouira", ar: "الصويرة" },
    ourika: { en: "Ourika Valley", fr: "Vallée de l'Ourika", ar: "وادي أوريكا" },
    imlil: { en: "Imlil", fr: "Imlil", ar: "إمليل" },
    agafay: { en: "Agafay Desert", fr: "Désert d'Agafay", ar: "صحراء أكفاي" },
    ouzoud: { en: "Ouzoud Waterfalls", fr: "Cascades d'Ouzoud", ar: "شلالات أوزود" },
    ouarzazate: { en: "Ouarzazate", fr: "Ouarzazate", ar: "ورزازات" },
    marrakech: { en: "Marrakech", fr: "Marrakech", ar: "مراكش" },
    zagora: { en: "Zagora", fr: "Zagora", ar: "زاكورة" },
    dakhla: { en: "Dakhla", fr: "Dakhla", ar: "الداخلة" },
    north: { en: "Northern Morocco", fr: "Nord du Maroc", ar: "شمال المغرب" }
  };

  var data = {
    /* ================================================== */
    essaouira: {
      kind: "trip",
      image: IMG.essaouira,
      tags: {
        en: ["Beach", "Medina", "Fishing Port", "UNESCO", "Surfing"],
        fr: ["Plage", "Médina", "Port de pêche", "UNESCO", "Surf"],
        ar: ["شاطئ", "مدينة عتيقة", "ميناء صيد", "يونسكو", "ركوب الأمواج"]
      },
      content: {
        en: {
          intro: "Essaouira, the 'Wind City of Africa', charms with its Atlantic breeze, fortified ramparts, and a laid-back artistic atmosphere on the Moroccan coast.",
          sections: [
            { title: "Top Attractions", items: ["Skala du Port & the fortress ramparts", "Historic Medina (UNESCO World Heritage)", "Moulay Hassan Square & the port", "Jewish quarter (Mellah)", "Thuya wood workshops"] },
            { title: "Things to Do", items: ["Walk the ramparts at sunset", "Browse the art galleries and craft stalls", "Taste fresh seafood at the port", "Relax on the golden beach", "Visit the Essaouira citadel"] },
            { title: "Nature & Outdoors", items: ["Golden sand beach", "Atlantic coast & islands view", "Windsurfing and kitesurfing spots", "Island of Mogador seabirds"] },
            { title: "Culture", items: ["Gnaoua music heritage", "Phoenician and Portuguese history", "Sculpted wood tradition", "Local artisan workshops"] },
            { title: "Adventure & Experiences", items: ["Surfing and windsurfing lessons", "Camel ride on the beach", "Quad and buggy along the coast", "Boat trips around the bay"] },
            { title: "Food & Local Life", items: ["Fresh grilled fish", "Seafood tagine by the sea", "Mint tea on a terrace", "Local pastries"] }
          ],
          transport: "Private round-trip transportation from Marrakech is included."
        },
        fr: {
          intro: "Essaouira, la « cité des alizés », séduit par sa brise atlantique, ses remparts et son atmosphère artistique décontractée sur la côte marocaine.",
          sections: [
            { title: "Incontournables", items: ["Skala du Port et remparts", "Médina historique (UNESCO)", "Place Moulay Hassan et le port", "Quartier juif (Mellah)", "Ateliers de marqueterie en thuya"] },
            { title: "À Faire", items: ["Marcher sur les remparts au coucher du soleil", "Visiter les galeries d'art et échoppes", "Déguster du poisson frais au port", "Se détendre sur la plage dorée", "Visiter la citadelle d'Essaouira"] },
            { title: "Nature & Plein Air", items: ["Plage de sable doré", "Côte atlantique et îles", "Spots de windsurf et kitesurf", "Île de Mogador et ses oiseaux"] },
            { title: "Culture", items: ["Héritage de la musique Gnaoua", "Histoire phénicienne et portugaise", "Tradition du bois sculpté", "Ateliers d'artisans locaux"] },
            { title: "Aventure & Expériences", items: ["Cours de surf et de windsurf", "Balade à dos de chameau sur la plage", "Quad et buggy le long de la côte", "Sorties en bateau dans la baie"] },
            { title: "Gastronomie & Vie Locale", items: ["Poisson grillé frais", "Tajine de fruits de mer", "Thé à la menthe en terrasse", "Pâtisseries locales"] }
          ],
          transport: "Le transport privé aller-retour depuis Marrakech est inclus."
        },
        ar: {
          intro: "الصويرة، «مدينة الرياح»، تسحر زوارها بنسيمها الأطلسي وأسوارها التاريخية وأجوائها الفنية الهادئة على الساحل المغربي.",
          sections: [
            { title: "أبرز المعالم", items: ["سكالا الميناء والأسوار", "المدينة العتيقة (تراث يونسكو)", "ساحة مولاي حسن والميناء", "الحي اليهودي (الملاح)", "ورش تقطيع خشب الثويا"] },
            { title: "أنشطة لا تفوت", items: ["التجول على الأسوار عند الغروب", "زيارة معارض الفن والمحلات الحرفية", "تذوق الأسماك الطازجة في الميناء", "الاسترخاء على الشاطئ الذهبي", "زيارة قلعة الصويرة"] },
            { title: "الطبيعة والهواء الطلق", items: ["شاطئ رملي ذهبي", "الساحل الأطلسي والجزر", "مواقع ركوب الأمواج بالرياح", "جزيرة موغادور وطيورها"] },
            { title: "الثقافة", items: ["تراث موسيقى كناوة", "التاريخ الفينيقي والبرتغالي", "تقليد الخشب المنحوت", "ورش الحرفيين المحليين"] },
            { title: "المغامرة والتجارب", items: ["دروس ركوب الأمواج", "ركوب الجمال على الشاطئ", "الكواد والبيغي على الساحل", "جولات بالقارب في الخليج"] },
            { title: "المأكولات والحياة المحلية", items: ["سمك مشوي طازج", "طاجين المأكولات البحرية", "الشاي بالنعناع على شرفة", "حلويات محلية"] }
          ],
          transport: "يشمل السعر النقل الخاص ذهاباً وإياباً من مراكش."
        }
      }
    },

    /* ================================================== */
    ourika: {
      kind: "trip",
      image: IMG.ourika,
      tags: {
        en: ["Mountains", "River", "Berber Villages", "Gardens", "Hiking"],
        fr: ["Montagnes", "Rivière", "Villages berbères", "Jardins", "Randonnée"],
        ar: ["جبال", "نهر", "قرى أمازيغية", "حدائق", "مشي"]
      },
      content: {
        en: {
          intro: "The Ourika Valley, an hour from Marrakech, is a green paradise of rivers, waterfalls and Berber villages nestled in the Atlas Mountains.",
          sections: [
            { title: "Top Attractions", items: ["Setti Fatma & its seven waterfalls", "Ourika river & terraced gardens", "Traditional Berber villages", "Women's argan cooperatives", "Atlas mountain viewpoints"] },
            { title: "Things to Do", items: ["Hike to the waterfalls", "Picnic by the river", "Visit a Berber family home", "Discover the argan oil cooperative", "Photograph the mountain scenery"] },
            { title: "Nature & Outdoors", items: ["Riverside walking trails", "Hiking paths in the Atlas", "Valley viewpoints", "Flora of the High Atlas"] },
            { title: "Culture", items: ["Berber villages & hospitality", "Traditional architecture", "Argan & saffron traditions", "Local crafts"] },
            { title: "Adventure & Experiences", items: ["Waterfall hike", "River trekking", "Mule trekking", "Mountain walks"] },
            { title: "Food & Local Life", items: ["Lunch with a mountain view", "Berber tea ritual", "Local dairy & honey", "Tajine at a valley terrace"] }
          ],
          transport: "Private round-trip transportation from Marrakech is included."
        },
        fr: {
          intro: "La vallée de l'Ourika, à une heure de Marrakech, est un paradis vert de rivières, de cascades et de villages berbères nichés dans l'Atlas.",
          sections: [
            { title: "Incontournables", items: ["Setti Fatma et ses sept cascades", "Rivière de l'Ourika et jardins en terrasses", "Villages berbères traditionnels", "Coopératives d'argan au féminin", "Points de vue sur l'Atlas"] },
            { title: "À Faire", items: ["Randonnée jusqu'aux cascades", "Pique-nique au bord de la rivière", "Visite d'une maison berbère", "Découverte de la coopérative d'huile d'argan", "Photographier les paysages de montagne"] },
            { title: "Nature & Plein Air", items: ["Sentiers au bord de la rivière", "Sentiers de randonnée dans l'Atlas", "Belvédères de la vallée", "Flore du Haut Atlas"] },
            { title: "Culture", items: ["Villages berbères et hospitalité", "Architecture traditionnelle", "Traditions de l'argan et du safran", "Artisanat local"] },
            { title: "Aventure & Expériences", items: ["Randonnée vers les cascades", "Trekking dans la rivière", "Randonnée à dos de mulet", "Balades en montagne"] },
            { title: "Gastronomie & Vie Locale", items: ["Déjeuner face aux montagnes", "Rituel du thé berbère", "Produits laitiers et miel locaux", "Tajine en terrasse dans la vallée"] }
          ],
          transport: "Le transport privé aller-retour depuis Marrakech est inclus."
        },
        ar: {
          intro: "وادي أوريكا، على بُعد ساعة من مراكش، جنة خضراء من الأنهار والشلالات والقرى الأمازيغية المحتضنة في جبال الأطلس.",
          sections: [
            { title: "أبرز المعالم", items: ["سيتي فاطمة وشلالاتها السبعة", "نهر أوريكا والحدائق المدرجة", "القرى الأمازيغية التقليدية", "تعاونيات زيت الأرغان النسائية", "مناظر جبال الأطلس"] },
            { title: "أنشطة لا تفوت", items: ["المشي إلى الشلالات", "نزهة على ضفاف النهر", "زيارة منزل أمازيغي", "زيارة تعاونية زيت الأرغان", "تصوير المناظر الجبلية"] },
            { title: "الطبيعة والهواء الطلق", items: ["مسارات على ضفاف النهر", "طرق المشي في الأطلس", "نقاط إطلالة على الوادي", "نباتات الأطلس الكبير"] },
            { title: "الثقافة", items: ["القرى الأمازيغية وكرم الضيافة", "العمارة التقليدية", "تقاليد الأرغان والزعفران", "الحرف المحلية"] },
            { title: "المغامرة والتجارب", items: ["المشي إلى الشلالات", "الترجل في النهر", "ركوب البغال", "جولات جبلية"] },
            { title: "المأكولات والحياة المحلية", items: ["غداء بإطلالة جبلية", "طقوس الشاي الأمازيغي", "منتجات الألبان والعسل المحلي", "طاجين على شرفة الوادي"] }
          ],
          transport: "يشمل السعر النقل الخاص ذهاباً وإياباً من مراكش."
        }
      }
    },

    /* ================================================== */
    imlil: {
      kind: "trip",
      image: IMG.imlil,
      tags: {
        en: ["High Atlas", "Toubkal", "Trekking", "Berber Villages", "Panoramas"],
        fr: ["Haut Atlas", "Toubkal", "Trekking", "Villages berbères", "Panoramas"],
        ar: ["الأطلس الكبير", "توبقال", "تسلق", "قرى أمازيغية", "مناظر بانورامية"]
      },
      content: {
        en: {
          intro: "Imlil, gateway to Mount Toubkal, is a High Atlas mountain village offering spectacular landscapes, trekking trails and warm Berber hospitality.",
          sections: [
            { title: "Top Attractions", items: ["Mount Toubkal base camp (4,167 m)", "Imlil valley & terraced fields", "Aroumd village", "Waterfalls of Aroumd", "Mountain passes & viewpoints"] },
            { title: "Things to Do", items: ["Trek towards Toubkal", "Hike to Aroumd village", "Visit the mountain refuge", "Explore the valley trails", "Enjoy the panoramic views"] },
            { title: "Nature & Outdoors", items: ["High Atlas peaks", "Alpine valleys", "Walking & trekking trails", "Waterfalls & streams"] },
            { title: "Culture", items: ["Berber mountain villages", "Traditional stone houses", "Local guides & muleteers", "Mountain hospitality"] },
            { title: "Adventure & Experiences", items: ["Toubkal trekking", "Mountain hiking", "Mule rides", "Overnight stays in the refuge"] },
            { title: "Food & Local Life", items: ["Berber lunch in a local home", "Mint tea after the trek", "Local mountain produce"] }
          ],
          transport: "Private round-trip transportation from Marrakech is included."
        },
        fr: {
          intro: "Imlil, porte du mont Toubkal, est un village de montagne du Haut Atlas offrant des paysages spectaculaires, des sentiers de randonnée et une hospitalité berbère chaleureuse.",
          sections: [
            { title: "Incontournables", items: ["Base du mont Toubkal (4 167 m)", "Vallée d'Imlil et champs en terrasses", "Village d'Aroumd", "Cascades d'Aroumd", "Cols et points de vue"] },
            { title: "À Faire", items: ["Trek vers le Toubkal", "Randonnée vers Aroumd", "Visite du refuge de montagne", "Explorer les sentiers de la vallée", "Profiter des panoramas"] },
            { title: "Nature & Plein Air", items: ["Sommets du Haut Atlas", "Vallées alpines", "Sentiers de marche et de trekking", "Cascades et ruisseaux"] },
            { title: "Culture", items: ["Villages berbères de montagne", "Maisons traditionnelles en pierre", "Guides et muletiers locaux", "Hospitalité montagnarde"] },
            { title: "Aventure & Expériences", items: ["Trekking vers le Toubkal", "Randonnée en montagne", "Balades à dos de mulet", "Nuits au refuge"] },
            { title: "Gastronomie & Vie Locale", items: ["Déjeuner berbère chez l'habitant", "Thé à la menthe après le trek", "Produits locaux de montagne"] }
          ],
          transport: "Le transport privé aller-retour depuis Marrakech est inclus."
        },
        ar: {
          intro: "إمليل، بوابة جبل توبقال، قرية جبلية في الأطلس الكبير تتميز بمناظر خلابة ومسارات تسلق وكرم ضيافة أمازيغي دافئ.",
          sections: [
            { title: "أبرز المعالم", items: ["قاعدة جبل توبقال (4167 م)", "وادي إمليل والحقول المدرجة", "قرية أورموند", "شلالات أورموند", "الممرات الجبلية ونقاط الإطلالة"] },
            { title: "أنشطة لا تفوت", items: ["المشي باتجاه توبقال", "جولة إلى قرية أورموند", "زيارة مأوى الجبل", "استكشاف مسارات الوادي", "الاستمتاع بالمناظر البانورامية"] },
            { title: "الطبيعة والهواء الطلق", items: ["قمم الأطلس الكبير", "الوديان الألبية", "مسارات المشي والتسلق", "الشلالات والجداول"] },
            { title: "الثقافة", items: ["قرى أمازيغية جبلية", "بيوت حجرية تقليدية", "مرشدون محليون", "كرم الضيافة الجبلية"] },
            { title: "المغامرة والتجارب", items: ["تسلق توبقال", "المشي في الجبال", "ركوب البغال", "المبيت في المأوى"] },
            { title: "المأكولات والحياة المحلية", items: ["غداء أمازيغي لدى عائلة محلية", "الشاي بالنعناع بعد التسلق", "منتجات الجبل المحلية"] }
          ],
          transport: "يشمل السعر النقل الخاص ذهاباً وإياباً من مراكش."
        }
      }
    },

    /* ================================================== */
    agafay: {
      kind: "trip",
      image: IMG.agafay,
      tags: {
        en: ["Desert", "Sunset", "Camels", "Luxury Camps", "Dunes"],
        fr: ["Désert", "Coucher de soleil", "Chameaux", "Camps de luxe", "Dunes"],
        ar: ["صحراء", "غروب الشمس", "جمال", "مخيمات فاخرة", "كثبان"]
      },
      content: {
        en: {
          intro: "Just 40 minutes from Marrakech, the Agafay desert is a majestic expanse of golden rocky hills that glow at sunset — an unforgettable escape into silence.",
          sections: [
            { title: "Top Attractions", items: ["Agafay desert plateau", "Luxury desert camps", "Panoramic viewpoints", "Berber tents & tea houses", "Stargazing spots"] },
            { title: "Things to Do", items: ["Sunset camel ride", "Luxury camp lunch or dinner", "Watch the stars at night", "Explore the rocky hills", "Enjoy a Berber tea ceremony"] },
            { title: "Nature & Outdoors", items: ["Golden rocky desert", "Dramatic sunsets", "Clear starry skies", "Silence & wide-open spaces"] },
            { title: "Culture", items: ["Berber nomad heritage", "Bedouin tea tradition", "Desert camps & fireplaces"] },
            { title: "Adventure & Experiences", items: ["Camel riding", "Quad & buggy rides", "4x4 desert drive", "Sunset photo sessions"] },
            { title: "Food & Local Life", items: ["Traditional Moroccan dinner", "Mint tea by the campfire", "Lunch under the tent"] }
          ],
          transport: "Private round-trip transportation from Marrakech is included."
        },
        fr: {
          intro: "À seulement 40 minutes de Marrakech, le désert d'Agafay est une étendue majestueuse de collines dorées qui s'embrasent au coucher du soleil — une évasion inoubliable dans le silence.",
          sections: [
            { title: "Incontournables", items: ["Plateau du désert d'Agafay", "Camps de luxe dans le désert", "Points de vue panoramiques", "Tentes berbères et maisons de thé", "Spots d'observation des étoiles"] },
            { title: "À Faire", items: ["Balade à dos de chameau au coucher du soleil", "Déjeuner ou dîner dans un camp de luxe", "Observation des étoiles", "Explorer les collines rocheuses", "Cérémonie du thé berbère"] },
            { title: "Nature & Plein Air", items: ["Désert rocheux doré", "Couchers de soleil spectaculaires", "Ciels étoilés", "Silence et grands espaces"] },
            { title: "Culture", items: ["Héritage nomade berbère", "Tradition du thé bédouin", "Camps du désert et feux de camp"] },
            { title: "Aventure & Expériences", items: ["Balade à dos de chameau", "Quad et buggy", "Circuit 4x4 dans le désert", "Séances photo au coucher du soleil"] },
            { title: "Gastronomie & Vie Locale", items: ["Dîner marocain traditionnel", "Thé à la menthe autour du feu", "Déjeuner sous la tente"] }
          ],
          transport: "Le transport privé aller-retour depuis Marrakech est inclus."
        },
        ar: {
          intro: "على بُعد 40 دقيقة فقط من مراكش، صحراء أكفاي مساحة مهيبة من التلال الذهبية الصخرية التي تتوهج عند غروب الشمس — هروب لا يُنسى إلى الصمت.",
          sections: [
            { title: "أبرز المعالم", items: ["هضبة صحراء أكفاي", "المخيمات الفاخرة في الصحراء", "نقاط الإطلالة البانورامية", "الخيام الأمازيغية وبيوت الشاي", "مواقع مراقبة النجوم"] },
            { title: "أنشطة لا تفوت", items: ["ركوب الجمال عند غروب الشمس", "غداء أو عشاء في مخيم فاخر", "مراقبة النجوم ليلاً", "استكشاف التلال الصخرية", "طقوس الشاي الأمازيغي"] },
            { title: "الطبيعة والهواء الطلق", items: ["صحراء صخرية ذهبية", "غروب شمس ساحر", "سماء مليئة بالنجوم", "الصمت والمساحات المفتوحة"] },
            { title: "الثقافة", items: ["تراث البدو الأمازيغ", "تقليد الشاي البدوي", "مخيمات الصحراء والمواقد"] },
            { title: "المغامرة والتجارب", items: ["ركوب الجمال", "الكواد والبيغي", "جولات 4x4 في الصحراء", "جلسات تصوير عند الغروب"] },
            { title: "المأكولات والحياة المحلية", items: ["عشاء مغربي تقليدي", "شاي بالنعناع حول الموقد", "غداء تحت الخيمة"] }
          ],
          transport: "يشمل السعر النقل الخاص ذهاباً وإياباً من مراكش."
        }
      }
    },

    /* ================================================== */
    ouzoud: {
      kind: "trip",
      image: IMG.ouzoud,
      tags: {
        en: ["Waterfalls", "Nature", "Swimming", "Boat Trip", "Barbary Apes"],
        fr: ["Cascades", "Nature", "Baignade", "Balade en barque", "Macaques"],
        ar: ["شلالات", "طبيعة", "سباحة", "جولة بالقارب", "قرود المكاك"]
      },
      content: {
        en: {
          intro: "The Ouzoud Waterfalls, over 100 meters high, are among the most impressive in North Africa — a green amphitheater of waterfalls, rainbows and playful Barbary apes.",
          sections: [
            { title: "Top Attractions", items: ["The great falls (110 m)", "Barbary macaques", "Old mills & olive groves", "Natural pools", "Viewpoints & rainbow spots"] },
            { title: "Things to Do", items: ["Boat trip to the foot of the falls", "Swim in the natural pools", "Hike the trail behind the falls", "Meet the Barbary apes", "Picnic by the river"] },
            { title: "Nature & Outdoors", items: ["Waterfalls & rainbows", "Olive and fig groves", "River canyons", "Wildlife"] },
            { title: "Culture", items: ["Berber villages nearby", "Traditional olive mills", "Local craft & honey markets"] },
            { title: "Adventure & Experiences", items: ["Boat ride behind the falls", "Swimming", "Nature photography", "Waterfall hikes"] },
            { title: "Food & Local Life", items: ["Grilled trout by the falls", "Berber omelette", "Local olives & honey", "Mint tea on the terraces"] }
          ],
          transport: "Private round-trip transportation from Marrakech is included."
        },
        fr: {
          intro: "Les cascades d'Ouzoud, hautes de plus de 100 mètres, sont parmi les plus impressionnantes d'Afrique du Nord — un amphithéâtre vert de chutes d'eau, d'arcs-en-ciel et de macaques espiègles.",
          sections: [
            { title: "Incontournables", items: ["Grande cascade (110 m)", "Macaques de Barbarie", "Anciens moulins et oliveraies", "Piscines naturelles", "Belvédères et arcs-en-ciel"] },
            { title: "À Faire", items: ["Balade en barque au pied des cascades", "Baignade dans les bassins naturels", "Randonnée derrière les chutes", "Rencontrer les macaques", "Pique-nique au bord de la rivière"] },
            { title: "Nature & Plein Air", items: ["Cascades et arcs-en-ciel", "Oliviers et figuiers", "Canyons de la rivière", "Faune sauvage"] },
            { title: "Culture", items: ["Villages berbères alentour", "Moulins à huile traditionnels", "Marchés d'artisanat et de miel"] },
            { title: "Aventure & Expériences", items: ["Barque derrière les chutes", "Baignade", "Photographie de nature", "Randonnées aux cascades"] },
            { title: "Gastronomie & Vie Locale", items: ["Truite grillée au bord des cascades", "Omelette berbère", "Olives et miel locaux", "Thé à la menthe en terrasse"] }
          ],
          transport: "Le transport privé aller-retour depuis Marrakech est inclus."
        },
        ar: {
          intro: "شلالات أوزود، التي يتجاوز ارتفاعها 100 متر، من أروع شلالات شمال إفريقيا — مدرج أخضر من الشلالات وأقواس قزح وقرود المكاك المرحة.",
          sections: [
            { title: "أبرز المعالم", items: ["الشلال الكبير (110 م)", "قرود المكاك", "المطاحن القديمة وبساتين الزيتون", "المسابح الطبيعية", "نقاط الإطلالة وأقواس قزح"] },
            { title: "أنشطة لا تفوت", items: ["جولة بالقارب عند سفح الشلالات", "السباحة في المسابح الطبيعية", "المشي خلف الشلالات", "لقاء قرود المكاك", "نزهة على ضفاف النهر"] },
            { title: "الطبيعة والهواء الطلق", items: ["الشلالات وأقواس قزح", "بساتين الزيتون والتين", "أودية النهر", "الحياة البرية"] },
            { title: "الثقافة", items: ["القرى الأمازيغية المجاورة", "المطاحن التقليدية للزيت", "أسواق الحرف والعسل المحلية"] },
            { title: "المغامرة والتجارب", items: ["القارب خلف الشلالات", "السباحة", "تصوير الطبيعة", "المشي إلى الشلالات"] },
            { title: "المأكولات والحياة المحلية", items: ["تروتة مشوية بجانب الشلالات", "عجة أمازيغية", "زيتون وعسل محلي", "شاي بالنعناع على الشرفات"] }
          ],
          transport: "يشمل السعر النقل الخاص ذهاباً وإياباً من مراكش."
        }
      }
    },

    /* ================================================== */
    ouarzazate: {
      kind: "trip",
      image: IMG.ouarzazate,
      tags: {
        en: ["Kasbahs", "Ait Ben Haddou", "Film Studios", "Desert Gate", "UNESCO"],
        fr: ["Kasbahs", "Aït Ben Haddou", "Studios de cinéma", "Porte du désert", "UNESCO"],
        ar: ["قصبات", "آيت بن حدو", "استوديوهات الأفلام", "بوابة الصحراء", "يونسكو"]
      },
      content: {
        en: {
          intro: "Ouarzazate, the 'Hollywood of Africa' and gateway to the Sahara, is a land of golden kasbahs, film sets and cinematic desert landscapes.",
          sections: [
            { title: "Top Attractions", items: ["Ait Ben Haddou (UNESCO)", "Taourirt Kasbah", "Atlas Film Studios", "Ouarzazate palm grove", "Dades valley viewpoints"] },
            { title: "Things to Do", items: ["Explore Ait Ben Haddou", "Visit the film studios", "Discover Taourirt Kasbah", "Walk through the old city", "Sunset over the kasbahs"] },
            { title: "Nature & Outdoors", items: ["Desert landscapes", "Palm groves", "Atlas mountain passes", "Valleys of the South"] },
            { title: "Culture", items: ["UNESCO earthen architecture", "Cinema heritage", "Amazigh crafts", "Kasbahs & ksour"] },
            { title: "Adventure & Experiences", items: ["Desert photography", "4x4 routes", "Sunset drives", "Scenic mountain passes"] },
            { title: "Food & Local Life", items: ["Moroccan lunch in the kasbah", "South Moroccan cuisine", "Local olive & dates", "Mint tea with locals"] }
          ],
          transport: "Private round-trip transportation from Marrakech is included."
        },
        fr: {
          intro: "Ouarzazate, le « Hollywood de l'Afrique » et porte du Sahara, est une terre de kasbahs dorées, de décors de cinéma et de paysages désertiques spectaculaires.",
          sections: [
            { title: "Incontournables", items: ["Aït Ben Haddou (UNESCO)", "Kasbah de Taourirt", "Studios de cinéma de l'Atlas", "Palmeraie d'Ouarzazate", "Vallée du Dadès"] },
            { title: "À Faire", items: ["Explorer Aït Ben Haddou", "Visiter les studios de cinéma", "Découvrir la kasbah de Taourirt", "Se promener dans la vieille ville", "Coucher de soleil sur les kasbahs"] },
            { title: "Nature & Plein Air", items: ["Paysages désertiques", "Palmeraies", "Cols de l'Atlas", "Vallées du Sud"] },
            { title: "Culture", items: ["Architecture de terre (UNESCO)", "Héritage du cinéma", "Artisanat amazigh", "Kasbahs et ksour"] },
            { title: "Aventure & Expériences", items: ["Photographie désertique", "Itinéraires 4x4", "Balades au coucher du soleil", "Cols panoramiques"] },
            { title: "Gastronomie & Vie Locale", items: ["Déjeuner marocain dans la kasbah", "Cuisine du Sud marocain", "Olives et dattes locales", "Thé à la menthe avec les habitants"] }
          ],
          transport: "Le transport privé aller-retour depuis Marrakech est inclus."
        },
        ar: {
          intro: "ورزازات، «هوليوود إفريقيا» وبوابة الصحراء، أرض القصبات الذهبية ومواقع الأفلام والمناظر الصحراوية الخلابة.",
          sections: [
            { title: "أبرز المعالم", items: ["آيت بن حدو (يونسكو)", "قصبة توريرت", "استوديوهات أطلس للأفلام", "نخيل ورزازات", "وادي دادس"] },
            { title: "أنشطة لا تفوت", items: ["استكشاف آيت بن حدو", "زيارة استوديوهات الأفلام", "اكتشاف قصبة توريرت", "التجول في المدينة القديمة", "غروب الشمس على القصبات"] },
            { title: "الطبيعة والهواء الطلق", items: ["المناظر الصحراوية", "بساتين النخيل", "ممرات الأطلس", "وديان الجنوب"] },
            { title: "الثقافة", items: ["عمارة الطين (يونسكو)", "تراث السينما", "حرف أمازيغية", "القصبات والقصور"] },
            { title: "المغامرة والتجارب", items: ["تصوير الصحراء", "طرق 4x4", "جولات عند الغروب", "ممرات جبلية بانورامية"] },
            { title: "المأكولات والحياة المحلية", items: ["غداء مغربي في القصبة", "مطبخ جنوب المغرب", "زيتون وتمور محلية", "شاي بالنعناع مع الأهالي"] }
          ],
          transport: "يشمل السعر النقل الخاص ذهاباً وإياباً من مراكش."
        }
      }
    },

    /* ================================================== */
    marrakech: {
      kind: "explore",
      image: IMG.marrakech,
      tags: {
        en: ["Imperial City", "Jemaa el-Fna", "Palaces", "Gardens", "Souks"],
        fr: ["Ville impériale", "Jemaa el-Fna", "Palais", "Jardins", "Souks"],
        ar: ["مدينة إمبراطورية", "جامع الفنا", "قصور", "حدائق", "أسواق"]
      },
      content: {
        en: {
          intro: "Marrakech, the 'Red City', is a captivating imperial city of palaces, gardens, bustling souks and the famous Jemaa el-Fna square.",
          sections: [
            { title: "Top Attractions", items: ["Jemaa el-Fna square", "Koutoubia Mosque", "Bahia Palace", "Majorelle Garden", "Saadian Tombs", "Medina & souks"] },
            { title: "Things to Do", items: ["Watch the Jemaa el-Fna shows", "Get lost in the souks", "Visit the palaces & gardens", "Horse carriage ride", "Sunset on a rooftop terrace"] },
            { title: "Nature & Outdoors", items: ["Majorelle & Menara gardens", "Agdal gardens", "Palm grove", "Guéliz & Hivernage districts"] },
            { title: "Culture", items: ["Imperial history", "Islamic architecture", "Crafts & tanneries", "Museums & riads"] },
            { title: "Adventure & Experiences", items: ["Hot air balloon ride", "Cooking classes", "Spa & hammam", "Night markets"] },
            { title: "Food & Local Life", items: ["Street food at Jemaa el-Fna", "Traditional tagines", "Mint tea & pastries", "Moroccan breakfast"] }
          ],
          transport: "Transfers and tours of Marrakech available on request."
        },
        fr: {
          intro: "Marrakech, la « ville rouge », est une cité impériale captivante faite de palais, de jardins, de souks animés et de la célèbre place Jemaa el-Fna.",
          sections: [
            { title: "Incontournables", items: ["Place Jemaa el-Fna", "Mosquée Koutoubia", "Palais Bahia", "Jardin Majorelle", "Tombeaux Saadiens", "Médina et souks"] },
            { title: "À Faire", items: ["Assister aux spectacles de Jemaa el-Fna", "Se perdre dans les souks", "Visiter palais et jardins", "Balade en calèche", "Coucher de soleil en terrasse"] },
            { title: "Nature & Plein Air", items: ["Jardins Majorelle et Menara", "Jardins de l'Agdal", "Palmeraie", "Quartiers Guéliz et Hivernage"] },
            { title: "Culture", items: ["Histoire impériale", "Architecture islamique", "Artisanat et tanneries", "Musées et riads"] },
            { title: "Aventure & Expériences", items: ["Vol en montgolfière", "Cours de cuisine", "Spa et hammam", "Marchés nocturnes"] },
            { title: "Gastronomie & Vie Locale", items: ["Street food à Jemaa el-Fna", "Tajines traditionnels", "Thé à la menthe et pâtisseries", "Petit-déjeuner marocain"] }
          ],
          transport: "Transferts et visites de Marrakech disponibles sur demande."
        },
        ar: {
          intro: "مراكش، «المدينة الحمراء»، مدينة إمبراطورية آسرة من القصور والحدائق والأسواق المزدحمة وساحة جامع الفنا الشهيرة.",
          sections: [
            { title: "أبرز المعالم", items: ["ساحة جامع الفنا", "مسجد الكتبية", "قصر الباهية", "حديقة ماجوريل", "قبور السعديين", "المدينة العتيقة والأسواق"] },
            { title: "أنشطة لا تفوت", items: ["مشاهدة عروض جامع الفنا", "التجول في الأسواق", "زيارة القصور والحدائق", "جولة بالعربة", "غروب الشمس من شرفة"] },
            { title: "الطبيعة والهواء الطلق", items: ["حديقتي ماجوريل والمنارة", "حدائق أكدال", "النخيل", "حيي جيليز وهيفرناج"] },
            { title: "الثقافة", items: ["التاريخ الإمبراطوري", "العمارة الإسلامية", "الحرف والمدابغ", "المتاحف والرياض"] },
            { title: "المغامرة والتجارب", items: ["رحلة بالمنطاد", "دروس الطبخ", "سبا وحمام تقليدي", "أسواق ليلية"] },
            { title: "المأكولات والحياة المحلية", items: ["أطعمة الشارع في جامع الفنا", "طواجن تقليدية", "شاي بالنعناع وحلويات", "فطور مغربي"] }
          ],
          transport: "يمكن توفير النقل والجولات في مراكش عند الطلب."
        }
      }
    },

    /* ================================================== */
    zagora: {
      kind: "explore",
      image: IMG.zagora,
      tags: {
        en: ["Desert", "Dunes", "Camels", "Nomad Life", "Oases"],
        fr: ["Désert", "Dunes", "Chameaux", "Vie nomade", "Oasis"],
        ar: ["صحراء", "كثبان", "جمال", "حياة البدو", "واحات"]
      },
      content: {
        en: {
          intro: "Zagora, on the edge of the Sahara, is famous for its date oases, camel caravans and the gates of the great desert dunes.",
          sections: [
            { title: "Top Attractions", items: ["Tinfou dunes", "The 'Timbuktu 52 days' gate", "Zagora palm grove", "Amazigh kasbahs", "Draa valley"] },
            { title: "Things to Do", items: ["Camel trek into the dunes", "Sunset & sunrise in the desert", "Visit the oases", "Overnight in a desert camp", "Meet the nomad families"] },
            { title: "Nature & Outdoors", items: ["Sahara dunes", "Palm oases", "Draa river valley", "Starlit skies"] },
            { title: "Culture", items: ["Nomad traditions", "Amazigh & Saharan heritage", "Kasbah architecture", "Saharan music"] },
            { title: "Adventure & Experiences", items: ["Desert camping", "Camel caravans", "4x4 dunes excursions", "Stargazing"] },
            { title: "Food & Local Life", items: ["Dates from the palm groves", "Berber pizza in the desert", "Saharan tea ceremony", "Nomad meals"] }
          ],
          transport: "Transfers and overnight desert tours available on request."
        },
        fr: {
          intro: "Zagora, aux portes du Sahara, est célèbre pour ses oasis de dattiers, ses caravanes de chameaux et l'entrée des grandes dunes du désert.",
          sections: [
            { title: "Incontournables", items: ["Dunes de Tinfou", "Porte « Tombouctou 52 jours »", "Palmeraie de Zagora", "Kasbahs amazighes", "Vallée du Draa"] },
            { title: "À Faire", items: ["Trek à dos de chameau dans les dunes", "Coucher et lever de soleil dans le désert", "Visiter les oasis", "Nuit dans un camp du désert", "Rencontrer les familles nomades"] },
            { title: "Nature & Plein Air", items: ["Dunes du Sahara", "Oasis de palmiers", "Vallée du Draa", "Ciels étoilés"] },
            { title: "Culture", items: ["Traditions nomades", "Héritage amazigh et saharien", "Architecture des kasbahs", "Musique saharienne"] },
            { title: "Aventure & Expériences", items: ["Camping dans le désert", "Caravanes de chameaux", "Excursions 4x4 dans les dunes", "Observation des étoiles"] },
            { title: "Gastronomie & Vie Locale", items: ["Dattes des palmeraies", "Pizza berbère dans le désert", "Cérémonie du thé saharien", "Repas nomades"] }
          ],
          transport: "Transferts et tours désert avec nuit sur demande."
        },
        ar: {
          intro: "زاكورة، على أبواب الصحراء الكبرى، تشتهر بواحات التمر وقوافل الجمال وبوابة الكثبان الرملية الشاسعة.",
          sections: [
            { title: "أبرز المعالم", items: ["كثبان تينفو", "بوابة «تيمبكتو 52 يوماً»", "نخيل زاكورة", "قصبات أمازيغية", "وادي درعة"] },
            { title: "أنشطة لا تفوت", items: ["رحلة بالجمال إلى الكثبان", "شروق وغروب الشمس في الصحراء", "زيارة الواحات", "المبيت في مخيم صحراوي", "لقاء عائلات البدو"] },
            { title: "الطبيعة والهواء الطلق", items: ["كثبان الصحراء", "واحات النخيل", "وادي نهر درعة", "سماء مليئة بالنجوم"] },
            { title: "الثقافة", items: ["تقاليد البدو", "التراث الأمازيغي والصحراوي", "عمارة القصبات", "الموسيقى الصحراوية"] },
            { title: "المغامرة والتجارب", items: ["التخييم في الصحراء", "قوافل الجمال", "رحلات 4x4 في الكثبان", "مراقبة النجوم"] },
            { title: "المأكولات والحياة المحلية", items: ["تمور من البساتين", "بيتزا أمازيغية في الصحراء", "طقوس الشاي الصحراوي", "وجبات بدوية"] }
          ],
          transport: "يمكن توفير النقل وجولات الصحراء مع المبيت عند الطلب."
        }
      }
    },

    /* ================================================== */
    dakhla: {
      kind: "explore",
      image: IMG.dakhla,
      tags: {
        en: ["Lagoon", "Kitesurfing", "Beach", "Desert", "Birds"],
        fr: ["Lagune", "Kitesurf", "Plage", "Désert", "Oiseaux"],
        ar: ["بحيرة", "رياضة الكايت", "شاطئ", "صحراء", "طيور"]
      },
      content: {
        en: {
          intro: "Dakhla, on the Atlantic coast of the Moroccan Sahara, is a world-famous lagoon for kitesurfing, with white beaches and wild landscapes.",
          sections: [
            { title: "Top Attractions", items: ["Dakhla lagoon", "White desert", "Windsurfing & kitesurfing spots", "Bird colonies", "Atlantic beaches"] },
            { title: "Things to Do", items: ["Kitesurfing or windsurfing", "Lagoon boat trips", "Discover the white desert", "Bird watching", "Quad along the coast"] },
            { title: "Nature & Outdoors", items: ["Turquoise lagoon", "White desert", "Dunes & Atlantic beaches", "Flamingos & wildlife"] },
            { title: "Culture", items: ["Sahrawi culture", "Fishing traditions", "Local seafood markets"] },
            { title: "Adventure & Experiences", items: ["Kitesurfing lessons", "Lagoon excursions", "Desert 4x4 drives", "Camping by the lagoon"] },
            { title: "Food & Local Life", items: ["Fresh seafood & fish", "Saharan meals", "Seaside cafés", "Local tea"] }
          ],
          transport: "Flights and transfers to Dakhla can be arranged on request."
        },
        fr: {
          intro: "Dakhla, sur la côte atlantique du Sahara marocain, est une lagune mondialement connue pour le kitesurf, avec ses plages blanches et ses paysages sauvages.",
          sections: [
            { title: "Incontournables", items: ["Lagune de Dakhla", "Désert blanc", "Spots de windsurf et kitesurf", "Colonies d'oiseaux", "Plages atlantiques"] },
            { title: "À Faire", items: ["Kitesurf ou windsurf", "Sorties en bateau sur la lagune", "Découvrir le désert blanc", "Observation des oiseaux", "Quad le long de la côte"] },
            { title: "Nature & Plein Air", items: ["Lagune turquoise", "Désert blanc", "Dunes et plages atlantiques", "Flamants roses et faune"] },
            { title: "Culture", items: ["Culture sahraouie", "Traditions de la pêche", "Marchés de fruits de mer"] },
            { title: "Aventure & Expériences", items: ["Cours de kitesurf", "Excursions sur la lagune", "Circuits 4x4 dans le désert", "Camping au bord de la lagune"] },
            { title: "Gastronomie & Vie Locale", items: ["Fruits de mer et poissons frais", "Repas sahariens", "Cafés face à la mer", "Thé local"] }
          ],
          transport: "Vols et transferts vers Dakhla sur demande."
        },
        ar: {
          intro: "الداخلة، على الساحل الأطلسي للصحراء المغربية، بحيرة مشهورة عالمياً برياضة الكايتسيرف، بشواطئها البيضاء ومناظرها البرية.",
          sections: [
            { title: "أبرز المعالم", items: ["بحيرة الداخلة", "الصحراء البيضاء", "مواقع ركوب الأمواج بالرياح", "مستعمرات الطيور", "الشواطئ الأطلسية"] },
            { title: "أنشطة لا تفوت", items: ["رياضة الكايتسيرف", "جولات بالقارب في البحيرة", "اكتشاف الصحراء البيضاء", "مراقبة الطيور", "الكواد على طول الساحل"] },
            { title: "الطبيعة والهواء الطلق", items: ["البحيرة الفيروزية", "الصحراء البيضاء", "الكثبان والشواطئ الأطلسية", "طيور النحام والحياة البرية"] },
            { title: "الثقافة", items: ["الثقافة الصحراوية", "تقاليد الصيد", "أسواق المأكولات البحرية"] },
            { title: "المغامرة والتجارب", items: ["دروس الكايتسيرف", "رحلات في البحيرة", "جولات 4x4 في الصحراء", "التخييم بجانب البحيرة"] },
            { title: "المأكولات والحياة المحلية", items: ["مأكولات بحرية وأسماك طازجة", "وجبات صحراوية", "مقاهٍ تطل على البحر", "شاي محلي"] }
          ],
          transport: "يمكن ترتيب الرحلات الجوية والنقل إلى الداخلة عند الطلب."
        }
      }
    },

    /* ================================================== */
    north: {
      kind: "explore",
      image: IMG.north,
      tags: {
        en: ["Blue City", "Mediterranean", "Coasts", "Mountains", "Waterfalls"],
        fr: ["Ville bleue", "Méditerranée", "Côtes", "Montagnes", "Cascades"],
        ar: ["المدينة الزرقاء", "البحر المتوسط", "سواحل", "جبال", "شلالات"]
      },
      content: {
        en: {
          intro: "Northern Morocco unites blue mountain cities, Mediterranean beaches, cedar forests and waterfalls — a multi-day journey worth every kilometer.",
          sections: [
            { title: "Top Attractions", items: ["Chefchaouen, the blue pearl", "Tangier & the Strait of Gibraltar", "Tetouan, the white dove", "Asilah & its murals", "Akchour waterfalls", "Mediterranean coast"] },
            { title: "Things to Do", items: ["Wander the blue alleys of Chefchaouen", "Watch the sunset over Tangier bay", "Visit Tetouan's medina (UNESCO)", "Swim on the northern beaches", "Hike to the Akchour waterfalls"] },
            { title: "Nature & Outdoors", items: ["Rif mountains", "Mediterranean coves", "Cedar forests", "Waterfalls & canyons"] },
            { title: "Culture", items: ["Andalusian heritage", "Blue city architecture", "Tetouan & Asilah arts", "Northern cuisine"] },
            { title: "Adventure & Experiences", items: ["Mountain hiking", "Coastal walks", "Waterfall treks", "Beach days"] },
            { title: "Food & Local Life", items: ["Seafood by the Mediterranean", "Andalusian pastries", "Grilled fish of Asilah", "Mint tea in Chefchaouen"] }
          ],
          transport: "Multi-day private tours of Northern Morocco are arranged on request."
        },
        fr: {
          intro: "Le nord du Maroc réunit villes bleues en montagne, plages méditerranéennes, forêts de cèdres et cascades — un voyage de plusieurs jours qui vaut chaque kilomètre.",
          sections: [
            { title: "Incontournables", items: ["Chefchaouen, la perle bleue", "Tanger et le détroit de Gibraltar", "Tétouan, la colombe blanche", "Asilah et ses fresques", "Cascades d'Akchour", "Côte méditerranéenne"] },
            { title: "À Faire", items: ["Errer dans les ruelles bleues de Chefchaouen", "Admirer le coucher de soleil sur la baie de Tanger", "Visiter la médina de Tétouan (UNESCO)", "Se baigner sur les plages du Nord", "Randonnée vers les cascades d'Akchour"] },
            { title: "Nature & Plein Air", items: ["Montagnes du Rif", "Criques méditerranéennes", "Forêts de cèdres", "Cascades et canyons"] },
            { title: "Culture", items: ["Héritage andalou", "Architecture de la ville bleue", "Arts de Tétouan et d'Asilah", "Cuisine du Nord"] },
            { title: "Aventure & Expériences", items: ["Randonnée en montagne", "Balades côtières", "Treks vers les cascades", "Journées à la plage"] },
            { title: "Gastronomie & Vie Locale", items: ["Fruits de mer en Méditerranée", "Pâtisseries andalouses", "Poisson grillé d'Asilah", "Thé à la menthe à Chefchaouen"] }
          ],
          transport: "Circuits privés de plusieurs jours dans le nord du Maroc sur demande."
        },
        ar: {
          intro: "يجمع شمال المغرب بين المدن الزرقاء في الجبال والشواطئ المتوسطية وغابات الأرز والشلالات — رحلة متعددة الأيام تستحق كل كيلومتر.",
          sections: [
            { title: "أبرز المعالم", items: ["شفشاون، اللؤلؤة الزرقاء", "طنجة ومضيق جبل طارق", "تطوان، الحمامة البيضاء", "أصيلة وجدارياتها", "شلالات أقشور", "الساحل المتوسطي"] },
            { title: "أنشطة لا تفوت", items: ["التجول في أزقة شفشاون الزرقاء", "مشاهدة غروب الشمس فوق خليج طنجة", "زيارة مدينة تطوان العتيقة (يونسكو)", "السباحة على الشواطئ الشمالية", "المشي إلى شلالات أقشور"] },
            { title: "الطبيعة والهواء الطلق", items: ["جبال الريف", "خلجان متوسطية", "غابات الأرز", "الشلالات والأودية"] },
            { title: "الثقافة", items: ["التراث الأندلسي", "عمارة المدينة الزرقاء", "فنون تطوان وأصيلة", "مطبخ الشمال"] },
            { title: "المغامرة والتجارب", items: ["المشي في الجبال", "جولات ساحلية", "رحلات إلى الشلالات", "أيام على الشاطئ"] },
            { title: "المأكولات والحياة المحلية", items: ["مأكولات بحرية على المتوسط", "حلويات أندلسية", "سمك أصيلة المشوي", "شاي بالنعناع في شفشاون"] }
          ],
          transport: "تُرتب الجولات الخاصة متعددة الأيام في شمال المغرب عند الطلب."
        }
      }
    }
  };

  /* Northern Morocco chips rendered under the section heading */
  var northChips = {
    en: ["Chefchaouen", "Tangier", "Tetouan", "Asilah", "Akchour", "Mediterranean Coast"],
    fr: ["Chefchaouen", "Tanger", "Tétouan", "Asilah", "Akchour", "Côte méditerranéenne"],
    ar: ["شفشاون", "طنجة", "تطوان", "أصيلة", "أقشور", "الساحل المتوسطي"]
  };

  return { data: data, northChips: northChips, names: names };
})();
