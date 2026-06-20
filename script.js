
/* ══════════════════════════════════════
   CONFIG — عدّل هنا فقط
══════════════════════════════════════ */
const CONFIG = {
  password: "mydana2007",
  coupleStartDate: "2024-02-1",

  memories: [
    { type:"image", src:"images/3dda.jpeg",      title:"اول عضة منك",                                    date:"2024-02-01", description:"كان شعور بجنن , ما عمري انعضيت وما عمري انبسطت وانا بنعض , بس بنفس الوقت مش مستوعب كمية السعادة اللي اجتني منها و مع انها بتوجع للامانة" },
    { type:"image", src:"images/one.JPG",         title:"الصورة اللي منها بلش كلشي✨",                    date:"2024-02-24", description:"هاي كانت اول ستريك لالك بوجهك , اشوفه كامل , واول ستريك احفظه بالشات , ف يب .روحي عالصورة اللي بعدها" },
    { type:"image", src:"images/shakespeare.PNG", title:"!! بحس اشتقتلكك🌸",                             date:"2024-02-25", description:"ولككك اوووففف ما اقواها كانت , اللي هو احا كيف بتقدري تكتبي كل هاد بهاد الفن وبهاي الطريقة , جد بحبك" },
    { type:"image", src:"images/six.PNG",         title:"دانا بالحجاب !",                                date:"2024-01-28", description:"هاي كانت اول مرة اشوفك فيها بحجاب , كنتي بتجنني ! كثير بتجنني جد كنت دايما اتخيله عليكي وبس لبستيه طلع احلى من ما كنت متخيل , اتمنيت لو انك لبستيه" },
    { type:"image", src:"images/call123456.PNG",  title:"اقوة سكرين لمكالمة بيني وبينك",                 date:"2024-04-10  ", description:"بعرفششش كيف زبطناها انا وانتي بس والله كفو علينا" },
    { type:"image", src:"images/yours.JPG",       title:"هاي منك",                                       date:"2024-03-08", description:"ويعني كنت مبسوط , حسيت انو صرت زي كاني جد الك , اشي منك, بعد ما روحت ضل معي , اشي حقيقي غير الجنة اللي خليتيها بروحي , كمان علامة الك ومنك وكحدا عملها غيرك" },
    { type:"image", src:"images/pirthday.JPG",    title:"رسمتك !",                                       date:"2024-07-10", description:"يمكن بالاول كنت مفكرها اشي قوي , بس بعدين عرفت انها ولا اشي , يمكن انتي حبيتيها , لكن ما حسيتها اشي بتستاهليه , كان نفسي اعطيكي الدنيا كله بعيد ميلادك , بس للاسف معروف اني فاشل بس الله بعين" },
    { type:"image", src:"images/five.JPG",        title:"بتتذكري؟",                                      date:"2024-08-10", description:"كنت عند بابا بالمستشفى , واجيت عندك حوالين البيت بس بالليل وكانت معك بانا , ما احلاكي كنتي يومها , وما ازنخ بانا جد" },
    { type:"image", src:"images/december1.jpeg",  title:"واخييييييرا رضيتي تطلعي معي !",                 date:"2024-12-26", description:"اول طلعة بعد ما سحبتي علي اربع شهور عشان كنتي خايفة تشوفيني بعد العمايل اللي سويناها وانتي كاتمة , ف تركتيني اربع شهور بعد وفاة بابا ولما سائت الامور قررنا نطلع على بيسترو , للامانة كان نفسي اعيط وقتها بس كل اللي طلع بايدي اني اتطلع عليكي ويا ريت لو انك سمعتي كلام عيوني وخلص" },
    { type:"image", src:"images/december2.jpeg",  title:"قد ما سرحت بهالصورة",                          date:"2024-12-26", description:"وبتذكر كيف ترجيتك عشان تخليني اصورك , من احلى الصور اللي صورتك اياها , جد كثير حلوة , جد بحبك" },
    { type:"image", src:"images/destroyed.PNG",   title:"1-∞",                                           date:"2026-02-11", description:"للامانة كنت صامد سنة كاملة قدام قلبي , ما خليته يتنفس , صح بوجع بس كنت مفكر هيك الصح , بس هاد المسج دمرني , خلاني اعيد كل حساباتي و مش عشنك سويتي اشي كبير وهيك , بس عشني بحبك , وجد بحبك" },
    { type:"image", src:"images/kay2.PNG",        title:"عملتلككك اضافرككك",                             date:"2024-03-08", description:"بس جددد كيف وانا ازبطهم ؟ اوك ما كانو احسن اشي للمصداقية بس يعني عملتهم Bحب والله" },
    { type:"image", src:"images/44.JPG",          title:"يوم ما يوسف قعد يترجاني ارجع عشان انقذه من سما", date:"2024-04-04", description:"فكرته يوم حلو , بس طلع كئيب , جد كنت كلب فيه , غض النظر للامانة فرطت ضحك على يوسف بعد ما اكل المقلب ابن الكلب اللي عملناه فيه" },
    { type:"image", src:"images/impossible.JPG",  title:"اليوم اللي تاكدت فيه انو مستحيل ارجع اشوفك",   date:"2024-05-09", description:"كنا بنفس الشارع بنفس المكان , بنفس الطريق , بنفس التوقيت , بنفس اليوم والتاريخ , ومع هيك عشان سبب تافه , ضاعت فرصة اني اشوفك بعد مليون محاولة , للامانة جد نكدت , س يعني يلا عادي , خليها للسنين الجاي" },
    { type:"image", src:"images/seen.jpg",        title:"seen",                                           date:"2024-05-16", description:"هاي لقيتها بالغلط عندي , انداري متى كانت , أكيد كانت وحدة من فتراتنا الخرا ، السين جدا سيء ومؤلم و أسف لو حسستك بهاد الشعور في اليوم من الايام ، جربته وطلع عاطل عنجد, أسف" },
    { type:"video", src:"assets/seconed.mp4", title:"اول فيديو باول طلعة النا🎬", date:"2024-02-1", description:"بتذكره كان يوم بارد ، بس مش بردان ، متحمس ، متدفي ، بس كنت بدي اشوف شو هالاشي الرهيب اللي بخليني بدي بياكي باستماتة ، وبعد ما شفتك دايركت عرفته ، شعور انه -اوه هاد هو الشخص- يب ، انتي الشخص الصح ، والوقت صح وكلشي كان صح ، ما احلاكي ، جد ما احلاكي ، وما احلانا." },
    { type:"video", src:"images/steev.MP4",       title:"steev=عبود",                                    date:"2024-04-25", description:"واحدة من اسوء الطلعات بتاريخ علاقتنا , بس كان فيها كمن لحظة لطيفة , وهاي وحدة منهم , ما بدي اكثر حكي بس احضري الفيديو مع انه قصير بس بضحك" },
    { type:"video", src:"images/yourbff.mp4",     title:"الغنية عن التعريف جوودد",                       date:"2024-02-11", description:"" },
    { type:"video", src:"images/woow.MP4",        title:"عنجددد واووو ,",                                  date:"2026-02-26", description:" اسمعي , جد جد , بجننننن بشكل مش طبيعي , كثير حلوة , كثير كثير , يعنييييييييي يخيي انداري , لو تلبسي برميل بطلع حلو , كيف هيك انتي؟" },
 
  
    
    { type:"video", src:"images/fullmemory.MP4",  title:"الفيديوهات اللي معبية الميموري عندي: ",                           date:"2024-04-04", description:"بس يعني للامانة ما بعترض لانك ببوتي والميموري  والدنيا كلها فداكي" },
    { type:"video", src:"images/vlog1.MP4",       title:"شرح كيف نشرب ماي - جدا مفيد - ",                                date:"2026-03-11", description:" فيديو جدا جدا هادف وجميل لدرجة اني حضرته سبعة وخمسين مرة تقريبا " },

    { type:"image", src:"images/angle.JPG",       title:"كتكوتة",                                        date:"2026-05-09", description:"بحس اني حبيت الفستان هاد , والفستان اللي عليه ليمون كمان , حسيتهم بشبهو شكل كلمة -  ببوتي - " },
    { type:"image", src:"images/cute.PNG",        title:"انتي وشكسبير اخوان بالرضاعة؟",                                         date:"2024-06-24", description:"اللي هو احا كيف قدرتي تعبري عن كل هاي المشاعر بهيك طريقة وبهيك كلام وبهيك عممق وبهيك ترتيب , يخيييييي كل كلمة كل سطر كل مسج بضيع فيه من قد مهو حلو , بحبكككك" },
    { type:"image", src:"images/proud.jpg",       title:"كلمة",                                        date:"2026-01-21", description:"شوفي انا عرفت كثير ناس بحياتي , وفي ناس بعرفوني من قبلك , بس ما عمرو حدا وصل معي لمرحلة انه يعرف شو الكلمات اللي بتدخل عقلبي دايركت , لحد ما اجيتي انتي و الوحيدة اللي عرفتي هاد الاشي , والوحيدة اللي ما كان عندي مانع انها تعرفه" },
    { type:"image", src:"images/o2.JPG",          title:"O2",                                           date:"2024-04-25", description:"هو شوفي للامانة , او اقلك؟ بديش تيجيكي فلاش باك سيئة بس يعني بحب الصورة هاي , وانا اسف عاللي صار , انا جد اسف" },
    { type:"image", src:"images/n8asha.PNG",      title:"نغشة اسم الله",                                       date:"2025-02-16", description:"كلللل ما انزل بوكس بتشاركي مشاركات قوية بتخليني منقلع بالتخت سنة , بسسس يعني ما بقدر انكر اني كنت انبسط بس يعنييييي لو اني لساتني  معك كان قلتلك بيجيكي يوم " },
    { type:"image", src:"images/love.PNG",        title:"كتابتك",                                         date:"2024-08-31", description:"يخي بحب طريقة كتابتك , مع انها صعبة تنفهم من اول مرة لانه فش فواصل ولا نقاط , بس جد بحبها , كثير كيوتة وعفوية وكتكوتة ولطيفة . وبررضووو بحبك انتي " },
    { type:"image", src:"images/horny.PNG",       title:"key word",                                        date:"", description:"اوك مش عارف شو اكتبلك الصراحة بس يعنييييييي شت , لما حكيتيها فجرتيني , وهاي السكرين كانت باول مرة بتحكيلي اياها , متذكر الشعور والله" },
    { type:"image", src:"images/cover4.jpg",      title:"بتحبي الناس الغلط؟",                                       date:"2025-02-05", description:"يعني , اه , صح ممكن , بس انا متاكد مليون بالمية انك الشخص الصح , بعرفش اصلا اذا كتبتيها عني او لا, بس يعني حسيتها موجهة الي, وما بحس انها غلط للامانة , بالعكس اتفق, انتي بتحبي ناس ككا  , بس انا اكتشفت اني بعرف اختار , ومبسوط باللي اخترته كثير , حتى لو انه راح علي" },
    { type:"image", src:"images/we.JPG",          title:"ظل؟",                                           date:"2024-04-04", description:"يب هاد ظلنا , بس ضلينا زي ظلنا , تخيلي وصلت لمرحلة اتمنى اكون زي الظل؟ بس يعني بتفهم الشعور , بالاخير اني اكون ظلك اشي اكبر من اي اشي ممكن يصيرلي بحياتي" },
    { type:"image", src:"images/mommy.JPG",       title:"البنت اللي حبتك بالتطوع",                                        date:"2026-02-24", description:"للامانة مش مستغرب , لانه كمية الحنان واللطافة الموجودة عندك انسة دانا مش طبيعية , مبعرفش بس في زييي شعور امان اي حدا بكون جنبك بكون حاسس فيه , " },

    { type:"video", src:"images/9bee7.MOV",       title:"قببييييححح",                                        date:"2024-04-04", description:"يا ربي شكلي شو كان سيء وقتيها , جدا جدا سيء , والله ما بعرف على ايش حبيتيني" },
    { type:"video", src:"images/iwannabe.MOV",    title:"حركات كوبلز وهيك",                                     date:"2024-02-01", description:"للامانة فيديو جميل , بس احيانا بضحك لما اتذكر قديش كان هداك اليوم برد و وك حتى ايدي بنفسجية من البرد مع اني اسمر" },
    { type:"video", src:"images/mmsk.MOV",        title:"بعبوص !! ماشي ",                                         date:"2024-07-11", description:"كنتتتت بحاول اوثق لحظات عفوية بس انتي عندك اراء اخرى" },
    { type:"video", src:"images/outfit.MP4",      title:"الله يهدي اللبسة",                                       date:"2026-04-20", description:"اقوى اوتفت تشيك بشوفه منذ ما تركنا , مش عارف شو اكتب بس بحبك" }
  ],

  playlist: [
    { name:"Heather",               artist:"Conan Gray",           meaning:"كل ما اسمعها بتذكر لما طلبتي مني الجاكيت , وانا زي الغبي ما كنت اعرف",         file:"assets/Heather.mp3", cover:"images/cover1.JPG"  },
    { name:"Meen ysadak",           artist:"الضبع",                meaning:"أغنية الفيلم اللي حكيتيلي احضره ولسا ما حضرته",    file:"songs/Meen_ysadak.mp3",              cover:"assets/cover2.PNG"  },
    { name:"Apocalypse",            artist:"Cigarettes After Sex", meaning:"الأغنية اللي بترجعني لأحلى لحظة باللويبدة",        file:"songs/Apocalypse.mp3",               cover:"assets/cover3.PNG"  },
    { name:"Romantic Homicide",     artist:"d4vd",                 meaning:"كنت بدي أنساكِ بس ما زبطت معي",                    file:"songs/Romantic_Homicide.mp3",        cover:"assets/cover4.jpg"  },
    { name:"We Fell in Love in October", artist:"girl in red",     meaning:"هاي بتذكرني فيكِ الصراحة",                          file:"assets/we_fell_in_love_in_october.mp3", cover:"images/cover5.JPG" },
    { name:"Glimpse of Us",         artist:"Joji",                 meaning:"أنتِ حكيتِ إنك صرتِ تسمعيها",                      file:"songs/Glimpse_of_Us.mp3",            cover:"images/cover6.JPG"  },
    { name:"Die for You",           artist:"Joji / TUYO / Mora",   meaning:"جوجي مبدع بتوصيل الإحساس",                         file:"assets/Die_for_U.mp3",                cover:"images/cover7.JPG"  },
    { name:"Her",                   artist:"JVKE",                 meaning:"كانت تشتغل لحالها براسي كل ما أشوفكِ",             file:"assets/Her.mp3",                      cover:"assets/cover8.jpeg" },
    { name:"Sunsetz",               artist:"Cigarettes After Sex", meaning:"بعرفش ليش حطتها بس ليش لا",                       file:"songs/Sunsetz.mp3",                  cover:"assets/cover9.jpeg" },
    { name:"Atnasyna",              artist:"—",                    meaning:"كنتِ مرة مصورة فيديو عليها وكنتِ كثير حلوة",       file:"songs/Atnasyna.mp3",                 cover:"assets/cover10.jpg" },
    { name:"Shem el yasmeen",       artist:"مشروع ليلى",           meaning:"هيك صرت أحس بعد ما تقبلت إن كل شيء بيننا مستحيل", file:"assets/Shem_el_yasmeen.mp3",          cover:"images/cover11.jpeg"},
    { name:"The night we met",      artist:"Lord Huron", meaning:"لما طلعنا طلعة بيسترو , هاي اللي كانت براسي لما روحتي وانا بتطلع عليكي", file:"assets/The_night_we_met.mp3", cover:"assets/five.jpg" },
    { name:"ma to7shneesh",         artist:"امير عيد", meaning:"امنية مستحيل تتحقق للامانة ", file:"assets/mato7shneesh.mp3", cover:"images/kay3.jpeg" },
    { name:"wa7ashteny",            artist:"امير عيد", meaning:"  -بنحب بعض بس الحب مش كفاية ...-", file:"songs/w7shteny.mp3", cover:"images/o2.JPG" },
  ],



  letters: [

    { title:"", unlockDate:"2026-06-18", body:"" },
    { title:"", unlockDate:"2026-06-18", body:"" },
    { title:"", unlockDate:"2027-06-18", body:"" },
    { title:"", unlockDate:"2028-06-18", body:"" },
    { title:"", unlockDate:"2029-06-18", body:"" },
    { title:"", unlockDate:"2030-06-18", body:"" },
    { title:"", unlockDate:"2031-06-18", body:"" },
    { title:"", unlockDate:"2032-06-18", body:"" },
    { title:"", unlockDate:"2033-06-18", body:"" },
    { title:"", unlockDate:"2034-06-18", body:"" },
    { title:"", unlockDate:"2035-06-18", body:"" },
    { title:"", unlockDate:"2036-06-18", body:"" },
    { title:"", unlockDate:"2037-06-18", body:"" },
    { title:"", unlockDate:"2038-06-18", body:"" },
    { title:"", unlockDate:"2039-06-18", body:"" },
    { title:"", unlockDate:"2040-06-18", body:"" },
    { title:"", unlockDate:"2041-06-18", body:"" },
    { title:"", unlockDate:"2042-06-18", body:"" },
    { title:"", unlockDate:"2043-06-18", body:"" },
    { title:"", unlockDate:"2044-06-18", body:"" },
    { title:"", unlockDate:"2045-06-18", body:"" },
    { title:"", unlockDate:"2046-06-18", body:"" },
    { title:"", unlockDate:"2047-06-18", body:"" },
    { title:"", unlockDate:"2048-06-18", body:"" },
    { title:"", unlockDate:"2049-06-18", body:"" },
    { title:"", unlockDate:"2050-06-18", body:"" },
    { title:"", unlockDate:"2051-06-18", body:"" },
    { title:"", unlockDate:"2052-06-18", body:"" },
    { title:"", unlockDate:"2053-06-18", body:"" },
    { title:"", unlockDate:"2054-06-18", body:"" },
    { title:"", unlockDate:"2055-06-18", body:"" },
    { title:"", unlockDate:"2056-06-18", body:"" },
    { title:"", unlockDate:"2057-06-18", body:"" },
    { title:"", unlockDate:"2058-06-18", body:"" },
    { title:"", unlockDate:"2059-06-18", body:"" },
    { title:"", unlockDate:"2060-06-18", body:"" },
    { title:"", unlockDate:"2061-06-18", body:"" }
  ]
};



