let base64StringGlobal = '';
const url = "https://mccormickrecipieapp.azurewebsites.net/api/ReturnIngredients";
const email = "info@acuvate.com";


function downloadTranscript() {
    //debugger;
    rightSlidetoggle();
    const conversationId = botconnection.conversationId;
    const conversationdownload = [{ conversationId, botId, cecServicesFn }];
    const parentDomain = "*";
    window.parent.postMessage(conversationdownload, parentDomain);
}

function checkImageAltText(e) {
    try {
        e.attachments.forEach(e => {
            null !== e.content.images && void 0 !== e.content.images && (null !== e.content.images[0].alt && void 0 !== e.content.images[0].alt && "image" === e.content.images[0].alt.toLowerCase() && ("" !== e.content.title || null !== e.content.title || void 0 !== e.content.title ? e.content.images[0].alt = e.content.title : e.content.images[0].alt = " "),
                null !== e.content.images && void 0 !== e.content.images && (null !== e.content.images[0].alt && void 0 !== e.content.images[0].alt || (e.content.images[0].alt = e.content.title)))
        }
        )
    } catch (e) {
        console.log(e.message)
    }
}


function generateUUID() {
    try {
        var d = (new Date).getTime()
            , d2 = performance && performance.now && 1e3 * performance.now() || 0;
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (c) {
            var r = 16 * Math.random();
            return d > 0 ? (r = (d + r) % 16 | 0,
                d = Math.floor(d / 16)) : (r = (d2 + r) % 16 | 0,
                    d2 = Math.floor(d2 / 16)),
                ("x" === c ? r : 3 & r | 8).toString(16)
        }
        ))
    } catch (error) {
        console.log(error.message)
    }
}
function connectBot() {
    try {
        var Guid = sessionStorage.getItem("Guid");
        null != Guid && "undefined" != Guid && "" != Guid && null != Guid && "null" != Guid ? Guid = sessionStorage.getItem("Guid") : (Guid = generateUUID(),
            sessionStorage.setItem("Guid", Guid));
        var e = sessionStorage.getItem("ITconvID");
        store = window.WebChat.createStore({}, ({ dispatch }) => next => action => {
            if (e === '' || e === undefined || e === null || e === 'undefined') {
                sessionStorage.removeItem("feedbackItemId");
                // document.getElementById('splashImg').style.display = "block"; 
                if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
                    dispatch({
                        meta: {
                            method: "keyboard",
                        },
                        payload: {
                            activity: {
                                channelData: {
                                    postBack: true,
                                },
                                //Web Chat will show the 'Greeting' System Topic message which has a trigger-phrase 'hello'
                                name: 'startConversation',
                                type: "event"
                            },
                        },
                        type: "DIRECT_LINE/POST_ACTIVITY",
                    });
                }
            }
            if (action.type === 'DIRECT_LINE/INCOMING_ACTIVITY') {
                setTimeout(function () {
                    scrollToBottom();
                }, 2000);

            }
            // Submit button Disable after 1st click functionality.
            if (action.type === "WEB_CHAT/SEND_POST_BACK") {
                // debugger;       
            }
            if (action.type === 'WEB_CHAT/SET_SUGGESTED_ACTIONS') {
                htmlStr();
            }

            return next(action);
        }),
            "" === e || null == e || "undefined" === e ? (botconnection = window.WebChat.createDirectLine({
                secret: token
            }),
                window.WebChat.renderWebChat({
                    directLine: botconnection,
                    store: store,
                    userID: Guid,
                    username: "User",
                    locale: lang,
                    webSockets: !0,
                    sendTypingIndicator: true
                }, document.getElementById("webchat"))) : (convID = e,
                    botconnection = window.WebChat.createDirectLine({
                        secret: token,
                        conversationId: e,
                        watermark: "0"
                    })),
            window.WebChat.renderWebChat({
                directLine: botconnection,
                store: store,
                userID: Guid,
                username: "User",
                locale: lang,
                webSockets: !0,
                sendTypingIndicator: true
            }, document.getElementById("webchat")),
            document.querySelector('[role="complementary"]').classList.add("botwindow"),
            document.querySelector('[role="complementary"]').classList.add("bot-close"),
            document.querySelector('[role="complementary"]').classList.add("botbody"),

            document.getElementsByClassName("webchat__send-box__button--align-stretch")[0].classList.add("sendbutton"),
            renderElements(),
            onrefreshpage(),
            noscrollwebsite()
    } catch (e) {
        console.log(e.message)
    }
}
function scrollToBottom() {
    try {
        const e = document.getElementsByClassName("webchat__basic-transcript__scrollable")[0];
        e.scrollTop = e.scrollHeight
    } catch (e) {
        console.log(e.message)
    }
}
function renderElements() {
    try {
        // For floating WebChat button 
        var botbuttonBlock = document.createElement('div');
        botbuttonBlock.setAttribute('id', 'bot-button-block');
        botbuttonBlock.setAttribute('class', 'bot-button-block');
        document.getElementById('webchat').after(botbuttonBlock);

        var botIcon = document.createElement('button');
        botIcon.setAttribute('type', 'button');
        botIcon.setAttribute('id', 'BotExpand');
        botIcon.setAttribute('class', 'bot-icon');
        botIcon.setAttribute('aria-label', 'Bot Icon');
        //botIcon.innerHTML = "<span>Chat Bot</span>";
        //botIcon.innerHTML = "<span role='heading'>Ask me anything!</span>";
        document.getElementById('bot-button-block').appendChild(botIcon);
        //document.getElementById('bot-button-block').insertAdjacentHTML("afterbegin",'<div class="bot-launcher"><div class="bot-launcher-close"></div><div class="bot-launcher-header">Hi, How can we help you?</div></div>');

        // For Header components 
        var botHead = document.createElement('div');
        botHead.classList.add('chat-header');

        // For Bot name in header components
        var botName = document.createElement('div');
        botName.classList.add('bot-name');
        botHead.appendChild(botName);

        /*botTitle = document.createElement('div');
        botTitle.classList.add('bot-icon');
        botName.appendChild(botTitle);*/

        bottogglemenu = document.createElement('div');
        bottogglemenu.classList.add('bot-tmsection');
        bottogglemenu.innerHTML = "<a href='javascript:void(0)' class='bot-togglemenu bot-link' id='bot-togglemenu'><i class='fe fe-menu'></i></a>";
        botName.appendChild(bottogglemenu);

        botText = document.createElement('div');
        botText.classList.add('bot-title');
        botText.setAttribute("role", "heading");
        botText.innerHTML = "Yummmie";
        botName.appendChild(botText);

        // For Features section
        var botFeatures = document.createElement('div');
        botFeatures.classList.add('bot-features');
        botHead.appendChild(botFeatures);

        //for Help Icon
        /*var helpImg = document.createElement('a');
        helpImg.setAttribute('href','javascript:void(0)');
        helpImg.setAttribute('id','botSettings');
        helpImg.setAttribute('class','bot-help bot-link');
        helpImg.setAttribute('aria-label', 'Bot Settings');
        helpImg.innerHTML="<i class='fe fe-more-vertical'></i>";
        botFeatures.appendChild(helpImg);*/

        /*var resetCon = document.createElement('a');
        resetCon.setAttribute('id','botresets');
        resetCon.setAttribute('class','bot-reset bot-link');
        resetCon.setAttribute('href','javascript:void(0);');
        resetCon.setAttribute('aria-label', 'Reset Conversation');
        resetCon.innerHTML="<i class='fe fe-rotate-cw'></i>";
        botFeatures.appendChild(resetCon);*/

        // For fullscreen window
        /*var botscreen = document.createElement('a');
        botscreen.setAttribute('href','javascript:void(0)');
        botscreen.setAttribute('id','botscreen');
        botscreen.setAttribute('class','bot-screen bot-link');
        botscreen.setAttribute('aria-label', 'Bot Full Screen');
        botscreen.innerHTML="<i class='fe fe-maximize'></i>";
        botFeatures.appendChild(botscreen);*/

        // For minimize and maximize Bot window
        var closeImg = document.createElement('a');
        closeImg.setAttribute('href', 'javascript:void(0)');
        closeImg.setAttribute('id', 'botClose');
        closeImg.setAttribute('class', 'bot-close bot-link');
        closeImg.setAttribute('aria-label', 'Bot Close');
        closeImg.innerHTML = "<i class='fe fe-chevron-down'></i>";
        botFeatures.appendChild(closeImg);


        document.querySelector("#webchat div[role='complementary']").prepend(botHead),
            document.getElementsByClassName("webchat__basic-transcript__scrollable")[0].insertAdjacentHTML("afterbegin", '<div class="switcher-canvas" id="switcher-canvas" tabindex="0" data-type="tab" data-tab="0"> <ul><li class="sc-reset"><span class="sc-title">Reset Conversation</span><a class="sc-menu" id="botresets" href="#" aria-label="Reset Conversation" tabindex="-1"><i class="fe fe-rotate-cw"></i></a></li><li class="sc-download"><span class="sc-title">Download conversation</span><a class="sc-menu" id="downloadTranscript" href="#" aria-label="Download Coversation" tabindex="-1"><i class="fe fe-download"></i></a></li><li class="sc-hr"><hr /></li><li class="sc-sound"><span class="sc-title">Sound notification</span><div class="switch-toggle" id="SoundToggleButton" alt="Sound Notification"><input type="checkbox" class="right-menu" title="Sound notification" id="SoundNotify" tabindex="-1"><label for="SoundNotify" class="sc-text">sound notification</label></div></li><li class="sc-fonts"><span class="sc-title">Large fonts</span><div class="switch-toggle" id="FontToggleButton"><input type="checkbox" class="right-menu" title="Large Fonts" id="largeFonts" tabindex="-1"><label for="largeFonts" class="sc-text">Large Fonts</label></div></li></ul></div>');




        var l = document.createElement("div");
        l.setAttribute("class", "sc-overlay"),
            document.getElementById("webchat").prepend(l),
            document.getElementById('BotExpand').addEventListener('click', maximizeBot);
        document.getElementById('botClose').addEventListener('click', minimizeBot);
        document.getElementById("bot-togglemenu").addEventListener("click", rightSlidetoggle),
            document.getElementsByClassName("sc-overlay")[0].addEventListener("click", hideSlides),
            document.getElementById("downloadTranscript").addEventListener("click", downloadTranscript),
            document.addEventListener("keyup", (function (e) {
                windowHide(e)

            }
            )),
            document.addEventListener('keydown', EscapeWindow);
        document.addEventListener("keydown", (function (e) {
            screenHide(e)
        }
        )),
            document.getElementById("bot-togglemenu").addEventListener("click", rightSlidetoggle);
        document.getElementById("largeFonts").addEventListener("click", validateFonts);
        document.getElementById("SoundNotify").addEventListener("click", NotifyUser);
        document.getElementById("botresets").addEventListener("click", refreshBot);


    } catch (e) {
        console.log(e.message)
    }

}


