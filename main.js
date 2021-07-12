const mixedMessages = () => {
    var messagesCatRandom = Math.floor(Math.random()* messages.length);
var randomQuotes = Math.floor(Math.random() * 3)
let newMessage = messages[messagesCatRandom][randomQuotes];

document.getElementById('messageDisplay').innerHTML = newMessage;
//console.log(newMessage)
}


const messages = [
    ['"Every villian is a hero in his own mind" - Loki', '"I am Iron Man" - Tony Stank', "'It\'s Not Who I Am Underneath, But What I Do, That Defines Me.' - Batman", '"Just Because Someone Stumbles And Loses Their Path Doesn\'t Mean They\'re Lost Forever." - Professor X'],
    ['“We need not feel ashamed of flirting with the zodiac.  The zodiac is well worth flirting with.” - D.H Lawrence', '“The starry vault of heaven is in truth the open book of cosmic projection…” - Carl Jung',  '“Astrology is a Language. If you understand this language, The Sky Speaks to You.” - Dane Rudhyar'],
    ['"She doesn\'t even go here!" - Mean Girls', '"Help me, I\'m poor" - Bridesmaids', '"Are you not entertained?!" - Gladiator']
]

