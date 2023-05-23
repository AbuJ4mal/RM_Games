const { Client, Intents, MessageEmbed, MessageAttachment } = require('discord.js');
const Canvas = require('canvas');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });

client.once('ready', () => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
});
const prefix = '$'

client.on('messageCreate', (msg) => {
    const questions = [
        "مين اكتر سيرفر تكرهه ؟",
        "مين اكتر سيرفر تحبه ؟",
        "مين هو الاداري يلي بفيدكم اكتر شي بسيرفر وبساعدك؟",
        "مين اكتر اداري بتحبو بسيرفرك ؟",
        "مين اكتر اداري متفاعل عندك بسيرفر ؟",
        "كيف دخلت على ديسكورد ؟",
        "ليش تستخدم ديسكورد ؟",
        "شو سبب يلي خلاك تفتح سيرفرك ؟"
    ];
    const randomIndex = Math.floor(Math.random() * questions.length);
    
    const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription(questions[randomIndex])
        .setFooter(msg.guild.name , msg.guild.iconURL({ dynamic: true}) )
        .setTimestamp();
    const owners = ["701511419765719140", "903020362839781496","766665625438781471","696624002814181417","734398398463082516","734398398463082516"];
    if (msg.content.startsWith(prefix + 'E-Question')) {
        if (!owners.includes(msg.author.id)) return;
        msg.delete();
        msg.channel.send({ embeds: [embed] });
    }
    const cutQuestions = [
        "شو هو هدفك بالحياة للآن ؟",
        "كيف كانت معك سنة 2022 و شو حققت فيها اهداف ؟ ",
        "عندك حب تملك ؟ وشو سبب ؟",
        "شو هو شي يلي عبالك تحذفو حياتك بس مش قادر ؟",
        "كيف تتعامل مع ضغوضك شخصية ؟",
        "شو هي نصيحة يلي عبالك تعطيها لحالك في الماضي ؟",
        "شو هو اكتر شي حلو بحياتك صار حتى الآن ؟",
        "شو اكتر شغلة احسنت في اختيارها بحياتك ؟",
        "شو هي شغلة يلي فادتك من ديسكورد ؟",
        "شخص تحبه كتير ولكن دايما يشك فيك ؟",
        "شي عبالك تجربه بس ماتقدر ؟",
        "شغلة خايف انها تصير ، شو هي ؟",
        "لو سرقة حلال ، شو اول شي عبالك تسرقو"
    ];
    const randomcut = Math.floor(Math.random() * cutQuestions.length);
    
    const Cutembed = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription(cutQuestions[randomcut])
        .setFooter(msg.guild.name , msg.guild.iconURL({ dynamic: true}) )
        .setTimestamp();
    if (msg.content.startsWith(prefix + 'E-cut')) {
        if (!owners.includes(msg.author.id)) return;
        msg.delete();
        msg.channel.send({ embeds: [Cutembed] });
        }
});