function noscrollwebsite() {
    try {
        document.getElementsByClassName("main")[0].onmouseenter = function () {
            document.getElementsByTagName("body")[0].classList.add("noscrollclass")
        }
            ,
            document.getElementsByClassName("main")[0].onmouseout = function () {
                document.getElementsByTagName("body")[0].classList.remove("noscrollclass")
            }
            ,
            document.getElementsByClassName("footerinput")[0].onmouseenter = function () {
                document.getElementsByTagName("body")[0].classList.add("noscrollclass")
            }
            ,
            document.getElementsByClassName("footerinput")[0].onmouseout = function () {
                document.getElementsByTagName("body")[0].classList.remove("noscrollclass")
            }
    } catch (e) {
        console.log(e.message)
    }
}


//For Reload the bot window
function refreshBot() {
    try {
        'use strict';
        sessionStorage.removeItem("ITconvID");
        connectBot();
        var chatheader = document.getElementsByClassName("chat-header")[0];
        chatheader.remove();
        var chatSettings = document.getElementsByClassName("webchat__botSettings")[0];
        chatSettings.remove();
        var switchercanvas = document.getElementsByClassName("switcher-canvas")[0];
        switchercanvas.remove();
        var scoverlay = document.getElementsByClassName("sc-overlay")[0];
        scoverlay.remove();
        if (!e.currentTarget.disabled) {
            // document.querySelector('.chat-header').remove(); 
            var removexExpand = document.getElementsByClassName("bot-button-block")[0];
            removexExpand.remove();
            // var  botresets = document.getElementsByClassName("bot-resets-icon")[0];
            // 	botresets.remove();
            // myFunction();	
            document.getElementById("webchat").classList.add("botmaximize");
        }
    } catch (e) {
        console.log(e.message)
    }
}

