const quotes = [

    {
        quote: "Zinda rahne ke liye teri qurbat tak na pahunche to kya kiya, mar jaunga main tujhse juda na hua to kya kiya.",
        author: "Allama Iqbal"
    },
    {
        quote: "Apni khudgarzi ki itni had tak chalo ke khuda bhi tumse khud poochhe, ye bata teri raza kya hai.",
        author: "Allama Iqbal"
    },
    {
        quote: "Sitaron se aage jahan aur bhi hain, abhi ishq ke imtehan aur bhi hain.",
        author: "Allama Iqbal"
    },
    {
        quote: "Hazaron saal nargis apni benoori pe roti hai, bari mushkil se hota hai chaman mein deedawar paida.",
        author: "Allama Iqbal"
    },
    {
        quote: "Jo log auroon ki zindagi bakhsh dete hain, zindagi bhi unki khidmat mein guzar dete hain.",
        author: "Allama Iqbal"
    },
    {
        quote: "Mauj-e-rawan se pehle khwabon ki duniya thi, ab zindagi khwabon ki duniya hai mauj-e-rawan ke baad.",
        author: "Allama Iqbal"
    },
    {
        quote: "Jab tak tere pair chalenge tab tak teri saans chalegi, jab tak teri saans chalegi tab tak tere dil ki dhadkan bhi chalegi.",
        author: "Allama Iqbal"
    },
    {
        quote: "Kitaabon ki bhi aik duniya hai, me likhta raha wo parhta raha.",
        author: "Allama Iqbal"
    },
    {
        quote: "Jis khait se dehqan ko mayassar na ho rozi, us khait ke har khosha-e-gandum ko jala do.",
        author: "Allama Iqbal"
    },
    {
        quote: "Unity, faith and discipline, these are three pillars of the Muslim League.",
        author: "Muhammad Ali Jinnah"
    },
    {
        quote: "No nation can rise to the height of glory unless your women are side by side with you.",
        author: "Muhammad Ali Jinnah"
    },
    {
        quote: "Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man.",
        author: "Muhammad Ali Jinnah"
    },
    {
        quote: "With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.",
        author: "Muhammad Ali Jinnah"
    },
    {
        quote: "The word 'Islam' means 'peace.' The word 'Muslim' means 'one who surrenders to God.' But the press makes us seem like haters.",
        author: "Muhammad Ali Jinnah"
    },
    {
        quote: "Failure is a word unknown to me.",
        author: "Muhammad Ali Jinnah"
    },
    {
        quote: "I do not believe in taking the right decision, I take a decision and make it right.",
        author: "Muhammad Ali Jinnah"
    },
    {
        quote: "We are now all Pakistanis--not Baluchis, Pathans, Sindhis, Bengalis, Punjabis and so on--and as Pakistanis we must feet behave and act, and we should be proud to be known as Pakistanis and nothing else.",
        author: "Muhammad Ali Jinnah"
    },
    {
        quote: "I have lived as plain Mr. Jinnah and I hope to die as plain Mr. Jinnah. I am very much averse to any title or honours and I will be more than happy if there was no prefix to my name.",
        author: "Muhammad Ali Jinnah"
    },
    {
        quote: "The Hindus and Muslims belong to two different religions, philosophies, social customs and literature. They neither intermarry nor inter-dine together and, indeed, they belong to two different civilizations which are based mainly on conflicting ideas and conceptions.",
        author: "Muhammad Ali Jinnah"
    },
    {
        quote: "In the name of humanity, I appeal to all those who believe in freedom and democracy to cease their collaboration with this brutal, violent and tyrannical regime and to support the cause of the Baloch people's struggle for freedom and independence.",
        author: "Muhammad Ali Jinnah"
    },
    {
        quote: "Expect the best, prepare for the worst.",
        author: "Muhammad Ali Jinnah"
    },
    {
        quote: "Democracy is in the blood of Musalmans, who look upon complete equality of mankind, and believe in fraternity, equality, and liberty.",
        author: "Muhammad Ali Jinnah"
    },
    {
        quote: "No struggle can ever succeed without women participating side by side with men.",
        author: "Muhammad Ali Jinnah"
    },
    {
        quote: "I have nothing to do with this pseudo-religious approach that Gandhi is advocating.",
        author: "Muhammad Ali Jinnah"
    },
    {
        quote: "I sincerely hope that they (relations between India and Pakistan) will be friendly and cordial. We have a great deal to do... and think that we can be of use to each",
        author: "Muhammad Ali Jinnah"
    },
    {
        quote: "The best of you are those who are best to women.",
        author: "Al-Tirmidhi, Hadith 1162"
    },
    {
        quote: "Kindness is a mark of faith, and whoever has not kindness has not faith.",
        author: "Muslim, Hadith 45"
    },
    {
        quote: "The best among you is he who doesn’t harm others with his tongue and hands.",
        author: "Al-Bukhari, Hadith 10"
    },
    {
        quote: "Verily, Allah does not look towards your bodies nor towards your appearances. But, he looks towards your hearts.",
        author: "Muslim, Hadith 2564"
    },
    {
        quote: "Do not waste water even if you were at a running stream.",
        author: "Ibn Majah, Hadith 3484"
    },
    {
        quote: "None of you truly believes until he wishes for his brother what he wishes for himself.",
        author: "Al-Bukhari, Hadith 13"
    },
    {
        quote: "The best charity is that given to a relative who does not like you.",
        author: "Al-Tirmidhi, Hadith 1931"
    },
    {
        quote: "The most beloved of people according to Allah is he who brings most benefit to people.",
        author: "Al-Albani, Sahih Al-Jami 1074"
    },
    {
        quote: "A true Muslim is thankful to Allah in prosperity, and patient in adversity.",
        author: "Muslim, Hadith 222"
    },
    {
        quote: "The strong man is not the one who is physically powerful, but the one who controls himself when angry.",
        author: "Al-Bukhari, Hadith 6114"
    },
    {
        quote: "He who is not merciful to others, will not be treated mercifully.",
        author: "Al-Bukhari, Hadith 3430"
    },
    {
        quote: "The most perfect believer in faith is the one who is best in manners.",
        author: "Al-Tirmidhi, Hadith 1162"
    },
    {
        quote: "Allah does not judge you according to your appearance and your wealth, but He looks at your hearts and looks into your deeds.",
        author: "Muslim, Hadith 2564"
    },
    {
        quote: "The best of friends in the sight of Allah is the one who is best to his friend.",
        author: "At-Tirmidhi, Hadith 2509"
    },
    {
        quote: "He who loves for the sake of Allah and hates for the sake of Allah, gives for the sake of Allah and withholds for the sake of Allah, has a perfect faith.",
        author: "Abu Dawud, Hadith 4681"
    },
    {
        quote: "The most beloved people to Allah are those who are most beneficial to people.",
        author: "Al-Albani, Sahih Al-Jami 1074"
    },
    {
        quote: "The best thing you can give someone is du’a.",
        author: "At-Tirmidhi, Hadith 2732"
    },
    {
        quote: "Allah loves moderation and hates extravagance and excess.",
        author: "Ibn Majah, Hadith 4219"
    }
]

let quote = document.getElementById('quote');
let author = document.getElementById('author');
function genQuotes() {
    let no = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[no].quote;
    author.innerHTML = "~ &ensp;"+ quotes[no].author;
}
