const eidWishes = {
    eidWishes1 : ["May this Eid bring happiness, joy, Allah's blessings and love… Eid MUBARAK to you and your family.", 
"When I can’t reach out to people close to me, I always remember them in my prayers. May Allah’s blessings always be with you and your loves ones. Eid Mubarak to you!", 
"On this Eid, I wish you and your family Allah's blessings and kindness. Eid Mubarak!", 
"Today is the day to pray, love, smile, care and celebrate with our near and dear ones and remember Allah for his kindness. Eid Mubarak!",
"On the occasion of Eid-ul-Adha, I send you my best wishes! Eid Mubarak!", 
"May you be surrounded by family and friends this Eid. Allah is there for everyone. Eid Mubarak!", 
"As long as you have Allah in your heart, you will be prosperous. Happy Eid!", 
"My peace and joy embrace your life, And stay on this blessed day and always. Ameen!"],

 eidWishes2 : [" I wish you Allah's blessings and pray for all your obstacles to vanish soon. Happy Eid to you and your family!", 
"This Eid-ul-Adha, I wish Allah’s blessings to light up your life and hope that it is filled with happiness, peace, joy and success. Eid Mubarak!", 
"I wish your life is as spicy as biryani and sweet as kheer. Eid Mubarak!", 
"You'll be in my prayers today. May Allah bless you. Eid Mubarak!", 
"On Eid Ul Adha, wishing that your sacrifices are appreciated and your prayers are answered by the almighty. Have a blessed Eid Ul Adha!", 
"May Allah's blessings be with you today and always. Eid Ul Adha Mubarak 2021!", 
"May the divine blessings of Allah bring you hope, faith, and joy on Eid-Ul-Adha and forever. Happy Eid Ul Adha 2021!", 
"May Allah bless you all and your wishes come true"],

 eidWishes3 : ["This Eid, I'm sending you heartfelt wishes. Do keep me in your prayers.", 
"May your devotion and faith in Allah continue. Happy Eid!", 
"I hope this Eid opens your mind and soul to love and faith towards Allah.",
"I hope Allah's blessings will be with you forever and always. Happy Eid!", 
"Eid Mubarak to you and your family. May the guidance and blessings of Allah be with you and your family", 
"Eid Mubarak, wishing you and your loved ones a blessed Eid!", 
"Having you in my life is a blessing and on Eid Ul Adha. I wish that it stays forever. Eid Mubarak!", 
"On the Holy occasion of Eid Ul Adha that celebrates the hajj... May you be filled with happiness and may every step of your journey through life be blessed by Allah. Eid Mubarak!"]

};

console.log('\n');
const randomEidMessages = eid => {
    for(const wish in eid) {
        console.log(eid[wish][Math.floor(Math.random() * 8)]);
        console.log('\n');
    }
};

randomEidMessages(eidWishes);
 