function maximizeBot() {
    'use strict';
    if (document.getElementById("webchat").classList.contains("botmaximize")) {
        document.getElementById('BotExpand').classList.remove('active');
        // document.getElementById('chatbot-x-icon').classList.remove('animate');
        document.getElementById('webchat').classList.remove('botmaximize');
    }
    else {
        document.getElementById('BotExpand').classList.add('active');
        //document.getElementById('chatbot-x-icon').classList.add('animate');
        //document.getElementById('webchat').classList.add('botmaximize');
        const webchatelement = document.querySelector("#webchat");
        webchatelement.classList.add("botmaximize", "animate__animated", "animate__bounceInUp");
        webchatelement.addEventListener('animationend', () => {
            webchatelement.classList.remove("animate__animated", "animate__bounceInUp");
        });
    }
}

//For close the bot
function minimizeBot() {
    'use strict';
    document.getElementById("BotExpand").classList.remove("active");
    document.getElementById('webchat').classList.remove('botmaximize');
}


function rightSlidetoggle() {
    document.getElementById("webchat").classList.toggle("rightSlide"),
        document.getElementById("webchat").classList.toggle("rightSlideoverlayToggle"),
        document.getElementById("webchat").classList.toggle("sc-overlay");
    for (var e = document.getElementsByClassName("right-menu"), t = 0; t < e.length; t++) {
        var r;
        e[t].setAttribute("tabindex", "0")
    }
    document.getElementById("switcher-canvas").focus();
}

