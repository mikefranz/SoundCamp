// Sorted alphabetically by label (first element of array)
var sounds = {
    // key : [ label, soundfile, image, text ]
    "dontcallmeshirley": ["Surely you can't be serious", "dont_call_me_shirley.ogg", "dont_call_me_shirley.gif", null],
    "125": ["1, 2, 5!", "1-2-5.ogg", null, null],
    "boo": ["ಠ_ಠ", "boohiss.ogg", null, null],
    "alive": ["Alive", "alive.ogg", null, "It's alive!"],
    "alrighty": ["Alrighty then", "alrighty_then.ogg", null, null],
    "america": ["America?", "ThoughtThisWasAmerica.ogg", null, "I am sorry... I thought this was America!!?!"],
    "goat": ["Angry goat", "crazy_goat.ogg", "crazy_goat.png", null],
    "bettyWhite": ["Betty White", "BettyWhite.ogg", "betty-white-snickers-ad.jpg", null],
    "oyster": ["Blue Oyster", "blue_oyster_bar.ogg", "the_blue_oyster.jpg", null],
    "byebyebye": ["Bye Bye Bye", "byebyebye.ogg", "byebyebye.gif", "Bye Bye Bye!"],
    "bi_winning": ["Bi Winning", "bi_winning.ogg", "charlie-sheen-crazy-eyes.png", "Now What?"],
    "boomstick": ["Boomstick", "aod-boomstick.ogg", "boomstick.png", null],
    "breakitdown": ["Break it down", "breakitdown.ogg", "McHammer.gif", null],
    "deadbug": ["Bug fixed", "good_bug_dead_bug.ogg", "dead_bug.png", "Bug solved!"],
    "bug": ["Bug found", "we_have_a_bug.ogg", "bug.png", "We have a bug"],
    "cash": ["Cash", "gimmiecash.ogg", "GimmeDaCash.gif", null],
    "catchaboat": ["Catch a boat", "ricky-catch_a_boat.ogg", "ricky.png", null],
    "coolstory": ["Cool Story", "CoolStoryHansel.ogg", null, "Cool story Hansel..."],
    "crymeariver": ["Cry Me A River", "CryMeARiver.ogg", null, "Cry me a river..."],
    "espresso": ["Coffee, anyone?", "espresso.ogg", "espresso.png", "Anyone for coffee?"],
    "communicate": ["Communicate", "chl-communicate.ogg", null, "What we have here..."],
    "developers": ["Developers...", "steve_ballmer-developers.ogg", "steve_ballmer.png", null],
    "doOrDoNot": ["Do or Do Not", "DoOrDoNot.ogg", "DoOrDoNot.gif", null],
    "towel": ["Dont Forget", "DontForgetToBringATowl.ogg", null, null],
    "exterminate": ["Exterminate!", "dalek-exterminate.ogg", "dalek.png", "Exterminate!"],
    "facepalm": ["Facepalm", null, "facepalm.png", "..."],
    "grenade": ["Grenade", "33245__ljudman__grenade.ogg", "grenade.png", "Fire in the hole!"],
    "goodmorningvietnam": ["Gooood Morning Vietnaaamm!", "good_morning_vietnam.ogg", "good_morning_vietnam.jpg", "Good Morning Vietnam!"],
    "groovy": ["Groovy", "aod-groovy.ogg", null, null],
    "grumpy": ["Grumpy?", "llgrump.ogg", null, null],
    "hailking": ["Hail to the king", "aod-hailking.ogg", "crown.png", null],
    "hammertime": ["Hammer time", "hammer_time.ogg", "McHammer.gif", null],
    "holdon": ["Hold on!", "HoldOnToYourButts.ogg", null, null],
    "hoaah": ["Hoaah", "timmy_hoaah.ogg", "timmy.png", null],
    "hypnotoad": ["Hypnotoad", "hypnotoad.ogg", "hypnotoad.gif", "ALL GLORY TO THE HYPNOTOAD!"],
    "knowingishalf": ["Knowing is Half", "KnowingIsHalfTheBattle.ogg", "KnowingIsHalfTheBattle.jpg", null],
    "dontthinkso": ["I don't think so", "larry_david-no_i_dont_think_so.ogg", "larry_david.jpg", null],
    "infinity": ["Infinity", "to_inf.ogg", "buzz_lightyear.png", "To infinity! ... or somewhere a bit closer"],
    "trap": ["It's a trap!", null, "star_wars_its_a_trap.png", null],
    "jack": ["Jack", "aod-jack.ogg", null, null],
    "jacksparrow": ["Jack Sparrow", "captain_jack_sparrow.ogg", "captain_jack_sparrow.jpg", "Captain Jack Sparrow!"],
    "jackpot": ["Jackpot!", "Jackpot.ogg", null, null],
    "jebus": ["Jebus", "jesus_christ.ogg", "mr_slave.png", null],
    "killhumans": ["Kill all humans", "bender_kill_humans.ogg", "bender_kill.png", null],
    "discipline": ["Lack discipline", "arnie_you_lack_discipline.ogg", "arnie.png", null],
    "leeroy": ["Leeroy", "leeroy_jenkins.ogg", null, "At least I have chicken."],
    "letsgetready": ["Let's Get Ready", "LetsGetReadyToRumble.ogg", null, "Let's get ready to rumble!"],
    "letsgo": ["Let's go", "idiotmbl.ogg", null, null],
    "likeaboss": ["Like A Boss", "like_a_boss.ogg", "like_a_boss.gif", null],
    "livinalie": ["Livin' a lie", "timmy_livinalie.ogg", "timmy.png", "Timmah!"],
    "needassiatnce": ["Need assistance?", "NeedAssistance.ogg", null, null],
    "nicehat": ["Nice hat", "nicehat.ogg", "NiceHat.gif", null],
    "nonono": ["No no no...", "no_cat.ogg", "no_cat.png", null],
    "notime": ["No time for that", "aint_nobody_got_time.ogg", null, null],
    "orangeMocha": ["Orange Mocha!", "OrangeMochaFrappuccino.ogg", "OrangeMochaFrappacino.gif", null],
    "onespeed": ["One speed...Go!", "one_speed.ogg", "charlie-sheen-crazy-eyes.png", "Because, that's how I roll"],
    "chosepoorly": ["Poor Choice", "HeChosePoorly.ogg", null, null],
    "sad": ["Sad", "sad.ogg", "buzz_lightyear.png", "Sad..."],
    "screwyouguys": ["Screw you guys", "ScrewYouGuys.ogg", null, null],
    "panda": ["Sad Panda", "sad_panda.ogg", "sad_panda.png", null],
    "sheeeit": ["Sheeeit", "sheeeit.ogg", "clay_davis.png", null],
    "snozberries": ["Snozberries", "Snozberries.ogg", null, "This snozberries taste like realy snozberries"],
    "sorryiamlate": ["Sorry I'm Late", "SorryIAmLate.ogg", null, "Sorry I am late!"],
    "ladiesandgents": ["Steve Ballmer", "steve_ballmer-ladies_and_gentleman.ogg", "steve_ballmer.png", null],
    "tardis": ["Tardis", "tardis.ogg", "tardis.png", "wooOOooww wooOOoow wooOOoow" ],
    "final": ["The Final Countdown", "final.ogg", null, "The Final Countdown" ],
    "threwitontheground": ["Threw it on the ground!", "ThrewItOnTheGround.ogg", null, "I threw it on the ground!" ],
    "timmy": ["Timmy!", "timmy.ogg", "timmy.png", null],
	"verbal": ["Verbal morality", "verbal_morality.ogg", "verbal_morality.png", null],
    "what": ["What?", "WhatMinion.ogg", "what.gif", null],
    "whatisthis": ["What is this?", "WhatIsThis.ogg", "WhatIsThis.jpg", "What is this?"],
    "winning": ["Winning", "winning.ogg", "charlie-sheen-crazy-eyes.png", null],
    "yeah": ["Yeah, Yeah!", "YeahYeahYeah.ogg", null, "Yeah, Yeah, Yeah, Yeah, Yeah"],
    "youawizard": ["You're a wizard", "WizardHarry.ogg", null, "You're a wizard, Harry.."],
    "yourcrazy": ["You're crazy", "YourCrazy.ogg", null, "I like you... but you're crazy..."],
    "right": ["You're right", "chuck_norris-youre_right.ogg", "chuck_norris.png", null],
    "wrong": ["You're wrong", "dr_cox-youre_wrong.ogg", "scrubs.png", null],
    "thebest": ["You're the best", "YouAreTheBest.ogg", null, "You're the best!"]
}