const cut = [
    "ما هو أكثر شيء تحب القيام به في وقت فراغك؟",
    "ما هو أفضل مكان قمت بزيارته حتى الآن؟",
    "ما هو أفضل كتاب قرأته حتى الآن؟",
    "ما هي أكثر الأشياء التي تشعر بالإنجاز عند القيام بها؟",
    "ما هي أكثر الأشياء التي تشعر بالإحباط عند القيام بها؟",
    "ما هي أكثر الأشياء التي تحب القيام بها مع أصدقائك؟",
    "ما هي أكثر الأشياء التي تحب القيام بها مع عائلتك؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في الطبيعة؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في المدينة؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في الشتاء؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في الصيف؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في الخريف؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في الربيع؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في الصباح؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في المساء؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في الليل؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في النهار؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في العطلات؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في الأعياد؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في الأعياد الوطنية؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في الأعياد الدينية؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في الأعياد العائلية؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في الأعياد الاجتماعية؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في الأعياد الرومانسية؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في الأعياد الصديقة؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في الأعياد العامة؟",
    "ما هي أكثر الأشياء التي تحب القيام بها في الأعياد الخاصة؟",
    "تشوف الي يفكر كثير نفسية ؟",
    "منشن شخص فاهمك في كل شيء ؟",
    "ردك الدائم على الكلام الحلو ...",
    "جمال المراة يكمن في ...",
    "وقفة إحترام للي إخترع ؟",
    "شيء تفكر تشتريه ...",
    "تقدم بالعمر او ترجع طفل ؟",
    "الحب اختيار ولا قدٓر؟",
    "تترك احد عشان ماضيه ؟",
    "هل أنت من الأشخاص الذي يدونون يومياتهم ؟",
    "تعرف تتصرف في المواقف الصعبة ؟",
    "مقوله او مثل او بيت شعر قريب من قلبك ؟",
    "تفضل العيون (الناعسة - الواسعة) ؟",
    "تنتظر من أحد رسالة ؟",
    "تجامل احد على حساب مصلحتك ؟",
    "ما هي الشخصية المُستفزة بالنسبة لك؟",
    "مَن يُحب افتعال المشاكل أكثر في العلاقة ؟",
    "كم من 10 كتابتك بالقلم حلوة ؟",
    "اكثر وقت تحب النوم فيه",
    "وش الشيء الي يكرهه اقرب صاحب لك ؟",
    "تحب تكون علاقتك مع الناس ميانه ولا رسميه ؟",
    "اغلب وقتك ضايع في؟",
    "غداؤك لليوم ؟",
    "شيء تتمنى لو ترجع طفل عشان تسويه ؟",
    "مع او ضد: قلة العلاقات راحة ...",
    "شخص يحاول يبتعد عنك بس ماقاللك تبادر ولاتسكت ؟",
    "كم عدد الصور بجوالك ؟",
    "كم سيرفر داخل في الديسكورد ؟",
    "مع او ضد: ما تعرف قيمة الشخص الا اذا فقدته ...",
    "تعتبر نفسك شخص عاطفي ولا عقلاني ؟",
    "نسبة الجوع عندك حاليًا؟",
    "إذا يأست من الحياة، ماذا تفعل؟",
    "شيء نفسك تجربه ؟",
    "لحظة تنتظرها بقوة؟",
    "اكره شعور ممكن يحس فيه الانسان هو",
    "مع او ضد: اقاربك يعرفون عن حساباتك في برامج التواصل ...",
    "عادة سيئة فيك ؟",
    "علمتني الحياة ...؟",
    "من علامات روقانك ؟",
    "صفه فيك حابها تتغير بس مو قادر ؟",
    "أين تجد الحياة؟",
    "بصراحة لو ظلمك شخص وعندك كل أسراره، هل تفضحه أم لديك تصرف آخر؟",
    "ردك لو احد غلط بحقك واعتذر لك ؟",
    "ذكرى جميلة لا تنساها؟",
    "صفة موجودة في جميع افراد عائلتك ؟",
    "كم من عشرة مروق ؟ ",
    "اخر مره بكيت فيها متى ؟",
    "مو كل الناس تستحق ؟",
    "شعور ودك يموت ...",
    "كلمة تخليك تلبي الطلب حق الشخص بدون تفكير",
    "مع او ضد: العتاب على قدر المحبة ...",
    "لو قالوا لك تناول صنف واحد فقط من الطعام لمدة شهر، فما هو ؟",
    "تفضل المواد الي تعتمد على الحفظ ولا الفهم ؟",
    "عاده تفعلها دائما تتمنى ان تتركها ؟ و لماذا ؟",
    "عندك صديق يحمل نفس اسمك ؟",
    "أكثر مكان تكتب فيه وتفضفض ؟",
    "الديسكورد اشغلك عن حياتك الواقعية ؟",
    "الأهتمام الزايد يضايقك ؟",
    "مهارة تتمنى تتقنها",
    "وش اسم اول شخص تعرفت عليه في الديسكورد ؟",
    "الرجل : تتزوج وحده اكبر منك ؟",
    "لو كنت محتار بين شخص تحبه وشخص يحبك، من تختار ؟",
    "قناة الكرتون المفضلة في طفولتك؟",
    "مع او ضد: الهدية بـ معناها وليس بـ قيمتها ...",
    "ما هو أكثر شيء تحب القيام به في وقت فراغك؟",
    "ما هو أفضل مكان قمت بزيارته حتى الآن؟",
    "ما هو الكتاب الذي أثر فيك بشكل كبير؟",
    "ما هو الشيء الذي تحبه في نفسك؟",
    "ما هو الشيء الذي تكرهه في نفسك؟",
    "ما هو الشيء الذي تحبه في الآخرين؟",
    "ما هو الشيء الذي تكرهه في الآخرين؟",
    "ما هو الشيء الذي تحبه في الحياة؟",
    "ما هو الشيء الذي تكرهه في الحياة؟",
    "ما هو الشيء الذي تحبه في العمل؟",
    "ما هو الشيء الذي تكرهه في العمل؟",
    "ما هو الشيء الذي تحبه في الدراسة؟",
    "ما هو الشيء الذي تكرهه في الدراسة؟",
    "ما هو الشيء الذي تحبه في الرياضة؟",
    "ما هو الشيء الذي تكرهه في الرياضة؟",
    "ما هو الشيء الذي تحبه في الطعام؟",
    "ما هو الشيء الذي تكرهه في الطعام؟",
    "ما هو الشيء الذي تحبه في السفر؟",
    "ما هو الشيء الذي تكرهه في السفر؟"
];