function hideSlides() {
    //document.getElementById("switcher-canvas").classList.remove('is-open');
    //document.getElementById("switcher-canvas").classList.remove('is-visible');

    document.getElementById("webchat").classList.remove("sc-overlay");
    document.getElementById("webchat").classList.remove("rightSlide");
    document.getElementById("webchat").classList.remove("rightSlideoverlayToggle");
    var elts = document.getElementsByClassName("right-menu");
    for (var e = 0; e < elts.length; e++) { // For each element
        var elt = elts[e];
        elt.setAttribute("tabindex", "-1");
        elt.setAttribute("aria-hidden", "true")
    }
}


function closeSettings() {
    // document.getElementById("switcher-canvas").classList.remove('is-open');
    // document.getElementById("switcher-canvas").classList.remove('is-visible');

    document.getElementById("webchat").classList.remove("sc-overlay");
    document.getElementById("webchat").classList.remove("rightSlide");
    document.getElementById("webchat").classList.remove("rightSlideoverlayToggle");
    var elts = document.getElementsByClassName("right-menu");
    for (var e = 0; e < elts.length; e++) { // For each element
        var elt = elts[e];
        elt.setAttribute("tabindex", "-1");
        elt.setAttribute("aria-hidden", "true")
    }
}


function windowHide(e) {
    try {
        const t = e.keyCode;
        9 == t && (e.target.classList.contains("webchat__basic-transcript") || "persistentIcon" == e.target.id || "botlogo" == e.target.id) && hideSlides()
    } catch (e) {
        console.log(e.message)
    }
}
function EscapeWindow(event) {
    const key = event.keyCode;
    if (27 == key) {
        openfeaturedetails();
    }
}

