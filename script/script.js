let mails=[
    {
        from:"Borge Refsnes",
        subject:"Remember Me", 
        body:"<p>Hello, i just wanted to let you know that i'll be home at lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Best Regards, <br>Borge Refsnes</p>",  
        date:"Sep 27, 2015" , 
        emailpic:"images\avatar3.png"},
    {
        from:"Jane Doe", 
        subject:"None", 
        body:" <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Forever yours,<br>Jane</p>", 
        date:"Sep 25, 2015" , 
        emailpic:"images\avatar5.png"
    },
    {
        from:"John Doe",
        subject:"None",
        body:"<p>Welcome.</p><p>That's it!</p>", 
        date:"Sep 23, 2015" , 
        emailpic:"images\avatar2.png"}
];

document.getElementById("fullname1").innerText=mails[0].from;
document.getElementById("fullname2").innerText=mails[1].from;
document.getElementById("fullname3").innerText=mails[2].from;