const FALLBACK_LETTERS = [
  {
    title: "كثير متخربط",
    unlockDate: "2026-02-14",
    body: "كثير مخربط بس بتعرفي؟ يمكن هاي اخر. مرة تكوني موجودة، ف ححكي وما حخبي زي ما كنت اعمل، النوتس معبية باشياء مكتوبة باسمك، فضفضة حب أو عصبية أو زعل."
  },
  {
    title: "كل عام وانتي بخير ببوتي الصغيرة",
    unlockDate: "2026-06-18",
    body: "كبرتي سنة وصرتي ١٩، ما بعرف اذا حكون موجود معك بهاد الوقت او لا، بس يعني خليني اخمن. حتكوني سافرتي بالعيد ورجعتي، ف كيف كانت سفرتك؟ كيف كانو الاوتفات؟ اكيد قوية."
  },
  {
    title: "4 jun 2:10",
    unlockDate: "2026-06-18",
    body: "بعض الكلمات ما بتتكتب، بس بتتذكر. هاد الجزء كان عشان أقول لك إنك حتى لو بعدت، ما زلتِ عندي في مكان مميز."
  }
];

/* ══════════════════════════════════════
   PARTICLES
══════════════════════════════════════ */
(function(){
  const canvas = document.getElementById('particles');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let pts = [];

  function rand(min, max){
    return Math.random() * (max - min) + min;
  }

  function resize(){
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(innerWidth * dpr);
    canvas.height = Math.floor(innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resize();
  window.addEventListener('resize', resize);

  function addPetals(){
    const count = Math.min(22, Math.max(8, Math.floor(innerWidth / 180)));
    for(let i=0;i<count;i++){
      pts.push({
        x: rand(0, innerWidth),
        y: rand(-80, innerHeight + 40),
        r: rand(1.5, 3.2),
        speed: rand(0.18, 0.42),
        drift: rand(-0.18, 0.18),
        sway: rand(0, Math.PI * 2),
        alpha: rand(0.08, 0.18),
        hue: rand(0, 1) > 0.5 ? 'rgba(245, 205, 220, ' : 'rgba(255, 233, 240, '
      });
    }
  }

  setInterval(addPetals, 420);

  (function draw(){
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    pts = pts.filter(p => p.y < innerHeight + 50 && p.x > -40 && p.x < innerWidth + 40);

    pts.forEach(p => {
      p.y -= p.speed;
      p.x += p.drift + Math.sin(p.sway) * 0.06;
      p.sway += 0.04;

      const glow = 0.6 + 0.4 * Math.sin(p.sway * 1.8);
      const alpha = p.alpha * glow;

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.globalCompositeOperation = 'screen';
      ctx.translate(p.x, p.y);
      ctx.rotate(Math.sin(p.sway) * 0.25);

      const petal = ctx.createRadialGradient(0, 0, 0, 0, 0, p.r * 5);
      petal.addColorStop(0, 'rgba(255,255,255,0.95)');
      petal.addColorStop(0.25, p.hue + '0.78)');
      petal.addColorStop(0.65, p.hue + '0.24)');
      petal.addColorStop(1, 'rgba(255,255,255,0)');

      ctx.fillStyle = petal;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.r * 1.8, p.r * 2.6, 0, 0, Math.PI * 2);
      ctx.ellipse(0, 0, p.r * 2.6, p.r * 1.8, Math.PI / 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(draw);
  })();
})();

/* ══════════════════════════════════════
   HELPER
══════════════════════════════════════ */
function syncExpandedLayout(expanded){
  const bar=document.getElementById('player-bar');
  if(!bar) return;
  if(expanded){
    bar.style.width='440px';
    bar.style.removeProperty('height');
    bar.style.removeProperty('aspect-ratio');
    bar.style.removeProperty('max-height');
    bar.style.overflowY='auto';
  } else {
    bar.style.removeProperty('width');
    bar.style.removeProperty('height');
    bar.style.removeProperty('aspect-ratio');
    bar.style.removeProperty('max-height');
    bar.style.removeProperty('overflow-y');
  }
}

function hidePlayer(){
  const bar=document.getElementById('player-bar');
  if(bar){
    bar.classList.remove('show-time','expanded');
    syncExpandedLayout(false);
    bar.style.setProperty('display','none','important');
  }
}
function showPlayer(){
  const lp=document.getElementById('page-login');
  if(lp&&(lp.classList.contains('active')||window.getComputedStyle(lp).display!=='none')){hidePlayer();return;}
  const bar=document.getElementById('player-bar');
  if(bar&&currentTrack!==-1){
    bar.style.removeProperty('display');
    bar.classList.add('show-time');
    syncExpandedLayout(bar.classList.contains('expanded'));
  }
}

function getMemoryPoster(src){
  if(!src) return '';
  const clean=String(src).replace(/\\/g,'/');
  const file=clean.split('/').pop()||'';
  const base=file.replace(/\.[^/.]+$/, '');
  return base ? `images/${base}-thumb.jpg` : '';
}

function getMemoryAudioSrc(src){
  if(!src) return '';
  const clean=String(src).replace(/\\/g,'/');
  const file=clean.split('/').pop()||'';
  const base=file.replace(/\.[^/.]+$/, '');
  return base ? `images/${base}-audio.mp3` : '';
}

/* ══════════════════════════════════════
   PAGES
══════════════════════════════════════ */
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const t=document.getElementById('page-'+id);
  if(t) t.classList.add('active');
  window.scrollTo(0,0);
  if(id==='playlist'&&currentTrack!==-1) showPlayer();
  else hidePlayer();
}

/* ══════════════════════════════════════
   LOGIN
══════════════════════════════════════ */
function checkPw(){
  const val=document.getElementById('pw-input').value;
  const err=document.getElementById('pw-error');
  if(val===CONFIG.password){hidePlayer();showPage('home');startCounter();}
  else{
    err.textContent='كلمة السر غلط 🙈';
    err.style.animation='none';void err.offsetWidth;err.style.animation='shake 0.3s ease';
    document.getElementById('pw-input').value='';
  }
}

/* ══════════════════════════════════════
   COUNTER
══════════════════════════════════════ */
function startCounter(){
  function update(){
    const el=document.getElementById('cnt-days');if(!el)return;
    const diff=new Date()-new Date(CONFIG.coupleStartDate);
    el.textContent=Math.floor(diff/86400000);
    document.getElementById('cnt-hours').textContent=Math.floor((diff%86400000)/3600000);
    document.getElementById('cnt-minutes').textContent=Math.floor((diff%3600000)/60000);
  }
  update();setInterval(update,60000);
}

/* ══════════════════════════════════════
   MEMORIES + LIGHTBOX
══════════════════════════════════════ */
let activeMemoryIndex=0;

(function initGallery(){
  const gallery=document.getElementById('gallery');
  if(!gallery) return;

  CONFIG.memories.forEach((m,index)=>{
    if(!m.src) return;
    const div=document.createElement('div');
    div.className='polaroid';

    let mediaHtml='';
    if(m.type==='video'){
      const poster=getMemoryPoster(m.src);
      mediaHtml=`
        <div class="polaroid-img-wrap video-wrap">
          <img src="${poster}" loading="lazy" alt="${m.title||'فيديو'}"
            onerror="this.onerror=null;this.style.display='none';this.parentElement.querySelector('.video-thumb-bg').style.display='flex';">
          <div class="video-thumb-bg" style="display:none;"><span class="video-thumb-icon">🎬</span></div>
          <div class="video-play-icon">▶</div>
          <div class="video-badge">فيديو 🎬</div>
        </div>`;
    } else {
      mediaHtml=`
        <div class="polaroid-img-wrap">
          <img src="${m.src}" loading="lazy"
            onerror="this.onerror=null;this.parentElement.innerHTML='<div class=img-err>📷</div>';">
        </div>`;
    }

    div.innerHTML=mediaHtml+`
      <div class="polaroid-caption">
        <span class="caption-text">${m.title}</span>
        ${m.date?`<span class="caption-date">${m.date}</span>`:''}
        <p class="caption-desc">${m.description}</p>
      </div>`;

    div.onclick=()=>{activeMemoryIndex=index;openLightbox(m);};
    gallery.appendChild(div);
  });

  document.getElementById('lightbox')?.addEventListener('click',e=>{
    if(e.target.id==='lightbox') closeLightbox();
  });
})();

/* ══ فتح اللايتبوكس مع إصلاح الفيديو ══ */
function openLightbox(m){
  const lightbox=document.getElementById('lightbox');
  if(!lightbox) return;

  // إظهار اللايتبوكس
  lightbox.classList.add('open');
  lightbox.style.opacity='0';
  setTimeout(()=>lightbox.style.opacity='1',10);
  lightbox.style.transition='opacity 0.35s ease';

  const frameInner=document.querySelector('.lightbox-frame-inner');
  if(!frameInner) return;

  // تنظيف المحتوى القديم تماماً
  frameInner.innerHTML='';

  if(m.type==='video'){
    // إنشاء عنصر فيديو جديد في كل مرة — هذا هو الحل الصحيح للفيديوهات
    const vid=document.createElement('video');
    vid.id='lightbox-vid';
    vid.controls=true;
    vid.playsInline=true;
    vid.preload='auto';
    vid.style.cssText='display:block;max-width:100%;max-height:55vh;border-radius:3px;';
    const poster=getMemoryPoster(m.src);
    if(poster) vid.poster=poster;

    vid.src=m.src;
    frameInner.appendChild(vid);
    vid.volume=1;

    const audioSrc=getMemoryAudioSrc(m.src);
    if(audioSrc){
      const audioEl=document.createElement('audio');
      audioEl.id='lightbox-audio';
      audioEl.preload='auto';
      audioEl.style.display='none';
      audioEl.volume=1;
      audioEl.muted=false;
      audioEl.src=audioSrc;
      frameInner.appendChild(audioEl);

      vid.muted=true;

      const syncAudio = ()=>{
        if(!audioEl || !vid) return;
        if(Math.abs(audioEl.currentTime - vid.currentTime) > 0.25){
          audioEl.currentTime = vid.currentTime;
        }
      };

      vid.addEventListener('play', ()=>{
        if(audioEl.paused){
          audioEl.currentTime = vid.currentTime;
          audioEl.play().catch(()=>{});
        }
      });

      vid.addEventListener('pause', ()=>{
        audioEl.pause();
      });

      vid.addEventListener('seeked', syncAudio);
      vid.addEventListener('timeupdate', syncAudio);

      requestAnimationFrame(()=>{
        vid.play().catch(()=>{
          console.log('بانتظار تفاعل المستخدم');
        });
        audioEl.currentTime = 0;
        audioEl.play().catch(()=>{
          console.log('بانتظار تفاعل المستخدم للصوت');
        });
      });
    } else {
      vid.muted=false;
      requestAnimationFrame(()=>{
        vid.play().catch(()=>{
          console.log('بانتظار تفاعل المستخدم');
        });
      });
    }

  } else {
    // صورة
    const img=document.createElement('img');
    img.id='lightbox-img';
    img.src=m.src;
    img.alt=m.title||'';
    img.style.cssText='display:block;max-width:100%;max-height:55vh;border-radius:3px;object-fit:contain;';
    frameInner.appendChild(img);
  }

  document.getElementById('lightbox-title').textContent=m.title||'';
  document.getElementById('lightbox-desc').textContent=m.description||'';

  setupLightboxArrows();
}

function setupLightboxArrows(){
  document.querySelectorAll('.lightbox-arrow').forEach(el=>el.remove());
  const wrap=document.querySelector('.lightbox-content-wrap');
  if(!wrap) return;

  const left=document.createElement('button');
  left.className='lightbox-arrow left-arrow';
  left.innerHTML='&#10094;';
  left.onclick=e=>{e.stopPropagation();navigateLightbox(-1);};

  const right=document.createElement('button');
  right.className='lightbox-arrow right-arrow';
  right.innerHTML='&#10095;';
  right.onclick=e=>{e.stopPropagation();navigateLightbox(1);};

  wrap.appendChild(left);
  wrap.appendChild(right);
}

function navigateLightbox(dir){
  const valid=CONFIG.memories.filter(m=>m.src);
  let li=valid.findIndex(m=>CONFIG.memories.indexOf(m)===activeMemoryIndex);
  li=(li+dir+valid.length)%valid.length;
  activeMemoryIndex=CONFIG.memories.indexOf(valid[li]);

  const wrap=document.querySelector('.lightbox-content-wrap');
  if(wrap){wrap.style.opacity='0';wrap.style.transition='opacity 0.15s ease';}
  setTimeout(()=>{openLightbox(valid[li]);if(wrap) wrap.style.opacity='1';},150);
}

function closeLightbox(){
  const lightbox=document.getElementById('lightbox');
  if(!lightbox) return;
  lightbox.style.opacity='0';
  setTimeout(()=>{
    lightbox.classList.remove('open');
    const vid=document.getElementById('lightbox-vid');
    if(vid){vid.pause();vid.src='';}
    const audioEl=document.getElementById('lightbox-audio');
    if(audioEl){audioEl.pause();audioEl.src='';}
    const fi=document.querySelector('.lightbox-frame-inner');
    if(fi) fi.innerHTML='';
  },350);
}

/* ══════════════════════════════════════
   MUSIC PLAYER
══════════════════════════════════════ */
let currentTrack=-1, isPlaying=false;
const audio=document.getElementById('audio-player');

(function buildPlaylist(){
  const list=document.getElementById('playlist-list');
  if(!list) return;
  CONFIG.playlist.forEach((t,i)=>{
    const div=document.createElement('div');
    div.className='track-card';div.id='track-'+i;
    const thumbHtml=t.cover?`<img src="${t.cover}" onerror="this.src='';this.parentElement.textContent='🎵';">`:'🎵';
    div.innerHTML=`
      <div style="min-width:24px;text-align:center;">
        <span class="track-num">${i+1}</span>
        <div class="track-equalizer">
          <div class="eq-bar"></div><div class="eq-bar"></div>
          <div class="eq-bar"></div><div class="eq-bar"></div>
        </div>
      </div>
      <div class="track-thumb">${thumbHtml}</div>
      <div class="track-info">
        <div class="track-name">${t.name}</div>
        <div class="track-artist">${t.artist}</div>
        <div class="track-meaning">${t.meaning}</div>
      </div>
      <span class="track-dur" id="dur-${i}">—</span>`;
    div.onclick=()=>playTrack(i);
    list.appendChild(div);
  });
  ensurePlayerBgCover();
  injectExpandButton();
})();

function injectExpandButton(){
  const tw=document.getElementById('player-thumb');
  if(!tw) return;
  tw.style.position='relative';
  tw.style.overflow='visible';
  const old=document.getElementById('btn-expand');
  if(old) old.remove();
  const btn=document.createElement('button');
  btn.id='btn-expand';
  btn.className='player-expand-btn';
  btn.onclick=e=>{e.stopPropagation();toggleExpandPlayer();};
  tw.appendChild(btn);
  syncExpandButtonState();
}

function ensurePlayerBgCover(){
  const bar=document.getElementById('player-bar');
  if(!bar) return;
  let bg=document.getElementById('player-bg-cover');
  if(!bg){
    bg=document.createElement('div');
    bg.id='player-bg-cover';
    bg.className='player-bg-cover';
    bar.prepend(bg);
  }
  return bg;
}

function syncExpandButtonState(){
  const bar=document.getElementById('player-bar');
  const btn=document.getElementById('btn-expand');
  if(!bar||!btn) return;
  const expanded=bar.classList.contains('expanded');
  btn.innerHTML=expanded ? '−' : '⛶';
  btn.title=expanded ? 'تصغير المشغل' : 'تكبير المشغل';
  btn.setAttribute('aria-label', expanded ? 'تصغير المشغل' : 'تكبير المشغل');
}

function updateCoverBg(coverSrc){
  const bg=ensurePlayerBgCover();
  if(!bg) return;
  if(coverSrc){bg.style.backgroundImage=`url('${coverSrc}')`;bg.classList.add('active');}
  else{bg.classList.remove('active');bg.style.backgroundImage='';}
}

function playTrack(i){
  const t=CONFIG.playlist[i];if(!t||!t.file)return;
  document.querySelectorAll('.track-card').forEach(c=>c.classList.remove('active','playing'));
  currentTrack=i;
  audio.src=t.file;audio.load();
  audio.play().then(()=>{
    isPlaying=true;
    document.getElementById('btn-play').textContent='⏸';
    document.getElementById('track-'+i)?.classList.add('active','playing');
    document.getElementById('player-name').textContent=t.name;
    document.getElementById('player-artist').textContent=t.artist;
    const tw=document.getElementById('player-thumb');
    if(tw){
      tw.innerHTML=t.cover?`<img id="main-player-img" src="${t.cover}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;display:block;" onerror="this.parentElement.textContent='🎵';">`:'🎵';
      injectExpandButton();
    }
    updateCoverBg(t.cover);
    const ap=document.querySelector('.page.active')?.id;
    if(ap==='page-playlist') showPlayer();else hidePlayer();
  }).catch(e=>console.log('خطأ:',e));
}

function togglePlay(){
  if(currentTrack===-1){playTrack(0);return;}
  if(audio.paused){audio.play();isPlaying=true;document.getElementById('btn-play').textContent='⏸';document.getElementById('track-'+currentTrack)?.classList.add('playing');}
  else{audio.pause();isPlaying=false;document.getElementById('btn-play').textContent='▶';document.getElementById('track-'+currentTrack)?.classList.remove('playing');}
}

function prevTrack(){playTrack(currentTrack>0?currentTrack-1:CONFIG.playlist.length-1);}
function nextTrack(){playTrack((currentTrack+1)%CONFIG.playlist.length);}

function stopPlayer(){
  audio.pause();audio.src='';isPlaying=false;currentTrack=-1;
  hidePlayer();updateCoverBg(null);
  document.getElementById('btn-play').textContent='▶';
  document.querySelectorAll('.track-card').forEach(c=>c.classList.remove('active','playing'));
}

function seekTo(e){
  if(!audio.duration)return;
  const rect=document.getElementById('progress-wrap').getBoundingClientRect();
  audio.currentTime=Math.max(0,Math.min(1,(e.clientX-rect.left)/rect.width))*audio.duration;
}
function setVolume(v){audio.volume=v;}
function fmtTime(s){if(isNaN(s))return'0:00';return Math.floor(s/60)+':'+Math.floor(s%60).toString().padStart(2,'0');}

audio.addEventListener('timeupdate',()=>{
  if(!audio.duration)return;
  document.getElementById('progress-fill').style.width=(audio.currentTime/audio.duration*100)+'%';
  document.getElementById('time-cur').textContent=fmtTime(audio.currentTime);
});
audio.addEventListener('loadedmetadata',()=>{
  document.getElementById('time-dur').textContent=fmtTime(audio.duration);
  if(currentTrack>=0){const el=document.getElementById('dur-'+currentTrack);if(el)el.textContent=fmtTime(audio.duration);}
});
audio.addEventListener('ended',()=>nextTrack());

/* ══════════════════════════════════════
   EXPAND PLAYER
══════════════════════════════════════ */
function toggleExpandPlayer(){
  const bar=document.getElementById('player-bar');
  if(!bar) return;

  const expanded=!bar.classList.contains('expanded');
  bar.classList.toggle('expanded', expanded);
  syncExpandedLayout(expanded);
  syncExpandButtonState();
}

/* ══════════════════════════════════════
   LETTERS
══════════════════════════════════════ */
(function(){
  const grid=document.getElementById('letters-grid');if(!grid)return;
  const now=new Date();
  const letters = Array.isArray(CONFIG.letters) && CONFIG.letters.length ? CONFIG.letters : FALLBACK_LETTERS;
  letters.forEach(l=>{
    const unlock=new Date(l.unlockDate),isUnlocked=now>=unlock;
    const div=document.createElement('div');
    div.className='letter-envelope'+(isUnlocked?'':' locked');
    div.innerHTML=`
      <span class="letter-lock">${isUnlocked?'💌':'🔒'}</span>
      <div class="letter-title">${l.title || 'رسالة'}</div>
      <div class="letter-unlock-date ${isUnlocked?'unlocked':''}">
        ${isUnlocked?'افتحيها وشوفيها على رواق❤️':'تنفتح '+unlock.toLocaleDateString('ar-EG',{day:'numeric',month:'long',year:'numeric'})}
      </div>`;
    div.onclick=()=>isUnlocked?openLetter(l,unlock):openLockedLetter(l,unlock);
    grid.appendChild(div);
  });
})();

function openLetter(l,unlock){
  document.getElementById('letter-modal-title').textContent=l.title || 'رسالة';
  document.getElementById('letter-modal-date').textContent=unlock.toLocaleDateString('ar-EG',{day:'numeric',month:'long',year:'numeric'});
  document.getElementById('letter-modal-body').textContent=l.body || '';
  document.getElementById('letter-modal').classList.add('open');
}

function openLockedLetter(l,unlock){
  const formattedDate=unlock.toLocaleDateString('ar-EG',{day:'numeric',month:'long',year:'numeric'});
  document.getElementById('letter-modal-title').textContent=l.title || 'رسالة مقفولة';
  document.getElementById('letter-modal-date').textContent=formattedDate;
  document.getElementById('letter-modal-body').textContent=`السموحة انسة دندن  ... ما بزبط افرجيكي شو كاتب هون هسا، استني لحد ${formattedDate}`;
  document.getElementById('letter-modal').classList.add('open');
}

function closeLetterModal(e){
  if(!e||e.target===document.getElementById('letter-modal'))
    document.getElementById('letter-modal').classList.remove('open');
}