function renderMessage(e) {
    try {
        sessionStorage.setItem("ITconvID", botconnection.conversationId);
        var t = e;
        return t.includes("<openinput>") ? (e = e.split("<openinput>")[0],
            EnableComposer()) : t.includes("<disablecomposer>") && (e = e.split("<disablecomposer>")[0],
                DisableComposer()),
            e
    } catch (e) {
        console.log(e.message)
    }
}
function Addclasses() {
    try {
        for (var e = 0; e < document.getElementsByClassName("plain").length; e++)
            document.getElementsByClassName("plain")[e].classList.add("usermessage");
        for (e = 0; e < document.getElementsByClassName("markdown").length; e++)
            document.getElementsByClassName("markdown")[e].classList.add("botmessage")
    } catch (e) {
        console.log(e.message)
    }
}
function EnableComposer() {
    try {
        var e = document.getElementsByClassName("webchat__send-box-text-box")[0].children;
        e[0].removeAttribute("disabled", "disabled");
        e[0].setAttribute("placeholder", "Type your message")
    } catch (e) {
        console.log(e.message)
    }
}
function DisableComposer() {
    try {
        var e = document.getElementsByClassName("webchat__send-box-text-box")[0].children;
        e[0].setAttribute("disabled", "disabled"),
            e[0].setAttribute("placeholder", "Please choose from the options")
    } catch (e) {
        console.log(e.message)
    }
}
function validateFonts() {
    try {
        var e;
        document.getElementById("largeFonts").checked ? document.getElementById("webchat").classList.add("largeFonts") : document.getElementById("webchat").classList.remove("largeFonts")
    } catch (e) {
        console.log(e.message)
    }
}
function NotifyUser() {
    try {
        var e = document.getElementById("SoundNotify");
        if (null != e && "" != e && null != e && e.checked) {
            const e = new Audio("https://azcbnepasstorageuat.blob.core.windows.net/audiofile/clearly.mp3");
            e.play()
        }
    } catch (e) {
        console.log(e.message)
    }
}
// function downloadTranscript() {
//     try {
//         fetch(cecServicesFn + "GetChatScripts?ConversationId=" + botconnection.conversationId + "&&BotId=" + botId).then(e=>e.json()).then(e=>download("Conversation With Knorr.txt", e));
//         rightSlidetoggle();
//     } catch (e) {
//         console.log(e.message)
//     }
// }
// function download(e, t) {
//     try {
//         var r = document.createElement("a");
//         r.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(t)),
//         r.setAttribute("download", e),
//         r.style.display = "none",
//         document.body.appendChild(r),
//         r.click(),
//         document.body.removeChild(r)
//     } catch (e) {
//         console.log(e.message)
//     }
// }
function PostMessageToBot(e) {
    try {
        store.dispatch({
            type: "WEB_CHAT/SEND_MESSAGE_BACK",
            text: e,
            from: botconnection.conversationId,
            payload: {
                text: e
            }
        })
    } catch (e) {
        console.log(e.message)
    }
}
function renderAttachment(e) {
    try {
        if ("[]" != e.attachments && null != e.attachments && e.attachments.length > 0) {
            var t = e.attachments[0].content.text;
            null != t && null != t && "" != t && (t.includes("<openinput>") ? (t = t.split("<openinput>")[0],
                EnableComposer()) : t.includes("<disablecomposer>") && (t = t.split("<disablecomposer>")[0],
                    DisableComposer())),
                e.attachments[0].content.text = t
        }
        return e
    } catch (e) {
        console.log(e.message)
    }
}
function screenHide(e) {
    try {
        const t = e.keyCode;
        13 == t && "backBtn" == e.target.id && closeDetailsProduct()
    } catch (e) {
        console.log(e.message)
    }
}
var resetwelcome;
resetwelcome = false;