var soundKeys = Object.keys(sounds);
var soundKeysLength = soundKeys.length;

var audio = null;
var re = /:soundcamp \w+/;
var mre = /message_/;

function tellPlaySound(sound) {
    var input = $('#input')[0];
    var copy = input.value;
    input.value = ':soundcamp '+ sound;
    $('#send').click();
    input.value = copy;
}

function addChatSoundHTML(node, sound) {
    var s = sounds[sound];
    if (!s) {
        node.html('<span class="scMsgUnknown">Unknown sound "'+
            sound +'".</span>');
        return;
    }

    var html = '';
    if (s[2]) {
        html += '<span class="scMsg"><img class="scImg" src="'+
            chrome.extension.getURL("images/" + s[2]) +
            '"></span>';
    }
    if (s[3]) {
        html += '<span class="scMsg">'+ s[3] +'</span>';
    }
    if (html === '') {
        html = '<span class="scMsg">'+ s[0] +'</span>';
    }

    var snd_img = $('<img>').attr('alt', "Sound").attr('class', 'scSndIcon').attr('src', '/images/sound.png');
    $(snd_img).click(function() { playSound(sound); });

    node.html('');
    node.append(snd_img);
    node.append(html);
}

function soundEnabled() {
    var img = $('#toggle_sounds_link').find('img');
    var state = $(img).attr('alt');
    if (state == 'Sound-on')
        return true;
    return false;
}