// Register the custom font
Canvas.registerFont('./src/a-massir-ballpoint-1.ttf', { family: 'A Massir BallPoint' });


client.on('messageCreate', async (message) => {
    const cutRandom = Math.floor(Math.random() * cut.length);

    const cutGame = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription(cut[cutRandom])
        .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setTimestamp();
    if (message.content.includes(prefix + 'cut')) {
      message.channel.send({ embeds: [cutGame] });
/*
        const image = await Canvas.loadImage('./src/cutTempalate.jpg');

        const canvas = Canvas.createCanvas(image.width, image.height);
        const ctx = canvas.getContext('2d');

        ctx.drawImage(image, 0, 0, image.width, image.height);

        ctx.font = '50px A Massir BallPoint';

        ctx.fillStyle = 'Black';

        const text = cut[cutRandom];
        const maxWidth = canvas.width - 100; // Set the maximum width of the text
        let words = text.split(' ');
        let line = ' ';
        let y = canvas.height / 1.7;
        for (let i = 0; i < words.length; i++) {
            let testLine = line + words[i] + ' ';
            let testWidth = ctx.measureText(testLine).width;
            if (testWidth > maxWidth && i > 0) {
                ctx.fillText(line, (canvas.width - ctx.measureText(line).width) / 2, y);
                line = words[i] + ' ';
                y += 18; // Increase the y value for the next line
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, (canvas.width - ctx.measureText(line).width) / 2, y);

        const attachment = new MessageAttachment(canvas.toBuffer(), 'cut.jpeg');

        message.channel.send({ files: [attachment] });
*/
    }
});


const { createCanvas, loadImage, registerFont } = require('canvas');
//const { MessageAttachment } = require('discord.js');
const fetch = require('cross-fetch');
// تحميل الخط إذا لزم الأمر
//registerFont('path/to/font.ttf', { family: 'FontName' });
client.on('guildMemberAdd', async (member) => {
  const canvas = createCanvas(1536, 1536);
  const ctx = canvas.getContext('2d');

  // تحميل صورة الخلفية
  const backgroundImage = await loadImage('./welcome.png');

  // رسم الصورة في الخلفية
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  // تحميل معلومات الشخص الجديد
  const personName = member.user.username;
  const personAvatarURL = member.user.displayAvatarURL({ format: 'png' });

  // جلب صورة الأفتار من Discord وتحويلها إلى Buffer
  const avatarBuffer = await fetch(personAvatarURL).then((response) => resp>

  // تحميل الأفتار من الـ Buffer
  const avatarImage = await loadImage(avatarBuffer);

  // حساب حجم الأفتار
  const avatarSize = canvas.width / 2.25;

  // إنشاء Canvas للأفتار المدور
  const avatarCanvas = createCanvas(avatarSize, avatarSize);
  const avatarCtx = avatarCanvas.getContext('2d');

  // رسم الأفتار في Canvas المدور
  avatarCtx.save();
  avatarCtx.beginPath();
  avatarCtx.arc(avatarSize / 2, avatarSize / 2, avatarSize / 2, 0, Math.PI >
  avatarCtx.closePath();
  avatarCtx.clip();
  avatarCtx.drawImage(avatarImage, 0, 0, avatarSize, avatarSize);
  avatarCtx.restore();

  // حساب موقع الأفتار والنص
  const avatarX = (canvas.width - avatarSize) / 20;
  const avatarY = (canvas.height - avatarSize) / 1.55;
  const textY = backgroundImage.height / 0.90;

  // رسم الأفتار المدور
  ctx.drawImage(avatarCanvas, avatarX, avatarY);

  // كتابة اسم الشخص على الصورة
  ctx.font = '60px Arial';
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.fillText(personName, backgroundImage.width / 0.80, textY);

  // إنشاء MessageAttachment وإرسالها في رسالة الترحيب
  const welcome = new MessageAttachment(canvas.toBuffer(), 'welcome.png');
  member.guild.channels.cache.get('1106650272694030526').send({content: `مر>
});


client.login("MTEwNDc0MTkyMzIzMjY4NjE4MA.G5hif9.cXNjF1Oq-vRNJeCp59PB41k5i7SxSI7Aag7cDE");