function PostEventToBot(e, t) {
    try {
        store.dispatch({
            type: "WEB_CHAT/SEND_EVENT",
            text: t,
            from: botconnection.conversationid,
            payload: {
                name: e,
                text: t,
                value: t,
                from: botconnection.conversationid
            }
        })
        resetwelcome = true;
    } catch (e) {
        console.log(e.message)
    }
}

// Attached
function uploadRatEvent(button) {
    const currentFileupload = button.closest("#AttachFile").querySelector(".fileupload-RAT");
    currentFileupload.click();
}

// Attached file name & validation 
function RACUpload(element) {
   const lang = 'English';
    const file = element.files[0];
    const allowedExtensions = /\.(xlsx|xls|pdf|doc|docx|png|gif|jpg|jpeg|tiff|txt)$/i;

    if (!file) {
        console.error("No file selected.");
        return;
    }

    const fileName = file.name;
    //console.log("File name:", fileName);

    // Populate the data object with the file name
    const data = {
        "u_file_name": fileName,
        // Other fields...
    };

    if (!file) {
        return;
    }

    const filesize = file.size;
    const filename = file.name;
    const errorMessage = element.closest("#Yes");
    const uploadButton = element.closest("#AttachFile").querySelector(".ac-pushButton");
    const submitButton = errorMessage.closest("#Yes").querySelector("#Submit .ac-pushButton");
    const acCard = element.closest('.ac-adaptiveCard');
    const noButton = acCard.querySelector("#NoButtonContainer .ac-pushButton");

    submitButton.setAttribute("disabled", "disabled");

    // Remove existing error messages and file details
    const existingFileList = acCard.querySelector('.file-list');
    if (existingFileList) {
        existingFileList.remove();
    }

    const existingError = acCard.querySelectorAll('.error-message');
    existingError.forEach(err => err.remove());

    // Validate file type and size
    if (!allowedExtensions.exec(filename)) {
        const div = document.createElement("div");
        div.classList.add('file-list');
        div.innerHTML = `<span class='file-name error-message'>${dict[lang]?.uploadInvalidFileNew || 'Please upload a valid file.'}</span>`;
        errorMessage?.insertAdjacentElement('beforeend', div);
        submitButton?.setAttribute("disabled", "disabled");
        uploadButton?.removeAttribute("disabled");
        base64StringGlobal = '';
        return;
    } else {
        // Proceed with successful validation
        const div = document.createElement("div");
        div.classList.add('file-list');
        div.innerHTML = `<span class='file-name'>${filename}</span><a class='remove-file' onclick='removeFileRac(this)'>X</a>`;
        errorMessage.insertAdjacentElement('beforeend', div);
        filedetails = file;
        uploadButton.setAttribute("disabled", "disabled");
        submitButton.removeAttribute("disabled");

        // Base64 conversion
        const reader = new FileReader();
        reader.onload = function (event) {
            const base64String = event.target.result.split(',')[1];
            base64StringGlobal = base64String;
            debugger;
        };
        reader.readAsDataURL(file);
    }
    //noButton.setAttribute('disabled','disabled');
    isSubmitted = false;

}