function playSound(sound) {
    if (audio) {
        audio.pause();
        document.body.removeChild(audio);
        audio = null;
    }

    if(!sounds[sound])
        return;

    var src = chrome.extension.getURL("sounds/" + sounds[sound][1]);
    if (!src)
        return;

    audio = document.createElement('audio');
    document.body.appendChild(audio);
    audio.autoplay = true;
    audio.src = src;
    audio.load()
    audio.play()
}

function processSoundCommand(msgBody, play) {
    var msg = msgBody.html();
    var m = re.exec(msg);
    if (m != null) {
        var sound = msg.replace(':soundcamp ', '');
        //msgBody.replaceWith(sound);
        addChatSoundHTML(msgBody, sound);
        if (play && soundEnabled())
            playSound(sound);
    }
}

function receivedMessage(e) {
    var t = e.target;
    if (t.tagName.toLowerCase() === 'tr' && mre.exec(t.id)) {
        var msgBody = $(t).find('div.body');
        processSoundCommand(msgBody, true);
    }
}

function scanAllMessages() {
    $('div.body').each(function() {
        processSoundCommand($(this), false);
    });
}

function initControls() {
    $('<div>').attr('id', 'soundCamp-wrapper').attr('class', 'sctooltip').appendTo('#chat_controls');
    $('<div>').attr('id', 'soundcampContainer').attr('class', 'sctooltip-outer').appendTo('#soundCamp-wrapper');	
	var soundCampIcon = $('<img>').attr('src', chrome.extension.getURL('images/music.png')).attr('id', 'soundcamp_button').attr('width', '16').attr('height', '15').attr('title', 'Play SoundCamp Sound..').appendTo('#soundCamp-wrapper');
	
	var innerCont = $('<div>').attr('class', 'sctooltip-inner').appendTo('#soundcampContainer');
    
    var table = $('<table>').attr('id', 'soundcampTable').appendTo(innerCont);
    table.append('<tbody>');
    var row;
    var sound;
    var j = 0;
	
	for (var i = 0; i < soundKeysLength; i++)
	{
		var currentSoundKey = soundKeys[i];
		sound = sounds[currentSoundKey];    
		
		if (j == 0) {
            row = $('#soundcampTable > tbody:last').append('<tr>');
        }
        j = (j + 1) % 3;
        row.append('<td><a class="sound" data-value="'+ currentSoundKey +'">' + sound[0] + '</td>');
	}
	
    $(document).click(function (e) {
        if (e.target.id !== 'soundcamp_button' &&
            $('#soundcamp_button').find(e.target).length === 0) {
                $('#soundcampContainer').hide();
        } else {
            $('#soundcampContainer').toggle();
        }
    });

    $('#soundcampContainer').find('.sound').click(function() {
        var sound = this.getAttribute('data-value');
        tellPlaySound(sound);
    });
	
	$('#soundcampContainer').css('margin-left', '-380px'); // future: auto-calculate based on width of the popup, etc.
}

function initListener() {
    $('#chat').bind('DOMNodeInserted', receivedMessage);
}

scanAllMessages();
initControls();
initListener();