// Attached file remove
function removeFileRac(element) {
    //
    const fileInputContainer = element.closest(".ac-adaptiveCard")

    // Prevent execution if the form is already submitted
    if (isSubmitted) {
        return;
    }

    // Reset filedetails to null
    filedetails = null;

    const acCard = element.closest('.ac-adaptiveCard');
    //const noButton = acCard.querySelector("#NoButtonContainer .ac-pushButton");
    //noButton.removeAttribute('disabled','disabled');
    const existingFileList = element.closest("ac-adaptiveCard")?.querySelector('.file-list');
    if (existingFileList) {
        existingFileList.remove();
    }

    const submitButton = acCard.querySelector("#Submit .ac-pushButton ");
    if (submitButton && submitButton.hasAttribute("data-submitted")) {
        return;
    }

    const fileList = element.closest('.file-list');
    if (fileList) {
        fileList.remove();
    }

    const fileInput = acCard.querySelector('.fileupload-RAT');
    if (fileInput) {
        fileInput.value = null;
    }

    const existingError = fileInputContainer.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    const uploadButton = fileInputContainer.querySelector("#AttachFile .ac-pushButton");
    if (uploadButton) {
        uploadButton.removeAttribute("disabled");
    }

    if (submitButton) {
        submitButton.setAttribute("disabled", "disabled");
    }

    element.setAttribute("disabled", "disabled");

    filedetails = null;
}




async function ratSubEvent(element) {
	debugger;
    //const selectedLang = document.getElementById('lang-select')?.value;
    const lang = 'English';
    const acCard = element.closest('.ac-adaptiveCard');
    //debugger;
    //base64StringGlobal
    const requestData = {
		base64content: base64StringGlobal,
		fileTypeHeader: "image/png"
		// UserEmail: email,
		// u_country: "India",
		// u_language: "English"
	};

    try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				//'Authorization': `Bearer ${token}`,
				//'x-functions-key': '4p_nwbjixOb9HdSiTmMwDRxFMORLdHEi-cxvjzD8Fr2uAzFusQbmBg=='
			},
			body: JSON.stringify(requestData)
		});
		let result;
		if (!response.ok) {
			console.error("API Error:", response.status, response.statusText);
			result = "error";
			runApi(result);
			throw new Error(`API returned status ${response.status}: ${response.statusText}`);
		}

		const contentType = response.headers.get('Content-Type');
		result = contentType && contentType.includes('text/plain')
			? await response.text()
			: await response.json();

		//console.log('API response:', result);
		runApi(result);
console.log("API response:", result);

 if (result && result.ingredients) {
        console.log("Extracted Ingredients:", result.ingredients);
    } else {
        console.warn("No ingredients found in API response");
    }
	
		// Update UI on successful submission
		//element.setAttribute('disabled', 'disabled');
		//emailInput.setAttribute('disabled', 'disabled');
		//element.setAttribute('data-submitted', 'true');

		// Reset file details
		//filedetails = null;
	} catch (error) {
		console.error('Error occurred:', error.message);
	}
    
    element.setAttribute("disabled", "disabled");
    element.setAttribute("data-submitted", "true");
}


function runApi(result) {
store.dispatch({
		type: "WEB_CHAT/SEND_EVENT",
		from: botconnection.conversationid,
		payload: {
			name: "AcceptFileFromUI",
			value: result
		}
	});
	 console.log("runApi: ", result);
}


function htmlStr() {
    const pushButton = document.querySelectorAll(".ac-pushButton.ac-selectable[aria-pressed='true']");
    if (pushButton.length > 0) {
        pushButton.forEach(b => {
            const pushButtonDisable = b.closest(".webchat__basic-transcript__activity-body").querySelectorAll(".ac-pushButton.ac-selectable");
            pushButtonDisable.forEach(c => {
                c.setAttribute("disabled", "disabled");
            });
        });
    }

    const mainarticle = document.querySelectorAll('.webchat__basic-transcript__activity--read');
    const footersendBox = document.querySelector(".webchat__send-box__main");
    if (mainarticle.length < 3) {
        footersendBox.classList.add("inputdisabled");
    } else {
        footersendBox.classList.remove("inputdisabled");
    }
    try {
        let elements = document.body.getElementsByClassName("ac-textBlock");
        if (elements.length !== 0) {
            for (let i = 0; i <= elements.length - 1; i++) {
                if (elements[i].hasAttribute("role")) {
                    elements[i].setAttribute("aria-level", "3");
                }
            }
        }

        //feedback script
        // document.querySelectorAll('#FeedbackStarRating').forEach((adaptiveCardContainer) => {
        //     const pushButtons = adaptiveCardContainer.querySelectorAll('.ac-columnSet .ac-pushButton');
        //     pushButtons.forEach((starButton, index) => {
        //         starButton.addEventListener('click', function() {
        //             pushButtons.forEach((button, i) => {
        //                 if (i <= index) {
        //                     button.classList.add('star-active');
        //                 } else {
        //                     button.classList.remove('star-active');
        //                 }
        //             });
        //             adaptiveCardContainer.setAttribute('disabled', true);
        //         });
        //     });
        // }); 

    } catch (e) {
        console.log(e.message)
    }
    // document.querySelectorAll('#FeedbackStarRating').forEach((adaptiveCardContainer) => {
    //     const pushButtons = adaptiveCardContainer.querySelectorAll('.ac-columnSet .ac-pushButton');
    //     pushButtons.forEach((starButton, index) => {
    //         starButton.addEventListener('click', function() {
    //             pushButtons.forEach((button, i) => {
    //                 if (i <= index) {
    //                     button.classList.add('star-active');

    //                 } else {
    //                     button.classList.remove('star-active');
    //                 }
    //             });
    //             adaptiveCardContainer.setAttribute('disabled', true);
    //         });
    //     });
    // })
    document.querySelectorAll('#FeedbackStarRating').forEach((adaptiveCardContainer) => {
        const pushButtons = adaptiveCardContainer.querySelectorAll('.ac-columnSet .ac-pushButton');
        pushButtons.forEach((starButton, index) => {
            starButton.addEventListener('click', function () {
                pushButtons.forEach((button, i) => {
                    if (i <= index) {
                        button.classList.add('star-active');
                        // Apply pointer-events: none style to FeedbackStarRating when star-active is added
                        adaptiveCardContainer.style.pointerEvents = 'none';
                    } else {
                        button.classList.remove('star-active');
                    }
                });
                adaptiveCardContainer.setAttribute('disabled', true);
            });
        });
    });


  

    // Attached file
    const uploadbuttons = document.querySelectorAll("#AttachFile .ac-pushButton");
    if (uploadbuttons.length > 0) {
        uploadbuttons.forEach((b) => {
            b.setAttribute("onClick", "uploadRatEvent(this)"); // Pass 'this' correctly
            const attachFileDiv = b.closest('#AttachFile');

            // Avoid multiple inputs if they already exist
            if (!attachFileDiv.querySelector(".fileupload-RAT")) {
                attachFileDiv.innerHTML += `
                 <input type='file' class='fileupload-RAT' 
                        id='fileupload-RAT' hidden 
                        onChange='RACUpload(this); this.value=null;' 
                        accept='.xlsx,.xls,.pdf,.doc,.docx,.png,.gif,.jpg,.jpeg,.tiff' />
             `;
            }
        });
    }
    // Attached file
    const Submitbuttons = document.querySelectorAll("#Submit .ac-pushButton");
    if (Submitbuttons.length > 0) {
        Submitbuttons.forEach((b) => {
            b.setAttribute("onClick", "ratSubEvent(this)"); // Pass 'this' correctly
            
        });
    }
}

var userName, userID;


var convID,
    cohort,
    store,
    botconnection,
    lang = "en_GB",
    token = "1rIIo6QpTv5MxngOyTLUIwUR2ScKKfewFlc54ZtiMaipd834ZyK6JQQJ99BCACZoyfiAArohAAABAZBS298r.5KRbCiAJHhFIWTDKzLNlucYjUzinZbPPlbS9PDCWlsGliLP80dYPJQQJ99BCACZoyfiAArohAAABAZBS4LfY";



setTimeout((function () {
    connectBot()
}
), 300);


window.addEventListener("scroll", (function () {
    document.getElementById("webchat").classList.remove("overlayToggle"),
        document.getElementById("webchat").classList.remove("rightSlide"),
        document.getElementById("webchat").classList.remove("rightSlideoverlayToggle")

}
));



